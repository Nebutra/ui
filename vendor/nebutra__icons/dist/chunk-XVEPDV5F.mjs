// src/components/LogoAngularColor.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoAngularColor = /* @__PURE__ */ Object.assign(
  forwardRef(({ size = 16, width, height, ...props }, ref) => /* @__PURE__ */ jsxs(
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
      children: [
        /* @__PURE__ */ jsx("path", { fill: "#DD0031", d: "M8 0 .5 2.656l1.144 9.848L8 16l6.356-3.496L15.5 2.656z" }),
        /* @__PURE__ */ jsx("path", { fill: "#C3002F", d: "M8 0v1.776-.008V16l6.356-3.496L15.5 2.656z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "m8 1.768-4.688 10.44H5.06l.942-2.336h3.98l.942 2.336h1.748zm1.37 6.664H6.63L8 5.16z"
          }
        )
      ]
    }
  )),
  { displayName: "LogoAngularColor" }
);
var LogoAngularColor_default = LogoAngularColor;

export {
  LogoAngularColor,
  LogoAngularColor_default
};
