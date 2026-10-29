// src/components/GitMerge.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var GitMerge = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "square", strokeWidth: 1.5, d: "M4 6.25v8" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M10.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-1.421.687a3.001 3.001 0 1 0 .036-1.512 5.25 5.25 0 0 1-4.29-4.29A3.001 3.001 0 0 0 4 1a3 3 0 0 0-.687 5.921 6.75 6.75 0 0 0 5.766 5.766M2.5 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0",
            clipRule: "evenodd"
          }
        )
      ]
    }
  )),
  { displayName: "GitMerge" }
);
var GitMerge_default = GitMerge;

export {
  GitMerge,
  GitMerge_default
};
