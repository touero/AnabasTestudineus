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
    const name = ref('AnabasTestudineus')
    const content = ref('It is frontend project of my repo AnabasTestudineus, to show another repo: opsariichthys-bidens, all api, All of them is an attempt at a full-stack project')
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
        <LinkButton :href="Url.MyProfile" iconSrc="/github-fill.svg" label="go to author's github profile" left="4"/>
        <LinkButton :href="Url.ThisRepo" iconSrc="/github-fill.svg" label="go to this frontend repo" left="8"/>
        <LinkButton :href="Url.Backend" iconSrc="/github-fill.svg" label="go to opsariichthys-bidens" left="12"/>
      </div>
    </div>

    <div class="relative top-20 left-5 w-2/4">
      <MyApi />
    </div>
  </div>
</template>
