<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Url } from '../components_ts/constants';

import MyApi from './MyApi.vue';
import LinkButton from './LinkButton.vue';

export default defineComponent({
  name: 'MonicaOmniComponet',
  components: {
    MyApi,
    LinkButton
  },

  setup() {
    const name = ref('MonicaOmniApi')
    const content = ref('It is frontend of my repo MonicaOmniApi, this my frist full stack project.')
    return {
      name,
      content,
      Url
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
        <LinkButton :href="Url.MyProfile" iconSrc="/github-fill.svg" label="go to author's github profile"/>
        <LinkButton :href="Url.ThisRepo" iconSrc="/github-fill.svg" label="go to this repo" left="8"/>
      </div>
    </div>

    <div class="relative top-20 left-5 w-2/4">
      <MyApi />
    </div>
  </div>
</template>
