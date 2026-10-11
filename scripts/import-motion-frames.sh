#!/usr/bin/env bash
# Copies the homepage film frames from the motion project into public/motion/
# and regenerates src/components/motion/frames.json.
#
#   1. In ../purse-manufacturer-motion run: source/build-frames.sh
#   2. Here run:                          scripts/import-motion-frames.sh
set -euo pipefail

HERE="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${MOTION_FRAMES:-$HERE/../purse-manufacturer-motion/site/frames}"
OUT="$HERE/public/motion/frames"

[ -f "$SRC/manifest.js" ] || { echo "No manifest.js in $SRC (run build-frames.sh first)" >&2; exit 1; }

rm -rf "$OUT" && mkdir -p "$OUT"
cp "$SRC"/*.webp "$OUT"/

# Pull the generated values out of manifest.js.
val() { sed -nE "s/^[[:space:]]*$1: \"?([^\",]*)\"?,?.*$/\1/p" "$SRC/manifest.js" | head -1; }
cat > "$HERE/src/components/motion/frames.json" <<EOF
{
  "version": "$(val version)",
  "count": $(val count),
  "width": $(val width),
  "height": $(val height),
  "path": "/motion/frames/",
  "prefix": "frame_",
  "digits": 4,
  "ext": ".webp",
  "poster": "/motion/frames/poster.webp",
  "posterPortrait": "/motion/frames/poster-portrait.webp"
}
EOF

echo "Imported $(find "$OUT" -name 'frame_*.webp' | wc -l | tr -d ' ') frames ($(du -sh "$OUT" | cut -f1)) and wrote src/components/motion/frames.json"
