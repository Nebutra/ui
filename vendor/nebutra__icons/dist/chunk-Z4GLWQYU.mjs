// src/components/LogoFlagsSdk.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var LogoFlagsSdk = /* @__PURE__ */ Object.assign(
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
          d: "M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm2.5 9.75c-1.25 0-2 .75-2 .75V6s.75-.75 2-.75 1.75 1 3 1 2-.625 2-.625v4.5s-.75.625-2 .625-1.75-1-3-1",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "LogoFlagsSdk" }
);
var LogoFlagsSdk_default = LogoFlagsSdk;

export {
  LogoFlagsSdk,
  LogoFlagsSdk_default
};
