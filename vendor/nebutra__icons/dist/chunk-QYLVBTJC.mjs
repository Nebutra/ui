// src/components/Plus.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Plus = /* @__PURE__ */ Object.assign(
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
          d: "M8.75 1h-1.5v6.25H1.5v1.5h5.75V15h1.5V8.75h5.75v-1.5H8.75v-5.5Z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Plus" }
);
var Plus_default = Plus;

export {
  Plus,
  Plus_default
};
