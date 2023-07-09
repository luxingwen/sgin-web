// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

import { RunTimeLayoutConfig } from '@umijs/max';
import type { AxiosError, RequestConfig, RequestOptions } from '@umijs/max';
import Cookies from 'js-cookie';
import { Question, SelectLang } from '@/components/RightContent';
import { AvatarDropdown, AvatarName } from '@/components/RightContent/AvatarDropdown';
import Footer from '@/components/Footer';
import "./assets/css/app.css";


export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'sgin团队' };
}

export const layout: RunTimeLayoutConfig = ({ location, initialState }) => {
  return {
    logo: '/github-logo.jpg',
    menu: {
      locale: false,
    },
    layout: 'mix',
    contentWidth: 'Fluid',
    menuHeaderRender: undefined,
    fixedHeader: true,
    fixSiderbar: true,
    footerRender: () => <Footer />,
  };
};



export const request: RequestConfig = {
  withCredentials: true,
  requestInterceptors: [
    (config: RequestOptions) => {
      let currentToken = Cookies.get('token');
      if (!currentToken || currentToken === 'undefined') {
        console.log('token不存在');
      }
      return {
        ...config,
        headers: {
          ...config.headers,
          'X-Nideshop-Token': currentToken,
        },
      };
    },
  ],
  errorConfig: {
    errorHandler: (error, opts) => {
      if (opts?.skipErrorHandler) throw error;
      const { response } = error as AxiosError<unknown, unknown>;

      if (response && response.status !== 200) {
        // 请求已发送但服务端返回状态码非200系列
        console.log('response faile:', response);
      } else if (!response) {
        // 请求尚未发送就失败，网络问题或者请求被阻止等原因
        console.log('failed');
      }
      throw error; // 如果throw. 错误将继续抛出.
    },
  },
};