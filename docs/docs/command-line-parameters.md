---
aside: false
---

<script setup>
import cmdlineParams from './../../data/ezquake/help_cmdline_params.json'
</script>

# Command Line Parameters

Use command line parameters to start ezQuake with specific settings.

```
ezquake-gl.exe -ruleset smackdown -conwidth 640 
```

In addition, you can apply commands at startup by prefixing them with `+set`:

```
ezquake-gl.exe +set s_khz 44 +set enemyskin enemy
```

## Parameters

<table style="font-size: 0.85em">
    <thead>
        <tr>
            <th style="min-width: 220px">Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(props, name) in cmdlineParams">
            <td valign="top">
                <strong>{{ name }}</strong> <code v-if="props.arguments">{{ props.arguments }}</code>
            </td>
            <td valign="top">
                {{ props.description }}
                <div style="margin-top: 0.5em" v-if="props.systems">systems: {{ props.systems.join(", ") }}</div>
            </td>
        </tr>
    </tbody>
</table>

