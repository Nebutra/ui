// src/components/FolderPlus.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var FolderPlus = /* @__PURE__ */ Object.assign(
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
          d: "M14.5 12.5V4H8.833a2.5 2.5 0 0 1-1.5-.5L6 2.5H1.5v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1M1.5 1H0v11.5A2.5 2.5 0 0 0 2.5 15h11a2.5 2.5 0 0 0 2.5-2.5v-10H8.833a1 1 0 0 1-.6-.2L6.767 1.2a1 1 0 0 0-.6-.2zm3.75 7h2V6h1.5v2h2v1.5h-2v2h-1.5v-2h-2z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "FolderPlus" }
);
var FolderPlus_default = FolderPlus;

export {
  FolderPlus,
  FolderPlus_default
};
