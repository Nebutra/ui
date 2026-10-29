// src/components/Download.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Download = /* @__PURE__ */ Object.assign(
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
          d: "M8.75 1v7.69l1.97-1.97.53-.53 1.06 1.06-.53.53-3.073 3.074a1 1 0 0 1-1.414 0L4.22 7.78l-.53-.53 1.06-1.06.53.53 1.97 1.97V1zm4.75 8.25v4.25h-11v-5H1V14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5h-1.5z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Download" }
);
var Download_default = Download;

export {
  Download,
  Download_default
};
