// src/components/PlayFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var PlayFill = /* @__PURE__ */ Object.assign(
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
          d: "M14.553 7.776a.25.25 0 0 1 0 .448L1.362 14.819A.25.25 0 0 1 1 14.595V1.406a.25.25 0 0 1 .362-.224z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "PlayFill" }
);
var PlayFill_default = PlayFill;

export {
  PlayFill,
  PlayFill_default
};
