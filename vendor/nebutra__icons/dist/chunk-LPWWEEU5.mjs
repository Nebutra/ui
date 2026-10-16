// src/components/LogoStatsig.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoStatsig = /* @__PURE__ */ Object.assign(
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
            d: "m13.51 4.145-4.437 6.634L6.94 7.596l-4.943 7.37.021.033h8.896a.92.92 0 0 0 .762-.406l4.083-6.09a.9.9 0 0 0 0-1.007L13.51 4.143z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "m6.943 4.973 2.132 3.18L13.859 1H5a.92.92 0 0 0-.762.405L.153 7.495a.9.9 0 0 0 0 1.007l2.21 3.296z"
          }
        )
      ]
    }
  )),
  { displayName: "LogoStatsig" }
);
var LogoStatsig_default = LogoStatsig;

export {
  LogoStatsig,
  LogoStatsig_default
};
