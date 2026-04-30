/* ================================================================
 *  lib/data.ts — SITE-WIDE CONFIG
 *  ----------------------------------------------------------------
 *  This template ships with ONLY siteConfig because layout.tsx,
 *  opengraph-image.tsx, and the admin panel all need the site name
 *  for SEO and branding.
 *
 *  All other content (nav, hero, services, portfolio, contact, etc.)
 *  is decided per project — Claude creates the data shapes and
 *  components that fit the actual requirements rather than filling
 *  in a pre-baked schema.
 * ================================================================ */

export const siteConfig = {
  /** Shown in browser tab, admin panel, and SEO metadata */
  name: 'B-studio',
  /** SEO meta description */
  description:
    '음악을 사랑하는 사람들이 모여 만든 음악 스튜디오. 유튜브 채널 "say sing 사연을 들려드립니다"를 통해 당신의 이야기를 음악으로 전합니다.',
  /** Copyright line — use anywhere you render a footer */
  copyright: `© ${new Date().getFullYear()} B-studio. All rights reserved.`,
}
