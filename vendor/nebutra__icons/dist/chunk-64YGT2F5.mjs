// src/components/LogoTwitterXSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var LogoTwitterXSmall = /* @__PURE__ */ Object.assign(
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
          d: "M1.6 2h4.2l2.988 4.168L12.4 2H14L9.512 7.179 14.4 14h-4.2L7.213 9.832 3.6 14H2L6.49 8.821zm9.217 10.8-6.88-9.6h1.247l6.88 9.6z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "LogoTwitterXSmall" }
);
var LogoTwitterXSmall_default = LogoTwitterXSmall;

export {
  LogoTwitterXSmall,
  LogoTwitterXSmall_default
};
