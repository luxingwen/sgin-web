import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
    <div className="container mx-auto py-10">
      <div className="bg-gray-200 rounded-lg p-4 space-y-4">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="text-gray-600">
          Thank you for visiting our website. We hope you find everything you need here.
        </p>
        <p className="text-gray-600">Your name: {trim(name)}</p>
        <div>
          <Guide />
        </div>
      </div>
    </div>
  </PageContainer>
  );
};

export default HomePage;
