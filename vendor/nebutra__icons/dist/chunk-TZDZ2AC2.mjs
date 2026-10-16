// src/components/Tab.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Tab = /* @__PURE__ */ Object.assign(
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
          d: "M16 .75V0h-1.5v16H16V.75M7.53 3.22 7 2.69 5.94 3.75l.53.53 2.97 2.97H0v1.5h9.44l-2.97 2.97-.53.53L7 13.31l.53-.53 4.25-4.25a.75.75 0 0 0 0-1.06z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Tab" }
);
var Tab_default = Tab;

export {
  Tab,
  Tab_default
};
