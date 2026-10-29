// src/components/AsteriskSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var AsteriskSmall = /* @__PURE__ */ Object.assign(
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
          d: "M7.25 13v-2.835a.5.5 0 0 0-.75-.433L4.045 11.15l-.75-1.3L5.75 8.433a.5.5 0 0 0 0-.866L3.295 6.15l.75-1.3L6.5 6.268a.5.5 0 0 0 .75-.433V3h1.5v2.835a.5.5 0 0 0 .75.433l2.455-1.418.75 1.3-2.455 1.417a.5.5 0 0 0 0 .866l2.455 1.417-.75 1.3L9.5 9.732a.5.5 0 0 0-.75.433V13z"
        }
      )
    }
  )),
  { displayName: "AsteriskSmall" }
);
var AsteriskSmall_default = AsteriskSmall;

export {
  AsteriskSmall,
  AsteriskSmall_default
};
