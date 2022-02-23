const enhanceResponse = (costResponse: Array<any>) => {
    const enhancedCostResponse = costResponse.map((response) => ({
      ...response,
      name: response.name,
      id: response.id
    }));
    return enhancedCostResponse;
  };
  
  export default enhanceResponse;