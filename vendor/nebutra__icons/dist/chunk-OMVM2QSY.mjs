// src/components/Speaker.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Speaker = /* @__PURE__ */ Object.assign(
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
          d: "m6 10.5.67.158 5.83 2.915V2.427L6.67 5.342 6 5.5H3.5v5zM12.5.75 6 4H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3l6.5 3.25L14 16V0z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Speaker" }
);
var Speaker_default = Speaker;

export {
  Speaker,
  Speaker_default
};
