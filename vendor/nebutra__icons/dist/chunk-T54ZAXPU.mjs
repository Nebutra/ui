// src/components/TextHeading.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var TextHeading = /* @__PURE__ */ Object.assign(
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
          d: "M2.75 1H2v1.5h1v11H2V15h3.5v-1.5h-1V9H12v4.5h-1V15h3.5v-1.5h-1v-11h1V1H11v1.5h1v5H4.5v-5h1V1H2.75",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "TextHeading" }
);
var TextHeading_default = TextHeading;

export {
  TextHeading,
  TextHeading_default
};
