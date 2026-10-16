// src/components/ChartPie.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChartPie = /* @__PURE__ */ Object.assign(
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
          d: "M14.457 8.75A6.501 6.501 0 1 1 7.25 1.543V7.75a1 1 0 0 0 1 1zm0-1.5H8.75V1.543a6.5 6.5 0 0 1 5.707 5.707M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChartPie" }
);
var ChartPie_default = ChartPie;

export {
  ChartPie,
  ChartPie_default
};
