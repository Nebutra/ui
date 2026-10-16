// src/components/Function.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Function = /* @__PURE__ */ Object.assign(
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
          d: "M8.75 4a2.5 2.5 0 0 1 2.5-2.5H12V0h-.75a4 4 0 0 0-4 4v2H4v1.5h3.25V12a2.5 2.5 0 0 1-2.5 2.5H4V16h.75a4 4 0 0 0 4-4V7.5H12V6H8.75z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Function" }
);
var Function_default = Function;

export {
  Function,
  Function_default
};
