// src/components/ArrowUpRight.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowUpRight = /* @__PURE__ */ Object.assign(
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
          d: "M5.75 2H5v1.5h6.44l-9.22 9.22-.53.53 1.06 1.06.53-.53L12.5 4.562V11h1.5V3a1 1 0 0 0-1-1z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowUpRight" }
);
var ArrowUpRight_default = ArrowUpRight;

export {
  ArrowUpRight,
  ArrowUpRight_default
};
