// src/components/FolderClosed.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var FolderClosed = /* @__PURE__ */ Object.assign(
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
          d: "M14.5 7.5v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-5zm0-1.5V4H8.833a2.5 2.5 0 0 1-1.5-.5L6 2.5H1.5V6zM0 1h6.167a1 1 0 0 1 .6.2l1.466 1.1a1 1 0 0 0 .6.2H16v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5V1",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "FolderClosed" }
);
var FolderClosed_default = FolderClosed;

export {
  FolderClosed,
  FolderClosed_default
};
