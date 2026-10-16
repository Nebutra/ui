// src/components/FloppyDisk.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var FloppyDisk = /* @__PURE__ */ Object.assign(
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
          d: "M13.5 4.72v8.78a1 1 0 0 1-1 1h-1V11a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3.5h-1a1 1 0 0 1-1-1v-12H5V4h1.5V1.5h2.974zM6 14.5h4v-3H6zM4.5 16h-1A2.5 2.5 0 0 1 1 13.5V0h8.65a1 1 0 0 1 .624.22l4.35 3.48a1 1 0 0 1 .376.78v9.02a2.5 2.5 0 0 1-2.5 2.5h-8",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "FloppyDisk" }
);
var FloppyDisk_default = FloppyDisk;

export {
  FloppyDisk,
  FloppyDisk_default
};
