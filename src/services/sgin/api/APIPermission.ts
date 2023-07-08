// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Get API Permission List Get API Permission List POST /api/v1/app/api/permissions/list */
export async function postAppApiPermissionsList(
  body: API.ReqApiPermissionParam,
  options?: { [key: string]: any },
) {
  return request<API.PagedResponse>('/api/v1/app/api/permissions/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
