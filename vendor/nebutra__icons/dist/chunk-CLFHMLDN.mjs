// src/components/DataPointMedium.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var DataPointMedium = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M11.25 9.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m-4.5 2.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: 6.75, cy: 5.25, r: 1.75, fill: "currentColor", opacity: 0.25 })
      ]
    }
  )),
  { displayName: "DataPointMedium" }
);
var DataPointMedium_default = DataPointMedium;

export {
  DataPointMedium,
  DataPointMedium_default
};
