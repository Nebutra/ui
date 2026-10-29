// src/components/TextBold.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var TextBold = /* @__PURE__ */ Object.assign(
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
          d: "M3 1H2v14h8a4 4 0 0 0 2.063-7.428A4 4 0 0 0 9 1zm6 6a2 2 0 1 0 0-4H4v4zM4 9v4h6a2 2 0 1 0 0-4H4",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "TextBold" }
);
var TextBold_default = TextBold;

export {
  TextBold,
  TextBold_default
};
