// src/components/LogoVue.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoVue = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_872_3155)", children: [
          /* @__PURE__ */ jsx("path", { fill: "#41B883", d: "m9.72.917-1.848 3.2-1.848-3.2H-.128l8 13.856 8-13.856z" }),
          /* @__PURE__ */ jsx("path", { fill: "#34495E", d: "m9.72.917-1.848 3.2-1.848-3.2H3.072l4.8 8.314 4.8-8.314z" })
        ] }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_872_3155", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "LogoVue" }
);
var LogoVue_default = LogoVue;

export {
  LogoVue,
  LogoVue_default
};
