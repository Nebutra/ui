// src/components/CrossSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var CrossSmall = /* @__PURE__ */ Object.assign(
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
          d: "m9.97 11.03.53.53 1.06-1.06-.53-.53L9.06 8l1.97-1.97.53-.53-1.06-1.06-.53.53L8 6.94 6.03 4.97l-.53-.53L4.44 5.5l.53.53L6.94 8 4.97 9.97l-.53.53 1.06 1.06.53-.53L8 9.06z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "CrossSmall" }
);
var CrossSmall_default = CrossSmall;

export {
  CrossSmall,
  CrossSmall_default
};
