// src/components/ChevronRightSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronRightSmall = /* @__PURE__ */ Object.assign(
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
          d: "m6.75 3.94.53.53 2.824 2.823a1 1 0 0 1 0 1.414L7.28 11.53l-.53.53L5.69 11l.53-.53L8.69 8 6.22 5.53 5.69 5z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronRightSmall" }
);
var ChevronRightSmall_default = ChevronRightSmall;

export {
  ChevronRightSmall,
  ChevronRightSmall_default
};
