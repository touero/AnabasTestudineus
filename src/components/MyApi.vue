<script>
export default {
  data() {
    return {
      name: "MyApi",
      result: [
        { url: "https://api.example.com/endpoint", method: "POST" },
        { url: "https://api.somewebsite.org/endpoint", method: "POST" },
        { url: "https://api.anotherdomain.net/endpoint", method: "POST" },
        { url: "https://api.fakesite.info/endpoint", method: "POST" },
        { url: "https://api.randomdomain.com/endpoint", method: "POST" }
      ]
    }
  }
}
</script>

<template>
  <div class="relative">
    <ul>
      <li v-for="(item, index) in result" :key="index" class="flex space-x-4">
        <button class="font-bold text-white bg-lime-600 border border-gray-300 p-2 rounded" >{{ item.method }}</button>
        <p class="font-bold text-blackh bg-gray-200 border  border-gray-300 p-2 rounded">{{ item.url }}</p>
      </li>
    </ul>
  </div>
</template>
