// src/components/Monitoring.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Monitoring = /* @__PURE__ */ Object.assign(
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
          d: "M1 1v11.75A2.25 2.25 0 0 0 3.25 15H15v-1.5H3.25a.75.75 0 0 1-.75-.75V1zm8.5 2.75V3H8v9h1.5V3.75M6 8v4H4.5V8zm7-1.25V6h-1.5v6H13V6.75",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Monitoring" }
);
var Monitoring_default = Monitoring;

export {
  Monitoring,
  Monitoring_default
};
