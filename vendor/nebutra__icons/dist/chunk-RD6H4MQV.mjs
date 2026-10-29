// src/components/HeartFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var HeartFill = /* @__PURE__ */ Object.assign(
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
          d: "M1.394 2.144A4.76 4.76 0 0 1 8 2.024a4.76 4.76 0 0 1 6.606 6.851L8 15.481 1.394 8.875a4.76 4.76 0 0 1 0-6.73"
        }
      )
    }
  )),
  { displayName: "HeartFill" }
);
var HeartFill_default = HeartFill;

export {
  HeartFill,
  HeartFill_default
};
