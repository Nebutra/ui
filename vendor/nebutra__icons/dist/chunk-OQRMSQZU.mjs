// src/components/StarFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var StarFill = /* @__PURE__ */ Object.assign(
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
          d: "m8 .49 2.573 4.718 5.283.99-3.692 3.905.691 5.33L8 13.128l-4.855 2.305.691-5.33L.144 6.197l5.283-.989z"
        }
      )
    }
  )),
  { displayName: "StarFill" }
);
var StarFill_default = StarFill;

export {
  StarFill,
  StarFill_default
};
