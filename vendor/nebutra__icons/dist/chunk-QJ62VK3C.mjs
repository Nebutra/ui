// src/components/LogoVercelApi.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoVercelApi = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0_872_3535)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "transparent",
            fillRule: "evenodd",
            stroke: "currentColor",
            strokeDasharray: "1.25 1.25",
            strokeWidth: 1.25,
            d: "m8 2 7 12.5H1z",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_872_3535", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "LogoVercelApi" }
);
var LogoVercelApi_default = LogoVercelApi;

export {
  LogoVercelApi,
  LogoVercelApi_default
};
