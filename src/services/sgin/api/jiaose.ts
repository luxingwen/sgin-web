// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建角色 POST /api/v1/role/create */
export async function postRoleCreate(body: API.Role, options?: { [key: string]: any }) {
  return request<API.RoleInfoResponse>('/api/v1/role/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除角色 POST /api/v1/role/delete */
export async function postRole__openAPI__delete(body: API.Role, options?: { [key: string]: any }) {
  return request<API.Response>('/api/v1/role/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询角色列表 POST /api/v1/role/list */
export async function postRoleList(body: API.ReqRoleQueryParam, options?: { [key: string]: any }) {
  return request<API.RoleQueryResponse>('/api/v1/role/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新角色 POST /api/v1/role/update */
export async function postRoleUpdate(body: API.Role, options?: { [key: string]: any }) {
  return request<API.Response>('/api/v1/role/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
