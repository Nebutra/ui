// src/components/ArrowDownRight.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var ArrowDownRight = /* @__PURE__ */ Object.assign(
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
          d: "M12.5 11.44V5H14v8a1 1 0 0 1-1 1H5v-1.5h6.438L2.219 3.28l-.53-.53 1.06-1.06.53.53z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "ArrowDownRight" }
);
var ArrowDownRight_default = ArrowDownRight;

export {
  ArrowDownRight,
  ArrowDownRight_default
};
