#include "pxt.h"

enum FooEnum {
	//% block="poo"
	Poo
}

namespace foo {
        /**
        * Does a foo
        **/
	//% blockId=foo_foo block="foo"
	int foo() {
		return 1;
	}
}
