// src/components/CornerDownLeft.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var CornerDownLeft = /* @__PURE__ */ Object.assign(
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
          d: "M13.5 3v-.75H15V10a1 1 0 0 1-1 1H3.56l1.97 1.97.53.53L5 14.56l-.53-.53-3.074-3.073a1 1 0 0 1 0-1.414L4.47 6.47 5 5.94 6.06 7l-.53.53L3.56 9.5h9.94z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "CornerDownLeft" }
);
var CornerDownLeft_default = CornerDownLeft;

export {
  CornerDownLeft,
  CornerDownLeft_default
};
