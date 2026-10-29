// src/components/File.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var File = /* @__PURE__ */ Object.assign(
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
          d: "M14.5 6.5v7A2.5 2.5 0 0 1 12 16H4a2.5 2.5 0 0 1-2.5-2.5V0h7.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707zm-1.5 0v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-12h5v5h5M9.5 2.121V5h2.879z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "File" }
);
var File_default = File;

export {
  File,
  File_default
};
