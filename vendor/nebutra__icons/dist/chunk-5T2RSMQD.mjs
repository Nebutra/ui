// src/components/Pause.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Pause = /* @__PURE__ */ Object.assign(
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
          d: "M5.5 2.5v-.75H4v12.5h1.5V2.5m6.5 0v-.75h-1.5v12.5H12V2.5",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Pause" }
);
var Pause_default = Pause;

export {
  Pause,
  Pause_default
};
