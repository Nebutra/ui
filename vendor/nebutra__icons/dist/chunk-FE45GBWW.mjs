// src/components/Calculator.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Calculator = /* @__PURE__ */ Object.assign(
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
          d: "M13 1.5H3V4h10zm-10 12V5.25h10v8.25a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1M3 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5V0H3m2.25 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 2.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M8 8a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 8m.75 1.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M8 13.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.5-6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Calculator" }
);
var Calculator_default = Calculator;

export {
  Calculator,
  Calculator_default
};
