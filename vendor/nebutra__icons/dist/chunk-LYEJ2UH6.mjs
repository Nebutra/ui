// src/components/FileDependency.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var FileDependency = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0_7556_6044469)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M13 12V6.5H8v-5H3V6H1.5V0h7.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V12a2.5 2.5 0 0 1-2.5 2.5H8.5V13H12a1 1 0 0 0 1-1M9.5 2.121 12.379 5H9.5zM5.94 16h-5a1 1 0 0 1-1-1v-5h1.5v3.438L5.41 9.47l.53-.53L7 10l-.53.53L2.5 14.5h3.44z",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_7556_6044469", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "FileDependency" }
);
var FileDependency_default = FileDependency;

export {
  FileDependency,
  FileDependency_default
};
