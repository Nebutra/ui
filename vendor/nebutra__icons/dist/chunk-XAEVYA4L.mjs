// src/components/SkipForwardFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var SkipForwardFill = /* @__PURE__ */ Object.assign(
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
          d: "M11.669 8.21a.25.25 0 0 0 0-.42L1.384 1.244a.25.25 0 0 0-.384.21v13.09a.25.25 0 0 0 .384.21zM15 2v-.75h-1.5v13.5H15V2",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "SkipForwardFill" }
);
var SkipForwardFill_default = SkipForwardFill;

export {
  SkipForwardFill,
  SkipForwardFill_default
};
