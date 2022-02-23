import {
  Context,
} from '@vue-storefront/core';



const params = {}


async function getCostResult(context: Context, params) {

  const data = await context.$weldgalaxy.api.costResult(params);

  return data;
}

export const useProduct = getCostResult;
