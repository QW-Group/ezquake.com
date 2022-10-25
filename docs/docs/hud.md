---
---

# Heads up display (HUD)

## HUD Editor

You can customize your Head Up Display either by typing customization commands into the console, loading existing HUD configs, or, in the most straight-forward
way, by using the in-built HUD Editor.

To load the HUD Editor, simply type `hud_editor` into the console. A screen describing what keys represent what edit actions will appear and by simple drag&drop
system you can move the HUD elements on your screen, resize and align them.

## HUD Planmode

Enable planmode using the command `hud_planmode 1`.

This will draw all items as if you have them. For example you can move the quad icon to the desired position, because you see this
icon even if you don't have quad at the moment.

## Example layouts

You can also load some existing HUD setups. Type one of the following lines into the console to load example HUD configurations:

* `/exec cfg/hud_berzerk`
* `/exec cfg/hud_corner`
* `/exec cfg/hud_dobbz`
* `/exec cfg/hud_empezar`
* `/exec cfg/hud_murdoc`
* `/exec cfg/hud_vleesh`

ezQuake allows you to modify your HUD as you wish, you can choose which HUD elements to draw, where to draw them, how to draw them and how large to draw them.

You can either use your keyboard to move, hide and show, align, group, scale and change style of HUD elements on your screen or you can learn using commands to
customize the HUD.

## Customizing with keyboard

`/exec cfg/ezhud`

A list of instructions now appears on screen / in console. You should notice that you can select hud elements using your [ and ] keys, move them using arrow
keys, and perform other actions using keys on the numpad, <kbd>page up</kbd>, <kbd>page down</kbd>, <kbd>home</kbd>, <kbd>end</kbd>, <kbd>insert</kbd>, <kbd>
delete</kbd>, <kbd>space</kbd>, <kbd>enter</kbd>, <kbd>z</kbd>, <kbd>x</kbd>, <kbd>c</kbd>, <kbd>v</kbd>, combine some keys with <kbd>shift</kbd>, and finally
save your work by pressing <kbd>U</kbd> key.

You get your config saved into the `./ezquake/configs` directory. Its full name will be printed on the screen.

## Customizing with commands

Some specific HUD elements have specific properties which you cannot change using the way described above and you might also want to know all the potential this
client offers you in HUD scripting. Here you will learn how to customize the HUD using commands you type into console or configuration files.

To enable new HUD, you have to type `/scr_newhud 1` - which disables FuhQuake-originated HUD. If you're missing some features of FuhQuake HUD, you can combine
those two HUDs using `/scr_newhud 2`.

This flexibility comes at a price though, it usually takes a while to understand how to work with the HUD system, but once you've managed that, it will be great
fun to design your very own Quake HUD.

Check the examples throughout this document, if you have any problems with understanding the HUD system.

## What is a HUD element?

A HUD element is a single 2D element, that can be drawn on-screen, moved to different positions, aligned etc. For most HUD elements it's also possible to
display a frame in the background behind them.

Every HUD element has a name which is a string, like "netgraph", "fps" etc.. You use that name in HUD commands, like "show netgraph". The HUD element used
remembers all its settings (its properties) as variables, which are named hud_<hud_name>_<property_name>.

- `hud_netgraph_frame` - Display the current setting for the netgraph frame
- `hud_ping_period` - Determine how often the ping display will be updated.

Changing a property of an element is simple. Obviously, a simple way to do this is changing the appropriate variable, however there is a more convenient way:
try typing the element name at console, like this:
netgraph [ENTER]

You will see some infos about netgraph and a list of its properties with its current values. If you want to change some - it's easy:

- `/netgraph frame 0` - Disable the background graphic drawn behind the netgraph.
- `/netgraph show 0` - Disable that the netgraph is displayed (same as `hide netgraph`).

It's possible to use TAB completion for HUD properties, so if you type "netgraph inf" and press [TAB], it should complete. All variables for HUD elements (
hud_*_*) are hidden.

Some properties (like "show") are controlled by commands (like `show` and `hide`). Some of them (those for setting element position) will not have a effect if
you change them directly by variables. If you do so and you see no change, try the "hud_recalculate" command.

## Showing and hiding elements

To show a certain HUD element, use the `show` command with the element name as a parameter. Giving no parameters will display a list of all HUD elements with
their current status. There is a special parameter "all" which you can use to show all elements.

**Examples**

* `/show netgraph` - Show the netgraph.
* `/show fps` - Show your current FPS.
* `/show` - This will print a list of all HUD elements on the console as well as their current settings.
* `/show all` - Show all HUD elements.

The opposite to `show` is the command `hide`, which obviously hides the specified HUD element. The current status is remembered as a `show` property, so
typing `show netgraph` will have the same effect as typing `netgraph show 1`.

## Moving HUD elements

When you want to move a certain HUD element, first you have to decide what screen area it occupies, the command used for placing a HUD element
is: `place <element-name> <where-to-place>`.

**Possible places**

* screen - visible part of the screen
* view - view area (depends on viewsize variable)
* top - area above status bar
* sbar - status bar area (health bar + inventory bar, no free space after sbar, if you play at higher res)
* ibar - inventory bar (upper part of sbar)
* hbar - health bar (lower part of sbar)
* sfree - free area after status bar (if res > 320 or hud_sbar_size changed)
* ifree - free area after inventory bar
* hfree - free area after health bar

**Examples**

* `/place netgraph screen` - place the netgraph on the screen
* `/place fps top` - place the fps in the area above the status bar
* `/place health hfree` - place te health in the free area next to the health bar

If you have a place for your favorite element, align it to some edges. The command is `align <element-name> <X-alignment> <Y-alignment>`.

## X-alignment

* left - left edge of area chosen by "place"
* center - center
* right - right area
* before - explained later in this document
* after - explained later in this document

## Y-alignment

* top
* center
* bottom
* console - below console (like clock by default)
* before (explained later in this document)
* after (explained later in this document)

Examples:

* `/align netgraph left top` - left upper corner
* `/align fps right bottom` - right lower corner

Finally, if the element position still does not match your preferences, you can fine-tune it by using the command `move <element_name> <x_offset> <y_offset>`.
Offsets can be either negative or positive. Setting a positive X-offset moves the element to the right, and a positive Y-offset moves the element to the bottom.

Examples:

* `/move netgraph 2 2` - move the netgraph 2 pixels right and 2 pixels down
* `/move fps -10 5` - move the FPS 10 pixels left and 5 pixels down

Note that your element will not be drawn, if you locate it off the screen, even partially.

All those commands ("place", "align", "move") can be used without parameters, (print help then) or with on parameter - HUD element name. Then current values are
printed.

## Relative positioning

You can align some elements relative to other elements. First you have to decide, if the element that you are locating now (element B) is to be positioned
inside another element (element A) or outside it.

If inside do `/place A @B`
If outside do `/place A B`

Examples:

* `/place fps @net`
* `/place health face`
* `/place iammo health`
* `/place ammo iammo`

Then you have to align it. If you want to place it outside, you have some additional alignments - before and after.

Examples:

* `/place health after top`
* `/place iammo after top`
* `/place ammo after top`

and you have a nice chain combined of health, armor and its icons.

The difference between inside and outside placing can easily be seen if you add a frame to your elements and enlarge them (for example by using frame 2).

## Frames

Frame is a regular property, it differs a little because every HUD element can have a frame. Values for frame property are:
0 no frame
(0..1)    transparent frame, lower number means more transparency
1 black frame
2 a box like that for netgraph

Examples:

* `/net frame 2` - add frame for network statistics
* `/netgraph frame 0` - make netgraph more useful
* `/fps frame 0.6` - make FPS more readable

## Properties

Every element has its own properties. You can check them, by simply typing the element name in console.
Some common properties are described below, which affect your inventory elements (guns, health etc):

* `align` - used for numbers (health, armor etc..) and determines how they should be aligned
* `digits` - used for numbers and specify how many digits they should display, for example to save space, you can have your ammo printed only with two digits,
  it will
  always show 99 if is more than 100
* `frame` - You can set the opacity of background of current element where 0 equals transparent background and 1 is solid background.
* `scale` - This is mostly for GL users and currently it doesn't work in the software renderer. This lets you change the size of an element, for example you can
  make
  health 2 times bigger. With scale you can make a HUD that looks like in 320x200 (big numbers) and still have -width 640 without conwidth, so your console
  holds more text.
* `style` - This always changes the look of the element, styles are different, depending on the element type. Usually there is one style which, when enabled,
  enables
  text-mode look of element (like gun6 is "gl", health level with small text etc.). Style values are cardinal numbers (0, 1, ...).
* `wide` - only used with "gun" and "gun8" and affects style of lightning gun icon

Grouping elements have only two properties (width and height), they should be self-explanatory.

## Variables

See the [HUD variable reference](./settings/hud/#mqwcl-hud) for all HUD settings.
