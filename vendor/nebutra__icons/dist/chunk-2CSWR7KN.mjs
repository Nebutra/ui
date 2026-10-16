// src/components/Header.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Header = /* @__PURE__ */ Object.assign(
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
          d: "M1.5 2.5h13v2.495h-13zm0 3.745V12.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V6.245zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5V1",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Header" }
);
var Header_default = Header;

export {
  Header,
  Header_default
};
