/*
 * Relocate PKMUON resource.
 *
 * Each element `e` matching `.pkmuon-relocation-src` is relocated
 * by adding `pkmuon_relocation_root` before `e.getAttribute("_src")`
 * to form `e.src`.
 */

"use strict";

$(".pkmuon-relocation-src").each((i, e) => {
  e.src = pkmuon_relocation_root + e.getAttribute("_src");
});

$(".pkmuon-relocation-href").each((i, e) => {
  e.href = pkmuon_relocation_root + e.getAttribute("_href");
});
