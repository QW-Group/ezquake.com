---
---

# Server Browser

ezQuake's server browser allows you to use master servers, source files,
add servers to lists manually, search for specific servers or players, sort
them by several criteria and supports Qizmo when connecting to servers (you connect to a Qizmo and then choose a server to connect to in the ezQuake server
browser and ezQuake will automatically use that Qizmo if you set it up to do so).

## Sources

The Server Browser uses the `sources.txt` file located in `ezquake/sb/` directory.
Files containing their own server lists must be in this directory as well. The
format of a source file is as follows:

> \<type\> "\<name\>" \<address\>

e.g:
> master "Poland" 150.254.66.120:27000

Do not put quotes around the 1st or 3rd parameters.

## Adding a master server

* Main menu \> Server Browser
* Sources tab
* Press [INS] to insert a new source
* Fill in the details, setting the type to "master" and then accept

The new source will now be saved in sources.txt

## Adding a custom list of servers

To add a custom list of servers, you must create a file source, populated with the servers you want included.

* Create a text file under ./ezquake/sb with one line per server address (remember the :port)
* Save the file and close it
* Main menu \> Server Browser
* Sources tab
* Press [INS] to insert a new source
* Fill in the details, setting the type to "file" and then accept

The new source will now be saved in sources.txt

## Bookmarking servers

In the Server Browser there is also a sourcetype DUMMY called UNBOUND. When
adding servers from console (using command /addserver ip:port) these will be
placed into this temporary source. You can use this sourcetype for bookmarking.

Example:

> You are playing on a server and people want to change server. They give you an
> unknown ip and you want to add it for later use. You use the command "addserver
> ip:port" and the server will be placed in source-type "DUMMY - TEMP" for
> bookmarking.

## Moving servers between source-files

When looking at the serverinfo you can move a server to another source-file by
clicking on the "sources" menu-flag.

Example:

> You have your private serverlist called serverlist.txt, add that as file under
> sources. You update a master server and find a server you want on your private
> list. Press [ENTER] on the server and go to "source". Highlight "serverlist" and
> and press [ESC]. Go to sources and highlight only your own serverlist. Now the
> server will be updated on your list.

## How to update sources

In ezQuake select the Server Browser menu, switch to the "sources" column with the
right-arrow key, press [SPACE] to update the sources.

## How to scan servers

In ezQuake select the Server Browser menu, switch to the "servers" column and
press [SPACE] to scan the servers.

## Columns available in servers/players list

* 1 - server name (hostinfo)
* 2 - server address (ip:port)
* 3 - ping to the server
* 4 - gamedir (mod played)
* 5 - map currently played
* 6 - number of players and max number of players
* 7 - fraglimit
* 8 - timelimit
* 9 - player name (only in "players" list)

## Keyboard shortcuts

In "servers" list:

- letters, numbers - search server with given name

* [ALT] + number - sort the list by given column
* [TAB] - go to next tab
* [ENTER] - first time you press [ENTER] it will open the serverinfo
  window showing the server and players, second time you
  press [ENTER] you will enter the server
* [J], [P] - join server (connect as player)
* [O], [S], [CTRL]+[ENTER] - observe (connect as spectator)
* [R] - refresh current server info
* [SPACE] - get pings and infos
* [CTRL] + [1]-[8] - enable/disable this column (check "Columns available in
  servers/players list" above for an explanation of each
  number)
* [C] - copy the servername with ip:port, so you can paste it in
  in qw or other apps with [CTRL]+[V]
* [CTRL]+[C] - copy only ip:port, so you can paste it in in qw or other
  apps with [CTRL]+[V] to clipboard
* [V] - send servername with ip:port to console (say)
* [CTRL]+[V] - send servername with ip:port to console (say_team)
* [N], [INS] - add new server to "unbound" source (as with "addserver"
  console command)

In "sources" list:

* [ENTER] - toggle source, move cursor down
* []] - toggle source
* [+], [=] - select all sources
* [-] - deselect all sources
* [*] - invert selection
* [1]-[3] - sort by this column (check "Columns available in
  servers/players list" above for an explanation of each
  number)
* [U] - update selected source (get servers)
* [CTRL]+[SPACE] - update all sources
* [SPACE] - update sources, that were not updates recently (period
  specified by "sb_sourcevalidity")
* [N], [INS] - add sources
* [D], [DEL] - delete source (better backup sources first..)

In "players" list:

* [ALT] + character - search players by name
* [TAB] - go to players list, to corresponding server
* [ENTER] - first time you press [ENTER] it will open the serverinfo
  window showing the server and players, second time you
  press it you will enter the server
* [J], [P] - join server (connect as player)
* [O], [S] - observe (connect as spectator)
* [SPACE] - get pings and infos
* [1]-[9] - sort by this column (check "Columns available in
  servers/players list" above for an explanation of each
  number)
* [CTRL] + [1]-[9] - enable/disable this column (check "Columns available in
  servers/players list" above for an explanation of each
  number)
* [C] - copy the servername with ip:port, so you can paste it in in
  qw or other apps with [CTRL]+[V]
* [CTRL]+[C] - copy only ip:port, so you can paste it in in qw or other
  apps with [CTRL]+[V] to clipboard
* [V] - send servername with ip:port to console (say)
* [CTRL]+[V] - send servername with ip:port to console (say_team)
  Server info window:
* [ENTER] - join server (connect as player)
* [CTRL]+[ENTER] - observe (connect as spectator)
* [T] - test connection to selected server (netgraph will be shown)
* [PGUP] / [PGDN] - previous/next server/player
* [BACKSPACE], [ESC] - back to servers or players list
* [J], [P] - join server (connect as player)
* [O], [S],
* [CTRL]+[ENTER] - observe (connect as spectator)
* [C] - copy the servername with ip:port, so you can paste it in in
  qw or other apps with [CTRL]+[V]
* [CTRL]+[C] - copy only ip:port, so you can paste it in in qw or other
  apps with [CTRL]+[V] to clipboard
* [V] - send servername with ip:port to console (say)
* [CTRL]+[V] - send servername with ip:port to console (say_team)

## Commands

`/addserver <ip:port>`<br/>
Add a server to the UNBOUND source. This can be used to quickly bookmark servers.

`/menu_serverbrowser`<br/>
Open the the server browser menu. This is the same as accessing it via the main menu, but you can bind this to a key.

## Variables

Please refer to [server browser variables reference](/docs/settings/multiplayer#server-browser) for a list of related variables.
