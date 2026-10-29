// src/components/LogoTurbopack.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoTurbopack = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_872_3187)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#paint0_linear_872_3187)",
              fillRule: "evenodd",
              d: "M0 2.993V13c0 .648.205 1.248.555 1.738l1.479-1.479A1 1 0 0 1 2 13V8H0zM8 2h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8.5v2H13a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H8zm-.5 14v-2H3q-.135 0-.259-.034l-1.48 1.48C1.753 15.794 2.353 16 3 16z",
              clipRule: "evenodd"
            }
          ),
          /* @__PURE__ */ jsx("mask", { id: "path-2-inside-1_872_3187", fill: "#fff", children: /* @__PURE__ */ jsx("rect", { width: 9, height: 9, x: 3.5, y: 3.5, rx: 0.5 }) }),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: 9,
              height: 9,
              x: 3.5,
              y: 3.5,
              fill: "transparent",
              stroke: "var(--ds-gray-1000)",
              strokeWidth: 4,
              mask: "url(#path-2-inside-1_872_3187)",
              rx: 0.5
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint0_linear_872_3187",
              x1: 8.688,
              x2: 1.798,
              y1: 1.984,
              y2: 8.828,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#0096FF" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#FF1E56" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("clipPath", { id: "clip0_872_3187", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h16v16H0z" }) })
        ] })
      ]
    }
  )),
  { displayName: "LogoTurbopack" }
);
var LogoTurbopack_default = LogoTurbopack;

export {
  LogoTurbopack,
  LogoTurbopack_default
};
