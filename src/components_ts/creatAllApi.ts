import { ref, onMounted } from 'vue';
import { fetchData } from '../components_ts/requestData';
import { ApiResult, dataTest } from './constants';


export function createAllApi() {
  const urlIsClick = ref(false);
  const result = ref<Array<ApiResult> | null>(null);

  onMounted(async () => {
    const getData = await fetchData('http://127.0.0.1:2518/all_api');
    if (getData == null) {
      result.value = dataTest;
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
