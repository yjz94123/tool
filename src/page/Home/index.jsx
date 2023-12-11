import { useState, useEffect } from 'react'
import './index.less'
import { Space, Table, Divider, Radio, Tag, Input, Collapse, Button, Checkbox } from 'antd';
import Collap from '@/component/Collap'
//表格列
const columns = [
    {
        title: '钱包地址',
        dataIndex: 'addres',
        key: 'addres',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '金额',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '分组',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '代理ip',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '交易所地址',
        dataIndex: 'age',
        key: 'age',
    }
]




const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};


const tableData = []

//导入私钥
const exportKeys = () => {

}
//删除选中
const handleDele = () => {

}
//余额查询
const handleBalance = () => { }
//设置分组
const setGroup = () => { }
//Test IP
const handleTest = () => {

}
//设置分组
const handleNew = () => {

}
const Home = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <div className='home'>
            <div className='home-header-btn'>
                <div className='header-btn'>
                    <Button type="primary" onClick={exportKeys}>导入私钥</Button>
                    <Button type="primary" danger onClick={handleDele}>删除选中</Button>
                    <Button type="primary" onClick={handleBalance}>余额查询</Button>
                    <Button type="primary" onClick={setGroup}>设置分组</Button>
                </div>
                <div className='header-btn'>
                    <Button type="primary" onClick={handleTest}>Test IP</Button>
                    <Button type="primary" onClick={handleNew}>创建钱包</Button>
                    <Button>导出</Button>
                </div>

            </div>
            <div>
        
                <Divider />
                <Table rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }} columns={columns} dataSource={tableData} />
            </div>





        </div>

    )
};

export default Home;