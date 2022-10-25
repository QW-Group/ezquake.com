---
---

# Message filtering

Message filtering allows you to configure which messages that will be displayed.

## Server-side filtering

Some informational messages can be filtered server-side

* `/msg 0` - Receive all messages from server, including ammunition/backpack pickup notifications ("you got the rockets")
* `/msg 1` - Filter out pickup messages
* `/msg 2` - Filter out death messages. Note this will disable the tracker.
* `/msg 3` - Filter out all informational messages
* `/msg 4` - Receive no messages, including chat

## Client-side filtering

`/msg_filter` allows you to filter out messages based on very broad rules.

* `/msg_filter 0` - Display all messages sent by the server
* `/msg_filter 1` - Filters standard chat (mm1) and spectator messages
* `/msg_filter 2` - Filters mm2 messages
* `/msg_filter 3` - Filters mm1, mm2 and spec messages

It is also possible to keep messages in the console, but remove them from the notification area:

* `/con_fragmessages 0` - Don't print frag messages (the tracker will still function)
* `/con_fragmessages 2` - Hide frag messages from notification area, but keep them in console log_
* `/con_mm2_only 1` - When game is in progress, limit the notification area to teamplay-messages only

## Ignoring types of user

* `/ignore_qtv_chat 1` - Ignores chat messages originating from QTV
* `/ignore_qizmo_spec 1` - Ignores chat messages originating from Qizmo
* `/ignore_spec 1` - Ignores chat from all spectators, as long as you're a player
* `/ignore_spec 2` - Ignores chat from all spectators, even if you are also a specator
* `/ignore_team xyz` - Ignores all players on team xyz
* `/ignore_opponents 1` - Ignore chat messages from opponents, at all times
* `/ignore_opponents 2` - Ignore chat messages from opponents, during the game only

## Ignoring specific users

* `/ignore xyz` - Ignores chat from player xyz
* `/ignore_id id` - Ignores chat from player with userid *id* - visible through `/users` command
* `/ignore_voip player` - Ignores chat from player

