"""Generate og-image.png for AI Minds (1200x630, WhatsApp/iMessage compatible)"""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
AVATAR_DIR = os.path.join(os.path.dirname(__file__), "public", "avatars")
OUT = os.path.join(os.path.dirname(__file__), "public", "og-image.png")

# Brand colors
BG       = (10, 10, 18)       # near-black
CARD_BG  = (20, 20, 35)       # slightly lighter
TEAL     = (20, 184, 166)     # Ava teal — brand accent
WHITE    = (255, 255, 255)
MUTED    = (160, 160, 180)

img  = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# Gradient-ish top bar
for y in range(4):
    draw.line([(0, y), (W, y)], fill=TEAL)

# --- Agent avatars (8 in a row, left side) ---
avatars   = ["ava", "leo", "bella", "maya", "penny", "vera", "ruby", "max"]
AV_SIZE   = 88
AV_GAP    = 14
AV_TOP    = 200
AV_LEFT   = 64
AV_COLS   = 4

for i, slug in enumerate(avatars):
    col = i % AV_COLS
    row = i // AV_COLS
    x = AV_LEFT + col * (AV_SIZE + AV_GAP)
    y = AV_TOP  + row * (AV_SIZE + AV_GAP)
    path = os.path.join(AVATAR_DIR, f"{slug}.png")
    if os.path.exists(path):
        av = Image.open(path).convert("RGBA").resize((AV_SIZE, AV_SIZE), Image.LANCZOS)
        # Circle mask
        mask = Image.new("L", (AV_SIZE, AV_SIZE), 0)
        ImageDraw.Draw(mask).ellipse([0, 0, AV_SIZE, AV_SIZE], fill=255)
        # Card background circle
        bg_circle = Image.new("RGB", (AV_SIZE, AV_SIZE), CARD_BG)
        bg_circle.paste(av, (0, 0), av)
        img.paste(bg_circle, (x, y), mask)

# Teal dot accent row under avatars
for i in range(8):
    col = i % AV_COLS
    row = i // AV_COLS
    x = AV_LEFT + col * (AV_SIZE + AV_GAP) + AV_SIZE // 2
    y = AV_TOP + row * (AV_SIZE + AV_GAP) + AV_SIZE + 6
    draw.ellipse([x-3, y-3, x+3, y+3], fill=TEAL)

# --- Text block (right side) ---
TX = 580
try:
    font_big   = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 64)
    font_mid   = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 42)
    font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)
    font_tag   = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
except:
    font_big   = ImageFont.load_default()
    font_mid   = font_big
    font_small = font_big
    font_tag   = font_big

# "ai minds" wordmark
draw.text((TX, 140), "ai minds", font=font_big, fill=WHITE)

# Teal underline under wordmark
wb = draw.textbbox((TX, 140), "ai minds", font=font_big)
draw.rectangle([TX, wb[3]+6, wb[2], wb[3]+10], fill=TEAL)

# Tagline
draw.text((TX, 240), "Your team,", font=font_mid, fill=WHITE)
draw.text((TX, 295), "multiplied.", font=font_mid, fill=TEAL)

# Sub line
draw.text((TX, 370), "8 AI coworkers for your business.", font=font_small, fill=MUTED)
draw.text((TX, 408), "Not replacing your team —", font=font_small, fill=MUTED)
draw.text((TX, 444), "multiplying it.", font=font_small, fill=MUTED)

# URL pill
pill_x, pill_y = TX, 510
pill_w, pill_h = 260, 44
draw.rounded_rectangle([pill_x, pill_y, pill_x+pill_w, pill_y+pill_h], radius=22, fill=TEAL)
draw.text((pill_x + 22, pill_y + 9), "ai-minds.ai", font=font_tag, fill=BG)

img.save(OUT, "PNG", optimize=True)
print(f"Saved → {OUT}")
print(f"Size: {os.path.getsize(OUT) // 1024}KB")
