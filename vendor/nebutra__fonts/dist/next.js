import {
  cjkFontClassName,
  notoSansSc
} from "./chunk-GRE7GS6W.js";

// src/next.ts
import {
  DM_Sans,
  Figtree,
  Fira_Code,
  Fraunces,
  Inter,
  Inter_Tight,
  JetBrains_Mono,
  Lexend,
  Manrope,
  Montserrat,
  Outfit,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Roboto_Mono,
  Sora,
  Source_Code_Pro,
  Source_Serif_4,
  Space_Grotesk,
  Work_Sans
} from "next/font/google";
var inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
var interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reg-inter-tight"
});
var spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});
var playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display"
});
var fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reg-fraunces"
});
var jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono"
});
var manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-reg-manrope" });
var sora = Sora({ subsets: ["latin"], display: "swap", variable: "--font-reg-sora" });
var workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reg-work-sans"
});
var dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-reg-dm-sans" });
var plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reg-plus-jakarta-sans"
});
var outfit = Outfit({ subsets: ["latin"], display: "swap", variable: "--font-reg-outfit" });
var figtree = Figtree({ subsets: ["latin"], display: "swap", variable: "--font-reg-figtree" });
var montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reg-montserrat"
});
var lexend = Lexend({ subsets: ["latin"], display: "swap", variable: "--font-reg-lexend" });
var firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reg-fira-code"
});
var robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reg-roboto-mono"
});
var sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reg-source-serif-4"
});
var sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reg-source-code-pro"
});
var FONT_REGISTRY_FACES = [
  inter,
  interTight,
  spaceGrotesk,
  playfairDisplay,
  sourceSerif4,
  fraunces,
  jetbrainsMono,
  manrope,
  sora,
  workSans,
  dmSans,
  plusJakartaSans,
  outfit,
  figtree,
  montserrat,
  lexend,
  firaCode,
  robotoMono,
  sourceCodePro
];
var fontRegistryClassName = FONT_REGISTRY_FACES.map((face) => face.variable).join(" ");
export {
  FONT_REGISTRY_FACES,
  cjkFontClassName,
  fontRegistryClassName,
  notoSansSc
};
//# sourceMappingURL=next.js.map