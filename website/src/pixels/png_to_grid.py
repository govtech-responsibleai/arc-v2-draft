"""Turn a pixel-art PNG drawn at 1x in the ARC palette into a sprite for sprites.json.

usage: python png_to_grid.py my-icon.png icon-CAP-13        (needs Pillow: pip install pillow)

Prints the sprite as JSON ("name": [rows]); paste it into sprites.json. Any colour that is not in
arc-pixel.gpl is an error, so sprites stay in the palette. Fully transparent pixels become ".".
"""
import json
import pathlib
import sys

from PIL import Image

HERE = pathlib.Path(__file__).parent
letters = {v: k for k, v in json.loads((HERE / 'palette.json').read_text()).items()}   # token -> letter
rgb_to_letter = {}
for line in (HERE / 'arc-pixel.gpl').read_text().splitlines()[4:]:
    *rgb, name = line.split()
    rgb_to_letter[tuple(map(int, rgb))] = letters[name]

path, name = sys.argv[1], sys.argv[2]
im = Image.open(path).convert('RGBA')
rows = []
for y in range(im.height):
    row = ''
    for x in range(im.width):
        r, g, b, a = im.getpixel((x, y))
        if a < 128:
            row += '.'
        elif (r, g, b) in rgb_to_letter:
            row += rgb_to_letter[(r, g, b)]
        else:
            sys.exit(f'{path}: #{r:02x}{g:02x}{b:02x} at {x},{y} is not in the ARC palette')
    rows.append(row)
print(json.dumps({name: rows}, indent=1)[2:-2] + ',')
