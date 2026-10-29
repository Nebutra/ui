// src/components/ArrowUpRightSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowUpRightSmall = /* @__PURE__ */ Object.assign(
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
          d: "M6.75 4H6v1.5h3.44L5.47 9.47l-.53.53L6 11.06l.53-.53L10.5 6.562V10h1.5V5a1 1 0 0 0-1-1z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowUpRightSmall" }
);
var ArrowUpRightSmall_default = ArrowUpRightSmall;

export {
  ArrowUpRightSmall,
  ArrowUpRightSmall_default
};
