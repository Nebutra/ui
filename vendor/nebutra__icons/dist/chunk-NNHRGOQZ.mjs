// src/components/MenuAltUnread.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var MenuAltUnread = /* @__PURE__ */ Object.assign(
  forwardRef(({ size = 16, width, height, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      children: [
        /* @__PURE__ */ jsx("circle", { cx: 13.5, cy: 2.5, r: 2.5, fill: "var(--ds-blue-900)" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M9.531 2H1v1.5h8.626A4 4 0 0 1 9.531 2M1.75 12H1v1.5h14V12H1.75M1 7h14v1.5H1z",
            clipRule: "evenodd"
          }
        )
      ]
    }
  )),
  { displayName: "MenuAltUnread" }
);
var MenuAltUnread_default = MenuAltUnread;

export {
  MenuAltUnread,
  MenuAltUnread_default
};
