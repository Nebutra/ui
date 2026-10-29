// src/components/TextTitle.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var TextTitle = /* @__PURE__ */ Object.assign(
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
          d: "M2.5.75a1 1 0 0 0-1 1V3.5H3V2.25h4.25V13.5H6V15h4v-1.5H8.75V2.25h4.5V3.5h1.5V1.75a1 1 0 0 0-1-1z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "TextTitle" }
);
var TextTitle_default = TextTitle;

export {
  TextTitle,
  TextTitle_default
};
