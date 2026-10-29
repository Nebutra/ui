// src/components/ArrowUpLeft.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowUpLeft = /* @__PURE__ */ Object.assign(
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
          d: "M2 10.25V11h1.5V4.56l9.22 9.22.53.53 1.06-1.06-.53-.53L4.56 3.5H11V2H3a1 1 0 0 0-1 1z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowUpLeft" }
);
var ArrowUpLeft_default = ArrowUpLeft;

export {
  ArrowUpLeft,
  ArrowUpLeft_default
};
