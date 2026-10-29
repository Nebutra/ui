// src/components/Toolbar.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Toolbar = /* @__PURE__ */ Object.assign(
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
          d: "M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5V1m9.634 9.5H5.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zM10.5 8h-5a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Toolbar" }
);
var Toolbar_default = Toolbar;

export {
  Toolbar,
  Toolbar_default
};
