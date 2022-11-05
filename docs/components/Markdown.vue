<script>
import { marked } from 'marked';

export default {
  props: {
    content: String,
    headeroffset: {
      type: Number,
      default: 0,
    },
  },
  data() {
    console.log(this.content)
    return {
      htmlContent: marked(this.content, {
        walkTokens: (token) => {
          if (token.type === 'heading') {
            token.depth += parseInt(this.headeroffset);
          }
        }
      }),
    };
  }
}
</script>
<template>
  <div v-html="htmlContent"></div>
</template>
