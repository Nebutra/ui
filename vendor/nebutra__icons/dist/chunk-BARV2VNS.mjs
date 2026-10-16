// src/components/ChartBarPeak.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChartBarPeak = /* @__PURE__ */ Object.assign(
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
          d: "M14 1v14h-1.5V1zM8.75 6v9h-1.5V6zM3.5 10.75V10H2v5h1.5v-4.25",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChartBarPeak" }
);
var ChartBarPeak_default = ChartBarPeak;

export {
  ChartBarPeak,
  ChartBarPeak_default
};
