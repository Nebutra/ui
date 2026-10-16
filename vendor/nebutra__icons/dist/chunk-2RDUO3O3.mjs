// src/components/ChevronCircleLeft.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronCircleLeft = /* @__PURE__ */ Object.assign(
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
          d: "M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0M8.47 4.72 5.89 7.3a.99.99 0 0 0 0 1.4l2.58 2.58.53.53 1.06-1.06-.53-.53L7.31 8l2.22-2.22.53-.53L9 4.19z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronCircleLeft" }
);
var ChevronCircleLeft_default = ChevronCircleLeft;

export {
  ChevronCircleLeft,
  ChevronCircleLeft_default
};
