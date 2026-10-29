// src/components/ArrowUpDiagonalScaleSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowUpDiagonalScaleSmall = /* @__PURE__ */ Object.assign(
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
          d: "M9.25 3H8.5v1.5h1.939l-1.72 1.72-.53.53L9.25 7.81l.53-.53 1.718-1.718V7.5h1.5V4a1 1 0 0 0-1-1zm-4.748 7.438V8.5h-1.5V12a1 1 0 0 0 1 1H7.5v-1.5H5.561l1.72-1.72.53-.53L6.75 8.19l-.53.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowUpDiagonalScaleSmall" }
);
var ArrowUpDiagonalScaleSmall_default = ArrowUpDiagonalScaleSmall;

export {
  ArrowUpDiagonalScaleSmall,
  ArrowUpDiagonalScaleSmall_default
};
