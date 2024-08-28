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

    
      <div class="flex">
        <a class="relative top-6 min-w left-4" href="https://github.com/touero" target="_blank">
          <button class="flex font-sans bg-gray-500 text-white font-bold py-1 px-3 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline disabled:opacity-50 border border-blue-500 shadow-lg text-center">
          <img src="/github-fill.svg" alt="Icon" class="w-6 h-6 mr-2"/>
            go to author's github profile
          </button>
        </a>
        <a class="relative top-6 min-w left-8" href="https://github.com/touero/MonicaOmniApi" target="_blank">
          <button class="flex font-sans bg-gray-500 text-white font-bold py-1 px-3 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline disabled:opacity-50 border border-blue-500 shadow-lg text-center">
          <img src="/github-fill.svg" alt="Icon" class="w-6 h-6 mr-2"/>
            go to this repo
          </button>
        </a>
      </div>
    </div>

    <div class="relative top-20 left-5 w-2/4">
      <MyApi />
    </div>
  </div>
</template>
