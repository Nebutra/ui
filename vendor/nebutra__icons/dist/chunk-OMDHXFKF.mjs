// src/components/ChevronUpSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronUpSmall = /* @__PURE__ */ Object.assign(
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
          d: "m3.94 9.25.53-.53 2.823-2.824a1 1 0 0 1 1.414 0L11.53 8.72l.53.53L11 10.31l-.53-.53L8 7.31 5.53 9.78l-.53.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronUpSmall" }
);
var ChevronUpSmall_default = ChevronUpSmall;

export {
  ChevronUpSmall,
  ChevronUpSmall_default
};
