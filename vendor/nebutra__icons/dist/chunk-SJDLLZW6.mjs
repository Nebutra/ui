// src/components/Paperclip.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Paperclip = /* @__PURE__ */ Object.assign(
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
          d: "M10.86 1.707c-.534 0-1.046.212-1.423.59L3.195 8.538a3.37 3.37 0 1 0 4.766 4.767l6.243-6.243.5-.5 1 1-.5.5-6.242 6.243a4.785 4.785 0 1 1-6.768-6.767l6.243-6.243a3.426 3.426 0 1 1 4.845 4.845l-6.25 6.243A2.067 2.067 0 0 1 4.11 9.46L9.877 3.7l.5-.5 1 1-.5.5-5.767 5.76a.652.652 0 1 0 .922.922l6.25-6.242a2.011 2.011 0 0 0-1.423-3.434",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Paperclip" }
);
var Paperclip_default = Paperclip;

export {
  Paperclip,
  Paperclip_default
};
