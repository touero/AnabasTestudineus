<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { urlIsClickDiv, urlIsClickDivProps } from '../components_ts/constants';

export default defineComponent({
  name: 'HighlightCode',
  props: urlIsClickDiv,
  methods: {
    copyToClipboard() {
      const textToCopy = (this.$props as urlIsClickDivProps).text
      navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Text copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    },
  },
});
</script>


<template>
  <div v-if="urlIsClick" class="relative bg-gray-400 text-black p-4 rounded-md overflow-auto leading-tight top-1">

    <div class="flex justify-between items-center mb-2">
      <span class="text-xs font-bold text-black">shell</span>
      <button @click="copyToClipboard" class="text bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
        copy
      </button>
    </div>
    <pre class="m-0"><code class="shell text-sm">{{ text }}</code></pre>

  </div>
</template>