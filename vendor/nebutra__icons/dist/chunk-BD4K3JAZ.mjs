// src/components/Option.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Option = /* @__PURE__ */ Object.assign(
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
          d: "M.75 3.5H0V5h4.365a.75.75 0 0 1 .657.387l4.394 7.951a2.25 2.25 0 0 0 1.969 1.162H16V13h-4.615a.75.75 0 0 1-.657-.387L6.334 4.662A2.25 2.25 0 0 0 4.365 3.5zm11 0H11V5h5V3.5h-4.25",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Option" }
);
var Option_default = Option;

export {
  Option,
  Option_default
};
