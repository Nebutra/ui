// src/components/AlignmentRight.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var AlignmentRight = /* @__PURE__ */ Object.assign(
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
          d: "M1.75 2H1v1.5h14V2H1.75M6 7.25h9v1.5H6zM4 12.5h11V14H4z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "AlignmentRight" }
);
var AlignmentRight_default = AlignmentRight;

export {
  AlignmentRight,
  AlignmentRight_default
};
