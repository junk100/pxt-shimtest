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
		(float)(lhs->data) = (float)(lhs->data) + (float)(rhs->data);
	}
}
