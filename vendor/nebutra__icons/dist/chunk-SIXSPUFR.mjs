// src/components/LogoYCombinator.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LogoYCombinator = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx("path", { fill: "#FB651E", d: "M16 0H0v16h16z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "M7.46 9.047 4.716 3.902H5.97l1.615 3.256q.038.087.087.18.05.093.087.193a.4.4 0 0 1 .037.068l.025.056a4 4 0 0 1 .2.46q.098-.211.217-.454l.242-.503 1.64-3.256h1.168l-2.77 5.207v3.318H7.46z"
          }
        )
      ]
    }
  )),
  { displayName: "LogoYCombinator" }
);
var LogoYCombinator_default = LogoYCombinator;

export {
  LogoYCombinator,
  LogoYCombinator_default
};
