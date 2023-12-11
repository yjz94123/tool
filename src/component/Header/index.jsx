import { useState, useEffect } from 'react'
import { Menu,Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './index.less'


const Header = () => {
    const [current, setCurrent] = useState('wallet');

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
const onClick=(e)=>{
    setCurrent(e.key);
}
    return(
        <>
        <div className='tool-menu'>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='menu-list'/>
        <Button>连接钱包</Button>
        </div>
        </>
    );
        
}


export default Header