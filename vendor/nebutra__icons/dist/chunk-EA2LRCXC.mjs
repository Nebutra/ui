// src/components/CheckSquare.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var CheckSquare = /* @__PURE__ */ Object.assign(
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
          d: "M14.5 1.5v13h-13v-13zM16 15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-4.22-8.72.53-.53-1.06-1.06-.53.53L6.5 9.44 5.28 8.22l-.53-.53-1.06 1.06.53.53 1.75 1.75a.75.75 0 0 0 1.06 0z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "CheckSquare" }
);
var CheckSquare_default = CheckSquare;

export {
  CheckSquare,
  CheckSquare_default
};
