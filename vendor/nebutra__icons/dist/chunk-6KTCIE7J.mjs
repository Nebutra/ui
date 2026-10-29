// src/components/Logs.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Logs = /* @__PURE__ */ Object.assign(
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
          d: "M9 2h6v1.5H9zm0 10.5h6V14H9zm.75-5.25H9v1.5h6v-1.5H9.75M1 12.5h2V14H1zM1.75 2H1v1.5h2V2H1.75M1 7.25h2v1.5H1zm4.75 5.25H5V14h2v-1.5H5.75M5 2h2v1.5H5zm.75 5.25H5v1.5h2v-1.5H5.75",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Logs" }
);
var Logs_default = Logs;

export {
  Logs,
  Logs_default
};
