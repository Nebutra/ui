// src/components/BeakerFlask.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var BeakerFlask = /* @__PURE__ */ Object.assign(
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
          d: "M9 7.674V2.5H7v5.174l-.503.447L4.383 10h7.234L9.503 8.121zM5.5 2.5H4V1h8v1.5h-1.5V7l3.573 3.177A2.76 2.76 0 0 1 12.24 15H3.76a2.76 2.76 0 0 1-1.834-4.823L5.5 7zm-3 9.74c0-.268.085-.527.24-.74h10.52a1.26 1.26 0 0 1-1.02 2H3.76a1.26 1.26 0 0 1-1.26-1.26",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "BeakerFlask" }
);
var BeakerFlask_default = BeakerFlask;

export {
  BeakerFlask,
  BeakerFlask_default
};
