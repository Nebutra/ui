// src/components/Bookmark.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Bookmark = /* @__PURE__ */ Object.assign(
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
          d: "M11 1.5H5a1 1 0 0 0-1 1v10.973l3.162-1.725a1.75 1.75 0 0 1 1.676 0L12 13.474V2.5a1 1 0 0 0-1-1m2.5 12.791V2.5A2.5 2.5 0 0 0 11 0H5a2.5 2.5 0 0 0-2.5 2.5V16l1.5-.818 3.88-2.117a.25.25 0 0 1 .24 0L12 15.182l1.5.818z",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "Bookmark" }
);
var Bookmark_default = Bookmark;

export {
  Bookmark,
  Bookmark_default
};
