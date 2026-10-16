// src/components/CornerRightDown.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var CornerRightDown = /* @__PURE__ */ Object.assign(
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
          d: "M2.75 2.75H2v-1.5h7c.966 0 1.75.784 1.75 1.75v9.69l1.97-1.97.53-.53 1.06 1.06-.53.53-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25-.53-.53 1.06-1.06.53.53 1.97 1.97V3A.25.25 0 0 0 9 2.75z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "CornerRightDown" }
);
var CornerRightDown_default = CornerRightDown;

export {
  CornerRightDown,
  CornerRightDown_default
};
