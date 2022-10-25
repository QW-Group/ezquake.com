---
aside: false
---

# Fakeshaft

The Lightning Gun fires 10 shots per second with 30 damage points each (300 damage points per second) in QuakeWorld.

In original QuakeWorld the rendered beam position was also updated only 10 times per second, according to where the last damage hit went.

By enabling fakeshaft feature, the shaft beam will not stay on the same position for the whole 100 miliseconds.
If you move your crosshair away from where the last shaft hit went, the shaft will try to come back to your current crosshair position by small steps, made by
linear interpolation.
If you use full fakeshaft, shaft beam will always point straight to the crosshair.

That means, by using this feature, you are less distracted by the old shaft beam position and you can concentrate to where you are actually aiming.
However you will kind of lose the visual information of where the last server-side position of your lightning gun beam.

It is a matter of personal preference as to what the 'best' value to use is. However on anti-lagged servers, the old `/cl_fakeshaft 0` setting may be
misleading.

* `/cl_fakeshaft 0` - Disable fakeshaft, classic Quake/QW
* `/cl_fakeshaft 0.5` - Enable 50% fakeshaft - the beam position will be half-way between last confirmed server position, and your current crosshair position
* `/cl_fakeshaft 1` - 100% fakeshaft - the last position from server is ignored, the beam always points at crosshair
* `/cl_fakeshaft 2`  - Special form of fakeshaft, specifically for antilag server. The beam will always point at your cursor position 2 frames previous.

To track what fakeshaft options other players are using, type `f_fakeshaft` into game chat.


