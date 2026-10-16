// src/components/NetworkDevice.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var NetworkDevice = /* @__PURE__ */ Object.assign(
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
        /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0_53_122)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12.5 1.5h-9v6h9zM3.5 0H2v7.5A1.5 1.5 0 0 0 3.5 9h3.875v2.079A2.5 2.5 0 0 0 5.55 13H0v1.5h5.708a2.5 2.5 0 0 0 4.584 0H16V13h-5.55a2.5 2.5 0 0 0-1.825-1.921V9H12.5A1.5 1.5 0 0 0 14 7.5V0H3.5M8 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_53_122", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h16v16H0z" }) }) })
      ]
    }
  )),
  { displayName: "NetworkDevice" }
);
var NetworkDevice_default = NetworkDevice;

export {
  NetworkDevice,
  NetworkDevice_default
};
