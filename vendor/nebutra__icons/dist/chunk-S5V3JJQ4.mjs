// src/components/LogoTurborepo.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoTurborepo = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_872_3188)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#paint0_linear_872_3188)",
              fillRule: "evenodd",
              d: "M8 0v2a6 6 0 0 1 .5 11.98v2.005A8 8 0 0 0 8 0m-.5 15.985V13.98a5.97 5.97 0 0 1-3.374-1.399L2.708 14A7.97 7.97 0 0 0 7.5 15.985M2 13.292A7.97 7.97 0 0 1 0 8h2c0 1.477.534 2.83 1.418 3.874z",
              clipRule: "evenodd"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              width: 7,
              height: 7,
              x: 4.5,
              y: 4.5,
              fill: "transparent",
              stroke: "var(--ds-gray-1000)",
              strokeWidth: 2,
              rx: 3.5
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint0_linear_872_3188",
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
          /* @__PURE__ */ jsx("clipPath", { id: "clip0_872_3188", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h16v16H0z" }) })
        ] })
      ]
    }
  )),
  { displayName: "LogoTurborepo" }
);
var LogoTurborepo_default = LogoTurborepo;

export {
  LogoTurborepo,
  LogoTurborepo_default
};
