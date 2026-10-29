// src/components/Slash.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Slash = /* @__PURE__ */ Object.assign(
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
          d: "M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.53 4.47 5 3.94 3.94 5l.53.53 6 6 .53.53L12.06 11l-.53-.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Slash" }
);
var Slash_default = Slash;

export {
  Slash,
  Slash_default
};
