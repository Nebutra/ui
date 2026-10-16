// src/components/Compass.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Compass = /* @__PURE__ */ Object.assign(
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
          d: "M15.733 1.16 15.98.02l-1.14.247-9.616 2.09a3.75 3.75 0 0 0-2.868 2.868l-2.09 9.616-.248 1.14 1.14-.248 9.616-2.09a3.75 3.75 0 0 0 2.868-2.868zM5.543 3.822l8.476-1.842-1.842 8.475a2.25 2.25 0 0 1-1.72 1.72L1.98 14.02l1.842-8.475a2.25 2.25 0 0 1 1.72-1.72M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Compass" }
);
var Compass_default = Compass;

export {
  Compass,
  Compass_default
};
