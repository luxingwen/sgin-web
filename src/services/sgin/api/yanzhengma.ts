// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 检查验证码 检查验证码 POST /api/v1/verification_code/check */
export async function postVerificationCodeCheck(body: string, options?: { [key: string]: any }) {
  return request<string>('/api/v1/verification_code/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建验证码 创建验证码 POST /api/v1/verification_code/create */
export async function postVerificationCodeCreate(
  body: API.ReqVerificationCodeParam,
  options?: { [key: string]: any },
) {
  return request<string>('/api/v1/verification_code/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
