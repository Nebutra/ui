// src/components/InformationFillSmall.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var InformationFillSmall = /* @__PURE__ */ Object.assign(
  forwardRef(({ size = 16, width, height, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      children: [
        /* @__PURE__ */ jsx("path", { fill: "currentColor", fillOpacity: 0.08, d: "M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 7h-.75v1.5h1v2.75h1.5V8a1 1 0 0 0-1-1z",
            clipRule: "evenodd"
          }
        )
      ]
    }
  )),
  { displayName: "InformationFillSmall" }
);
var InformationFillSmall_default = InformationFillSmall;

export {
  InformationFillSmall,
  InformationFillSmall_default
};
