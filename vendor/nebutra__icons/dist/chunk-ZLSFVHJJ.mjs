// src/components/ListFilter.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ListFilter = /* @__PURE__ */ Object.assign(
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
          d: "M1 2h14v1.5H1zm4 10h6v1.5H5zM3.75 7H3v1.5h10V7H3.75",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ListFilter" }
);
var ListFilter_default = ListFilter;

export {
  ListFilter,
  ListFilter_default
};
