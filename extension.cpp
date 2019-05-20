#include "pxt.h"
using namespace pxt;

#define FLOAT(buf) (*((float*)buf->data))

namespace fpu {
	//%
	bool available() {
		return true;
	}
}

namespace fpuhelper {
	//%
	void add(Buffer lhs, Buffer rhs) {
		FLOAT(lhs) = FLOAT(lhs) + FLOAT(rhs);
	}
}
