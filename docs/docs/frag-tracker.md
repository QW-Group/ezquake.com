---
aside: false
---

# Frag Tracker

The tracker allows you to view brief info about 'hot' fragging action going on in game, for example `Foobar is on killing spree, 10 frags in a row!`

You can also move frag messages out of usual notification area (and console) and view them in a more friendly readable way in a different place.

To enable it you have to have `fragfile.dat` in your `ezquake/` or `qw/` directory and have following variables set (type them into the console or into your qw
config):

```
/cl_parsefrags 1
/cl_loadfragfiles 1
/r_tracker_frags 2
```

The text resolution setting, `/con_width` must be set to at least 512.

`/r_tracker_frags` values.

* 0 (off) - Disable both streaks and custom frag messages
* 1 (default) - Enable brief frag info (who is on killing spree).
* 2 (custom frags) - Enable both brief frag info and custom frag messages.

You can turn off standard frag messages in console with:

* `/con_fragmessages 0` - Only display frag messages in the tracker, remove from console/nofify
* `/con_fragmessages 1` - Display frag messages in the tracker and also in console/notify
* `/con_fragmessages 2` - Display frag messages in the tracker and console, but remove from notify area

Other customization can be done with these variables.

* `/r_tracker_messages` - Changes total ammount of messages drawn in the extra window
* `/r_tracker_scale` - Sets the font size for the messages
* `/r_tracker_align_right` - Controls the alignment of the window
* `/r_tracker_x`, `/r_tracker_y` - Sets the placement of the extra frag messages window
* `/r_tracker_frame_color` - Sets the background color in "R G B A" (red, green, blue, alpha) format.
* `/r_tracker_time` - How long each message will stay on the screen before disappearing
* `/r_tracker_streaks` - Controls if killing sprees should be displayed
* `/r_tracker_flags` - Controls if actions related to the Capture The Flag mod should be displayed

The gender in killing spree messages will depend on the `/gender` cvar set by the player (this also requires server support)
