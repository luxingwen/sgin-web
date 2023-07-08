// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建菜单 POST /api/v1/menu/create */
export async function postMenuCreate(body: API.Menu, options?: { [key: string]: any }) {
  return request<API.MenuPageResponse>('/api/v1/menu/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除菜单 POST /api/v1/menu/delete */
export async function postMenu__openAPI__delete(
  body: API.ReqMenuDeleteParam,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/api/v1/menu/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询菜单列表 POST /api/v1/menu/list */
export async function postMenuList(body: API.ReqMenuQueryParam, options?: { [key: string]: any }) {
  return request<API.MenuQueryResponse>('/api/v1/menu/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新菜单 POST /api/v1/menu/update */
export async function postMenuUpdate(body: API.Menu, options?: { [key: string]: any }) {
  return request<API.MenuPageResponse>('/api/v1/menu/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
