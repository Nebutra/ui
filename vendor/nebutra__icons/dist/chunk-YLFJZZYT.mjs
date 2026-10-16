// src/components/LayoutShiftUnread.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LayoutShiftUnread = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_4769_1975)", children: [
          /* @__PURE__ */ jsx("circle", { cx: 13.5, cy: 2.5, r: 2.5, fill: "var(--ds-blue-900)" }),
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M3 14.5h-.75a.75.75 0 0 1-.75-.75V12.5H0v1.25A2.25 2.25 0 0 0 2.25 16H3zm3 0H4V16h2zM4 0h2v1.5H4zM1.5 3.5V2.25a.75.75 0 0 1 .75-.75H3V0h-.75A2.25 2.25 0 0 0 0 2.25V3.5zm0 5v3H0v-3zm0-1v-3H0v3zM8.75 16a2.25 2.25 0 0 1-2.25-2.25V2.25A2.25 2.25 0 0 1 8.75 0h1.627a4 4 0 0 0-.751 1.5H8.75a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75V6.374a4 4 0 0 0 1.5-.751v8.127A2.25 2.25 0 0 1 13.75 16z",
              clipRule: "evenodd"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_4769_1975", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "M0 0h16v16H0z",
            style: {
              fill: "#fff",
              fillOpacity: 1
            },
            transform: "rotate(-90 8 8)"
          }
        ) }) })
      ]
    }
  )),
  { displayName: "LayoutShiftUnread" }
);
var LayoutShiftUnread_default = LayoutShiftUnread;

export {
  LayoutShiftUnread,
  LayoutShiftUnread_default
};
