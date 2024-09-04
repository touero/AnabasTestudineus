<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { linkButtonProps } from '../components_ts/constants';

export default defineComponent({
  name: 'LinkButton',
  props: linkButtonProps,
});
</script>

<template>
  <a :href="href" target="_blank" :class="`relative min-w left-${left}`">
    <button class="flex font-sans bg-gray-500 text-white font-bold py-1 px-3 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline disabled:opacity-50 border border-blue-500 shadow-lg text-center">
      <img :src="iconSrc" alt="Icon" class="w-6 h-6 mr-2"/>
      {{ label }}
    </button>
  </a>
</template>
