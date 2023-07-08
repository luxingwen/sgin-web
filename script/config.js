module.exports = {
    openApi: [
      {
        requestLibPath: "import { request } from '@umijs/max'", // 想怎么引入封装请求方法
        schemaPath: 'http://localhost:8080/swagger/doc.json',
        serversPath: './src/services/sgin',
      }
    ],
  };
  
