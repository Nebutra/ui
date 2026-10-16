// src/components/ChevronDoubleDown.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronDoubleDown = /* @__PURE__ */ Object.assign(
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
          d: "M4.53 2.97 4 2.44 2.94 3.5l.53.53 3.823 3.824a1 1 0 0 0 1.414 0L12.53 4.03l.53-.53L12 2.44l-.53.53L8 6.44zm0 5L4 7.44 2.94 8.5l.53.53 3.823 3.824a1 1 0 0 0 1.414 0L12.53 9.03l.53-.53L12 7.44l-.53.53L8 11.44z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronDoubleDown" }
);
var ChevronDoubleDown_default = ChevronDoubleDown;

export {
  ChevronDoubleDown,
  ChevronDoubleDown_default
};
