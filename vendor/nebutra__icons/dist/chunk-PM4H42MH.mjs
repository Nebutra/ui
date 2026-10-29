// src/components/SunAlternate.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var SunAlternate = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0_174_19347)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M13.81 13.5c.429-.453.805-.956 1.12-1.5H1.07a8 8 0 0 0 1.12 1.5zM15.938 9a8 8 0 0 1-.52 2H.582a8 8 0 0 1-.52-2zM16 8.064V8A8 8 0 1 0 0 8h16zM3.335 14.5A7.96 7.96 0 0 0 8 16c1.74 0 3.352-.556 4.665-1.5z",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_174_19347", children: /* @__PURE__ */ jsx("path", { fill: "var(--ds-background-100)", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "SunAlternate" }
);
var SunAlternate_default = SunAlternate;

export {
  SunAlternate,
  SunAlternate_default
};
