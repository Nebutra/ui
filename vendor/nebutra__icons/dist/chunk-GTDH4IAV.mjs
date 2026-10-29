// src/components/LogoAzureDevops.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var LogoAzureDevops = /* @__PURE__ */ Object.assign(
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
          fill: "#0078D4",
          d: "M16 2.997V12.5L12 16l-6-2v1.98L2 11.5l10 1v-9zM12 3.5 7 0v2.287L1.5 4 0 5.565V10.5l2 1V5.565z"
        }
      )
    }
  )),
  { displayName: "LogoAzureDevops" }
);
var LogoAzureDevops_default = LogoAzureDevops;

export {
  LogoAzureDevops,
  LogoAzureDevops_default
};
