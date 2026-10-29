// src/components/DeviceDesktop.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var DeviceDesktop = /* @__PURE__ */ Object.assign(
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
          d: "M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H8.75v3h1.75V16h-5v-1.5h1.75v-3H1a1 1 0 0 1-1-1zm1.5.5V10h13V2.5z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "DeviceDesktop" }
);
var DeviceDesktop_default = DeviceDesktop;

export {
  DeviceDesktop,
  DeviceDesktop_default
};
