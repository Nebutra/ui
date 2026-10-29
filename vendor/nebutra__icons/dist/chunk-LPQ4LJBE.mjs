// src/components/Layout.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Layout = /* @__PURE__ */ Object.assign(
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
          d: "M14.5 2.5h-13v2.505h13zm0 3.755H6.245V13.5H13.5a1 1 0 0 0 1-1zm-9.505 0H1.5V12.5a1 1 0 0 0 1 1h2.495zM1.5 1H0v11.5A2.5 2.5 0 0 0 2.5 15h11a2.5 2.5 0 0 0 2.5-2.5V1H1.5",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Layout" }
);
var Layout_default = Layout;

export {
  Layout,
  Layout_default
};
