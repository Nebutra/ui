// src/components/ArrowDownLeft.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowDownLeft = /* @__PURE__ */ Object.assign(
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
          d: "M4.56 12.5H11V14H3a1 1 0 0 1-1-1V5h1.5v6.438l9.219-9.218.53-.53 1.06 1.06-.53.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowDownLeft" }
);
var ArrowDownLeft_default = ArrowDownLeft;

export {
  ArrowDownLeft,
  ArrowDownLeft_default
};
