---
---

# Charsets
A charset is an image that represent the console characters.

## How to change charset
You can create your own charset or download from [QuakeWorld GFX](https://gfx.quakeworld.nu/browse/charsets/)

1) Place the charset image in `/qw/textures/charsets/`
2) Run the command `/loadcharset <filename>` to load the charset.

**Example**

`/loadcharset foo.png` to load `/qw/textures/charsets/foo.png`.

## Colored text

ezQuake supports setting the color of text in strings. This is often used to make certain elements stand out in team messages.

First you need to set `/scr_coloredText 1`.

Then you can type colored text. The syntax is `{&cRGBtext&r}` where R is a hexadecimal number in range of 0,1,...,E,F specifying amount of red in the resulting
color. Same is G for green and B for blue. E.g. `888` is gray, `f0f` is pink.

Note: values of those numbers get expanded to `RRGGBB` format so e.g. color `04f` can be found as color `#0044FF` in most graphics editors.

### White text

Inside braces, text defaults to white. `&cfff` should correspond to white but is interpretted as a special code for colored text off (equivalent of `&r`)

Example:

* `/say "{&cff0this text will be yellow}, {&cfff}this will be the default orange {and this will be white text}"`

Note: The color of the text depends on the console font you use. Most console fonts have white letters. This client mixes the resulting color from these
letters. If your standard console font color is not white, you might get different results.

Due to backward compatibility issues, colored text is not allowed to be used in the player's name.

Examples

* `{&c0b0safe&cfff}` equivalent with `{&c0b0safe&r}`
* `{&cf00enemy&cfff}` `{&c04fquad&cfff}`


## Guide:  How to make charsets look good

> Made by fuh

PNG charsets give you the option of not only using 24bit colours, but also of creating higher resolution charsets. This can cause charsets to look a lot better,
but it can also make them look very bad. Read on to understand when they look good and when they look bad.

First let's understand how charsets worked when Quake was first released. Inside your gfx.wad you had a conchars.pcx of size 128x128. There were 16 characters
in each row, and 16 rows in total. That made each character take up 8x8 pixels (128 / 16 = 8. / means divided by) in the image.

Now in software quake you choose what resolution you want to run at, say 320x200. That means you have 320 pixels across your screen and 200 pixels going down.
One character from your charset takes up 8 pixels going across and 8 pixels going down. In fact no matter what you resolution is in software quake (even
1024x768) each character takes up 8x8 pixels. If you are running 1024x768 in software, then 8 pixels out of 1024 is not many and this is why the characters look
so small.

Now lets work out how many pixels of your screen are taking up by characters in GL. You run GL with a certain video resolution specified by -width and -height
on the command line. 640x480 is the default. So for example say you use -width 1600 -height 1200. This means you have 1600 pixels across your screen and 1200
pixels going down.

The number of pixels taken up on your screen by each character in your charset is (8*w) pixels across and (8*h) pixels down (* means multiplication) where 'w'
and 'h' are given by the formula below :

w = (value of -width) / (value of -conwidth)
h = (value of -height) / (value of -conheight)

- Example 1: If you have `-width 1600 -height 1200 -conwidth 800 -conheight 600` then w = 2 and h = 2, so each character takes up 16x16 pixels.
- Example 2: If you have `-width 1600 -height 1200 -conwidth 1600 -conheight 1200` then w = 1 and h = 1, so each character takes up 8x8 pixels.
- Example 3: If you have `-width 1600 -height 1200 -conwidth 400 -conheight 300` then w = 3 and h = 3, so each character takes up 32x32 pixels.

Two things to note here.

- In software characters always took up 8x8 pixels. In GL they can take more than 8x8 (i.e. have higher resolution).
- You want w and h to be whole numbers (integers). That means -width should be a multiple of -conwidth (so -width 1024 -conwidth 640 is bad but -width 1024
  -conwidth 512 is good), and same for -height and -conheight. Also width/height should have the same aspect ratio of conwidth/conheight.

Now lets see when charsets look good and when they look bad.

Suppose we are not using a 24bit charset and are using the old charset in our gfx.wad. This is a 128x128 image with 16 characters in each row and 16 rows.
128/16 = 8 and so each character in our charset image is 8x8. But this is 8x8 in the charset image, its not necessariily the size on our screen.

In example 1 above, its 16x16 on our screen. So an 8x8 image is scaled up to 16x16 and then put on our screen. In example 2 there is no scaling, the 8x8 image
is simply pasted onto our screen. In example 3, the characters are supposed to take up 32x32 on our screen , but being only 8x8 in the image file, they have to
be scaled up 4 times!. The problem with scaling up is that is causes loss of potential quality (jagged edges etc). You scale any 8x8 image to 32x32 and it
causes jaggy edges and imprecision. The solution is high resolution charsets...but these have problems of their own (read on).

Ok so suppose now we use a PNG file...charset.png. Suppose it is 512x512 like many of the ones on display above. Once again there are 16 characters in each row,
and 16 rows, so each character in the 512x512 image takes up 32x32 pixels of the image. But how many does it take up on the screen? Well in example 3 above it
takes 32x32 pixels and so the character is simply pasted on our screen. But in example 2 it takes up only 8x8 pixels on our screen so it is scaled down from
32x32 to 8x8. This makes it look horrible. Taking a 32x32 image and scaling it down to 8x8 makes it lose all its quality.

This is why some of these charsets look horrible for some people. If you just double click fuhquake-gl.exe then you are using the default -width 640 -height 480
-conwidth 640 -conheight 480 , so in the formula above w = 1 and h = 1. That is each character takes up 8x8 pixels on screen. If you are using a 512x512 high
res charset, then the characters in your image are 32x32 and when they get scaled down to 8x8 to be put on your screen they look very bad.

However if you use -width 1024 -conwidth 512 -height 768 -conheight 368, then in the formula above, w = 2 and h = 2, so each character on your screen is 16x16.
Hence with a 512x512 charset, a 32x32 image is only scaled down to 16x16 which is much much better than being scaled down all the way to 8x8. In this scenario
things look much better.

Note that I am not saying scaling down is a bad thing. It's just a bad thing when it gets scaled down way too much like from 32x32 all the way to 8x8 (think
about it, 8x8 is only 8 pixels across. This will involve a lot of distortion).

In general scaling up always causes bluriness, and should be avoided. Scaling down is ok, but only within reason. 32x32 to 8x8 is insane. My guidelines for
scaling are : you can scale anything to 16x16, but only 16x16 can be scaled to 8x8.

Having said that let's see what size we should make charsets.

If our charset is 128x128 : each character in the image is 8x8 pixels. Things work out nicely if w = h = 1 in the above formula, but for any other values of w
and h, the characters in the image have to be scaled up and this causes a loss of precision (jagged edges etc).

If our charset is 256x256 : each character in the image is 16x16 pixels. Clearly if w = h = 2 then we have no scaling and all is good. But if w=h=1 then things
are still ok, as scaling a 16x16 down to 8x8 isn't so bad. If w = h = 3 or higher, then we have to scale up and this isn't bad, but not good either. So in
summary w = h = 1 or 2 are best.

If our charset is 512x512 : each character in the image is 32x32. w = h = 1 is bad because then we have to scale each character from 32x32 down to 8x8 and
that's no good. w = h = 2 means scaling 32x32 down to 16x16 which is fine. w = h = 3 means no scaling which is perfect. w = h = 4 or higher means scaling up
which isn't necessarily bad but not good either.

So in summary, 128x128 is useless since it is only good for w = h = 1 and 256x256 is good for w = h = 1 anyway.
256x256 is good for w = h = 1 or 2. 512x512 is good for w = h = 2 or 3.

So both sizes are good for w = h = 2 (which means having -width and -height double the size of -conwidth and -conheight). If people have problems with charset
quality with 256x256 or 512x512 images, then they should switch to using a conwidth half their width (and same for the heights).

If you use the same -width as your -conwidth then you need to stay away from 512x512 high res charsets, since then you have w = h = 1.

Also note that theer are far more people with w = h = 1 than with w = h = 3. Not many people have a width 3 times their conwidth (but some do). So 256x256 would
be more useful than 512x512 to the majority.

Note this does not mean you can take a 512x512 image and scale it down to 256x256 and then everything is OK for w = h = 1. That's pointless. You have to scale
it down and then edit the pixels to smoothen things out.
