// src/components/CrossCircleFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var CrossCircleFill = /* @__PURE__ */ Object.assign(
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
          d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.5 3.56-.53-.53L8 9.06l-1.97 1.97-.53.53-1.06-1.06.53-.53L6.94 8 4.97 6.03l-.53-.53L5.5 4.44l.53.53L8 6.94l1.97-1.97.53-.53 1.06 1.06-.53.53L9.06 8l1.97 1.97.53.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "CrossCircleFill" }
);
var CrossCircleFill_default = CrossCircleFill;

export {
  CrossCircleFill,
  CrossCircleFill_default
};
