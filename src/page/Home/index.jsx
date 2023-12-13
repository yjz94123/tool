import React, { useState, useEffect } from 'react';
import { Button, Input, Table, Checkbox, Modal } from 'antd';
import { Wallet, utils, providers } from 'ethers';
import './index.less';
import connect from '@/connect/index'
// 表格列
const columns = [
  {
    title: '选择',
    dataIndex: 'select',
    key: 'select',
    width: 50, // 设置列宽
    render: (text, record) => <Checkbox />,
  },
  {
    title: '钱包地址',
    dataIndex: 'address',
    key: 'address',
    width: 100, // 设置列宽
    render: (text) => <a>{text}</a>,
  },
  {
    title: '金额',
    dataIndex: 'balance',
    key: 'balance',
    width: 50, 
  },
  {
    title: '分组',
    dataIndex: 'group',
    key: 'group',
    width: 50, 
  },
  {
    title: '交易所地址',
    dataIndex: 'exchangeAddress',
    key: 'exchangeAddress',
    width: 100, 
  },
];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [inputPrivateKeys, setInputPrivateKeys] = useState('');
  const [savedPrivateKeys, setSavedPrivateKeys] = useState(''); // 新增状态

  // 从localStorage中加载已保存的私钥
  useEffect(() => {
    const savedPrivateKeys = localStorage.getItem('privateKeys');
    if (savedPrivateKeys) {
      setSavedPrivateKeys(savedPrivateKeys); // 更新状态
      handlePrivateKeys(savedPrivateKeys)
    }
  }, []);

  // 导入私钥
  const handlePrivateKeys = async (privateKeys) => {
     // 关闭弹出框
     setShowModal(false);
     //table Loaidng打开
    setLoading(true);

    const filteredData= await connect.importPrivateKeys(privateKeys)
   // 合并新数据和旧数据，过滤掉重复的条目
   const newData = [...tableData, ...filteredData];
   const uniqueData = newData.reduce((acc, current) => {
     const x = acc.find(item => item.address === current.address);
     if (!x) {
       return acc.concat([current]);
     } else {
       return acc;
     }
   }, []);
 
   // 更新表格数据
   setTableData(uniqueData);
  
    // 更新已保存的私钥状态
     setSavedPrivateKeys(privateKeys);

   
    // 清空输入框
    setInputPrivateKeys('');
    setLoading(false);
  
  };

  return (
    <div className='home'>
      <div className='home-header-btn'>
        <div className='header-btn'>
          <Button type="primary" onClick={() => setShowModal(true)}>
            导入私钥
          </Button>
        </div>
        {/* 其他按钮 */}
        <div className='header-btn'>
          <Button type="primary" danger>删除选中</Button>
          <Button type="primary">余额查询</Button>
          <Button type="primary">设置分组</Button>
        </div>
        <div className='header-btn'>
          <Button type="primary">Test IP</Button>
          <Button type="primary">创建钱包</Button>
          <Button>导出</Button>
        </div>
      </div>
      <Table columns={columns} dataSource={tableData}  loading={loading}/>

      {/* 使用 Modal 组件显示弹出框 */}
      <Modal
        title="导入私钥"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={[
          <Button key="cancel" onClick={() => setShowModal(false)}>
            取消
          </Button>,
          <Button key="import" type="primary" onClick={() => handlePrivateKeys(inputPrivateKeys)}>
            导入
          </Button>,
        ]}
      >
        {/* 在 Modal 中显示输入框 */}
        <Input.TextArea
          placeholder="在这里粘贴私钥，多个私钥请用回车换行分隔"
          autoSize={{ minRows: 3, maxRows: 6 }}
          value={inputPrivateKeys} // 使用已保存的私钥
          onChange={(e) => setInputPrivateKeys(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default Home;
