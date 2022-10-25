---
---

# Voice Support

ezQuake contains in-game voice support, ported from FTEQW.

## Requirements

For full voice support you need the following:

* ezQuake 3.0.2, compiled with SDL 2.0.5
* Using a sound driver SDL 2.0.5 has recording support for (alsa, directsound, pulseaudio, winmm)
    * To pick your audio driver, execute `SET SDL_AUDIODRIVER=<driver>` before launching ezquake

Or:

* ezQuake 2 (2.1 stable or later)
* Windows OS (can listen but not send on other operating systems)
* libspeex.dll and libspeexdsp.dll in your Quake dir (where your client .exe is) for example
  from [here](http://downloads.xiph.org/releases/speex/speex-1.2beta3-win32.zip).

Also:

* connect to an server which supports voice comms (modern mvdsv & FTE servers)
* NOT connect via Qizmo

To be able to also send voice, set `/cl_voip_send 1`

This is the very basic setting after which you will need some fine-tuning of your microphone.

## Fine-tuning

There are two modes of sending the voice:

* Manual (push to talk)
    * You start sending your voice when you issue the `/+voip` command and stop sending
      your voice when you issue the `/-voip` command. Another option is to set `/cl_voip_send 2`
* Voice-activated
    * The client will automatically start sending the voice when you start talking,
      that is when the input signal from the microphone exceeds some minimum volume level.
      To enter this mode, make sure voip toggle is not active (type `/-voip` into the console)
      and set `/cl_voip_send 1`.

For start you will want to test your settings in the manual mode. Simply type `/+voip` into the
console for that. A volume meter should show at the left-bottom of your screen, suggesting you how
loud the signal from your microphone is. You can adjust this by `/cl_voip_micamp` variable.

If you cannot see any meter on your screen, it means that you either have old client version,
or you are connected to server without voice support, or you have connected via QWfwd or Qizmo,
or you are missing the speex libraries.

Finally, the most important setting for voice-activated mode is the threshold of the activation.
The threshold is controlled via the `/cl_voip_vad_threshhold` variable (note the double H).
Default value is 15, the lower the value is, the more sensitive the activation will be. So when
you set this variable to zero, voice will be always activated.

At last, the meter works in two modes - either it will be shown only when you are sending your voice,
in the other mode it will be shown permanently. The `/cl_voip_showmeter` variable toggles between
these modes. Use values 1 and 2 respectively.

The volume of the incoming voices can be adjusted with the `/s_raw_volume` variable.

## Server commands

Server commands let you control who hears your voice comms, and who , you can choose who your messages are sent to via `/cmd voicetarg` command.

Controlling who can hear you:

- `/cmd voicetarg all` - broadcast voice to all players
- `/cmd voicetag team` - send voice to team members only (default)
- `/cmd voicetarg <playerid>` - only send voice to a specific player
- `/cmd voicetarg nonmuted` - send voice to all, apart from those you've muted

Controlling who you hear:

- `/ignore_voip <userid | name>` - to get someone's userid, use the `/users` command
- `/unignore_voip <userid | name>` - stop ignoring someone's voip stream

These commands instruct the server to stop sending data, so cut down on data you receive. To turn off voice, use `/cl_voip_play 0`

## Variables

**Summary**

* `/cl_voip_capturingvol`
* `/cl_voip_micamp`
* `/cl_voip_play`
* `/cl_voip_send`
* `/cl_voip_showmeter`
* `/cl_voip_showmeter_x`
* `/cl_voip_showmeter_y`
* `/cl_voip_vad_delay`
* `/cl_voip_vad_threshhold`
* `/s_raw_volume`

See the [sound settings reference](./settings/sound/#voip) for all voice settings.
