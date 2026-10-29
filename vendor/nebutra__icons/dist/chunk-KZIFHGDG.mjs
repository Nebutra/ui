// src/components/Sparkles.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Sparkles = /* @__PURE__ */ Object.assign(
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
          d: "M2.5.5V0h1v.5a2 2 0 0 0 2 2H6v1h-.5a2 2 0 0 0-2 2V6h-1v-.5a2 2 0 0 0-2-2H0v-1h.5a2 2 0 0 0 2-2M14.5 4.5V5h-1v-.5a1 1 0 0 0-1-1H12v-1h.5a1 1 0 0 0 1-1V1h1v.5a1 1 0 0 0 1 1h.5v1h-.5a1 1 0 0 0-1 1M8.407 4.93 8.5 4h1l.093.93a5 5 0 0 0 4.478 4.477L15 9.5v1l-.93.093a5 5 0 0 0-4.477 4.478L9.5 16h-1l-.093-.93a5 5 0 0 0-4.478-4.477L3 10.5v-1l.93-.093A5 5 0 0 0 8.406 4.93"
        }
      )
    }
  )),
  { displayName: "Sparkles" }
);
var Sparkles_default = Sparkles;

export {
  Sparkles,
  Sparkles_default
};
