// Framer Library Shims
globalThis.navigator = { userAgent: "" };
globalThis.window = globalThis;

import("./ssr.js");
