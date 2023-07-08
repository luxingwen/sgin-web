import { PageContainer, ProTable } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { postAppList } from '@/services/sgin/api/App';

const IndexPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [appList, setAppList] = useState<API.App[]>([]);


    const getApps = async (params, sort, filter) => {
        setLoading(true);
        try {
            console.log("params:", params);
            const response = await postAppList(params);
            return response.data;
        } catch (error) {
            console.error('Error fetching clients:', error);
        } finally {
            setLoading(false);
        }
    };


    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'AppId',
            dataIndex: 'uuid',
            key: 'uuid',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (status: number) => {
                let statusText = '';
                let statusColor = '';

                if (status === 0) {
                    statusText = '未启用';
                    statusColor = 'text-gray-500';
                } else if (status === 1) {
                    statusText = '启用';
                    statusColor = 'text-green-500';
                } else if (status === 2) {
                    statusText = '删除';
                    statusColor = 'text-red-500';
                }

                return (
                    <span className={`inline-block py-1 px-2 rounded ${statusColor}`}>
                        {statusText}
                    </span>
                );
            },
        },
        {
            title: 'API Key',
            dataIndex: 'api_key',
            key: 'api_key',
        },
        {
            title: 'Sec Key',
            dataIndex: 'sec_key',
            key: 'sec_key',
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Updated At',
            dataIndex: 'updated_at',
            key: 'updated_at',
        },
        // Add more columns as needed
    ];


    return (
        <PageContainer>
            <ProTable<API.App, API.ReqAppQueryParam>
                request={getApps}
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
