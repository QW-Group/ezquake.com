---
---

# Independent Physics

The number of rendered frames per second (FPS) used to be limited in QuakeWorld by the server settings.
For example most QuakeWorld servers run at 77fps, so you couldn't have more than 77fps at the client.
In modern QuakeWorld clients this was changed by Tonik in his ZQuake client and by Spike in FTE QuakeWorld. In these clients your FPS can be independent on
server settings and this is usually called independent physics (see below).
ezQuake is based on Tonik's patch for independent physics, because it originated from his ZQuake client.

## Enabling independent physics

To enable independent physics use `/cl_independentPhysics 1` before connecting to the server.

Then you can change the amount of rendered FPS by cl_maxfps where e.g.

- `/cl_maxfps 0` = no limit (use as high FPS as your hardware performance allows)
- `/cl_maxfps 300` = limit the engine to 300 frames per second

Because independent physics can use full performance potential of your hardware, you might need to change client's priority so you don't get lags caused by lack
of CPU time for reading mouse and keyboard states. Either do this in menu in "client priority" or by setting `/sys_highpriority -1`

In case of any problem check the following variables:

- `/cl_nopred` - make sure it's 0 (default)
- `/cl_nolerp` - shoud be set to 0 (default). Most users get jerky gameplay when this is set to 1.
- `/cl_maxfps` - use a high value or 0. For LCD you might want to use a number that is a multiplication of your screen refresh rate. E.g. cl_maxfps 240 if your
  screen refresh rate is 120Hz.
- `/cl_physfps` - leave it at 0 (default). ezQuake will use the maximum amount of 'physics' fps allowed on the server.

While the engine keeps rendering the game at (preferably) high FPS it communicates with the server like it would have been using "standard" amount of FPS. You
can change this amount of fps using cl_physfps variable, e.g

- `/cl_physfps 0` = the client will use highest possible framerate that the server allows
- `/cl_physfps 77` = the client will communicate with the server with 77 FPS.

## Changed physics

One can think that the only advantage is smoother gameplay. It is certainly the main reason why many people use independent physics but there is also another
aspect why independent physics were made.

If you cannot achieve standard 77 FPS, your physics will be a little different. You may notice that if you try playing with `/cl_physfps 30` (or `/cl_maxfps 30`
when not using independent physics). Your jumps (and rocket-jumps) won't be that fast and high as with 77 FPS.

At least, don't forget that even independent physics don't bring you absolutely equal physics as if you'd have been using `/cl_maxfps 77`.
