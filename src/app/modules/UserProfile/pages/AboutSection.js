import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row,Typography } from 'antd'
import React, { useState, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const { Title,Paragraph } = Typography;
const { TextArea } = Input;

export default function AboutSection() {

    const [form] = Form.useForm();
    const [visible,setVisible] = useState(false);

    const dispatch = useDispatch();

    const { user } = useSelector(
        (state) => ({
          user: state.auth.user,
        }),
        shallowEqual
    );

    const showModal = () => {
        setVisible(true);
    };
    
    const handleCancel = e => {
        form.resetFields();
        setVisible(false);
    };

    const onFinish = values =>{
        form.validateFields()
          .then(values => {
            form.resetFields();
            setVisible(false);
            console.log(values.interest);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    return (
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
            <Row justify="space-between" align="middle">
                <Col>
                    <Title level={4}>About</Title>
                </Col>
                <Col>
                    <EditOutlined style={{fontSize:"1.4rem"}} onClick={showModal}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Paragraph style={{color:"#000"}}>
                    {user.bio}
                    </Paragraph>
                </Col>
            </Row>
            <Modal
                title="Edit about"
                visible={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                    Reset
                    </Button>,
                    <Button key="submit" type="primary" htmlType="submit" onClick={onFinish}>
                    Submit
                    </Button>,
                ]}
            >
            <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                <label htmlFor="about" >Summary</label>
                <Form.Item
                    name="about"
                    rules={[{ required: true, message: 'Please input about yourself!' }]}
                >
                    <TextArea />
                </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
