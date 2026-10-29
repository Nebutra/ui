// src/components/StopFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var StopFill = /* @__PURE__ */ Object.assign(
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
          d: "M4.393.293A1 1 0 0 1 5.101 0H10.9a1 1 0 0 1 .707.293l4.1 4.1a1 1 0 0 1 .293.708V10.9a1 1 0 0 1-.293.707l-4.1 4.1A1 1 0 0 1 10.9 16H5.1a1 1 0 0 1-.707-.293l-4.1-4.1A1 1 0 0 1 0 10.9V5.1a1 1 0 0 1 .293-.707zM8.75 3.75v5h-1.5v-5zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "StopFill" }
);
var StopFill_default = StopFill;

export {
  StopFill,
  StopFill_default
};
