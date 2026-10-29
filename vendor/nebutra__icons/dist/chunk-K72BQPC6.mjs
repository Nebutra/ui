// src/components/Inbox.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Inbox = /* @__PURE__ */ Object.assign(
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
          d: "M1.677 7.5 3.927 3h8.146l2.25 4.5H9.25v.75a1.25 1.25 0 1 1-2.5 0V7.5H1.677M1.5 9v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9h-3.854a2.751 2.751 0 0 1-5.292 0zM3 1.5h10l2.894 5.789a1 1 0 0 1 .106.447V12a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12V7.736a1 1 0 0 1 .106-.447z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Inbox" }
);
var Inbox_default = Inbox;

export {
  Inbox,
  Inbox_default
};
