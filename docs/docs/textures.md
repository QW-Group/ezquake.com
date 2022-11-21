---
outline: [2,3]
---

# Textures

ezQuake supports textures replacement. We recommend downloading textures from [QuakeWorld GFX](https://gfx.quakeworld.nu/)
and [Quake Revitalization Project (QRP)](http://qrp.quakeone.com/).

## Console background

Replace the console background picture by saving an image to `/qw/gfx/conback.png`.

## Charsets

Located in `/qw/textures/charsets/`, see [Charsets](./charsets) for more info.

## Crosshairs

Located in `/qw/crosshairs/`, see [Crosshairs](./crosshairs) for more info.

## Heads up display (HUD)

See [HUD](./hud) for info on how to configure the HUD.

### Ammo

| Item            | File location                    | Example                                     |
|-----------------|----------------------------------|---------------------------------------------|
| Shells          | `/qw/textures/wad/sb_shells.png` | ![](/assets/img/textures/wad/sb_shells.png) |
| Nails           | `/qw/textures/wad/sb_nails.png`  | ![](/assets/img/textures/wad/sb_nails.png)  |
| Rockets         | `/qw/textures/wad/sb_rocket.png` | ![](/assets/img/textures/wad/sb_rocket.png) |
| Cells           | `/qw/textures/wad/sb_cells.png`  | ![](/assets/img/textures/wad/sb_cells.png)  |

### Armors

| Item            | File location                    | Example                                     |
|-----------------|----------------------------------|---------------------------------------------|
| Green Armor     | `/qw/textures/wad/sb_armor1.png` | ![](/assets/img/textures/wad/sb_armor1.png) |
| Yellow Armor    | `/qw/textures/wad/sb_armor2.png` | ![](/assets/img/textures/wad/sb_armor2.png) |
| Red Armor       | `/qw/textures/wad/sb_armor3.png` | ![](/assets/img/textures/wad/sb_armor3.png) |

### Faces (health)

| Description              | File location                      | Example                                       |
|--------------------------|------------------------------------|-----------------------------------------------|
| Full health              | `/qw/textures/wad/face1.png`       | ![](/assets/img/textures/wad/face1.png)       |
| Full health (damage)     | `/qw/textures/wad/face_p1.png`     | ![](/assets/img/textures/wad/face_p1.png)     |
| High health              | `/qw/textures/wad/face2.png`       | ![](/assets/img/textures/wad/face2.png)       |
| High health (damage)     | `/qw/textures/wad/face_p2.png`     | ![](/assets/img/textures/wad/face_p2.png)     |
| Medium health            | `/qw/textures/wad/face3.png`       | ![](/assets/img/textures/wad/face3.png)       |
| Medium health (damage)   | `/qw/textures/wad/face_p3.png`     | ![](/assets/img/textures/wad/face_p3.png)     |
| Low health               | `/qw/textures/wad/face4.png`       | ![](/assets/img/textures/wad/face4.png)       |
| Low health (damage)      | `/qw/textures/wad/face_p4.png`     | ![](/assets/img/textures/wad/face_p4.png)     |
| Very low health          | `/qw/textures/wad/face5.png`       | ![](/assets/img/textures/wad/face5.png)       |
| Very low health (damage) | `/qw/textures/wad/face_p5.png`     | ![](/assets/img/textures/wad/face_p5.png)     |
| Quad                     | `/qw/textures/wad/face_quad.png`   | ![](/assets/img/textures/wad/face_quad.png)   |
| Ring                     | `/qw/textures/wad/face_invis.png`  | ![](/assets/img/textures/wad/face_invis.png)  |
| Pent                     | `/qw/textures/wad/face_invul2.png` | ![](/assets/img/textures/wad/face_invul2.png) |
| Pent + Ring              | `/qw/textures/wad/face_inv2.png`   | ![](/assets/img/textures/wad/face_inv2.png)   |

### Numbers

Numbers display health, armor, ammo and game clock.

**Tip**: Use [HUD Numbers Generator](https://vikpe.org/qwnum/) to create HUD numbers using any Google Font.

#### Nums

Used for high ammo count and medium to high health.

| Char | File location                    | Example                                     |
|------|----------------------------------|---------------------------------------------|
| 0    | `/qw/textures/wad/num_0.png`     | ![](/assets/img/textures/wad/num_0.png)     |
| 1    | `/qw/textures/wad/num_1.png`     | ![](/assets/img/textures/wad/num_1.png)     |
| 2    | `/qw/textures/wad/num_2.png`     | ![](/assets/img/textures/wad/num_2.png)     |
| 3    | `/qw/textures/wad/num_3.png`     | ![](/assets/img/textures/wad/num_3.png)     |
| 4    | `/qw/textures/wad/num_4.png`     | ![](/assets/img/textures/wad/num_4.png)     |
| 5    | `/qw/textures/wad/num_5.png`     | ![](/assets/img/textures/wad/num_5.png)     |
| 6    | `/qw/textures/wad/num_6.png`     | ![](/assets/img/textures/wad/num_6.png)     |
| 7    | `/qw/textures/wad/num_7.png`     | ![](/assets/img/textures/wad/num_7.png)     |
| 8    | `/qw/textures/wad/num_8.png`     | ![](/assets/img/textures/wad/num_8.png)     |
| 9    | `/qw/textures/wad/num_9.png`     | ![](/assets/img/textures/wad/num_9.png)     |
| -    | `/qw/textures/wad/num_minus.png` | ![](/assets/img/textures/wad/num_minus.png) |
| :    | `/qw/textures/wad/num_colon.png` | ![](/assets/img/textures/wad/num_colon.png) |
| /    | `/qw/textures/wad/num_slash.png` | ![](/assets/img/textures/wad/num_slash.png) |

#### Anums

Used for low ammo count and low health.

| Char | File location                     | Example                                      |
|------|-----------------------------------|----------------------------------------------|
| 0    | `/qw/textures/wad/anum_0.png`     | ![](/assets/img/textures/wad/anum_0.png)     |
| 1    | `/qw/textures/wad/anum_1.png`     | ![](/assets/img/textures/wad/anum_1.png)     |
| 2    | `/qw/textures/wad/anum_2.png`     | ![](/assets/img/textures/wad/anum_2.png)     |
| 3    | `/qw/textures/wad/anum_3.png`     | ![](/assets/img/textures/wad/anum_3.png)     |
| 4    | `/qw/textures/wad/anum_4.png`     | ![](/assets/img/textures/wad/anum_4.png)     |
| 5    | `/qw/textures/wad/anum_5.png`     | ![](/assets/img/textures/wad/anum_5.png)     |
| 6    | `/qw/textures/wad/anum_6.png`     | ![](/assets/img/textures/wad/anum_6.png)     |
| 7    | `/qw/textures/wad/anum_7.png`     | ![](/assets/img/textures/wad/anum_7.png)     |
| 8    | `/qw/textures/wad/anum_8.png`     | ![](/assets/img/textures/wad/anum_8.png)     |
| 9    | `/qw/textures/wad/anum_9.png`     | ![](/assets/img/textures/wad/anum_9.png)     |
| -    | `/qw/textures/wad/anum_minus.png` | ![](/assets/img/textures/wad/anum_minus.png) |

### Powerups

| Item   | File location                    | Example                                     |
|--------|----------------------------------|---------------------------------------------|
| Quad   | `/qw/textures/wad/sb_quad.png`   | ![](/assets/img/textures/wad/sb_quad.png)   |
| Ring   | `/qw/textures/wad/sb_invis.png`  | ![](/assets/img/textures/wad/sb_invis.png)  |
| Pent   | `/qw/textures/wad/sb_invuln.png` | ![](/assets/img/textures/wad/sb_invuln.png) |
| Suit   | `/qw/textures/wad/sb_suit.png`   | ![](/assets/img/textures/wad/sb_suit.png)   |

### Sigils and keys

| Item    | File location                    | Example                                     |
|---------|----------------------------------|---------------------------------------------|
| Sigil 1 | `/qw/textures/wad/sb_sigil1.png` | ![](/assets/img/textures/wad/sb_sigil1.png) |
| Sigil 2 | `/qw/textures/wad/sb_sigil2.png` | ![](/assets/img/textures/wad/sb_sigil2.png) |
| Sigil 3 | `/qw/textures/wad/sb_sigil3.png` | ![](/assets/img/textures/wad/sb_sigil3.png) |
| Sigil 4 | `/qw/textures/wad/sb_sigil4.png` | ![](/assets/img/textures/wad/sb_sigil4.png) |
| Key 1   | `/qw/textures/wad/sb_key1.png`   | ![](/assets/img/textures/wad/sb_key1.png)   |
| Key 2   | `/qw/textures/wad/sb_key2.png`   | ![](/assets/img/textures/wad/sb_key2.png)   |

## Maps

* `/qw/textures/` - Textures shared between maps.
* `/qw/textures/<map name>` - Map specific textures.

## Models

Textures for 3d models located around the map.

### Armors

| Item             | File location                        | Example                                      |
|------------------|--------------------------------------|----------------------------------------------|
| Green Armor      | `/qw/textures/models/armor_0.png`    | ![](/assets/img/textures/models/armor_0.png) |
| Yellow Armor     | `/qw/textures/models/armor_1.png`    | ![](/assets/img/textures/models/armor_1.png) |
| Red Armor        | `/qw/textures/models/armor_2.png`    | ![](/assets/img/textures/models/armor_2.png) |

### Ammo

#### Shells

| Description                   | File location                        | Example                                         |
|-------------------------------|--------------------------------------|-------------------------------------------------|
| Small shells pack (side)      | `/qw/textures/bmodels/shot0sid.png`  | ![](/assets/img/textures/bmodels/shot0sid.png)  | 
| Small shells pack (top)       | `/qw/textures/bmodels/shot0top.png`  | ![](/assets/img/textures/bmodels/shot0top.png)  | 
| Large shells pack (side)      | `/qw/textures/bmodels/shot1sid.png`  | ![](/assets/img/textures/bmodels/shot1sid.png)  | 
| Large shells pack (top)       | `/qw/textures/bmodels/shot1top.png`  | ![](/assets/img/textures/bmodels/shot1top.png)  | 

#### Nails

| Description                   | File location                        | Example                                         |
|-------------------------------|--------------------------------------|-------------------------------------------------|
| Small nails pack (side)       | `/qw/textures/bmodels/nail0sid.png`  | ![](/assets/img/textures/bmodels/nail0sid.png)  | 
| Small nails pack (top)        | `/qw/textures/bmodels/nail0top.png`  | ![](/assets/img/textures/bmodels/nail0top.png)  | 
| Large nails pack (side)       | `/qw/textures/bmodels/nail1sid.png`  | ![](/assets/img/textures/bmodels/nail1sid.png)  | 
| Large nails pack (top)        | `/qw/textures/bmodels/nail1top.png`  | ![](/assets/img/textures/bmodels/nail1top.png)  | 

#### Cells

| Description                   | File location                        | Example                                         |
|-------------------------------|--------------------------------------|-------------------------------------------------|
| Small cells pack (side)       | `/qw/textures/bmodels/batt1sid.png`  | ![](/assets/img/textures/bmodels/batt1sid.png)  |
| Small cells pack (top)        | `/qw/textures/bmodels/batt0top.png`  | ![](/assets/img/textures/bmodels/batt0top.png)  |
| Large cells pack (side)       | `/qw/textures/bmodels/batt0sid.png`  | ![](/assets/img/textures/bmodels/batt0sid.png)  |
| Large cells pack (top)        | `/qw/textures/bmodels/batt1top.png`  | ![](/assets/img/textures/bmodels/batt1top.png)  |

#### Rockets

| Description                    | File location                        | Example                                         |
|--------------------------------|--------------------------------------|-------------------------------------------------|
| Small rockets pack (side)      | `/qw/textures/bmodels/rock0sid.png`  | ![](/assets/img/textures/bmodels/rock0sid.png)  | 
| Large rockets pack (side)      | `/qw/textures/bmodels/rock1sid.png`  | ![](/assets/img/textures/bmodels/rock1sid.png)  | 
| Small/large rockets pack (top) | `/qw/textures/bmodels/rockettop.png` | ![](/assets/img/textures/bmodels/rockettop.png) | 

### Backpack

| Item             | File location                        | Example                                         |
|------------------|--------------------------------------|-------------------------------------------------|
| Backpack         | `/qw/textures/models/backpack_0.png` | ![](/assets/img/textures/models/backpack_0.png) |

### Health packs

#### Small health pack

| Description | File locations                    | Example                                      |
|-------------|-----------------------------------|----------------------------------------------|
| Top         | `/qw/textures/bmodels/med3_0.png` | ![](/assets/img/textures/bmodels/med3_0.png) |
| Side        | `/qw/textures/bmodels/med3_1.png` | ![](/assets/img/textures/bmodels/med3_1.png) |

#### Large health pack

Animated using several textures (frames).

| Description    | File locations                       | Example                                         |
|----------------|--------------------------------------|-------------------------------------------------|
| Top (frame 1)  | `/qw/textures/bmodels/+0_med25.png`  | ![](/assets/img/textures/bmodels/+0_med25.png)  |
| Top (frame 2)  | `/qw/textures/bmodels/+1_med25.png`  | ![](/assets/img/textures/bmodels/+1_med25.png)  |
| Top (frame 3)  | `/qw/textures/bmodels/+2_med25.png`  | ![](/assets/img/textures/bmodels/+2_med25.png)  |
| Top (frame 4)  | `/qw/textures/bmodels/+3_med25.png`  | ![](/assets/img/textures/bmodels/+3_med25.png)  |
| Side (frame 1) | `/qw/textures/bmodels/+0_med25s.png` | ![](/assets/img/textures/bmodels/+0_med25s.png) |
| Side (frame 2) | `/qw/textures/bmodels/+1_med25s.png` | ![](/assets/img/textures/bmodels/+1_med25s.png) |

#### Mega health

Animated using several textures (frames).

| Description    | File locations                       | Example                                         |
|----------------|--------------------------------------|-------------------------------------------------|
| Top            | `/qw/textures/bmodels/med100.png`    | ![](/assets/img/textures/bmodels/med100.png)    |
| Side (frame 1) | `/qw/textures/bmodels/+0_med100.png` | ![](/assets/img/textures/bmodels/+0_med100.png) |
| Side (frame 2) | `/qw/textures/bmodels/+1_med100.png` | ![](/assets/img/textures/bmodels/+1_med100.png) |
| Side (frame 3) | `/qw/textures/bmodels/+2_med100.png` | ![](/assets/img/textures/bmodels/+2_med100.png) |
| Side (frame 4) | `/qw/textures/bmodels/+3_med100.png` | ![](/assets/img/textures/bmodels/+3_med100.png) |

### Powerups

| Item             | File location                        |
|------------------|--------------------------------------|
| Ring             | `/qw/textures/models/invisibl_0.png` | 
| Pent             | `/qw/textures/models/invulner_0.png` | 
| Quad damage      | `/qw/textures/models/quaddama_0.png` |

### Projectiles

| Item             | File location                        | Example                                        |
|------------------|--------------------------------------|------------------------------------------------|
| Grenade          | `/qw/textures/models/grenade_0.png`  | ![](/assets/img/textures/models/grenade_0.png) | 
| Missile          | `/qw/textures/models/missile_0.png`  | ![](/assets/img/textures/models/missile_0.png) |  

### Weapons

| Item             | File location                        | Example                                        |
|------------------|--------------------------------------|------------------------------------------------|
| Super shotgun    | `/qw/textures/models/g_shot_0.png`   | ![](/assets/img/textures/models/g_shot_0.png)  |
| Nailgun          | `/qw/textures/models/g_nail_0.png`   | ![](/assets/img/textures/models/g_nail_0.png)  | 
| Super nailgun    | `/qw/textures/models/g_nail2_0.png`  | ![](/assets/img/textures/models/g_nail2_0.png) | 
| Grenade launcher | `/qw/textures/models/g_rock_0.png`   | ![](/assets/img/textures/models/g_rock_0.png)  | 
| Rocket launcher  | `/qw/textures/models/g_rock2_0.png`  | ![](/assets/img/textures/models/g_rock2_0.png) | 
| Lightning gun    | `/qw/textures/models/g_light_0.png`  | ![](/assets/img/textures/models/g_light_0.png) | 

## Weapon viewmodels

Textures for the weapons drawn in your pov.

| Item             | File location                        | Example                                        |
|------------------|--------------------------------------|------------------------------------------------|
| Axe              | `/qw/textures/models/v_axe_0.png`    | ![](/assets/img/textures/models/v_axe_0.png)   | 
| Shotgun          | `/qw/textures/models/v_shot_0.png`   | ![](/assets/img/textures/models/v_shot_0.png)  | 
| Super shotgun    | `/qw/textures/models/v_shot2_0.png`  | ![](/assets/img/textures/models/v_shot2_0.png) | 
| Nailgun          | `/qw/textures/models/v_nail_0.png`   | ![](/assets/img/textures/models/v_nail_0.png)  | 
| Super nailgun    | `/qw/textures/models/v_nail2_0.png`  | ![](/assets/img/textures/models/v_nail2_0.png) | 
| Grenade launcher | `/qw/textures/models/v_rock_0.png`   | ![](/assets/img/textures/models/v_rock_0.png)  | 
| Rocket launcher  | `/qw/textures/models/v_rock2_0.png`  | ![](/assets/img/textures/models/v_rock2_0.png) | 
| Lightning gun    | `/qw/textures/models/v_light_0.png`  | ![](/assets/img/textures/models/v_light_0.png) | 

## Skyboxes

Skyboxes are textures used as the sky.

The skybox textures uses the naming convention: `[basename][part][extension]`, where

* `basename` - is the name that you will use within loadsky command when want to load the sky replacement
* `part` - is one of `bk`, `dn`, `lf`, `ft`, `rt` and `up`, and
* `extension` - is usually `.png` or `.tga`

These files goes into `/qw/env/`.

E.g: You want to use skybox called `Day`. Then you have to have files `daybk.tga`, `daydn.tga`, `dayft.tga`, `daylf.tga`, `dayrt.tga` and `dayup.tga`
in `/qw/env/`. Then run the command `/loadsky day` into the console.

You can also use the `/skygroup` command to define rules to use different sky textures in different maps.

## Player skins

Located in `/qw/skins/`, see [Player Skins](./player-skins) for more info.

## Turning off textures

ezQuake allows a great deal of customisation when rendering the world

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

