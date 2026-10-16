// src/components/Delta.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Delta = /* @__PURE__ */ Object.assign(
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
          d: "M2.677 15H1l.75-1.5 4.411-8.823-.003-.006.009-.004.994-1.99L8 1l.839 1.677L14.25 13.5 15 15H2.677M7 6.354l3.573 7.146H3.427z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Delta" }
);
var Delta_default = Delta;

export {
  Delta,
  Delta_default
};
