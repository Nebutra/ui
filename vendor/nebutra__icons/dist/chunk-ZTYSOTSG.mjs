// src/components/Gps.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Gps = /* @__PURE__ */ Object.assign(
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
          strokeLinejoin: "bevel",
          strokeWidth: 1.5,
          d: "m1 6 14-5-5 14-2.34-6.085a1 1 0 0 0-.575-.575z"
        }
      )
    }
  )),
  { displayName: "Gps" }
);
var Gps_default = Gps;

export {
  Gps,
  Gps_default
};
