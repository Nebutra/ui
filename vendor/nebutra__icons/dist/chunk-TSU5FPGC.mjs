// src/components/ChevronCircleUpFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronCircleUpFill = /* @__PURE__ */ Object.assign(
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
          d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.72 8.47 4.19 9l1.06 1.06.53-.53L8 7.31l2.22 2.22.53.53L11.81 9l-.53-.53-2.573-2.574a1 1 0 0 0-1.414 0z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronCircleUpFill" }
);
var ChevronCircleUpFill_default = ChevronCircleUpFill;

export {
  ChevronCircleUpFill,
  ChevronCircleUpFill_default
};
