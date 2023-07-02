---
---

<script setup>
import fTriggers from './../../data/ezquake/f_triggers.json'
import onTriggers from './../../data/ezquake/on_triggers.json'
</script>

# Triggers

## f_triggers

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
        </tr>
    </tbody>
</table>

**note**: `on_enter, on_spec_enter, on_enter_ctf, on_enter_ffa` are enabled by default. The other `on_` triggers requires you to call `cmd info ev x`, this can be done by settings an `infoset` alias:
* `alias infoset    "cmd info ev 413" // Sum the ones you want to enable`
  * `1` = `on_connect`
  * `4` = `on_matchstart`
  * `8` = `on_matchend`
  * `16` = `on_match_break`
  * `128` = `on_admin`
  * `256` = `on_unadmin`
  * `413` (enable all)

If you want to customize even further:
* `on_connect` also enables `on_connect_ctf on_connect_ffa on_observe on_observe_ctf on_observe_ffa`
* `on_matchstart` also enables `on_spec_matchstart`
* `on_matchend` also enables `on_spec_matchend`
* `on_matchbreak` also enables `on_spec_matchbreak`
  
