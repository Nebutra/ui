// src/components/Phone.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Phone = /* @__PURE__ */ Object.assign(
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
          fill: "transparent",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M5.5 1H2.878a2 2 0 0 0-1.97 2.343l.24 1.385a12 12 0 0 0 9.023 9.613l2.362.567A2 2 0 0 0 15 12.963V10.5l-3.25-2.25-2.5 2.5-4-4 2.5-2.5z"
        }
      )
    }
  )),
  { displayName: "Phone" }
);
var Phone_default = Phone;

export {
  Phone,
  Phone_default
};
