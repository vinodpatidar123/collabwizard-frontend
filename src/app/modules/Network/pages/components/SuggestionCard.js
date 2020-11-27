import { Avatar, Button, Card, Col, Divider, Row, Typography} from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import * as actions from "../../_redux/networkActions";
import { useDispatch } from "react-redux";
// import { useRouteMatch } from 'react-router-dom';

const { Text } = Typography;

export default function SuggestionCard(props) {

    const { data, listLoading } = props;
    const dispatch = useDispatch();
    // const match = useRouteMatch()

    const connect = (values) =>{
        const networkId = Object.assign({},{
            networkId : values
        })
        dispatch(actions.createNetwork(networkId));

    }

    return (
        <div>
            {
            !listLoading ? 
            <Card className="box-shadow" size="small" style={{margin:"1rem", width: 200,borderRadius:".3rem"}}>
                <div style={{display:"flex",flexDirection : "column",justifyContent:"center",alignItems:"center"}}>
                    <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Text style={{fontSize:"1rem",fontWeight:"bold"}} >{data.fullname}</Text>
                </div>
                <div style={{textAlign:"center",margin:".5rem"}}>
                {
                    data.experience.length > 0 ?
                    <Text >{data.experience[0].title}</Text>
                    : null
                }
                </div>
                <Divider />
                {/* <div>
                    <Row gutter={[16,16]} style={{justifyContent:"space-around"}}>
                        <Col span={12}>
                            <Text style={{textAlign:"center"}}>No of posts</Text>
                        </Col>
                        <Col>
                            <Text >235</Text> 
                        </Col>
                    </Row>
                    <Row gutter={[16,16]} style={{justifyContent:"space-around"}}>
                        <Col span={12}>
                            <Text style={{textAlign:"center"}}>No of posts</Text>
                        </Col>
                        <Col>
                            <Text >235</Text> 
                        </Col>
                    </Row>
                </div> */}
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Row style={{justifyContent:"center"}}>
                        <Col span={24}>
                        <Link to="/user-profile" >
                           <Button onClick={() => connect(data.id)} >Connect</Button>
                        </Link>
                        </Col>
                    </Row>
                </div>
            </Card>
            : null
        }
        </div>
    )
}
