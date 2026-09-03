<!-- composerxai-lint mode=reference -->

# composerxai brand

## The mark

Two curved strands meet at one junction, continue as a single straight line, and end in a period.
The strands are two registers of the same sentence, the agent's and the person's; the junction is
where they resolve into one voice, and the period is the sentence shipping as prose instead of
output. One glance gives a fork closing into a full stop, which is the whole product in four
strokes.

Construction: 96-unit square grid, stroke width 10, round caps, dot radius 7. The geometry matches
the browxai mark's stroke language, so the two products sit together as one family. The canonical
SVG is `composerxai-mark.svg` and paints with `currentColor`.

## Clear space

Keep a margin of at least the dot's diameter (14 units, about 15% of the mark's width) on every
side. Do not place other glyphs, rules, or text inside that margin. In tiles the mark occupies 78%
to 80% of the tile width; `design.json` records the exact placement scales.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| Ink | `#16161A` | Mark on light surfaces |
| Paper | `#FAFAF7` | Mark on dark surfaces |
| Teal deep | `#0D5C55` | Tile gradient top |
| Teal bright | `#17877C` | Tile gradient bottom |
| Teal accent | `#12A594` | Links and highlights in derived material |

The mark itself stays monochrome. The teal belongs to the tile and to derived assets only. Both
gradient endpoints hold at least 3:1 contrast against the paper mark.

## Dark mode

`composerxai-mark-white.svg` and the `composerxai-mark-white-*.png` sizes are the dark-surface
variants. The geometry is identical; only the fill changes. No separate small-size master exists:
the 16 px render was checked at native size and the junction and period both survive.

## Files

| Asset | Sizes |
| --- | --- |
| `composerxai-mark.svg` | Canonical `currentColor` master |
| `composerxai-mark-{16,32,128,512,1024}.png` | Ink mark on transparency |
| `composerxai-mark-white-{16,32,128,512,1024}.png` | Paper mark on transparency |
| `composerxai-favicon.svg`, `favicon.ico`, `favicon-{16,32,48}.png` | Tile favicon set |
| `composerxai-app-icon-1024.png`, `apple-touch-icon.png` | App and touch icons |
| `composerxai-avatar-512.png` | Circle-crop-safe avatar |

`brand/README.md` covers regeneration. All derived rasters rebuild from the SVG master and
`design.json` via `render.py`.
