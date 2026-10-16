// src/components/ChevronDoubleUp.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronDoubleUp = /* @__PURE__ */ Object.assign(
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
          d: "M8.707 3.146a1 1 0 0 0-1.414 0L3.47 6.97l-.53.53L4 8.56l.53-.53L8 4.56l3.47 3.47.53.53 1.06-1.06-.53-.53zm0 5a1 1 0 0 0-1.414 0L3.47 11.97l-.53.53L4 13.56l.53-.53L8 9.56l3.47 3.47.53.53 1.06-1.06-.53-.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronDoubleUp" }
);
var ChevronDoubleUp_default = ChevronDoubleUp;

export {
  ChevronDoubleUp,
  ChevronDoubleUp_default
};
