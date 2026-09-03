import * as next_dist_compiled__next_font from 'next/dist/compiled/@next/font';

/**
 * @nebutra/fonts/next/cjk — the self-hosted Simplified-Chinese face (server-only).
 *
 * WHY A SEPARATE ENTRY FROM `./next`: that module declares ~16 `next/font/google`
 * faces for the theme / DESIGN.md registry. Importing it just to get the CJK face
 * would drag those build-time Google downloads into every app — and this repo has
 * a known trap where `next/font/google` fails outright in a network-sandboxed dev
 * server. This file imports `next/font/local` ONLY: the woff2 files live in the
 * workspace `generated/` directory (not the npm tarball), so first-party apps
 * work offline, in CI, and in the sandbox. `./next` re-exports it,
 * so an app already applying `fontRegistryClassName` still only needs one import.
 *
 * WHY SELF-HOSTED AT ALL: Geist has no CJK coverage, so without this every Chinese
 * character falls back to whatever the OS supplies — PingFang on macOS, Microsoft
 * YaHei on Windows, something else on Android. Chinese copy is a first-class
 * surface here (see docs/microcopy/), so the face is pinned rather than left to
 * the OS.
 *
 * The files are built by `pnpm --filter @nebutra/fonts subset:cjk` from
 * Noto Sans SC (SIL OFL) and live in the workspace `generated/` directory.
 * The literal `src` list below mirrors NOTO_SANS_SC_SOURCES in
 * ../generated/index.ts (a drift test in ./next-cjk.test.ts asserts they agree).
 * It is spelled out rather than spread because next/font is a compile-time
 * transform — SWC statically analyses this call, so the options object cannot
 * be computed.
 */
/**
 * Noto Sans SC — 400 / 500 / 600 / 700 static subsets.
 *
 * - `preload: false` on purpose. Each weight is hundreds of KB; preloading them
 *   on every route would tax Latin-only pages for nothing. The browser fetches
 *   a weight only when a glyph in the `unicode-range` below actually renders.
 * - `declarations` carries that `unicode-range` (CJK blocks only — no ASCII, no
 *   Latin, no general punctuation), so a Latin-only page can never trigger a CJK
 *   download even if a font stack somewhere is written the wrong way round.
 * - `adjustFontFallback: false` — next/font's metric-matched fallback is derived
 *   from Arial, which is meaningless for a Han face.
 */
declare const notoSansSc: next_dist_compiled__next_font.NextFontWithVariable;
/**
 * Apply to <html> next to the Geist loaders so `--font-noto-sans-sc` exists:
 *
 *   className={`${GeistSans.variable} ${GeistMono.variable} ${cjkFontClassName}`}
 *
 * The token stacks (`--font-sans` / `--font-cn` / `--font-display` in
 * @nebutra/tokens) reference the variable AFTER Geist, so Geist keeps Latin and
 * the numerals and only CJK falls through to this face.
 */
declare const cjkFontClassName: string;

export { cjkFontClassName, notoSansSc };
