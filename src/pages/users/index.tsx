import { PageContainer, ProTable } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { postUserList } from '@/services/sgin/api/yonghu';

const IndexPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [appList, setAppList] = useState<API.App[]>([]);


    const getUsers = async (params, sort, filter) => {
        setLoading(true);
        try {
            console.log("params:", params);
            const response = await postUserList(params);
            return response.data;
        } catch (error) {
            console.error('Error fetching clients:', error);
        } finally {
            setLoading(false);
        }
    };

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '用户名',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: '昵称',
          dataIndex: 'nickname',
          key: 'nickname',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
          render: (sex: string) => {
            if (sex === '0') {
              return '未知';
            } else if (sex === '1') {
              return '男';
            } else if (sex === '2') {
              return '女';
            } else {
              return null;
            }
          },
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: '手机号',
          dataIndex: 'phone',
          key: 'phone',
        },
        // Add more columns as needed
      ];
      

    return (
        <PageContainer>
            <ProTable<API.App, API.ReqAppQueryParam>
                request={getUsers}
                loading={loading}
                columns={columns}

                style={{ whiteSpace: 'nowrap' }}
                pagination={{
                    pageSize: 10,
                }}
                rowKey="id"
                search={true}
                options={true}
            />
        </PageContainer>
    );
};

export default IndexPage;
