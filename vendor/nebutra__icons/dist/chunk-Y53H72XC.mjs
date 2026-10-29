// src/components/Traces.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Traces = /* @__PURE__ */ Object.assign(
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
      children: /* @__PURE__ */ jsxs("g", { stroke: "currentColor", strokeWidth: 1.5, children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "square",
            d: "M4.75.75h-2a2 2 0 0 0-2 2v2M11.25 15.25h2a2 2 0 0 0 2-2v-2M11.25.75h2a2 2 0 0 1 2 2v2M4.75 15.25h-2a2 2 0 0 1-2-2v-2"
          }
        ),
        /* @__PURE__ */ jsx("path", { strokeLinecap: "round", d: "M4.5 5h5M7.5 8h5M4.5 11h5" })
      ] })
    }
  )),
  { displayName: "Traces" }
);
var Traces_default = Traces;

export {
  Traces,
  Traces_default
};
