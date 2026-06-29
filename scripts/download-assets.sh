#!/usr/bin/env bash
# Downloads all images from the original Hostinger/Zyro CDN into public/images/
# Run once locally: bash scripts/download-assets.sh
# Requires: curl (preinstalled on macOS and Linux)

set -euo pipefail

BASE="https://assets.zyrosite.com/Yyv7920xNLHEPBb6"
OUT="public/images"

echo "→ Downloading assets from Zyro CDN to $OUT/"
mkdir -p "$OUT" "$OUT/team" "$OUT/gallery" "$OUT/press"

dl() {
  local src="$1"
  local dst="$2"
  if [ -f "$OUT/$dst" ]; then
    echo "   ✓ $dst (cached)"
    return
  fi
  echo "   ↓ $dst"
  curl -fsSL "$BASE/$src" -o "$OUT/$dst" || echo "   ✗ FAILED: $src"
}

echo ""
echo "── Banners & section backgrounds ──────────────────"
dl "news-AE0464l8WPU6Oa0w.png"                            "hero-bg.png"
dl "vintage1-YX4bo89J9RcnnKDK.png"                        "apercu-banner.png"
dl "web-site-the-hysterical-ladies-YZ9EVZWqD1CzJRp6.png"  "upcoming-banner.png"
dl "about-m5Kb3lQV8lFVQXQ5.png"                           "contribute.png"
dl "contact-Yyv76eGb06SwQ1PL.png"                         "contact-banner.png"
dl "about-YBg4X2DB0PUBPl1W.png"                           "about-hero.png"
dl "imagen-de-whatsapp-2024-09-09-a-las-20.21.59_4749e7b8-AQEpOVDo1NUBxpZy.jpg"  "story-1.jpg"
dl "imagen-de-whatsapp-2024-09-09-a-las-20.21.59_08d1f095-AVLbEN72beFpx1Ny.jpg"  "story-2.jpg"

echo ""
echo "── Logos (partners) ──────────────────────────────"
dl "aha-A0xwab5eN0T27gQv.png"                "logo-aha.png"
dl "logo-white-150x70-Ylev9BxNqXSVX2Ga.png"  "logo-white.png"
dl "logospedidam-mxBZaNRo2DC2oVKN.png"       "logo-spedidam.png"

echo ""
echo "── Team portraits ────────────────────────────────"
# NOTE: image-1/2/3 are the three actresses (Charlotte/Marion/Aniqa).
# Verify the mapping below visually after download and rename if needed.
dl "image-1-m6LJnr5R48uVNM1d.png"                              "team/charlotte.png"
dl "image-2-YX4bvzNgalSO6NpX.png"                              "team/marion.png"
dl "image-3-dWxb7wr4eJH7PWBb.png"                              "team/aniqa.png"
dl "ina-s-amoura-director-mp89Z6VxvwcRak68.JPG"                "team/ines.jpg"
dl "mallory-cheminet---choregrapher-Yley86pyJ4CQrP4p.JPG"      "team/mallory.jpg"
dl "patrice-concert-venise_edited-AzG75DjyDXu7q4Xj.jpg"        "team/patrice.jpg"
dl "jessica-rock---pianist-Yley869167cbRRrG.JPG"               "team/jessica.jpg"
dl "yeohyeon-jung---stage-manager-A1aJEQ7jR3H1OvO6.JPG"        "team/yeohyeon.jpg"
dl "anthony-m5KbzJjZneIP5aX6.jpeg"                             "team/anthony.jpg"
dl "captura-desde-2024-11-19-01-34-05-m6LwEMVgWKhrQppn.png"    "team/clementine.png"

echo ""
echo "── Tour poster ───────────────────────────────────"
dl "affiche-a3-avec-bandeau-Bae2mZBsZHvou3Oy.jpg"  "affiche-tour.jpg"

echo ""
echo "── Gallery: Essaïon Paris, October 2024 ──────────"
dl "p1114731-Su141C5LRfqwPygq.JPG"  "gallery/essaion-01.jpg"
dl "p1114710-e0CFOfqZZZQyRZUO.JPG"  "gallery/essaion-02.jpg"
dl "p1114743-zMuvnE4KJZZVtQ0r.JPG"  "gallery/essaion-03.jpg"
dl "p1114776-p5dj6lKobz7lzWrj.JPG"  "gallery/essaion-04.jpg"
dl "img_9775-XfgbZaWru1Ay6fFF.jpg"  "gallery/essaion-05.jpg"
dl "img_9832-a8SDvA6ZTRm9zemN.jpg"  "gallery/essaion-06.jpg"
dl "img_9679-0ACv45cCj8iBF9RV.jpg"  "gallery/essaion-07.jpg"
dl "img_9692-GMiln8D0yexG5Ajy.jpg"  "gallery/essaion-08.jpg"
dl "img_9791-ASCX4zhnm8DIpCQJ.jpg"  "gallery/essaion-09.jpg"
dl "img_9786-wONr2QGzHYC3m7ke.jpg"  "gallery/essaion-10.jpg"

echo ""
echo "── Gallery: White Bear London, September 2024 ────"
dl "august-9-2023-photo-1-YbN9k2axXXcq0qrB.jpg"  "gallery/whitebear-01.jpg"
dl "august-9-2023-photo-2-m2WQJw4gZ2Tb6nGq.jpg"  "gallery/whitebear-02.jpg"
dl "august-9-2023-photo-3-YBg4OkpBxzI0Jokl.jpg"  "gallery/whitebear-03.jpg"

echo ""
echo "── Gallery: Skirts of Fire Festival, March 2024 ──"
dl "img_1554-mk39oOJQvkcp13bW.JPG"  "gallery/skirts-01.jpg"
dl "img_1560-Yg29oeyJjRT5PN6L.JPG"  "gallery/skirts-02.jpg"
dl "img_1540-YX4bokxqBxTZr3Wz.JPG"  "gallery/skirts-03.jpg"
dl "img_1568-dWxbokOrPPh9b1gK.JPG"  "gallery/skirts-04.jpg"
dl "img_1557-d95g204bVoCENzwG.JPG"  "gallery/skirts-05.jpg"
dl "img_1550-ALpoNkPrw2syOlx4.JPG"  "gallery/skirts-06.jpg"

echo ""
echo "── Gallery: Paris 2022 ───────────────────────────"
dl "photo-2022-09-11-22-30-03-AE04w9o53JhVbObw.jpg"     "gallery/paris2022-01.jpg"
dl "photo-2022-09-11-22-30-03-no-AQEpazyQ3wipz24Z.jpg"  "gallery/paris2022-02.jpg"
dl "photo-2022-09-11-22-30-03-t-Yan9wGyO9LIQ95zv.jpg"   "gallery/paris2022-03.jpg"

echo ""
echo "── Press banners & logos ─────────────────────────"
dl "bannerparis-Y4LJ770wMNuO78q6.png"           "press/banner-paris.png"
dl "banner1-A3QJb5jJoNcRLpRJ.png"               "press/banner-london.png"
dl "otbc-kgHdzcUHUaBEzo2P.jpeg"                 "press/logo-otbc.jpg"
dl "lptm-DVHy0MPphTTP3h2R.jpeg"                 "press/logo-lptm.jpg"
dl "et-removebg-preview-UMHa7BhEvCtqoC8F.png"   "press/logo-everything-theatre.png"
dl "thepeg-EzATNeRhxQzlRYhm.png"                "press/logo-thepeg.png"
dl "captura-de-pantalla-2024-09-05-a-la-s-19.11.16-d95gaWvZgXF7EPk8.png"  "press/screenshot-edmonton.png"
dl "a8c6a51a-1335-4650-a7fa-c187f25e41b8-mxB7NGMq1gfQkx22.JPEG"           "press/news-stalbert.jpg"

echo ""
echo "✓ Done. Check $OUT/ — total files:"
find "$OUT" -type f | wc -l
echo ""
echo "Next step: review team/charlotte.png, team/marion.png, team/aniqa.png"
echo "and rename if the actresses don't match (they were image-1/2/3 in the original CMS)."
