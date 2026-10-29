// src/components/SkipForward.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var SkipForward = /* @__PURE__ */ Object.assign(
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
          d: "m10.603 7.111.031.02.583.371.452.287a.25.25 0 0 1 0 .422l-.452.287-.583.371-.031.02L2.5 14.046l-.08.05-.704.449-.332.21a.25.25 0 0 1-.384-.21V1.455a.25.25 0 0 1 .384-.21l.332.21.703.448.081.052zM2.5 3.733 9.206 8 2.5 12.268zM15 2v-.75h-1.5v13.5H15V2",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "SkipForward" }
);
var SkipForward_default = SkipForward;

export {
  SkipForward,
  SkipForward_default
};
