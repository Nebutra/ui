// src/components/Cache.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Cache = /* @__PURE__ */ Object.assign(
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
          d: "M3 1A2.5 2.5 0 0 0 .5 3.5V5A2.5 2.5 0 0 0 3 7.5h10A2.5 2.5 0 0 0 15.5 5V3.5A2.5 2.5 0 0 0 13 1zM2 3.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm1 5A2.5 2.5 0 0 0 .5 11v1.5A2.5 2.5 0 0 0 3 15h10a2.5 2.5 0 0 0 2.5-2.5V11A2.5 2.5 0 0 0 13 8.5zM2 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm3-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M6.75 5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Cache" }
);
var Cache_default = Cache;

export {
  Cache,
  Cache_default
};
