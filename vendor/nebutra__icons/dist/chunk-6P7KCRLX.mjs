// src/components/StatusSmall.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var StatusSmall = /* @__PURE__ */ Object.assign(
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
      children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0" })
    }
  )),
  { displayName: "StatusSmall" }
);
var StatusSmall_default = StatusSmall;

export {
  StatusSmall,
  StatusSmall_default
};
