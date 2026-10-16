// src/components/ArrowCircleUp.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowCircleUp = /* @__PURE__ */ Object.assign(
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
          d: "M7.25 10.75v.75h1.5V6.56l1.47 1.47.53.53 1.06-1.06-.53-.53-2.75-2.75a.75.75 0 0 0-1.06 0L4.72 6.97l-.53.53 1.06 1.06.53-.53 1.47-1.47zM14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowCircleUp" }
);
var ArrowCircleUp_default = ArrowCircleUp;

export {
  ArrowCircleUp,
  ArrowCircleUp_default
};
