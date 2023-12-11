
import './index.less'
import { Space, Table, Tag,Input,Collapse,Button,Checkbox} from 'antd';
import Collap from'@/component/Collap'
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

const tableData=[]

const Home = () => {

  return (
  <div className='home'>
        <div className='home-header-btn'>
            <div className='header-btn'>
            <Button type="primary">导入私钥</Button>
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
        <Table columns={columns} dataSource={tableData} />
      
       
       

  </div>
   
  )
};

export default Home;