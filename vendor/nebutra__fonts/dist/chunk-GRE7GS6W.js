// src/next-cjk.ts
import localFont from "next/font/local";
var notoSansSc = localFont({
  src: [
    { path: "../generated/noto-sans-sc-400.woff2", weight: "400", style: "normal" },
    { path: "../generated/noto-sans-sc-500.woff2", weight: "500", style: "normal" },
    { path: "../generated/noto-sans-sc-600.woff2", weight: "600", style: "normal" },
    { path: "../generated/noto-sans-sc-700.woff2", weight: "700", style: "normal" }
  ],
  declarations: [
    {
      prop: "unicode-range",
      value: "U+3000-303F, U+3400-4DBF, U+4E00-9FFF, U+F900-FAFF, U+FE30-FE4F, U+FF00-FFEF"
    }
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  variable: "--font-noto-sans-sc"
});
var cjkFontClassName = notoSansSc.variable;

export {
  notoSansSc,
  cjkFontClassName
};
//# sourceMappingURL=chunk-GRE7GS6W.js.map