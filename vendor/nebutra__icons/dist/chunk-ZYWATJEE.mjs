// src/components/LogoVercelFill.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var LogoVercelFill = /* @__PURE__ */ Object.assign(
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
          d: "M8 1 0 15h16zm0 3.023L2.585 13.5h10.83z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "LogoVercelFill" }
);
var LogoVercelFill_default = LogoVercelFill;

export {
  LogoVercelFill,
  LogoVercelFill_default
};
