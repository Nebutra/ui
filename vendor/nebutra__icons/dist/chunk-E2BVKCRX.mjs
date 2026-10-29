// src/components/FunctionRectangleFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var FunctionRectangleFill = /* @__PURE__ */ Object.assign(
  forwardRef(({ size = 16, width, height, ...props }, ref) => /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M1 0h14v13.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5zm8.75 4.5a1 1 0 0 0-1 1v1h1.75V8H8.75v2.5a2.5 2.5 0 0 1-2.5 2.5H5.5v-1.5h.75a1 1 0 0 0 1-1V8H5.5V6.5h1.75v-1A2.5 2.5 0 0 1 9.75 3h.75v1.5z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "FunctionRectangleFill" }
);
var FunctionRectangleFill_default = FunctionRectangleFill;

export {
  FunctionRectangleFill,
  FunctionRectangleFill_default
};
