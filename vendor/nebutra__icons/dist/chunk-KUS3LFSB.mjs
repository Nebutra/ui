// src/components/TabletDevice.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var TabletDevice = /* @__PURE__ */ Object.assign(
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
          d: "M2.75 0A1.75 1.75 0 0 0 1 1.75v12.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 15 14.25V1.75A1.75 1.75 0 0 0 13.25 0zM2.5 1.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25H2.75a.25.25 0 0 1-.25-.25zm2.25 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "TabletDevice" }
);
var TabletDevice_default = TabletDevice;

export {
  TabletDevice,
  TabletDevice_default
};
