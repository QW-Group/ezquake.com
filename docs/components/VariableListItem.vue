<script>

import {slugify} from "./util";

export default {
  methods: {slugify},
  props: {
    item: Object,
  }
}
</script>

<template>
  <h3 class="ezq-variable-heading">
    <span class="ezq-select-all">{{ item.name }}</span>
    <a class="header-anchor" :href="`#${slugify(item.name)}`"></a>
  </h3> <code v-if="item.type">{{ item.type }}</code> <code v-if="item.default" i>default: {{ item.default }}</code>

  <div v-if="item.desc">{{ item.desc }}</div>

  <ul v-if="item.values">
    <li v-for="val in item.values"><strong>{{ val.name }}</strong>: {{ val.description }}</li>
  </ul>

  <div v-if="item.remarks">{{ item.remarks }}</div>
</template>
