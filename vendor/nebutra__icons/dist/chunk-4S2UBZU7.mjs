// src/components/DataPointLow.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var DataPointLow = /* @__PURE__ */ Object.assign(
  forwardRef(({ size = 16, width, height, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      children: [
        /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M8.5 10.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M6.75 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m4.5 2.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5",
            clipRule: "evenodd",
            opacity: 0.25
          }
        )
      ]
    }
  )),
  { displayName: "DataPointLow" }
);
var DataPointLow_default = DataPointLow;

export {
  DataPointLow,
  DataPointLow_default
};
