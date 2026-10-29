// src/components/Minus.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Minus = /* @__PURE__ */ Object.assign(
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
      children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M2 7.25h12v1.5H2z", clipRule: "evenodd" })
    }
  )),
  { displayName: "Minus" }
);
var Minus_default = Minus;

export {
  Minus,
  Minus_default
};
