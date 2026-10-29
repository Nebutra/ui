// src/components/BookOpen.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var BookOpen = /* @__PURE__ */ Object.assign(
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
          d: "M0 1h5c1.227 0 2.316.589 3 1.5A3.74 3.74 0 0 1 11 1h5v12.75h-5.257a2.25 2.25 0 0 0-1.591.659l-.622.621H7.47l-.622-.621a2.25 2.25 0 0 0-1.59-.659H0V1m7.25 3.75A2.25 2.25 0 0 0 5 2.5H1.5v9.75h3.757c.71 0 1.4.202 1.993.573zm1.5 8.073V4.75A2.25 2.25 0 0 1 11 2.5h3.5v9.75h-3.757c-.71 0-1.4.202-1.993.573",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "BookOpen" }
);
var BookOpen_default = BookOpen;

export {
  BookOpen,
  BookOpen_default
};
