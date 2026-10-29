// src/components/BrowserSafari.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var BrowserSafari = /* @__PURE__ */ Object.assign(
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
          d: "M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.408-4.593L8.76 4.931 6.02 6.019 4.931 8.76l-1.524 3.834 3.834-1.524 2.74-1.088 1.088-2.74zM9.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "BrowserSafari" }
);
var BrowserSafari_default = BrowserSafari;

export {
  BrowserSafari,
  BrowserSafari_default
};
