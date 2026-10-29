// src/components/ToggleOnAlt.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ToggleOnAlt = /* @__PURE__ */ Object.assign(
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
          d: "M6 3.5h4a4.5 4.5 0 1 1 0 9H6a4.5 4.5 0 1 1 0-9M0 8a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H6a6 6 0 0 1-6-6m10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ToggleOnAlt" }
);
var ToggleOnAlt_default = ToggleOnAlt;

export {
  ToggleOnAlt,
  ToggleOnAlt_default
};
