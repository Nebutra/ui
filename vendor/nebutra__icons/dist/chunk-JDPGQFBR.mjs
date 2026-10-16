// src/components/ArrowCircleFillUpRight.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowCircleFillUpRight = /* @__PURE__ */ Object.assign(
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
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M5.482 4.879v1.5h2.829L4.818 9.87l1.06 1.06L9.372 7.44v2.829h1.5v-4.64a.75.75 0 0 0-.673-.746l-.077-.003z"
        }
      )
    }
  )),
  { displayName: "ArrowCircleFillUpRight" }
);
var ArrowCircleFillUpRight_default = ArrowCircleFillUpRight;

export {
  ArrowCircleFillUpRight,
  ArrowCircleFillUpRight_default
};
