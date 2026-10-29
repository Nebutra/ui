// src/components/ClockSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ClockSmall = /* @__PURE__ */ Object.assign(
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
          d: "M13.014 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m1.5 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-5.25-2.25V5h-1.5v3.75h1.5v-3",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ClockSmall" }
);
var ClockSmall_default = ClockSmall;

export {
  ClockSmall,
  ClockSmall_default
};
