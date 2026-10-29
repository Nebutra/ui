// src/components/ToggleOffAltUnread.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var ToggleOffAltUnread = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M15.62 5.893A6 6 0 0 1 10 14H6A6 6 0 0 1 6 2h3.531a4 4 0 0 0 .095 1.5H6a4.5 4.5 0 0 0 0 9h4a4.5 4.5 0 0 0 4.22-6.065c.506-.092.98-.279 1.4-.542M6 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: 13.5, cy: 2.5, r: 2.5, fill: "var(--ds-blue-900)" })
      ]
    }
  )),
  { displayName: "ToggleOffAltUnread" }
);
var ToggleOffAltUnread_default = ToggleOffAltUnread;

export {
  ToggleOffAltUnread,
  ToggleOffAltUnread_default
};
