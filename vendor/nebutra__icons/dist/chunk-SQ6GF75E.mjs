// src/components/PlayCircle.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var PlayCircle = /* @__PURE__ */ Object.assign(
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
          fill: "#666",
          fillRule: "evenodd",
          d: "M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6 11l5.5-3L6 5z",
          clipRule: "evenodd",
          style: {
            fill: "currentColor"
          }
        }
      )
    }
  )),
  { displayName: "PlayCircle" }
);
var PlayCircle_default = PlayCircle;

export {
  PlayCircle,
  PlayCircle_default
};
