import { enhanceResponse } from '../helpers/internals';

import type { Response } from '@vue-storefront/weldgalaxy-api';

function getCost(response) {
  
  return enhanceResponse(response.data);
}


function getName(response: Response): string {
    return response?.name || '';
}

function getId(response: Response): number {
  return response.id;
}