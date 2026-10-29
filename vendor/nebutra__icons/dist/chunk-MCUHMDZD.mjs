// src/components/ArrowMoveUnread.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var ArrowMoveUnread = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_4759_1928)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M9.613 1.552 8.707.646a1 1 0 0 0-1.414 0L5.47 2.47 4.94 3 6 4.06l.53-.53.72-.72v4.44H2.81l.72-.72.53-.53L3 4.94l-.53.53L.646 7.293a1 1 0 0 0 0 1.414L2.47 10.53l.53.53L4.06 10l-.53-.53-.72-.72h4.44v4.44l-.72-.72-.53-.53L4.94 13l.53.53 1.823 1.824a1 1 0 0 0 1.414 0l1.823-1.824.53-.53L10 11.94l-.53.53-.72.72V8.75h4.44l-.72.72-.53.53L13 11.06l.53-.53 1.824-1.823a1 1 0 0 0 0-1.414l-.906-.906a4 4 0 0 1-2.213-.091l.235.234.72.72H8.75V2.81l.72.72.234.235a4 4 0 0 1-.091-2.213",
              clipRule: "evenodd"
            }
          ),
          /* @__PURE__ */ jsx("circle", { cx: 13.5, cy: 2.5, r: 2.5, fill: "var(--ds-blue-900)" })
        ] }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_4759_1928", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "M0 0h16v16H0z",
            style: {
              fill: "#fff",
              fillOpacity: 1
            }
          }
        ) }) })
      ]
    }
  )),
  { displayName: "ArrowMoveUnread" }
);
var ArrowMoveUnread_default = ArrowMoveUnread;

export {
  ArrowMoveUnread,
  ArrowMoveUnread_default
};
