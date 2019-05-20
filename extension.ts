interface Float {
	addToSelf(other: Float): void;
}

class FpuFloat implements Float {
	_: Buffer
	constructor() {
		this._ = pins.createBuffer(4)
		this._.fill(0)
	}

	
	addToSelf(other: FpuFloat): void {
		fpuhelper.add(this._, other._)
	}
}

class SoftwareFloat implements Float {
	_: number
	constructor() {
		this._ = 0
	}

	addToSelf(other: SoftwareFloat): void {
		this._ += other._
	}
}


namespace fpu {
    	//% blockId=fpu_available block="available"
    	//% shim=fpu::available
    	export function available(): boolean {
        	return false
    	}

	//% blockId=fpu_createFloat block="createFloat"
	export function createFloat(): Float {
		if (fpu.available()) {
			return new FpuFloat()
		} else {
			return new SoftwareFloat()
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

