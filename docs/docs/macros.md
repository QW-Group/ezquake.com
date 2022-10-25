---
---

<script setup>
import ezquakeMacros from './../../data/ezquake/help_macros.json'
import qizmoMacros from './../../data/qizmo_macros.json'
</script>

# Macros

## ezQuake macros

<table style="font-size: 0.85em">
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(props, name) in ezquakeMacros">
            <td valign="top">
                <strong>${{ name }}</strong>
            </td>
            <td valign="top">
                <code v-if="props.type">{{ props.type }}</code>
            </td>
            <td valign="top">
                    {{ props.description }}
                    <div v-if="props['related-cvars']" style="margin-top: 0.5rem">
                        <strong>related cvars</strong>: {{ props['related-cvars'].join(", ") }}
                    </div>
            </td>
        </tr>
    </tbody>
</table>

## Qizmo macros

You can use Qizmo teamplay %-functions in ezQuake, e.g. `%l` - location, `%a` - armor, `%b` - best weapon, etc.

<table style="font-size: 0.85em">
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="macro in qizmoMacros">
            <td valign="top">
                <strong>{{ macro.code }}</strong>
            </td>
            <td valign="top">
                <code>string</code>
            </td>
            <td valign="top">
                {{ macro.description }}
            </td>
        </tr>
    </tbody>
</table>

### Formatting

The format of each variable can be set by specifying a format string. For example:

```
%<20r>l
```

Will print the standard `%l` value, but taking 20 characters, right-aligned.

To set the default formats for each %-function without specifying each time, set user-cvars:

```
tp_length_l 10
tp_align_l r
```
