// src/components/StatusBordered.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var StatusBordered = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { fill: "currentColor", clipPath: "url(#clip0_6799_10812)", children: [
          /* @__PURE__ */ jsx("path", { d: "M8 5.031a2.969 2.969 0 1 1 0 5.938A2.969 2.969 0 0 1 8 5.03" }),
          /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13",
              clipRule: "evenodd"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_6799_10812", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "StatusBordered" }
);
var StatusBordered_default = StatusBordered;

export {
  StatusBordered,
  StatusBordered_default
};
