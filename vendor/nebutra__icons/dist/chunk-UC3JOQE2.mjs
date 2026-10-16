// src/components/LogoXai.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var LogoXai = /* @__PURE__ */ Object.assign(
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
          d: "M1.004 5.656 8.034 16h3.124L4.128 5.656zM4.125 11.4 1 16h3.127l1.562-2.3zM11.873 0 6.471 7.95l1.563 2.3L15 0zm.566 4.92V16H15V1.15z"
        }
      )
    }
  )),
  { displayName: "LogoXai" }
);
var LogoXai_default = LogoXai;

export {
  LogoXai,
  LogoXai_default
};
