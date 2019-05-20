#include "pxt.h"
using namespace pxt;

namespace fpu {
	//%
	bool available() {
		return true;
	}
}

namespace fpuhelper {
	//%
	void add(Buffer lhs, Buffer rhs) {
		__asm__ __volatile__ (
			"vldr	s15, [%0, 8];"
			"vldr	s14, [%1, 8];"
			"vadd.f32 s15, s15, s14;"
			"vstr	s15, [%0, 8];"
			: "+r" (lhs)
			: "r" (rhs) 
		);
	}
}
