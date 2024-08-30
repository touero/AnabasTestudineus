export interface ApiResponse {
  name: string;
  data: Array<{ name:string; url: string; method: string; desc:string }>;
}

export async function fetchData(url: string): Promise<Array<{ name:string; url: string; method: string; desc: string }> | null> {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const response_json: ApiResponse = await response.json();
    return response_json.data;
  } catch (error) {
    console.error('Error fetching data:');
    return null;
  }
}