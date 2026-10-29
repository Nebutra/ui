// src/components/ChevronDoubleLeft.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronDoubleLeft = /* @__PURE__ */ Object.assign(
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
          d: "M3.146 7.293a1 1 0 0 0 0 1.414L6.97 12.53l.53.53L8.56 12l-.53-.53L4.56 8l3.47-3.47.53-.53L7.5 2.94l-.53.53zm5 0a1 1 0 0 0 0 1.414l3.824 3.823.53.53L13.56 12l-.53-.53L9.56 8l3.47-3.47.53-.53-1.06-1.06-.53.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronDoubleLeft" }
);
var ChevronDoubleLeft_default = ChevronDoubleLeft;

export {
  ChevronDoubleLeft,
  ChevronDoubleLeft_default
};
