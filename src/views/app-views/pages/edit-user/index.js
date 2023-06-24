import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Form, Input, Row, Upload, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import { createRef } from 'react';
import { Component } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} navigate={useNavigate()} />;
}

export class EditProfile extends Component {
  avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
  formRef = createRef();
  state = {
    name: 'C',
    email: 'charlie.howard@themenate.com',
    website: 'dsdsd',
    userName: 'sdsdsdsds',
    phone: '444',
    address: {
      street: 'sdsd',
      city: 'dsdsdsdsd'
    },
  }

  componentDidMount() {
    let { id } = this.props.params;
    this.fetchData(id);
  }

  fetchData = id => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          name: user.name,
          email: user.email,
          website: user.website,
          userName: user.username,
          phone: user.phone,
          address: {
            street: user.address.street,
            city: user.address.city
          },
        })
      });
  };

  componentDidUpdate() {
    const { name, email, phone, website, address, userName } = this.state;
    this.formRef.current.setFieldsValue(
      {
        'name': name,
        'email': email,
        'website': website,
        'address': address.street,
        'city': address.city,
        "phone": phone,
        "username": userName
      });
  }


  render() {
    const { name, email, phone, website, address, userName } = this.state;

    const onFinish = values => {
      const key = 'updatable';
      message.loading({ content: 'Updating...', key });
      setTimeout(() => {
        this.setState({
          name: values.name,
          email: values.email,
          username: values.username,
          phone: values.phone,
          website: values.website,
          address: {
            street: values.address,
            city: values.city
          },
        })
        message.success({ content: 'Done!', key, duration: 2 });
        this.props.navigate(-1)
      }, 2000);
    };


    return (
      <>
        <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
          <Avatar size={90} src={`/img/avatars/thumb-${this.props.params.id}.jpg`} icon={<UserOutlined />} />
          <div className="ml-3 mt-md-0 mt-3">
            <Upload onChange={() => { }} showUploadList={false} action={""}>
              <Button type="primary">Change Avatar</Button>
            </Upload>
            <Button className="ml-2" onClick={() => { }}>Remove</Button>
          </div>
        </Flex>
        <div className="mt-4">
          <Form
            ref={this.formRef}
            name="basicInformation"
            layout="vertical"
            initialValues={
              {
                'name': name,
                'email': email,
                'website': website,
                'address': address.street,
                'city': address.city,
                "phone": phone,
                "username": userName
              }
            }
            onFinish={onFinish}
            onFinishFailed={() => { }}
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your name!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!'
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[{
                        required: true,
                        type: 'email',
                        message: 'Please enter a valid email!'
                      }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Phone Number"
                      name="phone"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Website"
                      name="website"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Address"
                      name="address"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="City"
                      name="city"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    )
  }
}

export default withParams(EditProfile)
