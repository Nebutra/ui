import * as next_dist_compiled__next_font from 'next/dist/compiled/@next/font';
export { cjkFontClassName, notoSansSc } from './next-cjk.js';

/** All registry faces, in declaration order. */
declare const FONT_REGISTRY_FACES: readonly [next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable, next_dist_compiled__next_font.NextFontWithVariable];
/**
 * Space-joined `.variable` classNames for every registry face. Apply to <html>
 * so all `--font-*` registry variables are defined (font files lazy-load on
 * first use). Combine with the app's own Geist faces.
 */
declare const fontRegistryClassName: string;

export { FONT_REGISTRY_FACES, fontRegistryClassName };
