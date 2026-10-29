// src/components/Notebook.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Notebook = /* @__PURE__ */ Object.assign(
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
          d: "M6.285 1.5H13V12a1 1 0 0 1-1 1H6.285zm-1.25 0H3V12a1 1 0 0 0 1 1h1.035zm0 13H4A2.5 2.5 0 0 1 1.5 12V0h13v12a2.5 2.5 0 0 1-2.5 2.5H6.285v1.125h-1.25V14.5m3.47-11.125h2.25v1.25h-2.25zm.625 3h-.625v1.25h2.25v-1.25H9.13",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Notebook" }
);
var Notebook_default = Notebook;

export {
  Notebook,
  Notebook_default
};
