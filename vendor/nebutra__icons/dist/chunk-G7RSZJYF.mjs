// src/components/Backspace.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Backspace = /* @__PURE__ */ Object.assign(
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
          d: "M0 .75V0h1.5v16H0V.75m8.47 2.47L9 2.69l1.06 1.06-.53.53-2.97 2.97H16v1.5H6.56l2.97 2.97.53.53L9 13.31l-.53-.53-4.25-4.25a.75.75 0 0 1 0-1.06z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Backspace" }
);
var Backspace_default = Backspace;

export {
  Backspace,
  Backspace_default
};
