// src/components/MenuAlt.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var MenuAlt = /* @__PURE__ */ Object.assign(
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
          d: "M1 2h14v1.5H1zm0 10.5h14V14H1zm.75-5.25H1v1.5h14v-1.5H1.75",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "MenuAlt" }
);
var MenuAlt_default = MenuAlt;

export {
  MenuAlt,
  MenuAlt_default
};
