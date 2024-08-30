import { ref, onMounted } from 'vue';
import { fetchData } from '../components_ts/requestData';

interface ApiResult {
  name: string;
  url: string;
  method: string;
  desc: string;
}

export function createAllApi() {
  const urlIsClick = ref(false);
  const result = ref<Array<{ name:string; url: string; method: string; desc: string}> | null>(null);
  const dataTest = ref<ApiResult[]>([
    { name:"example", url: "https://api.example.com/endpoint", method: "POST", desc:'example1' },
    { name:"somewebsite", url: "https://api.somewebsite.org/endpoint", method: "POST", desc:'example2' },
    { name:"test", url: "https://api.test.com/endpoint", method: "GET", desc:'example3' },
    { name:"anotherdomain", url: "https://api.anotherdomain.net/endpoint", method: "POST", desc:'example4' },
    { name:"fakesite", url: "https://api.fakesite.info/endpoint", method: "POST", desc:'example5' },
    { name:"randomdomain", url: "https://api.randomdomain.com/endpoint", method: "POST", desc:'example6' },
    { name:"touero", url: "https://api.touero.com/endpoint", method: "GET", desc:'example7' },
  ]);

  onMounted(async () => {
    const getData = await fetchData('http://127.0.0.1:2518/all_api');
    if (getData == null) {
      result.value = dataTest.value;
    } else {
      urlIsClick.value = true;
      result.value = getData;
    }
  });

  return {
    urlIsClick,
    result,
  };
}
