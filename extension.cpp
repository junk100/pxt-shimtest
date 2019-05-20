#include "pxt.h"
using namespace pxt;

namespace fpu {
	//%
	bool available() {
		return true;
	}
}

namespace fpuhelper {
	__attribute__((always_inline))
	inline float add(float lhs, float rhs) {
		return lhs + rhs;
	}

	__attribute__((always_inline))
	inline void add(void *lhs, void *rhs) {
		*(float*)lhs = add(*(float*)lhs, *(float*)rhs);
	}

	//%
	void add(Buffer lhs, Buffer rhs) {
		add((void*)lhs->data, (void*)rhs->data);
	}
}
