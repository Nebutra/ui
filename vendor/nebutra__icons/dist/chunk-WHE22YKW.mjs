// src/components/FolderDependency.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var FolderDependency = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0_7556_6046467)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M13.5 3v2h-11V1.5H6l1.333 1c.433.325.96.5 1.5.5zM1 5V0h5.167a1 1 0 0 1 .6.2l1.466 1.1a1 1 0 0 0 .6.2H15V5h1l-.167 1.5-.586 5.276A2.5 2.5 0 0 1 12.762 14H8v-1.5h4.762a1 1 0 0 0 .994-.89l.568-5.11H.166L0 5zm4.94 11h-5a1 1 0 0 1-1-1v-5h1.5v3.438L5.41 9.47l.53-.53L7 10l-.53.53L2.5 14.5h3.44z",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_7556_6046467", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "FolderDependency" }
);
var FolderDependency_default = FolderDependency;

export {
  FolderDependency,
  FolderDependency_default
};
