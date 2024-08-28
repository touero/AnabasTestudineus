<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ApiResult {
  url: string;
  method: string;
}

export default defineComponent({
  name: 'MyApiComponet',
  setup(){
    const name = ref("MyApi");
    const result = ref<ApiResult[]>([
      { url: "https://api.example.com/endpoint", method: "POST" },
      { url: "https://api.somewebsite.org/endpoint", method: "POST" },
      { url: "https://api.test.com/endpoint", method: "GET" },
      { url: "https://api.anotherdomain.net/endpoint", method: "POST" },
      { url: "https://api.fakesite.info/endpoint", method: "POST" },
      { url: "https://api.randomdomain.com/endpoint", method: "POST" },
      { url: "https://api.touero.com/endpoint", method: "GET" },
    ]);
    const activeIndex = ref<number | null>(null)

    const toggleDetails = (index: number) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    }

    const isActive = (index: number) => {
      return activeIndex.value === index;
    }
    return {
      name,
      result,
      activeIndex,
      toggleDetails,
      isActive
    }
  }
})
</script>

<template>
  <div class="relative">
    <ul>
      <li v-for="(item, index) in result" :key="index" class="flex flex-col space-y-2 mb-4">
        <div class="flex space-x-4">
          <button 
            @click="toggleDetails(index)" 
            class="flex font-mono font-bold text-slate-100 bg-green-500 border border-gray-300 p-2 rounded hover:bg-green-700 w-20">
            <img src="/api.svg" alt="Icon" class="w-4 h-4 mr-1"/>
            {{ item.method }}
          </button>
          <p class="font-mono font-bold text-slate-800 bg-gray-200 border border-gray-300 p-2 rounded">{{ item.url }}</p>
        </div>
        <transition
          name="popup" 
          enter-active-class="transition ease-out duration-300 transform" 
          leave-active-class="transition ease-in duration-300 transform">
          <div v-if="isActive(index)" class="pl-10 mt-2  bg-gray-200 border border-gray-300 p-2 rounded">
            <p class="text-gray-700">This is additional information for the API at {{ item.url }}.</p>
          </div>
        </transition>
        
      </li>
    </ul>
  </div>
</template>

<style scoped>
.popup-enter-active {
  transition: all 0.1s ease-out;
  opacity: 0;
  transform: scale(1) translateY(0);
}
.popup-enter {
  transform: scale(0.9) translateY(-10px);
  opacity: 0;
}
.popup-leave-active {
  transition: all 0.1s ease-in;
  opacity: 0;
}
.popup-leave-to {
  transform: scale(0.9) translateY(-10px);
  opacity: 0;
}
</style>