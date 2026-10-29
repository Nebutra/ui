// src/components/ChevronUp.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronUp = /* @__PURE__ */ Object.assign(
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
          d: "m1.94 10.5.53-.53 4.823-4.824a1 1 0 0 1 1.414 0L13.53 9.97l.53.53L13 11.56l-.53-.53L8 6.56l-4.47 4.47-.53.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronUp" }
);
var ChevronUp_default = ChevronUp;

export {
  ChevronUp,
  ChevronUp_default
};
