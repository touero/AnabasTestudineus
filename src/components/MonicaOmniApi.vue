<script lang="ts">
import { defineComponent, ref } from 'vue';
import MyApi from './MyApi.vue';

export default defineComponent({
  name: 'MonicaOmniComponet',
  components: {
    MyApi
  },

  setup() {
    const name = ref('MonicaOmniApi')
    const content = ref('It is frontend of my repo MonicaOmniApi, this my frist full stack project.')
    return {
      name,
      content
    }
  },
})
</script>

<template>
  <div class="relative">
    <div class="relative top-3 left-3">
      <h1 class="font-sans text-4xl font-bold">{{ name }}</h1>
    </div>

    <div class="relative top-5 left-3 bottom-2">
      <h2 class="font-sans text-2xl">{{ content }}</h2>

      <a class="relative top-6" href="https://github.com/touero" target="_blank">
        <button class="font-sans bg-gray-500 text-white font-bold py-1 px-3 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline disabled:opacity-50 border border-blue-500 shadow-lg text-center">go to my github profile</button>
      </a>
    </div>

    <div class="relative top-20 left-8 w-2/4">
      <MyApi />
    </div>
  </div>
</template>
