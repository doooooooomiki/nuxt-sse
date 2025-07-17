import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();

const newswireClient = $fetch.create({
  baseURL: config.nytimesApiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  query: {
    'api-key': config.nytimesApiKey,
  },
});

export async function fetchNewswire(endpoint: string = 'all/all.json') {
  try {
    const response = await newswireClient(endpoint);
    return response;
  } catch (error) {
    throw new Error(`Failed to fetch data from NYTimes API: ${error}`);
  }
}
