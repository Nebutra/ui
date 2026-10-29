// src/components/CornerDownRight.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var CornerDownRight = /* @__PURE__ */ Object.assign(
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
          d: "M2.5 3v-.75H1v7c0 .966.784 1.75 1.75 1.75h9.69l-1.97 1.97-.53.53L11 14.56l.53-.53 3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25-.53-.53L9.94 7l.53.53 1.97 1.97H2.75a.25.25 0 0 1-.25-.25z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "CornerDownRight" }
);
var CornerDownRight_default = CornerDownRight;

export {
  CornerDownRight,
  CornerDownRight_default
};
