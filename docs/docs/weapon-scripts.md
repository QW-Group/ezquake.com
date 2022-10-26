---
aside: false
---

# Weapon Scripts

In older QuakeWorld clients you had to write a script (longer series of bind and alias commands) that automatically hides a weapon when you don't use it.
Players do this because they don't want to give their best weapon to the enemy easily if they get killed.
That means when you press a button to select a weapon, it doesn't get immediately switched. That happens right before the moment you want to shoot it - your
current weapon gets switched with the desired weapon and you immediately shoot from it without any delay.
Also after the moment you shoot the weapon (and a delay for the kickback of the weapon to disappear) the script would instantly hide your weapon and switch to
some unimportant one - like Boomstick.

In ezQuake you don't need such scripts. Those two things described above can be done using two variables:

```
cl_weaponpreselect 1
cl_weaponhide 1
```

The first command will make your weapon selections be done "virtually". The second will hide the weapon after you shoot it and select an unimportant one (the
shotgun or the axe)

Example:

```
bind q "weapon 7"
bind mouse1 +attack
```

After you press [Q] button, your weapon doesn't get switched to rocket launcher (weapon number 7 in QuakeWorld). But after you press mouse1 (the left mouse
button), your weapon gets switched to rocketlauncher, a rocket gets fired and after the knockback disappears, your weapon will be switched back to the shotgun
or axe.

The "weapon" command also allows you to make a "best available weapon" selection for you.

Example:

```
bind q "weapon 7 5 3 2 1"
```

This will select best available weapon according to the order you denoted here. The first number is the number of the best weapon, the last is the number of the
worse weapon for you in that bind. That means, if you don't have rocket launcher (weapon no. 7) or you don't have any ammo for it (rockets, surprisingly), the
client will try the Super-Nailgun (weapon no. 5). Also if you don't have it or you don't have the ammo, it will try Super-Shotgun, Shotgun (called also
Boomstick) and in the end it will try the Axe. In QuakeWorld you usually have at least the Axe, so some selection will be made here. But if the command would
have been like weapon 7 6 then Rocket Launcher and Grenade Launcher would be tried out and if none of those are present, no weapon selection will be made.

This is also possible with the "impulse" command, but "impulse" command doesn't support weapon pre-selection! So users of older versions of the client might
want to change their bindings to weapon instead of old "impulse" command.

::: info Important!
Advanced weapon handling will never fully work if you keep using impulse commands in some places of your keyboard bindings configuration. You have to
replace them with weapon command everywhere.
:::
