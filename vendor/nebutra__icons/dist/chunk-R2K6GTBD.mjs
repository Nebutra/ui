// src/components/LogoVercelCircle.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoVercelCircle = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_872_3186)", children: [
          /* @__PURE__ */ jsx(
            "circle",
            {
              cx: 8,
              cy: 8,
              r: 7.25,
              fill: "currentColor",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "var(--ds-gray-100)",
              fillRule: "evenodd",
              d: "m8 4.5 3.5 6.125h-7z",
              clipRule: "evenodd"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_872_3186", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "LogoVercelCircle" }
);
var LogoVercelCircle_default = LogoVercelCircle;

export {
  LogoVercelCircle,
  LogoVercelCircle_default
};
