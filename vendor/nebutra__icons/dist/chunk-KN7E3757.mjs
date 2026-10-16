// src/components/DollarFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var DollarFill = /* @__PURE__ */ Object.assign(
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
          d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.625 3.375v1H9c1.174 0 2.125.951 2.125 2.125h-1.25A.875.875 0 0 0 9 5.625h-.375v1.75H9a2.125 2.125 0 0 1 0 4.25h-.375v1h-1.25v-1H7A2.125 2.125 0 0 1 4.875 9.5h1.25c0 .483.392.875.875.875h.375v-1.75H7a2.125 2.125 0 0 1 0-4.25h.375v-1zm-1.25 2.25H7a.875.875 0 1 0 0 1.75h.375zm1.25 3v1.75H9a.875.875 0 1 0 0-1.75z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "DollarFill" }
);
var DollarFill_default = DollarFill;

export {
  DollarFill,
  DollarFill_default
};
