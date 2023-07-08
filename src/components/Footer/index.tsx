import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
    const defaultMessage = "Sgin Team"
    const currentYear = new Date().getFullYear();
  
    return (
      <div className="fixed bottom-0 w-full">
        <DefaultFooter
          style={{
            background: 'none',
          }}
          copyright={`${currentYear} ${defaultMessage}`}
        />
      </div>
    );
  };
  
  export default Footer;
  