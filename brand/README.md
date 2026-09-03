<!-- composerxai-lint mode=reference -->

# composerxai brand assets

A compact mark for composerxai, the writing framework and prose linter for agent output.

## The mark

Two voices enter as curved strands, resolve at one junction into a single straight line, and the line ends in a full stop. The strands are the agent's register and the human's; the period is the sentence that no longer sounds generated.

The canonical mark remains monochrome. Color and the subtle glass tile treatment
belong to derived assets, never to the core SVG.

## Palette

| Token | Hex |
| --- | --- |
| Ink | `#16161A` |
| Paper | `#FAFAF7` |
| Paper bright | `#FFFFFF` |
| Paper shadow | `#DCE3E1` |
| Background top | `#0D5C55` |
| Background bottom | `#17877C` |
| Accent | `#12A594` |

## Files

| File | What it is |
| --- | --- |
| `composerxai-mark.svg` | Canonical mark using `currentColor`. |
| `composerxai-mark-black.svg` / `-white.svg` | Fixed ink and reverse variants. |
| `composerxai-favicon.svg` | Rounded tile favicon. |
| `favicon.ico` | Multi-resolution 16/32/48 px favicon. |
| `favicon-16.png` / `-32.png` / `-48.png` | Exact raster favicon sizes. |
| `apple-touch-icon.png` | 180 px touch icon. |
| `composerxai-app-icon-1024.png` | Opaque full-bleed app-icon master. |
| `composerxai-app-icon-preview-1024.png` | Transparent rounded-square preview. |
| `composerxai-avatar-512.png` | Social avatar with circle-safe placement. |
| `icon-composer-layers/` | Flat background and mark layers. |
| `composerxai-app-icon-preview.png` | App-icon comparison sheet. |
| `favicon-preview.png` | Native-size favicon inspection sheet. |
| `design.json` | Palette, placement, story, and export settings. |
| `render.py` | Rebuilds all derived assets. |

## Regenerating

```sh
python3 -m pip install -r requirements.txt
python3 render.py --source . --output .
```

The full-bleed app icon and avatar are opaque. The rounded preview and flat mark
layer retain transparency.
