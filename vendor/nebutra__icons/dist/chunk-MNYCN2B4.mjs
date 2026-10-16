// src/components/Menu.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Menu = /* @__PURE__ */ Object.assign(
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
          d: "M1.75 4H1v1.5h14V4H1.75m0 6.5H1V12h14v-1.5H1.75",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Menu" }
);
var Menu_default = Menu;

export {
  Menu,
  Menu_default
};
