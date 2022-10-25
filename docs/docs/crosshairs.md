---
---

# Crosshairs

## Format

Set crosshair using `/crosshair x`, where x is beteeen 0 and 6 (default 4).

```
0: Off (no crosshair)
1: Conchar crosshair - the plus sign (+) from current charset
2: Quakeworld crosshair
3: A small cross
4: A dot
5: Star wars crosshair
6: F22 simulator crosshair
```

## Color

Set crosshair color using `/crosshaircolor r g b` where r,g,b are values between 0 and 255.

**Example**: set crosshair color to red using `/crosshaircolor 255 0 0`

## Size

Set the size of the crosshair using `/crosshairsize x`.

You can use `crosshairsize x` where x is any number between 0.2 and 8. Note however that some values will distort the crosshair in GL. This
is because of conwidth and width (conheight and height) being different. Change crosshairsize slowly (by 0.05 at a time say) to find a 'sweet spot'. You get
best performance when width (height) is an integral multiple of conwidth (conheight).

The crosshair size is independent of conwidth and conheight. If you wish to use large crosshairs (e.g. using `crosshairsize 10`) then it's best to use a high
resolution crosshair PNG image rather than using the 8x8 builtin crosshairs.

## Transparency

`/crosshairalpha x` where x is 0..1 will determine the level of transparency of your crosshair.

## Position

The crosshair is positioned in the center of the screen by default. Use `cl_crossx` and `cl_crossy` to adjust the crosshair relative to the screen center.

**Example**: offset crosshair by `10` pixels on the x-axis.

```
cl_crossx 10
```

## Crosshair Images

You can use a PNG/TGA/PCX image as a crosshair. PNG transparency is supported.

**Enable crosshair image**

1. Place the image in `quake\ezquake\crosshairs\`
2. Load it using `/crosshairimage [file_name]`

**Disable crosshair image**

```
/crosshairimage ""
```

**Note**: the variables `/crosshairsize`, `/crosshairalpha` and `/crosshaircolor` applies to crosshair images.

### Making Crosshair Images

The image should be square and preferabely have width and height being a power of 2. 64x64 is a good example.

#### Centering

The client centres the 64x64 crosshair so that the (32,32) pixel is centred on screen. In otherwords (32,32) is treated as the centre.

If you have a crosshair image of width = height = 2\^n with top left coordinate (1,1) and top right coordinate (2\^n, 2\^n) then the centre of the crosshair
should be positioned over pixel (2\^(n-1), 2\^(n-1)).

## Custom symbol

`crosshair 1` uses the plus symbol from your charset. Like all characters in your charset, the plus symbol is an 8x8 image in your charset. If you change this
image, `crosshair 1` will change.

You can change what `crosshair 1` looks like without editing your charset by creating a file called `crosshair.txt`
in `quake\ezquake\crosshairs\crosshair.txt`.

The format of `crosshair.txt` is:

```
XOOOOOXO
OXXOXXOO
OXOOOXOO
OOOXOOOO
OXOOOXOO
OXXOXXOO
XOOOOOXO
OOOOOOOO
```

where

```
X (or x)     draw a pixel
O (or o)     dont draw a pixel
```

## Variables

See the [crosshairs settings reference](./settings/graphics#crosshair-settings) for all crosshair settings.
