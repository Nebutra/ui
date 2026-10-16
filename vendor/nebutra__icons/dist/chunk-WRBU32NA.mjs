// src/components/PictureInPicture.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var PictureInPicture = /* @__PURE__ */ Object.assign(
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
          d: "M6.75 13.5H1.5v-11h13v5H16V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6.5v-1.5zm3.75-3h4v3h-4zM9 9h7v6H9V9",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "PictureInPicture" }
);
var PictureInPicture_default = PictureInPicture;

export {
  PictureInPicture,
  PictureInPicture_default
};
