#!/bin/bash
# Download product images from Amazon
# Run this script from the project root: bash scripts/download-images.sh

mkdir -p public/products

echo "Downloading Ninja Foodi MAX image..."
curl -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o public/products/ninja-foodi-max.jpg \
  "https://m.media-amazon.com/images/I/71HmZ+YLFWL._AC_SL500_.jpg"

echo "Downloading Philips 3000 XL image..."
curl -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o public/products/philips-3000-xl.jpg \
  "https://m.media-amazon.com/images/I/61kk1l6uOgL._AC_SL500_.jpg"

echo "Downloading Cosori Dual Blaze image..."
curl -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o public/products/cosori-dual-blaze.jpg \
  "https://m.media-amazon.com/images/I/71dRvFpEVbL._AC_SL500_.jpg"

echo ""
echo "Done! Check file sizes:"
ls -la public/products/*.jpg

echo ""
echo "If files are very small (<1KB), the download was blocked."
echo "In that case, manually save images from your browser:"
echo "  1. Open https://m.media-amazon.com/images/I/71HmZ+YLFWL._AC_SL500_.jpg"
echo "  2. Right-click > Save As > public/products/ninja-foodi-max.jpg"
echo "  3. Repeat for the other 2 images"
echo ""
echo "Then update lib/products.ts to use .jpg instead of .svg"
