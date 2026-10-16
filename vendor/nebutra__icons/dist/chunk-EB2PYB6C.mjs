// src/components/LogoVisa.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoVisa = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_4898_1862)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "#1434CB",
              d: "M0 0h16v16H0z",
              style: {
                fill: "color(display-p3 .0784 .2039 .7961)",
                fillOpacity: 1
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#paint0_linear_4898_1862)",
              d: "M9.708 4.444 7.86 9.22l-.77-4.063c-.103-.457-.462-.712-.821-.712H3.607l-.051.204c.616.152 1.079.304 1.49.508.127.064.234.177.299.66l1.334 5.74h1.899l2.978-7.112z"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsx(
            "linearGradient",
            {
              id: "paint0_linear_4898_1862",
              x1: 68.172,
              x2: 69.557,
              y1: 96.448,
              y2: 40.873,
              gradientUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ jsx(
                "stop",
                {
                  offset: 1,
                  stopColor: "#fff",
                  style: {
                    stopColor: "white",
                    stopOpacity: 1
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("clipPath", { id: "clip0_4898_1862", children: /* @__PURE__ */ jsx(
            "rect",
            {
              width: 16,
              height: 16,
              fill: "#fff",
              rx: 2,
              style: {
                fill: "#fff",
                fillOpacity: 1
              }
            }
          ) })
        ] })
      ]
    }
  )),
  { displayName: "LogoVisa" }
);
var LogoVisa_default = LogoVisa;

export {
  LogoVisa,
  LogoVisa_default
};
