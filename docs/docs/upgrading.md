---
---

# Upgrading

## Changes in 3.5 (based on 3.1)

### Renderer changes

- General overview
  - Major source code re-organisation to support multiple rendering paths
  - Executable can be compiled specific to a single renderer or to have multiple (`/vid_renderer` to choose)
  - GLSL-only renderer added (requires OpenGL 4.3+)
  - Classic renderer uses more advanced OpenGL features if available, including GLSL
  - Threaded driver experience should be improved (removed glGet* calls for matrices etc)
  - Reduced state changes by caching all OpenGL state in memory
  - Reduced state changes by using trying to consistently use pre-multiplied alpha blending
  - Reduced state/texture changes by using atlas for as many 2D elements as practicable
- QMB particle system
  - Reduced state changes by using same pre-multiplied alpha when loading particle textures
  - Reduced hull traces by caching distance from nearest clipping plane
  - Reduced hull traces/frame by changing physics option for some particle types
  - Reduced particle count caused by particle trails spawning multiple trails/entity and trampling on trail end-point data (SF#292?)
  - Sparks appear at furthest point of beam (not clipping platform edges - SF#143, SF#5?)
  - Coronas around torches kick in when the centre of the flame is visible, and don't fade in (SF#51)
  - `/gl_nailtrail 1` replaced, should be significantly faster
  - `/gl_particle_fire 1` re-written, should be signficantly faster (SF#51)
  - `/gl_part_fasttrails` removed
- World rendering
  - `/r_nearclip` has minimum value 2, increased from 0.1 (lower values produce too many errors on 16-bit z-buffers)
  - `/r_farclip` has maximum value 16384, no previous limit set (again, 16-bit z-buffers)
  - `/gl_scaleskytextures` added to keep scaling for sky & world textures distinct (default: off)
  - `/gl_caustics` checks the center of worldmodels (not the origin - fixes #321)
  - `/gl_turb_ripple` removed
  - `/gl_motionblur` removed
- MD3 models
  - Powerup shells support added
  - Simpleitem replacements work as expected
  - Model hints set correctly when using MD3 models
  - Skin handling improved for MD3 models
  - Lighting improved
  - Outlining supported
- Entity rendering
  - Powerup shells are consistent size regardless of model's internal scaling factor
  - ng/sng are special cases to not lerp back to the frame 0 when firing stops
  - block lerping of vertices if they come from behind the player (instead of by distance)
  - `/r_lerpframes` only lerps frames in an animation sequence (mostly smooth, stops axe-script distortion)
  - `/gl_affinemodels` removed
  - `/gl_smoothmodels` removed
  - `/gl_motiontrails` removed
  - `/gl_mipmap_viewmodels` added: controls mipmapping of textures for viewmodel (stops muzzleflash bleeding on to edge of weapon)
  - `/gl_scaleModelSimpleTextures` added: controls scaling of simple item textures (previously used `gl_scalemodeltextures`)
- HUD rendering
  - 2D elements are added to a single atlas (will cause delay at startup or when loading new images)
  - Tracker, centerprint & QTV stats are all added as HUD elements
  - Tracker splits strings up as messages are created, not when rendering
  - HUD notify no longer loses last character on line if that is also last character on screen - SF#513
  - 2D elements no longer rounded to integer coordinates before rendering - SF#397
  - `score_bar` attributes can have formatting applied (`%<10r>T` etc)
  - `/fontload` added: proportional font support if freetype available (Windows requires freetype.dll)
  - `/fontlist` enumerates fonts available on system
  - `/gl_smoothfont` removed: now use `/r_smoothcrosshair`, `/r_smoothtext`, `/r_smoothimages`
  - `/gl_charsets_min` added: restricts to basic & cyrillic fonts during startup (vastly reduces number of attempted file opens)
  - `/r_drawdisc` added: option to disable the IO-indicator
  - `/r_tracker_inconsole` messages now have the image in the console rather than the name of the image
  - `/scr_new_hud_clear` removed, and is essentially always enabled
  - `/show_velocity_3d` removed
  - `/hud_speed_text_align 0` hides the text value (as per documentation)
- Lighting
  - Bugfix: `/gl_modulate` change now updates all lightmaps immediately
  - Software lighting (`/r_dynamic 1`) waits until all changes to the lightmap are logged, then uploads lightmap once per frame
  - Hardware lighting (`/r_dynamic 2`) available if compute shaders available - move lighting to GPU
  - Maximum number of dynamic lights has been reduced to 32, as the upper 32 weren't processed anyway due to bitflags overflow
  - If driver supports OpenGL 4.3 (or appropriate extensions), use driver-supplied preferred texture format
  - `/gl_lighting_colour` depends on `/gl_lighting_vertex`, should be more consistent
  - `/r_lightmap` removed - equivalent functionality via `/r_drawflat 1;/r_wallcolor 255 255 255;/r_floorcolor 255 255 255`
  - `/r_lightmap_lateupload` added - might give better performance for those using `-nomtex`
  - `/r_lightmap_packbytexture` added - very naive idea but reduces texture switches when rendering world (when texture arrays not available)
- Render to framebuffers
  - `/vid_framebuffer 1` - render to framebuffer
  - `/vid_framebuffer_width`/`height`/`scale` - resizes main buffer
  - `/vid_framebuffer 2` - renders the 3D scene to framebuffer but 2D elements (hud etc) at standard resolution
  - `/vid_framebuffer_palette 1` to use shader gamma/contrast etc (hardware is fastest & still default)
  - `/vid_framebuffer_hdr 1` to use float render buffer (required for `/vid_framebuffer_hdr_*` options)
  - `/r_fx_geometry 1` outlines the world based on surface normals, not surfaces.
- Modern OpenGL (GLSL)
  - `/vid_renderer 1` to enable in multi-renderer builds
  - `/vid_gl_core_profile 1` if you need/want a core profile.  Performance difference will vary per system/driver.
  - `/r_dynamic 2` to move surface lighting to GPU (cheapest 'hardware-lighting' possible, but quick for dm maps)
  - Seamless turb surface rendering
  - Expect delay when starting map, as textures/models are processed
  - Luma/skybox textures will be resized on load as required
- 'Classic' OpenGL (`/vid_renderer 0` in multi-renderer build)
  - All OpenGL state cached to reduce redundant state changes
  - Uses VBOs & batch draw calls (opengl 2.0-ish)
  - Lightmap rendering in OpenGL 1.1 fixed
  - Can use framebuffers for software gamma/palette changes (depends on extensions)
  - Skyboxes will render using cubemaps if using OpenGL 3.2+ (minor performance boost, depends on number of sky surfaces)
  - `/r_program_XXX` controls if the program will try to use GLSL for that particular aspect of rendering
  - `/r_fastturb 0` rendering performance improved
  - `/r_drawflat 2` and `/r_drawflat 3` rendering performance improved (drawflat surfaces have their own chain)
  - `/r_bloom` & `/r_drawviewmodel` used in combination greatly reduced bloom effect (advise setting `/r_bloom_alpha` lower if you now find effect overpowering). (SF#296,SF#297,SF#393)
  - `/gl_ext_arb_texture_non_power_of_two` removed (use `-nonpot` command-line option instead)
  - `/gl_maxtmu2` removed (use `-maxtmu2` instead)
- Other changes
  - `/cl_bob` affects weapon again, not just the player's head
  - `/cl_bobhead` allows `/cl_bob` settings to **only** affect the weapon model and not the player's head
  - `/gl_simpleitems_orientation 2`: simple items stay upright when camera is affected by rollangle

### Documentation
- Macros are explicitly enumerated, and have their own documentation.json file
- Command-line parameters are explicitly enumerated, and have their own documentation.json file
- Client can generate its own documentation.json files, including default values for variables

### General changes
- Bugfix: players no longer highlighted as sending VOIP when `-nosound` command-line option used
- Bugfix: invalid demo_dir caused demo browser to be empty & locked (SF#283 - related bug, anyway)
- Bugfix: files are identified as archive if extension is not lower-case (SF#313)
- Bugfix: healthdamage/armordamage reset when point of view changes (SF#146)
- Bugfix: maps with sky texture named "SKY*" instead of "sky*" could lead to memory corruption
- Bugfix: on OSX, processor information string was left pointing to stack-allocated memory
- Bugfix: `/cl_fakeshaft` is disabled during intermission, so auto-screenshots should no longer have an LG beam
- Teamfortress: block r_skincolormode working on TF or other server with skin/color forcing enabled
- Teamfortress: color in scoreboard is set based on team name if on TF server (team renaming not supported)
- The hunk is no longer used to store skins & models, only maps (no cached data being flushed and reloaded)
- In competitive rulesets, logging console to disk is disabled during match
- Server: PR1 strings overflowing integer offset stored in lookup table with negative integer instead (Windows 64-bit)
- Some commands have been renamed dev_* and are only available when running with `-dev` on command line (req by dopeskillz)
- Filesystem startup no longer lists .pak files being opened, lists `/path` after completion instead (SF#354)
- `/file_browser_sort_archives` added - if set, archives are still at top of list, but sorted in same way files are (SF#273)
- `/cl_startupdemo` shouldn't conflict with `/cl_onload` options (SF#467,SF#468)
- `/cl_clock_format` can be changed when connected to server and has same values/logic as `/hud_clock_format`
- `/scr_shownick_order` can be changed when connected to server
- `/timedemo` automatically raises console as demo starts
- Context creation changed, if context can't be created msaa/24bit-depth/hw-accel/srgb then various fallbacks attempted (previously only msaa), rather than falling back directly to software rendering
- cvars limited by ruleset max/min values weren't checked during application-startup
- toggling console exits hud_editor mode
- default.cfg executes on config load/reset (default.cfg in id1/pak0.pak & nQuake is ignored)

### Changeover issues/notes

- If you are using particle explosions/effects and notice small artifacts around the smoke etc, check your particlefont.png and make sure it doesn't have any stray non-alpha pixels around 64-pixel boundaries.  ezQuake 3.5 takes the particle font and splits it into component textures, so any errors around the edges will be more visible (reported with config set to `/r_explosionType 1`, `/gl_part_explosions 1`)


## Upgrading from 2.2 to 3.0

### Video settings

3.0 now runs at the desktop resolution by default - you can toggle this behaviour with `/vid_usedesktopres`

Aspect ratios no longer need to be explicitly set.  Set `/vid_conwidth` and `/vid_conheight` to 0 and your current resolution will be scaled by `/vid_conscale` instead.

ezQuake 2 required different `/fov` settings for [different monitors/resolutions](http://wiki.quakeworld.nu/Widescreen_Guide). ezQuake 3 does not, use the same fov value no matter what resolution/monitor, it will look the same, it also supports 16:9 properly.  See below for a longer description of fov changes.

Windowed-mode console variables are now in `/vid_win_width`, `/vid_win_height`, `/vid_win_displaynumber`, to stop them independent of fullscreen settings.

### Input settings

`/in_mouse` has been removed, replaced with a simple switch, `/in_raw`.  Windows users using `/in_mouse 2/3` in ezQuake 2, nothing should need to be done.

If you are used to `/in_mouse 1` on Windows, then set `/in_raw 0`, although we recommend keeping it on for the best input handling.

### Keyboard mapping

3.0 uses the same keyboard mapping as your operating system.  `/in_builtinkeymap 1` will return standard behaviour (Quake/US keyboard layout)

If writing a config file where the key is important rather than the physical button ('r' to toggle radar, for instance), then set `/con_bindphysical 0` at the top of the file.

## General Issues

### Audio crackling

ezQuake tries to give you the lowest latency sound possible.  This is achieved by provided smaller blocks of data at a higher rate.  If your system can't keep up with the demand for audio, you might hear crackling or popping noises.  There are a couple of settings you can change to find the right settings for your system.

- `/s_desiredsamples` - this suggests an amount of data the sound card is sent with each request.  The larger the buffer the less chance there is of hearing crackling/popping noises, but also the higher the latency before a new sound will start.
- `/s_khz` - if you don't want an increase in latency, you can try lowering the quality of the sound instead.  The lower the sound quality, the lower the value of `/s_desiredsamples` can be.

> If you are familiar with older versions of the client, `/s_desiredsamples` is roughly equivalent to `s_mixahead`, which has been removed.

### Config files

Quake has used configuration files for twenty years now, and over time the rules have become somewhat complex.  `/exec config.cfg` may not do what you expect.

ezQuake will look for configuration files in the following directories:

- The game directory
- User profile directory (typically Documents/ezquake/ in Windows, or ~/.ezquake/ in Linux)
- qw folder
- ezquake folder
- id1 folder

> If the game directory is already added (because it is "qw" or "id1" for example) then first test (for the game directory) is skipped

The `/path` command will list all the files & folders being searched, in order.  To see where a particular file is being loaded from, use the `/locate` command.

> If you are working with a setup that puts default configs and media in the qw folder (such as nQuake) we recommend enabling the option "Save to Profile Dir" (either through the Config menu, or with `/cfg_use_home 1`).  Otherwise the pak files in qw/ directory will override configs saved in ezquake/, and you may encounter confusing behaviour.

### File search order

Within each of these folders, packaged files are searched in order: .wad, .pk4, .pk3, then .pak.  All files named pakX are added, where X is increasing in number starting from 0.  Then ezQuake looks for a pak.lst file.  If it finds one, all listed files are added, otherwise ezQuake will add all valid files in the folder.  (This means an empty pak.lst file will cause no custom pak files to be added).

When processing the pak.lst file, any pak/pk3 files starting "soft" will be ignored.  Files starting "soft" were intended to be loaded when using the software renderer only.  ezQuake is OpenGL only now, but still keeps this rule.

> If you have multiple .pk3 paks with conflicting files, use a pak.lst file to specify the order.  They should be listed in ascending priority (i.e. the last entry will be search first)

### Saved configuration files

ezQuake has the option of making config files much smaller, with the `/cfg_save_unchanged` option.  When set to 0, the current value is checked against the *ezQuake* default.  If it matches, the value is not written out to the file, as it is the default anyway.  This works well, if no other package has modified the default already - the value may have already changed from the ezQuake default, so ezQuake won't include it in your config file, and you won't be able to use the config file to restore the system back to its desired state.

> If you are working with a setup that executes other configurations before yours (such as nQuake), consider setting `/cfg_save_unchanged 1`.

### Fov doesn't look the same as ezQuake 2.2

This is on purpose (and correct) - ezQuake 2.2 did not handle all monitor resolutions correctly and crucially, `/vid_wideaspect` always assumed the aspect ratio was 16:10, even on a 16:9 monitor.

The way older clients interpretted the `/fov` variable was to set the horizontal-fov, then calculate the vertical-fov based on a 4:3 ratio.  This means that as the resolution becomes 'wider', the `/fov` value needed to be increased accordingly.  2.2 added the `/vid_wideaspect` cvar to do this automatically, adjusting `/fov` and `/vid_conheight` values from a 4:3 ratio to the 16:10 equivalents.

ezQuake 3.0 lets you always specify `/fov` in 4:3 format, and it calculates the equivalent height-fov for a 4:3 screen.  It then looks at your current aspect ratio (`/vid_conwidth` & `/vid_conheight` are taken into account) and calculates the appropriate horizontal

If upgrading from 2.2, you will need to change `/fov` to its 4:3 equivalent.  If you were using `/vid_wideaspect` in 2.2, setting `/fov` would give you a series of messages like this:
```
]/fov 120
]/vid_conwidth 640
]/vid_conheight 480
]/vid_wideaspect 1
vid_wideaspect enabled - fov recalculated to 128.613235
vid_wideaspect enabled - conheight recalculated to 400
```

ezQuake 2.2 would over-ride what you manually set the values to, and replace them with 16:10 equivalents.  If you then saved your config through ezQuake, it would write out these values.  ezQuake 3.0 will be interpretting this `/fov` as a 4:3 value, and probably not giving you the view you want.  To work your way back to a 4:3 fov, use the `/calc_fov` command in 3.0, which will tell you the equivalent 4:3 `/fov` value to use.  If you are on 16:10 resolution, you should now be seeing what you saw before.  If on a 16:9 resolution, it might still look a little different, but this is because 3.0 is showing you the correct aspect ratio, and not forcing 16:10.

#### Did that, fov still doesn't look the same as 2.2

It's possible you may have to run `/calc_fov` twice, that is to feed the value it gives you not into `/fov`, but back into `/calc_fov` once more.  If saving your config in ezQuake 2.2 with `/vid_wideaspect` enabled, it would save this setting before saving the 16:10 `fov/con_height` values.  When executing the configuration then, it would interpret these 16:10 values as 4:3 and effectively run the process twice.  For example, if we continue from the above example:

```
]/cfg_save ezquake2
Saving configuration to C:\Users\...\ezquake2.cfg
]/vid_wideaspect 0
]/exec ezquake2
Execing C:\Users\...\ezquake2.cfg
vid_wideaspect enabled - fov recalculated to 128.613235
vid_wideaspect enabled - conheight recalculated to 333
vid_wideaspect enabled - fov recalculated to 136.304581
```

So to get back to a 4:3 fov for 3.0, we need to run:

```
]/calc_fov 136.304581
Use fov 129 (128.613235)
]/calc_fov 128.613235
Use fov 120 (120.000000)
```

If you have been used to playing this way for many years, going back to the correct aspect ratio might take a bit of getting used to.

#### Viewsize affects fov

In 3.0, reducing the viewsize could lead to horizontal-fov getting larger as the aspect ratio increased.  This was a bug, fixed in v3.0.1

### Key binds

In 2.2, `/cl_keypad` could be set to 0, which meant all keypad buttons were remapped to standard buttons.  This has been removed, so affected configurations need to be changed:

```
]/bind kp_enter X       // instead of bind enter X
]/bind kp_minus X       // instead of bind - X
```
etc.  The names to use when binding to the keypad buttons are:

```
Num Lock: kp_numlck or kp_numlock
/       : kp_slash, kp_divide
*       : kp_star, kp_multiply
-       : kp_minus
+       : kp_plus
home/7  : kp_home, kp_7
up/8    : kp_uparrow, kp_8
pgup/9  : kp_pgup, kp_9
left/4  : kp_leftarrow, kp_4
5       : kp_5
right/6 : kp_rightarrow, kp_6
end/1   : kp_end, kp_1
down/2  : kp_downarrow, kp_2
pgdwn/3 : kp_pgdn, kp_3
ins/0   : kp_ins, kp_0
del/.   : kp_del
enter   : kp_enter
```

`/cl_keypad` has been reinstated as of v3.0.1

