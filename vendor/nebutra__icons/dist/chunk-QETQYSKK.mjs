// src/components/Calendar.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Calendar = /* @__PURE__ */ Object.assign(
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
          d: "M5.5.5V2h5V.5H12V2h3.5v11.5A2.5 2.5 0 0 1 13 16H3a2.5 2.5 0 0 1-2.5-2.5V2H4V.5zM2 3.5h12V6H2zm0 4v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Calendar" }
);
var Calendar_default = Calendar;

export {
  Calendar,
  Calendar_default
};
