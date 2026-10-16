// src/components/SlashForward.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var SlashForward = /* @__PURE__ */ Object.assign(
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
          d: "m4.015 15.394.296-.69 6-14 .295-.689 1.379.591-.296.69-6 14-.295.689z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "SlashForward" }
);
var SlashForward_default = SlashForward;

export {
  SlashForward,
  SlashForward_default
};
