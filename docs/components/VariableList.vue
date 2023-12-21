<script>
import variables from './../../data/ezquake/help_variables_tree.json';
import { slugify } from "./util";
import VariableListItem from './VariableListItem.vue';

export default {
  components: { VariableListItem },
  methods: { slugify },
  props: {
    groupName: String,
  },
  data() {
    return {
      variables
    }
  }
}
</script>

<template v-if="groupName in variables">
  <div v-for="group in variables[groupName].items">
    <div v-if="group.items.length">

      <h2 :id=group.slug>
        {{ group.title }}
        <a class="header-anchor" :href="`#${group.slug}`"></a>
      </h2>

      <table style="font-size: 0.85em">
        <tbody>
          <tr v-for="item in group.items" :id="slugify(item.name)" class="algolia-3">
            <td valign="top">
              <VariableListItem :item=item />
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>

</template>
