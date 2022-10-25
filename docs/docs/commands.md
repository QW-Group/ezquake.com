---
aside: false
---

<script setup>
import commands from './../../data/ezquake/help_commands.json'
</script>

# Commands

<table style="font-size: 0.85em">
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(props, name) in commands">
            <td valign="top">
                <strong>{{ name }}</strong> <code v-if="props.syntax">{{ props.syntax }}</code>
            </td>
            <td valign="top">
                {{ props.description }}
            </td>
        </tr>
    </tbody>
</table>
