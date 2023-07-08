import { PageContainer, ProTable } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { postRoleList } from '@/services/sgin/api/jiaose';

const IndexPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [appList, setAppList] = useState<API.App[]>([]);


    const getRoles = async (params, sort, filter) => {
        setLoading(true);
        try {
            console.log("params:", params);
            const response = await postRoleList(params);
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
            title: '名称',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
            search: false,
        },
        {
            title: '活跃状态',
            dataIndex: 'is_active',
            key: 'is_active',
            render: (isActive: boolean) => (isActive ? '是' : '否'),
        },
        {
            title: '创建时间',
            dataIndex: 'created_at',
            key: 'created_at',
            search: false,
        },
        {
            title: '更新时间',
            dataIndex: 'updated_at',
            key: 'updated_at',
            search: false,
        },
        // Add more columns as needed
    ];


    return (
        <PageContainer>
            <ProTable<API.App, API.ReqAppQueryParam>
                request={getRoles}
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
