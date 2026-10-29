// src/components/ChevronCircleDownFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronCircleDownFill = /* @__PURE__ */ Object.assign(
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
          d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m3.28-8.47.53-.53-1.06-1.06-.53.53L8 8.69 5.78 6.47l-.53-.53L4.19 7l.53.53 2.573 2.574a1 1 0 0 0 1.414 0z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronCircleDownFill" }
);
var ChevronCircleDownFill_default = ChevronCircleDownFill;

export {
  ChevronCircleDownFill,
  ChevronCircleDownFill_default
};
