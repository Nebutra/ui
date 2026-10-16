// src/components/ChevronDoubleRight.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ChevronDoubleRight = /* @__PURE__ */ Object.assign(
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
          d: "M12.854 8.707a1 1 0 0 0 0-1.414L9.03 3.47l-.53-.53L7.44 4l.53.53L11.44 8l-3.47 3.47-.53.53 1.06 1.06.53-.53zm-5 0a1 1 0 0 0 0-1.414L4.03 3.47l-.53-.53L2.44 4l.53.53L6.44 8l-3.47 3.47-.53.53 1.06 1.06.53-.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ChevronDoubleRight" }
);
var ChevronDoubleRight_default = ChevronDoubleRight;

export {
  ChevronDoubleRight,
  ChevronDoubleRight_default
};
