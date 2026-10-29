// src/components/MagnifyingGlassMinus.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var MagnifyingGlassMinus = /* @__PURE__ */ Object.assign(
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
          d: "M6.5 1.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M0 6.5a6.5 6.5 0 1 1 11.596 4.035l3.434 3.435.53.53-1.06 1.06-.53-.53-3.435-3.434A6.5 6.5 0 0 1 0 6.5m4.75-.625h-.625v1.25h4.75v-1.25H4.75",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "MagnifyingGlassMinus" }
);
var MagnifyingGlassMinus_default = MagnifyingGlassMinus;

export {
  MagnifyingGlassMinus,
  MagnifyingGlassMinus_default
};
