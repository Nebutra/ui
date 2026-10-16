// src/components/FunctionMiddleware.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var FunctionMiddleware = /* @__PURE__ */ Object.assign(
  forwardRef(({ size = 16, width, height, ...props }, ref) => /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      width: width ?? size,
      height: height ?? size,
      fill: "none",
      strokeLinejoin: "round",
      viewBox: "0 0 16 16",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0_53_135_R_1eidkslubquiuq6ivb_)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M2.25 0A2.25 2.25 0 0 0 0 2.25v11.5A2.25 2.25 0 0 0 2.25 16h11.5A2.25 2.25 0 0 0 16 13.75V2.25A2.25 2.25 0 0 0 13.75 0zM1.5 2.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75zm4 7.75V7.125a.875.875 0 1 1 1.75 0v4.125h1.5V7.125a.875.875 0 1 1 1.75 0v4.125H12V7.125a2.375 2.375 0 0 0-4-1.732 2.37 2.37 0 0 0-2.5-.477V4.75H4v6.5h1.5V10",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_53_135_R_1eidkslubquiuq6ivb_", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "FunctionMiddleware" }
);
var FunctionMiddleware_default = FunctionMiddleware;

export {
  FunctionMiddleware,
  FunctionMiddleware_default
};
