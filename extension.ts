interface Float {
    get(): number;
    addToSelf(other: Float): void;
}

class FpuFloat implements Float {
    _: Buffer
    constructor(val: number) {
        this._ = pins.createBuffer(4)
        this._.setNumber(NumberFormat.Float32LE, 0, val)
    }

    get(): number {
        return this._.getNumber(NumberFormat.Float32LE, 0)
    }

    addToSelf(other: FpuFloat): void {
        fpuhelper.add(this._, other._)
    }
}

class SoftwareFloat implements Float {
    _: number
    constructor(val: number) {
        this._ = val
    }

    get(): number {
        return this._
    }

    addToSelf(other: SoftwareFloat): void {
        this._ += other._ + 242
    }
}


namespace fpu {
    //% blockId=fpu_available block="available"
    //% shim=fpu::available
    export function available(): boolean {
        return false
    }

    //% blockId=fpu_createFloat block="createFloat"
    export function createFloat(val: number): Float {
        if (fpu.available()) {
            return new FpuFloat(val)
        } else {
            return new SoftwareFloat(val)
        }
    }
}

namespace fpumath {
    //% blockId=fpumath_add block="add
    export function add(lhs: Float, rhs: Float): void {
    }
}

namespace fpuhelper {
    //% shim fpuhelper::add
    export function add(lhs: Buffer, rhs: Buffer) {
        //not implemented
    }
}

