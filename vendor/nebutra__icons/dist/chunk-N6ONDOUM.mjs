// src/components/LogoFigma.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoFigma = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx("path", { fill: "#1ABCFE", d: "M8.003 8a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#0ACF83",
            d: "M2.67 13.333a2.667 2.667 0 0 1 2.667-2.666h2.666v2.666a2.666 2.666 0 1 1-5.333 0"
          }
        ),
        /* @__PURE__ */ jsx("path", { fill: "#FF7262", d: "M8.003 0v5.333h2.667a2.667 2.667 0 0 0 0-5.333z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#F24E1E",
            d: "M2.67 2.667a2.667 2.667 0 0 0 2.667 2.666h2.667V0H5.337A2.667 2.667 0 0 0 2.67 2.667"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#A259FF",
            d: "M2.67 8a2.667 2.667 0 0 0 2.667 2.667h2.666V5.333H5.337A2.667 2.667 0 0 0 2.67 8"
          }
        )
      ]
    }
  )),
  { displayName: "LogoFigma" }
);
var LogoFigma_default = LogoFigma;

export {
  LogoFigma,
  LogoFigma_default
};
