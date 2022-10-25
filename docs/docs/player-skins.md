---
outline: [2,3]
---

# Player Skins

ezQuake uses very wide range of skin rules and this page should explain how the skin for each player is chosen.

## What is a player skin?

Textures used on the players in the game are called skins.

Each player has own "skin" setting represented by the variable in every QuakeWorld client. Also each player has own set of textures stored in `quake/qw/skins`
directory. From this directory the client reads the textures that it will apply on players according to skin rules.

## Commands

* `/showskins` - Lists skins assigned to each player
* `/skins` - Free the skins cache, load or download them again
* `/baseskin` - Skin that will be used on the player if no rules are found
* `/skin` - The name of your own skin
* `/noskins` - Allows you to turn off skins rules completely or when set to 2, disallow downloading of skins from the server
* `/allskins` - Sets one skin to all the players
* `/cl_name_as_skin` - Use player's name or player's id number to load the skin.
* `/gl_nocolors` - Allows to set same 24-bit texture on all players, regardless of color choice

## Skin Forcing

Force skins to be used for teammates and enemies.

### Powerup skins

You can distinguish players that carry quad or pent using `enemyquadskin`, `enemypentskin`, `teamquadskin` and `teampentskin`.

Also special case is a player that carries both powerups at the same time. For that case use `enemybothskin` and `teambothskin` settings.

These settings can be also found in the Options menu at the Player tab.

### Color forcing

Use variables `r_enemyskincolor` `r_teamskincolor` `r_skincolormode` `teamcolor` and `enemycolor` to force colors on your team/enemy players.

### Team and enemy skin forcing

Because using different skin for every enemy is a subject of current QuakeWorld discussions, the possibility to use different skin on each enemy is limited and
controled.
Limitation: This feature will only work if the very same Qizmo feature works - that is - only if server allows it in it's FPD setting.
Control: If you use this feature, it will be reported in `f_skins` response and also auto-announced every time you change it.

This feature can be enabled using the `/enemyforceskins` variable.

For example by setting `/teamforceskins 1` and your teammate is ". ParadokS", he will get "_ ParadokS" skin name assigned since the algorithm replaces some
characters with underscore so that you get proper file name.

By setting `enemyforceskin 3`, your enemies in a 4on4 game will have skins `e1`, `e2`, `e3`, `e4`. That means you need to have e1.pcx, e2.pcx, ... (or png)
files in your skins directory. Your teammates will get the same skins assignments if they use `enemyforceskins 3`, so you can share "red guy has RL!" info in
your team. However if you play the very same team another time on another server, it's players will get different permutation of "e1", ..., "e4" skins assigned,
so "the red guy" can be someone else the next time.

These rules have lower priority then basic skin forcing. Therefore you need to turn `/teamskin` and `/enemyskin` off if you want to use those.
