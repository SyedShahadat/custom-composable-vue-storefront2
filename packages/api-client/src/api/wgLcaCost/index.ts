export async function costResult(context, params) {
    const url = new URL('/test', context.config.api.url);
  
    // Use axios to send a GET request
    const { data } = await context.client.get(url.href);
  
    // Return data from the API
    return data;
  }
  
  