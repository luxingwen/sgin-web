// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 用户登录 POST /api/v1/login */
export async function postLogin(body: API.ReqUserLogin, options?: { [key: string]: any }) {
  return request<API.ResUserLogin>('/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册 注册 POST /api/v1/register */
export async function postRegister(body: API.ReqRegisterParam, options?: { [key: string]: any }) {
  return request<API.UserInfoResponse>('/api/v1/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建用户 Create a new user with the input payload POST /api/v1/user/create */
export async function postUserCreate(body: API.User, options?: { [key: string]: any }) {
  return request<API.UserInfoResponse>('/api/v1/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 Delete a user by its UUID POST /api/v1/user/delete */
export async function postUser__openAPI__delete(
  body: API.ReqUserDeleteParam,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/api/v1/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户信息 Get a user by its UUID POST /api/v1/user/info */
export async function postUserInfo(body: API.ReqUserQueryParam, options?: { [key: string]: any }) {
  return request<API.UserInfoResponse>('/api/v1/user/info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户列表 POST /api/v1/user/list */
export async function postUserList(body: API.ReqUserQueryParam, options?: { [key: string]: any }) {
  return request<API.UserQueryResponse>('/api/v1/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取自己的信息 GET /api/v1/user/myinfo */
export async function getUserMyinfo(options?: { [key: string]: any }) {
  return request<API.UserInfoResponse>('/api/v1/user/myinfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更新用户 Update a user with the input payload POST /api/v1/user/update */
export async function postUserUpdate(body: API.User, options?: { [key: string]: any }) {
  return request<API.UserInfoResponse>('/api/v1/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
