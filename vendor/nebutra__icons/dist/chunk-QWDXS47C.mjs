// src/components/SidebarLeft.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var SidebarLeft = /* @__PURE__ */ Object.assign(
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
          d: "M6.245 2.5H14.5v10a1 1 0 0 1-1 1H6.245zm-1.25 0H1.5v10a1 1 0 0 0 1 1h2.495zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5V1",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "SidebarLeft" }
);
var SidebarLeft_default = SidebarLeft;

export {
  SidebarLeft,
  SidebarLeft_default
};
