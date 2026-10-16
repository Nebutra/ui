// src/components/ChevronUpDown.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronUpDown = /* @__PURE__ */ Object.assign(
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
          d: "M8.707 2.396a1 1 0 0 0-1.414 0L4.47 5.22l-.53.53L5 6.81l.53-.53L8 3.81l2.47 2.47.53.53 1.06-1.06-.53-.53zM5.53 9.72 5 9.19l-1.06 1.06.53.53 2.823 2.824a1 1 0 0 0 1.414 0l2.823-2.824.53-.53L11 9.19l-.53.53L8 12.19z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronUpDown" }
);
var ChevronUpDown_default = ChevronUpDown;

export {
  ChevronUpDown,
  ChevronUpDown_default
};
