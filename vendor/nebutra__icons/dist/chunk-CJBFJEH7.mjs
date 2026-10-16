// src/components/Buildings.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Buildings = /* @__PURE__ */ Object.assign(
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
          d: "M2.5 2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75V14.5h-5zM7.5 16H1V2.25A2.25 2.25 0 0 1 3.25 0h3.5A2.25 2.25 0 0 1 9 2.25V6.5h3.25a2.25 2.25 0 0 1 2.25 2.25V16h-7M9 14.5h4V8.75a.75.75 0 0 0-.75-.75H9zm-4.25-11H4V5h2V3.5H4.75M4 6.5h2V8H4zm6.75 3H10V11h2V9.5h-1.25M4 9.5h2V11H4z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Buildings" }
);
var Buildings_default = Buildings;

export {
  Buildings,
  Buildings_default
};
