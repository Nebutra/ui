// src/components/ToggleOffAlt.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ToggleOffAlt = /* @__PURE__ */ Object.assign(
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
          d: "M6 3.5h4a4.5 4.5 0 1 1 0 9H6a4.5 4.5 0 1 1 0-9M0 8a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H6a6 6 0 0 1-6-6m7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ToggleOffAlt" }
);
var ToggleOffAlt_default = ToggleOffAlt;

export {
  ToggleOffAlt,
  ToggleOffAlt_default
};
