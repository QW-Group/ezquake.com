<script>

import menus from './../.vitepress/menus';

export default {
  data() {
    return {
      menus: [
        menus.features,
        menus.graphics,
        menus.reference,
        menus.settingsReference,
        menus.misc,
        menus.sourceCode,
      ]
    }
  }
}

</script>

<template>

  <div class="container">
    <div class="column" v-for="menu in menus">
      <h2>{{ menu.text }}</h2>
      <ul>
        <li v-for="item in menu.items">
          <a :href="item.link + '.html'">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
.container {
  display: grid;
  grid-column-gap: 20px;
}

@media (min-width: 640px) and (max-width: 1023px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
