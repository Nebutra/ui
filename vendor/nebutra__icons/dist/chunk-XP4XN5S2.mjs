// src/components/AlignmentLeft.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var AlignmentLeft = /* @__PURE__ */ Object.assign(
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
          d: "M1.75 2H1v1.5h14V2H1.75M1 7h9v1.5H1zm0 5h11v1.5H1z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "AlignmentLeft" }
);
var AlignmentLeft_default = AlignmentLeft;

export {
  AlignmentLeft,
  AlignmentLeft_default
};
