// src/components/GitPullRequest.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var GitPullRequest = /* @__PURE__ */ Object.assign(
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
          d: "M4 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m.75 1.405A3.001 3.001 0 0 0 4 1a3 3 0 0 0-.75 5.905V15h1.5V6.905M9.5 3.25h-.75v1.5H11a.25.25 0 0 1 .25.25v4.095a3.001 3.001 0 1 0 1.5 0V5A1.75 1.75 0 0 0 11 3.25zm1 8.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0",
          clipRule: "evenodd"
        }
      )
    }
  )),
  { displayName: "GitPullRequest" }
);
var GitPullRequest_default = GitPullRequest;

export {
  GitPullRequest,
  GitPullRequest_default
};
