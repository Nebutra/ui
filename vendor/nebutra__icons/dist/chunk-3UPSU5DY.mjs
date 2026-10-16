// src/components/ChartBarRandom.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChartBarRandom = /* @__PURE__ */ Object.assign(
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
          d: "M14 1v14h-1.5V1zM8.75 6v9h-1.5V6zM3.5 4.75V4H2v11h1.5V4.75",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChartBarRandom" }
);
var ChartBarRandom_default = ChartBarRandom;

export {
  ChartBarRandom,
  ChartBarRandom_default
};
