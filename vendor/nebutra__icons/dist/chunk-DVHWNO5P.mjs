// src/components/ArrowDown.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowDown = /* @__PURE__ */ Object.assign(
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
          d: "M8.75 1.75V1h-1.5v11.44L3.28 8.47l-.53-.53L1.69 9l.53.53 5.073 5.074a1 1 0 0 0 1.414 0L13.78 9.53l.53-.53-1.06-1.06-.53.53-3.97 3.97z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowDown" }
);
var ArrowDown_default = ArrowDown;

export {
  ArrowDown,
  ArrowDown_default
};
