// src/components/ChevronRight.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronRight = /* @__PURE__ */ Object.assign(
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
          d: "m5.5 1.94.53.53 4.824 4.823a1 1 0 0 1 0 1.414L6.03 13.53l-.53.53L4.44 13l.53-.53L9.44 8 4.97 3.53 4.44 3z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronRight" }
);
var ChevronRight_default = ChevronRight;

export {
  ChevronRight,
  ChevronRight_default
};
