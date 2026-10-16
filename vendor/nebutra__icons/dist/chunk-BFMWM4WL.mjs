// src/components/ChartTrendingUp.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChartTrendingUp = /* @__PURE__ */ Object.assign(
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
          d: "M10.824 3h-.75v1.5h3.364L8.5 9.438 6.207 7.146a1 1 0 0 0-1.414 0L.72 11.22l-.53.53 1.06 1.06.53-.53L5.5 8.56l2.293 2.293a1 1 0 0 0 1.414 0L14.5 5.56v3.364h1.5V4a1 1 0 0 0-1-1z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChartTrendingUp" }
);
var ChartTrendingUp_default = ChartTrendingUp;

export {
  ChartTrendingUp,
  ChartTrendingUp_default
};
