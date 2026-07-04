import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {

    const navigate = useNavigate()

    const { login } = useAuth();

    const onFinish = (_values: any) => {
        login();
        navigate('/dashboard')
    }


  return (
    <div>
        <h1>Login Page</h1>
            <Form onFinish={onFinish}>
                <Form.Item 
                    name="email" 
                    
                    rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }]}>
                    
                    <Input type = "email" placeholder="Email"  />
                </Form.Item>
                <Form.Item name="password">
                    <Input placeholder="Password" />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form>
        </div>

        
    )
    }

export default LoginPage