import { Collapse,Checkbox} from 'antd';
const onChange=()=>{

}

const Collap=({list})=>{
    return(
         <div>
        {
            list.map(item=>{

                <div>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>;
           <Collapse items={item} defaultActiveKey={['1']} />;
           </div>
            })
        }
    </div>
    )

}

export default Collap