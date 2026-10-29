// src/components/LoaderCircle.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LoaderCircle = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsxs("g", { stroke: "currentColor", strokeWidth: 1.5, clipPath: "url(#clip0_2393_1490)", children: [
          /* @__PURE__ */ jsx("path", { d: "M8 0v4" }),
          /* @__PURE__ */ jsx("path", { d: "M8 16v-4", opacity: 0.5 }),
          /* @__PURE__ */ jsx("path", { d: "m3.298 1.528 2.35 3.236", opacity: 0.9 }),
          /* @__PURE__ */ jsx("path", { d: "m12.702 1.528-2.35 3.236", opacity: 0.1 }),
          /* @__PURE__ */ jsx("path", { d: "m12.702 14.472-2.35-3.236", opacity: 0.4 }),
          /* @__PURE__ */ jsx("path", { d: "m3.298 14.472 2.35-3.236", opacity: 0.6 }),
          /* @__PURE__ */ jsx("path", { d: "m15.609 5.528-3.805 1.236", opacity: 0.2 }),
          /* @__PURE__ */ jsx("path", { d: "m.392 10.472 3.804-1.236", opacity: 0.7 }),
          /* @__PURE__ */ jsx("path", { d: "m15.609 10.472-3.805-1.236", opacity: 0.3 }),
          /* @__PURE__ */ jsx("path", { d: "m.392 5.528 3.804 1.236", opacity: 0.8 })
        ] }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_2393_1490", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "LoaderCircle" }
);
var LoaderCircle_default = LoaderCircle;

export {
  LoaderCircle,
  LoaderCircle_default
};
