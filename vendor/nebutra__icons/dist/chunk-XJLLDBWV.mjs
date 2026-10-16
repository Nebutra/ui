// src/components/Stop.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Stop = /* @__PURE__ */ Object.assign(
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
          d: "M5.308 1.5 1.5 5.308v5.384L5.308 14.5h5.384l3.808-3.808V5.308L10.692 1.5zM5.1 0a1 1 0 0 0-.708.293l-4.1 4.1A1 1 0 0 0 0 5.101V10.9a1 1 0 0 0 .293.707l4.1 4.1a1 1 0 0 0 .708.293H10.9a1 1 0 0 0 .707-.293l4.1-4.1A1 1 0 0 0 16 10.9V5.1a1 1 0 0 0-.293-.707l-4.1-4.1A1 1 0 0 0 10.9 0zM8.75 3.75v5h-1.5v-5zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Stop" }
);
var Stop_default = Stop;

export {
  Stop,
  Stop_default
};
