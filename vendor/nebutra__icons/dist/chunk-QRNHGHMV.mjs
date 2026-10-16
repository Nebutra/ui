// src/components/ArrowUp.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowUp = /* @__PURE__ */ Object.assign(
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
          d: "M8.707 1.396a1 1 0 0 0-1.414 0L2.22 6.47 1.69 7l1.06 1.06.53-.53 3.97-3.97V15h1.5V3.56l3.97 3.97.53.53L14.31 7l-.53-.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowUp" }
);
var ArrowUp_default = ArrowUp;

export {
  ArrowUp,
  ArrowUp_default
};
