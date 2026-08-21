// src/next-cjk.ts
import localFont from "next/font/local";
var vivoSansCn = localFont({
  src: [
    { path: "../generated/vivo-sans-sc-400.woff2", weight: "400", style: "normal" },
    { path: "../generated/vivo-sans-sc-500.woff2", weight: "500", style: "normal" },
    { path: "../generated/vivo-sans-sc-600.woff2", weight: "600", style: "normal" },
    { path: "../generated/vivo-sans-sc-700.woff2", weight: "700", style: "normal" }
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
  variable: "--font-vivo-sans-sc"
});
var cjkFontClassName = vivoSansCn.variable;

export {
  vivoSansCn,
  cjkFontClassName
};
//# sourceMappingURL=chunk-MI5GQA6D.js.map