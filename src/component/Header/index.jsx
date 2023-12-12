import { useState, useEffect } from 'react';
import { Menu, Button, message } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './index.less';


const Header = () => {
  const [current, setCurrent] = useState('wallet');
  const [walletAddress, setWalletAddress] = useState(null);

const items = [
    {
        label: '钱包管理',
        key: 'wallet',
       
      }, 
      {
        label: '分发ETH',
        key: 'distribution',
       
      }, 
      {
        label: '归集ETH',
        key: 'gather',
       
      },
      {
        label: '多对多转账',
        key: 'manyTran',
       
      },
      {
        label: '交易所充值',
        key: 'exReach',
       
      },  
      {
        label: '交易所提币',
        key: 'exWith',
       
      }, 
      {
        label: '图狗盯盘',
        key: 'keep',
       
      },  
]
const onClick = (e) => {
  setCurrent(e.key);
};

const connectWallet = async () => {
  try {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      setWalletAddress(accounts[0]);
      message.success('钱包连接成功！');
    } else {
      message.error('未检测到 MetaMask，请安装 MetaMask。');
    }
  } catch (error) {
    message.error(`连接钱包时发生错误：${error.message}`);
  }
};

useEffect(() => {
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
      } else {
        setWalletAddress(null);
      }
    });
  }
}, []);

return (
  <>
    <div className='tool-menu'>
      <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} className='menu-list' />
      <Button onClick={connectWallet}>
      {walletAddress ? `${walletAddress.substring(0, 4)}...${walletAddress.slice(-4)}` : '连接钱包'}
      </Button>
    </div>
  </>
);
};

export default Header;