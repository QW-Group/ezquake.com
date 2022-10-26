---
---

# Teamplay Communication

## Messages

ezQuake comes with an in-built set of automated messages used for communication in teamplay modes. You can find those in the Options menu, where you can bind
them to your keys.

## Pointing

(this topic was ported quickly from old documentation and needs updated)

The following macros are available for teamplay messages:

```
$point / %x        item pointing to
$pointloc / %y     location of item pointing to
$pointatloc / %t   same as "%x at %y"
```

You use the "tp_point" command to specify what things you can point to. The usage is:

```
/tp_point <list of things you want to be able to point to>
```

Possible options are: "quad", "pent", "ring", "suit", "ra", "ya", "ga", "mh", "health", "lg", "rl", "gl", "sng", "ng", "ssg", "pack", "cells", "rockets", "
nails", "shells", "flag", "teammate", "enemy", "eyes", "sentry", "disp", "runes"

The following options are also available as shorthand:

```
powerups      "quad pent ring"
ammo          "cells shells rockets nails"
players       "enemy teammate eyes"
weapons       "sg ssg ng sng gl rl lg"
default       default settings.
all           everything.
```

Also you can use `/tp_point +item` to add an item to the point list.

Ex. `/tp_point +pent` adds pent to your point list. `/tp_point -item` removes an item from your point list.

You can use `/tp_name_*` to customise the names of things you point to.

#### Deathmatch Mode

In dm, you can't point to weapons if the deathmatch mode is 2,3 or 4 and you can't point to ammo if the deathmatch mode is 4. This is because pointing to such
items makes no sense in those deathmatch modes.
People Pointing

You can point to teammates, enemies and eyes.

If you point to an enemy it will identify him/her as "enemy" (or whatever is in `/tp_name_enemy`".

If you point to a teammate it will identify him/her as "teammate" or whatever is in `/tp_name_teammate`. One catch, if `/tp_name_teammate` is "" (this is
default) then it will use the player's name instead of "teammate" etc.

If you point to eyes it will identify him/her as "eyes" (or whatever is in `/tp_name_eyes`. You cannot tell if an eyes is a teammate or an enemy.

Also if the teammate/enemy/eyes has quad or pent, it will say "quaded enemy" or "quaded pented eyes" etc. You can use `/tp_name_quaded` and `/tp_name_pented` to
customise this.

#### Teamfortress Pointing

In teamfortress you can also point to dispensers and sentry guns.
The pointing does not distinguish between friendly and enemy sentry guns and dispensers.
Use `/tp_name_dispenser` and `/tp_name_sentry` to customise these names.

People pointing also works slightly differently in teamfortress.
You can point to all players in tf but you can never see their name
(even if they are a teammate). Their class however is displayed.
For example "enemy soldier" or "teammate demoman". You cannot use this
for spy detection. If you point to an enemy spy disguised as a demoman
on your team, then it will say "teammate demoman" and not "enemy spy".
