// src/components/ChartBarMiddle.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChartBarMiddle = /* @__PURE__ */ Object.assign(
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
          d: "M8.75 1v14h-1.5V1zM3.5 9v6H2V9zM14 6.75V6h-1.5v9H14V6.75",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChartBarMiddle" }
);
var ChartBarMiddle_default = ChartBarMiddle;

export {
  ChartBarMiddle,
  ChartBarMiddle_default
};
