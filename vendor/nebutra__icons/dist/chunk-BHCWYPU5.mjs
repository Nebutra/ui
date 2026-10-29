// src/components/LogoTwitterX.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var LogoTwitterX = /* @__PURE__ */ Object.assign(
  forwardRef(({ size = 16, width, height, ...props }, ref) => /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M.5.5h5.25l3.734 5.21L14 .5h2l-5.61 6.474L16.5 15.5h-5.25l-3.734-5.21L3 15.5H1l5.61-6.474zM12.02 14 3.42 2h1.56l8.6 12z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "LogoTwitterX" }
);
var LogoTwitterX_default = LogoTwitterX;

export {
  LogoTwitterX,
  LogoTwitterX_default
};
