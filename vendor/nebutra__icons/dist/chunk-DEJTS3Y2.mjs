// src/components/DataPoint.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var DataPoint = /* @__PURE__ */ Object.assign(
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
          d: "M7.5 5.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m0 5.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m2.75-1a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "DataPoint" }
);
var DataPoint_default = DataPoint;

export {
  DataPoint,
  DataPoint_default
};
