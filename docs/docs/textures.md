---
outline: [2,4]
---

# Textures

(this topic was ported quickly from old documentation and needs updated)

## External textures

ezQuake supports textures replacement. We recommend [Quake Revitalization Project (QRP)](https://qrp.quakeone.com/)
and [QuakeWorld GFX](https://gfx.quakeworld.nu/).

### Console background

You can replace the picture that is used as an console background. This file must be named `conback.png` and placed into `qw/gfx`.

### Charsets (console font)

See [Charsets](./charsets).

### Crosshairs

See [Crosshairs](./crosshairs).

### Map textures

Place all the textures in the root directory of the textures dir `qw/textures` or in sub-dirs for each map there. e.g. `qw/textures/dm4`.

### Item textures

TODO

### Skyboxes

You can also replace textures used as the sky. Textures used as a replacement must have a special naming convetion: each file name consist of these
parts: `[basename][part][extension]`, where

* `basename` - is the name that you will use within loadsky command when want to load the sky replacement
* `part` - is one of 'bk', 'dn', 'lf', 'ft', 'rt' and 'up', and
* `extension` - is usually .png or .tga

Those files goes to your `qw/env` directory.

E.g: You want to use skybox called `Day`. Then you have to have files `daybk.tga`, `daydn.tga`, `dayft.tga`, `daylf.tga`, `dayrt.tga` and `dayup.tga` in your
skyboxes
directory. Then you just type `/loadsky day` into the console.

You can also use `/skygroup` command to define rules to use different sky textures in different maps.

### Skins

See [Player Skins](./player-skins)

## Turning off textures

The client allows a great deal of customisation when rendering the world

- `/r_drawflat 1`
    - Ignore textures from the map and render the world as shades. Colors are set depending on the normal of the surface - surfaces pointing more vertically
      than horizontally will be rendered as floors, others as walls.
    - `/r_wallcolor color`, `/r_floorcolor color`
        - Sets the colors to use for walls and floors/ceilings respectively
- `/r_fastsky`, `/r_fastturb`
    - Determines if sky & turb textures (other liquids, such as teleporters) should be rendered flat
    - `/r_telecolor`, `/r_skycolor`, `r_lavacolor`, `/r_slimecolor`
        - Sets the colors of liquids that are being rendered as flat color
- `/r_skyname` - Sets the name of a skybox to use instead of sky textures. See section on [external textures][external-textures] for more info.
- `/gl_textureless 1` - Turns off textures, setting the color of each surface to the top-left pixel of corresponding texture
- `/gl_max_size num` - Sets the detail level for textures, where num is between 1 (`/gl_textureless`) and 16384 (max detail)

## Heads Up Display (HUD)

See [Heads Up Display (HUD)](./hud)

