// src/components/InformationFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var InformationFill = /* @__PURE__ */ Object.assign(
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
          d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 7h1.5a1 1 0 0 1 1 1v4.25h-1.5V8.5h-1zM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "InformationFill" }
);
var InformationFill_default = InformationFill;

export {
  InformationFill,
  InformationFill_default
};
