// src/components/Crop.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Crop = /* @__PURE__ */ Object.assign(
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
          d: "M5 .75V0H3.5v3.5H0V5h3.5v6.5a1 1 0 0 0 1 1H11V16h1.5v-3.5H16V11h-3.5V4.5a1 1 0 0 0-1-1H5zM5 5v6h6V5z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Crop" }
);
var Crop_default = Crop;

export {
  Crop,
  Crop_default
};
