// src/components/CodeWrap.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var CodeWrap = /* @__PURE__ */ Object.assign(
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
          d: "m7.228 14.182 3-12 .181-.728-1.455-.363-.182.727-3 12-.181.728 1.455.364zM3.75 12.06l-.53-.53L.396 8.706a1 1 0 0 1 0-1.414L3.22 4.47l.53-.53L4.81 5l-.53.53L1.81 8l2.47 2.47.53.53zm8.5 0 .53-.53 2.824-2.824a1 1 0 0 0 0-1.414L12.78 4.47l-.53-.53L11.19 5l.53.53L14.19 8l-2.47 2.47-.53.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "CodeWrap" }
);
var CodeWrap_default = CodeWrap;

export {
  CodeWrap,
  CodeWrap_default
};
