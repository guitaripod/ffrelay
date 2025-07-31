#!/bin/bash

# Create games directory if it doesn't exist
mkdir -p public/images/games

echo "Downloading Final Fantasy game artwork..."
echo

# Main Series
echo "Downloading main series games..."
curl -L -o public/images/games/ff1_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/1173770/library_600x900_2x.jpg"
curl -L -o public/images/games/ff2_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/1173780/library_600x900_2x.jpg"
curl -L -o public/images/games/ff3_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/1173790/library_600x900_2x.jpg"
curl -L -o public/images/games/ff4_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/1173800/library_600x900_2x.jpg"
curl -L -o public/images/games/ff5_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/1173810/library_600x900_2x.jpg"
curl -L -o public/images/games/ff6_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/1173820/library_600x900_2x.jpg"
curl -L -o public/images/games/ff7_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/39140/library_600x900_2x.jpg"
curl -L -o public/images/games/ff8_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/1026680/library_600x900_2x.jpg"
curl -L -o public/images/games/ff9_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/377840/library_600x900_2x.jpg"
curl -L -o public/images/games/ff10_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/359870/library_600x900_2x.jpg"
curl -L -o public/images/games/ff10-2_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/359870/library_600x900_2x.jpg"
curl -L -o public/images/games/ff12_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/595520/library_600x900_2x.jpg"
curl -L -o public/images/games/ff13_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/292120/library_600x900_2x.jpg"
curl -L -o public/images/games/ff13-2_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/292140/library_600x900_2x.jpg"
curl -L -o public/images/games/ff13-lr_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/345350/library_600x900_2x.jpg"
curl -L -o public/images/games/ff15_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/637650/library_600x900_2x.jpg"
curl -L -o public/images/games/ff16_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/library_600x900_2x.jpg"

echo
echo "Downloading spin-offs and related games..."
curl -L -o public/images/games/fft_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/2276730/library_600x900_2x.jpg"
curl -L -o public/images/games/ff-type0_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/340170/library_600x900_2x.jpg"
curl -L -o public/images/games/ff7-cc_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/2484110/library_600x900_2x.jpg"
curl -L -o public/images/games/sop_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/1561040/library_600x900_2x.jpg"
curl -L -o public/images/games/woff_new.png "https://cdn.cloudflare.steamstatic.com/steam/apps/552700/library_600x900_2x.jpg"

# For the games not on Steam, we'll use alternative sources
echo
echo "Downloading games from alternative sources..."
curl -L -o public/images/games/ffta_new.png "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rjy.png"
curl -L -o public/images/games/ffta2_new.png "https://images.igdb.com/igdb/image/upload/t_cover_big/co3i2q.png"
curl -L -o public/images/games/ffmq_new.png "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rmz.png"
curl -L -o public/images/games/ffcc_new.png "https://images.igdb.com/igdb/image/upload/t_cover_big/co2rg4.png"
curl -L -o public/images/games/dissidia_new.png "https://images.igdb.com/igdb/image/upload/t_cover_big/co2iup.png"

echo
echo "Replacing old placeholder images with new ones..."
# Backup old images and replace with new ones
for file in public/images/games/*_new.png; do
    basename=$(basename "$file" _new.png)
    if [ -f "public/images/games/${basename}.png" ]; then
        mv "public/images/games/${basename}.png" "public/images/games/${basename}_old.png"
    fi
    mv "$file" "public/images/games/${basename}.png"
done

echo
echo "✅ Game artwork download complete!"