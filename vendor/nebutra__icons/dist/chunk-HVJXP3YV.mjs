// src/components/LogoVercel.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var LogoVercel = /* @__PURE__ */ Object.assign(
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
      children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "m8 1 8 14H0z", clipRule: "evenodd" })
    }
  )),
  { displayName: "LogoVercel" }
);
var LogoVercel_default = LogoVercel;

export {
  LogoVercel,
  LogoVercel_default
};
