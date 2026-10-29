// src/components/GridMasonry.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var GridMasonry = /* @__PURE__ */ Object.assign(
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
          d: "M2.5 6.5v-4h3v4zM1 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm1.5 11.5v-2h3v2zM1 11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm9.5-8.5v2h3v-2zM10 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm3.5 12.5h-3v-4h3zM9 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "GridMasonry" }
);
var GridMasonry_default = GridMasonry;

export {
  GridMasonry,
  GridMasonry_default
};
