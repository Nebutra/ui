// src/components/ShieldGlobe.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var ShieldGlobe = /* @__PURE__ */ Object.assign(
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
            fill: "transparent",
            stroke: "currentColor",
            strokeLinecap: "square",
            strokeWidth: 1.5,
            d: "M11.25 4.25V3.5C9.35 2.867 6 2.59 6 0 6 2.59 2.65 2.867.75 3.5v6.027a4.5 4.5 0 0 0 2.412 3.986l1.338.701"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: 11.5,
            cy: 11.5,
            r: 3.875,
            fill: "transparent",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: 1.25
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            stroke: "currentColor",
            strokeLinejoin: "bevel",
            d: "M8 11.5h7.25M10.75 15a12.74 12.74 0 0 1 0-7M12.25 15a12.74 12.74 0 0 0 0-7"
          }
        )
      ]
    }
  )),
  { displayName: "ShieldGlobe" }
);
var ShieldGlobe_default = ShieldGlobe;

export {
  ShieldGlobe,
  ShieldGlobe_default
};
