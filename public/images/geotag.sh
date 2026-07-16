#!/bin/bash
# LabShine Auto Geo-Tagger
# Drop photos into this folder, run this script, done.
# Usage: bash geotag.sh
# Or for a specific folder: bash geotag.sh katy

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Houston suburb coordinates
declare -A COORDS=(
  ["the-woodlands"]="30.1658 95.4613"
  ["woodlands"]="30.1658 95.4613"
  ["cypress"]="29.9691 95.6972"
  ["katy"]="29.7858 95.8244"
  ["sugar-land"]="29.6197 95.6349"
  ["sugarland"]="29.6197 95.6349"
  ["pearland"]="29.5635 95.2860"
  ["memorial"]="29.7822 95.5024"
  ["river-oaks"]="29.7484 95.4189"
  ["fulshear"]="29.6897 95.8827"
  ["houston"]="29.7604 95.3698"
)

tag_file() {
  local file="$1"
  local lat="$2"
  local lon="$3"
  local location="$4"

  exiftool -overwrite_original \
    -GPSLatitude="$lat" \
    -GPSLatitudeRef=N \
    -GPSLongitude="$lon" \
    -GPSLongitudeRef=W \
    -XMP:City="$location" \
    -XMP:State="Texas" \
    -XMP:Country="United States" \
    -XMP:CountryCode="US" \
    -IPTC:City="$location" \
    -IPTC:Province-State="TX" \
    -IPTC:Country-PrimaryLocationName="United States" \
    -Copyright="LabShine Auto Detailing" \
    -Artist="LabShine Auto Detailing" \
    "$file" 2>/dev/null && echo "  ✓ Tagged: $(basename "$file") → $location, TX"
}

echo ""
echo "🗺️  LabShine Geo-Tagger"
echo "========================"
echo ""

# Find all images in subfolders named after locations
for location_key in "${!COORDS[@]}"; do
  folder="$SCRIPT_DIR/$location_key"
  if [ -d "$folder" ]; then
    read -r lat lon <<< "${COORDS[$location_key]}"
    # Format location name nicely
    location_name=$(echo "$location_key" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1')
    echo "📍 $location_name, TX"
    find "$folder" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" -o -iname "*.png" \) | while read -r file; do
      tag_file "$file" "$lat" "$lon" "$location_name"
    done
  fi
done

# Tag any images directly in /images root as Houston
echo "📍 Houston, TX (root folder)"
find "$SCRIPT_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" -o -iname "*.png" \) | while read -r file; do
  tag_file "$file" "29.7604" "95.3698" "Houston"
done

echo ""
echo "✅ Done. All images are geo-tagged and ready to upload."
echo ""
