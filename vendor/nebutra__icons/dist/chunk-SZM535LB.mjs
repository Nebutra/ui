// src/components/ShareAlt.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ShareAlt = /* @__PURE__ */ Object.assign(
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
          d: "M15 11.25v-.75h-1.5v2.25a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75H6.5V1H3.25A2.25 2.25 0 0 0 1 3.25v9.5A2.25 2.25 0 0 0 3.25 15h9.5A2.25 2.25 0 0 0 15 12.75zm0-5.75L10.5 1v3A5.5 5.5 0 0 0 5 9.5v.5l.059-.088A6.54 6.54 0 0 1 10.5 7v3z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ShareAlt" }
);
var ShareAlt_default = ShareAlt;

export {
  ShareAlt,
  ShareAlt_default
};
