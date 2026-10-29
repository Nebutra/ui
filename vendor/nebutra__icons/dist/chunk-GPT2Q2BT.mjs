// src/components/ArrowRight.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowRight = /* @__PURE__ */ Object.assign(
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
          d: "M9.53 2.22 9 1.69 7.94 2.75l.53.53 3.97 3.97H1v1.5h11.44l-3.97 3.97-.53.53L9 14.31l.53-.53 5.074-5.073a1 1 0 0 0 0-1.414z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowRight" }
);
var ArrowRight_default = ArrowRight;

export {
  ArrowRight,
  ArrowRight_default
};
