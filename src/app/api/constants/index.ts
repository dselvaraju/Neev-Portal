import { INT_API_PATHS, INT_REQ_HEADERS } from 'app/interfaces/api_interfaces';

export const EXTERNAL_API_PATHS: INT_API_PATHS = {
  CHANNELS: 'channels',
  USERS: 'users',
  EVENTS: 'events',
  CHANNELS_STATS: 'channels/statistics',
};
export const REQ_GET: string = 'get';
export const REQ_POST: string = 'post';
export const commonHeaders: INT_REQ_HEADERS = {
  'X-Requested-With': 'OpenAPI',
  Accept: 'application/json',
};
