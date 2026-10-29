// src/components/LockClosedSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var LockClosedSmall = /* @__PURE__ */ Object.assign(
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
          d: "M9.5 6v1h-3V6a1.5 1.5 0 1 1 3 0M5 7V6a3 3 0 0 1 6 0v1h1v4.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5V7z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "LockClosedSmall" }
);
var LockClosedSmall_default = LockClosedSmall;

export {
  LockClosedSmall,
  LockClosedSmall_default
};
