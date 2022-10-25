---
---

# Particles

## New particle system

The following variables use the new visually enhanced particles when set to 1 and use the old system when set to 0. All of them default to 0.

```
gl_part_explosions    used for explosions.
gl_part_trails        used for (rocket etc) trails.
gl_part_spikes        used for spikes (nailgun etc).
gl_part_gunshots      used for gunshot (etc) effects.
gl_part_blood         used for blood effects.
gl_part_telesplash    used for teleport splashes.
gl_part_blobs         used for blob explosions (EMP's).
gl_part_lavasplas     used for lava splashes (Spy Gren).
gl_part_inferno       used for pyro flames in TF.
```

The following variables control the behaviour of the new particle effects. They do not effect the old particle effects.

```
gl_bounceparticles    whether sparks rebound off walls. Bouncing particles look nicer, but may eat up CPU.
gl_clipparticles      setting this will limit the number of blended particles close to you (fps benefit)
```

The particle engine has evolved from the QMB particle engine. QMB was a quakenet (not quakeworld) quake engine developed by DrLabMan. (website no longer
available)

## FAQ

#### Q1. What are Blop Explosions and Lava Splash?

A1. These are really only used in teamfortress. Blob explosions are what happens when an EMP grenade explodes (and when a spy grenade first explodes).
LavaSplash is the red stuff a spy's gas grenade creates. LavaSplash also happens sometimes in dm when the map ends.

#### Q2. I lose a lot of FPS with when using the new QMB effects. WTF?

A2. Tough. Good things come at a price.

#### Q3. The new effects don't look so good. WTF?

A3. Make sure you have ezquake/pak0.pak (should have been installed when you installed the .exe's).

#### Q4. What about axe effects ?

A4. There's a lot of effects in quakeworld, especially when you consider custom mods like teamfortress. Hence it is impossible to have a variable for
every effect. Things which do not have variable (like axe effects) are controlled by the gl_part_gunshots variable.

#### Q5. I have set the gl_part_* variables to 1 but I still get the old particles. WTF?

A5. Make sure you've installed ezquake/pak0.pak from the zip file/installer you downloaded from the web. Inside that pak file are some particle textures
that are important.

[external-textures]: external-textures.md
