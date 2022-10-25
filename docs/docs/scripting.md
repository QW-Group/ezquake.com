---
outline: [2,3]
---

# Scripting

## What is a script

Script is a piece of text your client understands. It means you can type that text into the console and after hitting [Enter] something happens.

**Example**: `/name superman`

That piece of text will change your nickname to superman and other players can see you as superman in the scoreboard, etc.

**Breakdown**

* Forward slash - This character tells your client that following text should be executed. Probably if you try to type only name superman in the console then
  the same thing will happen. That's because usualy (depends on your client settings) the client will first try to recognize if given text is a script. If this
  check is positive it will execute it and if the result is negative it will send that piece of text as a message to other players automatically.
* Variable - a console variable name. It contains your current nickname used in the game.
* Value - That's the value we want to be saved into variable name.

Since it's pretty boring to type long scripts containing many lines manually into console everytime,
we are able to store it in a file which can be loaded on our request. QuakeWorld scripts are usualy
stored in files with extension .cfg (which is not necessary) somewhere in your Quake directory.
For a start it's good idea to place your configs into `quake/id1/` subdirectory, so it can be e.g.:
`Quake\id1\myscript.cfg`.

Such file is usually called "config" (abbrevation of "configuration file") or simply "script".

In your client you can execute your script with command `/exec myscript.cfg`

It is common that there are two types of ".cfg" files used in QuakeWorld:

* Configs - Series of all variables assignments and key bindings. In those files players usually store their game configuration. You can save and load configs
  with commands cfg_save and cfg_load but this manual page is about something different:

* Script - List of some commands you want to be done instantly - e.g. change some keys bindings, change some of the graphic settings, create new advanced user
  commands.

## Commands

Among simple commands like `/quit` (which will shut down your client) there are commands with parameters. E.g.
`/demo_capture start 0:10 my.avi` will tell your client to start capturing new video file named "my.avi" and it will be 10 seconds long.

Note that there are special types of commands with characters + and - as a first character.
If you bind command with + to a key then the command will be executed when the key is pressed and corresponding command
but with - will be executed when the key is released.

You can create your own commands using command

```
alias new_command "command_definition"
```

Where command_definition is usually a string enclosed in quotes and it's a sequence of commands, user created commands and variables assignments separated by
semicolons (`;`).

```
alias redteam "team red; color 4 4; ready"
```

## Variables

Variables contain game settings. E.g. name contains your nickname, volume contains sound volume, etc.
By typing `/<variable_name>` in the console the client will show you what is current value of that variable.
E.g. `/name` will tell you what is your current nickname.

By typing `/<variable_name> <new_value>` you will change the value of given variable.
E.g. `/volume 0` will mute all game sounds.

## Common scripts

### Weapon scripts

If you want to make your life as a QW player easier, you can start by using a weapon script. What a weapon script does is that it selects the wanted weapon, and
if it doesn't exist, it chooses the best weapon available. When you've fired the weapon it switches to the Shotgun or the Axe (cannot be dropped in backpack) to
ensure that the enemy does not get a valuable weapon if he manages to kill you.

Example: this command will first try to select rocket launcher, then super-nailgun, then super-shotgun and if you don't have even this weapon it will choose
shotgun.

```
/impulse "7 5 3 2"
```

You can write all sorts of scripts, the only thing holding you back is your own imagination!

### Boomstick/Axe script

What about not giving away the powerful Rocket Launcher? When you get fragged by another player he will get the weapon which you had selected last. If you are
clever you would manually change to a weaker weapon before he kills you but you can make a script which does that for you in the heat of the battle.

```
alias +rl "impulse 7;+attack"
alias -rl "-attack;impulse 1"
bind mouse1 "+rl"
```

### Teamplay messages scripts

This client comes with an in-built set of automated messages used for communication in teamplay modes. You can find those in the Options menu, where you can
bind them to your keys.

Professional players use macros (see below) to create even more intelligent communication messages with the team. This manual will explain to you all the
scripting possibilities but won't tell you how should such config look. There's a teamplay messages config distributed along with ezQuake, you can find this and
other configs in the config dir in the git repository. Note that it's becoming very outdated nowadays, we recommend that you use the in-built messages.

## Advanced scripting

### User-created variables

You can create your own variables with command `/set <variable_name> <value>` and destroy them using `/unset <variable_name>`
You can of course check what the variable value is by typing it's name `/<variable_name>`
You can use the value of any variable using `$<variable_name>`, e.g: `/mp3_volume $volume` sets the sound volume of mp3 player to
same level as the game volume, equals to `/set mp3_volume $volume`

The `/set_tp` command creates a teamplay protected variable. That means you can use such variable only to
script your custom teamplay messages. The difference from set command is that you cannot use set in
combination with teamplay macros, that means you cannot create a teamplay unprotected variable with value
based on a value of some teamplay variable.

Example:

```
if $health < 50 then set myvar danger else set myvar safe
 ```

this will lead to a warning "set cannot be used in combination with teamplay macros".
But if you use set_tp here instead of set, all will work.
But if you now try to do for example this:

```
exec $myvar.cfg
```

You'll get an error saying "exec cannot be used in combination with teamplay macros".
Because the "myvar" variable has been created as teamplay protected, you can only use it in combination with
say, say_team, echo, if, and some other commands.

### Mathematical operations

This client allows you to use some basic mathematical operations on your variables using set_calc command: `set_calc <cvar> <command> <command arguments>`
`/set_calc <cvar> <argument1> <operator> <argument2>`
valid commands: `strlen int substr set_substr pos`
valid operators: `+ - * / div %% and or xor`.

For simple increasing and decreasing variables you can use command /inc variable value.

### User-created commands with parameters

You can use %1 in aliases and they will be replaced by the arugments at execution time.

Example:

```
alias cool_zoom "fov %1;sensitivity %2;v_viewheight %3;crosshaircolor %5";
cool_zoom 30 3.2 -6 79
```

Example of a zooming script:

```
alias zoom "set_calc fov $fov * %1; set_calc sensitivity $sensitivity * %1"`
bind "capslock" "zoom 0.5"
```

### Macros

Macro is a special type of string that is replaced in your custom command with value given by
state of the client or the game. It is very similar to accessing variable value by $ character but
you cannot change values of macros.

Example: `/exec my_$matchstatus.cfg`

Will exec my_standby.cfg script when the server is in prewar mode or my_normal.cfg if you play a game.

Here is a full list of macros.

Note that usage of many macros is very limited to prevent making the scripting possibilies too powerful
in gameplay. Usage of macros can also be restricted based on the current ruleset. For example in 'smackdown'
ruleset, macros can only be used in combination with "if", "say" and "say_team" commands.

### Conditions

You can use if construct in your scripts with following syntax:

```
if (<condition1>) then <commands> [else <commands>]
```

The syntax of the condition has been changed in 1.9, read below for resolving backward compatibility issues.

Commands are semicolon-separated commands or aliases.

In the condition you can use parentheses, binary operators +, -, *, /, <, <=, =, ==, !=, >=, >, =~, !~, isin and !isin, and unary operator - and you can combine
these with logical conjunctions "and" and "or" (also "AND", "&&", "OR" or "||" will work). You can use integers, decimal numbers and strings inside of the
conditions, usually you will use macros there too. Strings should be enclosed in apostrophes, that applies for macros too, so it's recommended instead of
condition "quad isin $powerups" use either older way "quad isin $qt$powerups$qt", which will work just well, or newer syntax: ('quad' isin '$powerups').

### Operators

Operators +, -, *, / are standard arithmetical operators, + works also as a string concatenation. Example: if ('abcd' = 'ab' + 'cd') then echo yes - will
print "yes".

Operators <, <=, =, ==, !=, >=, > work as usual number and string comparision operators. Operators = and == are equivalent. Operator != means "not equals".

isin means "expr1 is a substring of expr2" and !isin is a negation of this.

The =~ in "x =~ z" means "x matches to the regular expression z", the !~ operator is the negation of this. When using this, the variables re_trigger_match_0,
..., re_trigger_match_9 will be set to values representing matched regexp groups. For example:
if ('abc' =~ '(.)(.)(.)') then processthis will cause re_trigger_match_0 be set to "abc", re...match_1 to "a", re...match_2 to "b" and re...match_3 to "c".

The [else ...] part is optional and if used, all commands after it will be executed only when the main condition is false.

Example of the use:

```
if (2.2-1.2 == 3/(2+1) and ('quad' isin '$powerups' or 'ring' isin '$powerups')) then say we are sane and powerupped!
```

Backward compatibility of the "if" command

The syntax of the condition in the if command has been changed in the version 1.9 of the client. Backward compatibility has been kept in majority of the
scripts.
The client uses old if command in a situation where you do not use parentheses around (at least at the beginning of) the condition. If you use parentheses, new
if command evaluating will be applied. Example:

```
if $quad isin $powerups say_team I have quad
```

This will work as an "old if command".

```
if ('quad' isin '$powerups') then say_team I have quad
```

This will use the "new if command"

### Regexp matching

This client supports multiple params & regexp match for 'viewalias, unalias_re, toggle_re, cvar_reset_re'
Regexp match support for 'aliaslist, cvarlist, cmdlist, macrolist'.

**Examples**

```
unalias_re alias1 alias2 ^\.took(.+)$
cvar_reset_re gl_part_.+
toggle_re gl_part_.+
cvarlist gl_
```
