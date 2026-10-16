// src/components/Status.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Status = /* @__PURE__ */ Object.assign(
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
      children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0" })
    }
  )),
  { displayName: "Status" }
);
var Status_default = Status;

export {
  Status,
  Status_default
};
