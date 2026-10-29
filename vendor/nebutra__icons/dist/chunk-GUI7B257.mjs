// src/components/LogoVite.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoVite = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_872_3154)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#paint0_linear_872_3154__R_1eimaslubquiuq6ivb_)",
              d: "m15.596 2.323-7.18 12.84a.39.39 0 0 1-.68.003L.413 2.324a.39.39 0 0 1 .408-.577l7.188 1.285a.4.4 0 0 0 .138 0l7.038-1.283a.39.39 0 0 1 .41.574"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#paint1_linear_872_3154__R_1eimaslubquiuq6ivb_)",
              d: "M11.433.061 6.119 1.103a.195.195 0 0 0-.157.18l-.327 5.52c-.008.13.112.231.239.202l1.479-.342a.195.195 0 0 1 .235.23l-.44 2.152a.195.195 0 0 0 .248.226l.914-.278a.195.195 0 0 1 .248.226L7.859 12.6c-.043.212.238.327.355.146l.079-.122 4.33-8.64a.195.195 0 0 0-.212-.28l-1.523.294a.195.195 0 0 1-.224-.245l.994-3.446a.195.195 0 0 0-.225-.246"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint0_linear_872_3154__R_1eimaslubquiuq6ivb_",
              x1: 0.234,
              x2: 9.171,
              y1: 1.288,
              y2: 13.424,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#41D1FF" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#BD34FE" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint1_linear_872_3154__R_1eimaslubquiuq6ivb_",
              x1: 7.596,
              x2: 9.213,
              y1: 0.344,
              y2: 11.434,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#FFEA83" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.083, stopColor: "#FFDD35" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#FFA800" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("clipPath", { id: "clip0_872_3154", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h16v16H0z" }) })
        ] })
      ]
    }
  )),
  { displayName: "LogoVite" }
);
var LogoVite_default = LogoVite;

export {
  LogoVite,
  LogoVite_default
};
