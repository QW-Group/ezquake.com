---
---

# Multiview

(this topic was ported quickly from old documentation and needs updated)

This client adds a multiview component to mvd playback. Up to four views can be displayed at once. Multiview support was implemented to this client by Oppy.

Note:

- only works with .mvd demos, qwd->mvd converted demos 'work' but not as intended as they are not true multiview demos.
- if you have an ATI card remember to use -maxtmu2 on command line as fuhquake + mvd have an issue without that parameter.

Enable multiview using the `/cl_multiview` cvar.  0 (off) and 1 (on, 1 display) seem similar but `/cl_multiview 1` will enable the multiview mini-hud.

## Controlling views

To control which player each view tracks, use `/track1`, `/track2`, etc command.  These commands take a userid (`/users` will give a list), a player name or 'off' as parameters.

To track a specific team, use `/trackteam` command, with the team number (1, 2 etc)

To track both points of view during a duel, we recommend the `/cl_mvinset` option and `/cl_multiview 2`.  This gives the point of the view of the main player being tracked, but also a smaller inset view in the corner showing the other point of view.

## Autotracking

#### MVD Autotracking

This feature allows you to sit on your lazy ass while watching a MultiView Demo (MVD) and let the client switch POVs to the best player for you. To tell the client who is THE BEST player, you have the possibility to specify an equation wich will then be evaluated for every player, giving the player a 'value'. During the playback the player with highest value will be tracked.

This value can be seen by using 'mvd_info 1' and 'mvd_info_setup %n %v' wich will show something like "Johnny_cz -6" :).

In the equation you are allowed to use the standard math operations +-/* and parentheses ().
Autotrack types

`/mvd_autotrack 1`

> This will get the current gametype and select one of the following:
> - `/mvd_autotrack_1on1`
> - `/mvd_autotrack_2on2`
> - `/mvd_autotrack_4on4`

`/mvd_autotrack 2`

> This will use mvd_autotrack_custom

`/mvd_autotrack 3`

> Only works in combination with cl_multiview. Then you can use different equation for each window using these variables:
> - `/mvd_multitrack_1` for viewport 1
> - `/mvd_multitrack_2` for viewport 2
> - `/mvd_multitrack_3` for viewport 3
> - `/mvd_multitrack_4` for viewport 4

#### Constants

You can specify constants used in your equations like 'value of Quad',
'value of Pent', 'value of Nailgun'.

> - `/mvd_autotrack_1on1_values` for mvd_autotrack_1on1
> - `/mvd_autotrack_2on2_values` for mvd_autotrack_2on2
> - `/mvd_autotrack_3on3_values` for mvd_autotrack_3on3
> - `/mvd_autotrack_4on4_values` for mvd_autotrack_4on4
> - `/mvd_autotrack_custom_values` for mvd_autotrack_custom
> - `/mvd_multitrack_1-4_values` for mvd_multitrack_1-4

All these mvd_autotrack_*_values variables consist of 14 numbers.
Each number is a value assigned to given item, armor or powerup according to this table:

- 1	Axe
- 2	Shotgun
- 3	Supershotgun
- 4	Nailgun
- 5	Supernailgun
- 6	Grenadelauncher
- 7	Rocketlauncher
- 8	Lightninggun
- 9	Green Armor
- 10 Yellow Armor
- 11 Red Armor
- 12 Ring Powerup
- 13 Quad Powerup
- 14 Pent Powerup

#### Example:

`/mvd_autotrack_1on1_values "0 1 2 1 2 4 6 6 0.5 0.3 1.3 50 200 2000"`

These constants are used in the %-variables. Example:

- %A - armortype value
> Example: you set Red Armor type value to 1.3 => %A will be 1.3 if the player has the Red Armor

%p - sum of all carried powerups values
> Example: Pent Value is 2000 and Quad value is 200 => %p will return 2200 if the player has both Quad and Pent.

%w - value of the best carried weapon
> The priority of the weapons is set via 'tp_weapon_order'

#### Variables

There are lots of variables available for you to be used with %. Most of these variables can be seen with 'mvd_status 1'.

#### Notes:

A run is from spawn to death.
For powerups run is from took to end/death.
An average run is a sum of all runs divided by the amount of runs.

- %a -  is the current amount of armor a player has
- %A	- is the value of the current armor type
- %c	- current run time
- %C	- current run frags
- %d	- current run teamfrags
- %f	- overall frags
- %F	- overall teamfrags
- %g	- deaths
- %h	- current amount of health
- %I(big i)	- taken Supershotguns
- %j	- taken Nailguns
- %J	- taken Supernailguns
- %k	- taken Grenadelaunchers
- %K	- dropped Grenadelaunchers (left in pack when player died)
- %l(small L)	- taken Rocketlaunchers
- %L	- dropped Rocketlaunchers
- %m	- taken Lightningguns
- %M	- dropped Lightningguns
- %n	- taken Megahealths
- %N	- taken green armors
- %o	- taken yellow armors
- %O	- taken red armors
- %p	- added powerupvalues player currently has
- %q	- Axe kills
- %Q	- Shotgun kills
- %r	- Supershotgun kills
- %R	- Nailgun kills
- %s	- Supernailgun kills
- %S	- Grenadelauncher kills
- %t	- Rocketlauncher kills
- %T	- Lightninggun kills
- %v	- average run time	
- %V	- average run frags
- %w	- average run teamfrags
- %W	- best weapon value
- %x	- taken Rings
- %y	- taken Quads
- %z	- taken Pents

#### Examples

- "%f" (This would just be the same as `/cl_hightrack 1`)
- "%f/(%g+2*%F)" (This divides player's frags by his teamfrags * 2 + his deaths giving you some kind of efficiency calculation for the player)

There are no limitations to how often you can use a value or how high you want to set the values or the static numbers in the algorythm. There is one limitation thats when the number is longer than 4096 digits but in that case mvd_autotrack would disable itself.
