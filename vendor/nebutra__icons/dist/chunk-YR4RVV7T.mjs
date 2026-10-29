// src/components/ArrowUpDown.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowUpDown = /* @__PURE__ */ Object.assign(
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
          d: "M4.22 3.47 3.69 4l1.06 1.06.53-.53 1.97-1.97v10.88l-1.97-1.97-.53-.53L3.69 12l.53.53 3.073 3.074a1 1 0 0 0 1.414 0l3.073-3.074.53-.53-1.06-1.06-.53.53-1.97 1.97V2.56l1.97 1.97.53.53L12.31 4l-.53-.53L8.707.397a1 1 0 0 0-1.414 0z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowUpDown" }
);
var ArrowUpDown_default = ArrowUpDown;

export {
  ArrowUpDown,
  ArrowUpDown_default
};
