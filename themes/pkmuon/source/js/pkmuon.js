/*
 * Provide PKMUON functionalities.
 */

"use strict";

/* Hyperlink Relocation
 * ------------------------------
 * Each element `e` matching `.pkmuon-relocation-src` is relocated
 * by adding `pkmuon_relocation_root` before `e.getAttribute("_src")`
 * to form `e.src`.
 */

// Hyperlink relocation: src.
$(".pkmuon-relocation-src").each((i, e) => {
  e.src = pkmuon_relocation_root + e.getAttribute("_src");
});

// Hyperlink relocation: href.
$(".pkmuon-relocation-href").each((i, e) => {
  e.href = pkmuon_relocation_root + e.getAttribute("_href");
});

// Message shown if iframe is not supported.
$("iframe").each((i, e) => {
  const msg = "<p>Preview is not supported on this browser.</p>";
  e.innerHTML = e.innerHTML || msg;
});
