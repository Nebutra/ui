// src/components/MoreHorizontal.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var MoreHorizontal = /* @__PURE__ */ Object.assign(
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
          d: "M4 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "MoreHorizontal" }
);
var MoreHorizontal_default = MoreHorizontal;

export {
  MoreHorizontal,
  MoreHorizontal_default
};
