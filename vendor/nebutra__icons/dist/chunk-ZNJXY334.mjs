// src/components/GitCommit.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var GitCommit = /* @__PURE__ */ Object.assign(
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
          d: "M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8 12c1.953 0 3.579-1.4 3.93-3.25H16v-1.5h-4.07a4.001 4.001 0 0 0-7.86 0H0v1.5h4.07A4 4 0 0 0 8 12",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "GitCommit" }
);
var GitCommit_default = GitCommit;

export {
  GitCommit,
  GitCommit_default
};
