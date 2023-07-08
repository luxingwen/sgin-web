// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建应用 创建应用 POST /api/v1/app/create */
export async function postAppCreate(body: API.App, options?: { [key: string]: any }) {
  return request<API.AppInfoResponse>('/api/v1/app/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除应用 删除应用 POST /api/v1/app/delete */
export async function postApp__openAPI__delete(
  body: API.ReqUuidParam,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/api/v1/app/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取应用列表 获取应用列表 POST /api/v1/app/list */
export async function postAppList(body: API.ReqAppQueryParam, options?: { [key: string]: any }) {
  return request<API.AppQueryResponse>('/api/v1/app/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新应用 更新应用 POST /api/v1/app/update */
export async function postAppUpdate(body: API.App, options?: { [key: string]: any }) {
  return request<API.AppInfoResponse>('/api/v1/app/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
