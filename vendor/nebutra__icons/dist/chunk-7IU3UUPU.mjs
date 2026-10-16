// src/components/SpeakerFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var SpeakerFill = /* @__PURE__ */ Object.assign(
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
      children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M2 11V5a1 1 0 0 1 1-1h3l8-4v16l-8-4H3a1 1 0 0 1-1-1" })
    }
  )),
  { displayName: "SpeakerFill" }
);
var SpeakerFill_default = SpeakerFill;

export {
  SpeakerFill,
  SpeakerFill_default
};
