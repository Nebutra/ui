// src/components/Shift.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Shift = /* @__PURE__ */ Object.assign(
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
          d: "m8 .19.53.53 6.074 6.073c.63.63.183 1.707-.708 1.707H11V16H5V8.5H2.104c-.891 0-1.338-1.077-.708-1.707L7.47.72zM3.31 7H6.5v7.5h3V7h3.19L8 2.31z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Shift" }
);
var Shift_default = Shift;

export {
  Shift,
  Shift_default
};
