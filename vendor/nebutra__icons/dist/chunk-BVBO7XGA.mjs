// src/components/AlignmentCenter.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var AlignmentCenter = /* @__PURE__ */ Object.assign(
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
          d: "M1.75 2H1v1.5h14V2H1.75M3.5 7.25h9v1.5h-9zm-1 5.25h11V14h-11z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "AlignmentCenter" }
);
var AlignmentCenter_default = AlignmentCenter;

export {
  AlignmentCenter,
  AlignmentCenter_default
};
