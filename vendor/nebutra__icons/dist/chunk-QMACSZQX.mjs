// src/components/MoonAlternate.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var MoonAlternate = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0_174_19363)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M14.5 8A6.5 6.5 0 0 1 1.645 9.372c.167.404.407.772.723 1.088 1.678 1.678 4.851 1.226 7.088-1.01 2.236-2.237 2.688-5.41 1.01-7.089a3.3 3.3 0 0 0-1.051-.707A6.5 6.5 0 0 1 14.5 8M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_174_19363", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "MoonAlternate" }
);
var MoonAlternate_default = MoonAlternate;

export {
  MoonAlternate,
  MoonAlternate_default
};
