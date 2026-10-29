// src/components/LogoNext.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoNext = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_53_108)", children: [
          /* @__PURE__ */ jsx(
            "circle",
            {
              cx: 8,
              cy: 8,
              r: 7.375,
              fill: "#000",
              stroke: "var(--ds-gray-1000)",
              strokeLinecap: "round"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              stroke: "url(#paint0_linear_53_108_R_1eik6slubquiuq6ivb_)",
              strokeMiterlimit: Math.SQRT2,
              d: "M10.63 11V5"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#paint1_linear_53_108_R_1eik6slubquiuq6ivb_)",
              fillRule: "evenodd",
              d: "M5.995 5h-1.25v6h1.25V6.968l6.366 7.74q.527-.344.992-.763z"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint0_linear_53_108_R_1eik6slubquiuq6ivb_",
              x1: 11.13,
              x2: 11.13,
              y1: 5,
              y2: 11,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#fff" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.609, stopColor: "#fff", stopOpacity: 0.57 }),
                /* @__PURE__ */ jsx("stop", { offset: 0.797, stopColor: "#fff", stopOpacity: 0 }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint1_linear_53_108_R_1eik6slubquiuq6ivb_",
              x1: 9.938,
              x2: 13.557,
              y1: 9.063,
              y2: 13.399,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#fff" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
              ]
            }
          ),
          /* @__PURE__ */ jsx("clipPath", { id: "clip0_53_108", children: /* @__PURE__ */ jsx("path", { fill: "red", d: "M0 0h16v16H0z" }) })
        ] })
      ]
    }
  )),
  { displayName: "LogoNext" }
);
var LogoNext_default = LogoNext;

export {
  LogoNext,
  LogoNext_default
};
