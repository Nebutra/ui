// src/components/CreditCard.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var CreditCard = /* @__PURE__ */ Object.assign(
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
          d: "M14 3H2a.5.5 0 0 0-.5.5V5h13V3.5A.5.5 0 0 0 14 3M1.5 12.5v-6h13v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5m.5-11a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm2 9.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "CreditCard" }
);
var CreditCard_default = CreditCard;

export {
  CreditCard,
  CreditCard_default
};
