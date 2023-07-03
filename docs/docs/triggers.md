---
---

<script setup>
import fTriggers from '../../data/f_triggers.json';
import onTriggers from './../../data/on_triggers.json';
</script>

# Triggers

Triggers allows you to execute commands based on events.

**Example**

```
alias on_enter "/say Hello everyone!"
alias f_newmap "/echo New map loaded: $mapname"
```

## f_triggers

"Restricted" means it cannot be used in combination with teamplay macros.

<table style="font-size: 0.85em">
    <thead>
        <tr>
            <th>Name</th>
            <th>Restricted</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="trigger in fTriggers">
            <td valign="top">
                <strong>{{ trigger.name }}</strong>
            </td>
            <td valign="top">
                {{ trigger.restricted ? "yes" : "no" }}
            </td>
            <td valign="top">
                {{ trigger.description }}
            </td>
        </tr>
    </tbody>
</table>

## on_triggers

<table style="font-size: 0.85em">
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Event value</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="trigger in onTriggers">
            <td valign="top">
                <strong>{{ trigger.name }}</strong>
            </td>
            <td valign="top">
                {{ trigger.description }}
            </td>
             <td valign="top">
                <code>{{ trigger.event_value }}</code>
            </td>
        </tr>
    </tbody>
</table>

**Notes**

* `on_enter, on_spec_enter, on_enter_ctf, on_enter_ffa` are enabled by default.
* The other `on_` triggers requires you to call `cmd info ev x` where `x` is the sum of event values to enable.
* Calling `cmd info ev` can be done automatically by defining an `infoset` alias in your config, e.g:
    * `alias infoset    "cmd info ev 413" // Enable all`
    * `alias infoset    "cmd info ev 8"   // Enable on_matchend`

If you want to customize even further:

* `on_connect` also enables `on_connect_ctf on_connect_ffa on_observe on_observe_ctf on_observe_ffa`
* `on_matchstart` also enables `on_spec_matchstart`
* `on_matchend` also enables `on_spec_matchend`
* `on_matchbreak` also enables `on_spec_matchbreak`
