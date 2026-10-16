// src/components/MagnifyingGlassSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var MagnifyingGlassSmall = /* @__PURE__ */ Object.assign(
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
          d: "M3.5 7a3.5 3.5 0 1 1 6.13 2.309l-.321.322A3.5 3.5 0 0 1 3.5 7m6.465 4.026a5 5 0 1 1 1.06-1.06l3.005 3.004.53.53-1.06 1.06-.53-.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "MagnifyingGlassSmall" }
);
var MagnifyingGlassSmall_default = MagnifyingGlassSmall;

export {
  MagnifyingGlassSmall,
  MagnifyingGlassSmall_default
};
