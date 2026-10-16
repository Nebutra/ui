// src/components/MagnifyingGlass.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var MagnifyingGlass = /* @__PURE__ */ Object.assign(
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
          d: "M1.5 6.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-6.5a6.5 6.5 0 1 0 4.035 11.596l3.435 3.434.53.53 1.06-1.06-.53-.53-3.434-3.435A6.5 6.5 0 0 0 6.5 0",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "MagnifyingGlass" }
);
var MagnifyingGlass_default = MagnifyingGlass;

export {
  MagnifyingGlass,
  MagnifyingGlass_default
};
