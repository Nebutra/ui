// src/components/SkipBackFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var SkipBackFill = /* @__PURE__ */ Object.assign(
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
          d: "M4.081 8.21a.25.25 0 0 1 0-.42l10.285-6.545a.25.25 0 0 1 .384.21v13.09a.25.25 0 0 1-.384.21zM.75 2v-.75h1.5v13.5H.75V2",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "SkipBackFill" }
);
var SkipBackFill_default = SkipBackFill;

export {
  SkipBackFill,
  SkipBackFill_default
};
