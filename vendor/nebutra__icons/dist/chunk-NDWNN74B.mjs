// src/components/Video.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Video = /* @__PURE__ */ Object.assign(
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
          d: "M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5V1m6.745 5.764L9.216 8 6.745 9.236zm4.36.789a.5.5 0 0 1 0 .894l-4.881 2.441a.5.5 0 0 1-.724-.447V5.559a.5.5 0 0 1 .724-.447z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Video" }
);
var Video_default = Video;

export {
  Video,
  Video_default
};
