// src/components/Connection.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Connection = /* @__PURE__ */ Object.assign(
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
          d: "M10.5 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M9.415 5.524a3 3 0 1 1 1.06 1.06l-3.89 3.892a3 3 0 1 1-1.06-1.06zM2.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Connection" }
);
var Connection_default = Connection;

export {
  Connection,
  Connection_default
};
