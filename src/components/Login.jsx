import { initializeApp } from "firebase/app";
import { Button, Form, Input } from 'antd'

const firebaseConfig = {
  apiKey: "AIzaSyDSFwp55sUWih5Hs5k51kPRibV6NHQVaAQ",
  authDomain: "my-first-firestore-lm.firebaseapp.com",
  projectId: "my-first-firestore-lm",
  storageBucket: "my-first-firestore-lm.appspot.com",
  messagingSenderId: "815273013415",
  appId: "1:815273013415:web:603c96efd928c3ba37ab82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Login() {
    return (
        <section style={{ padding: '2em' }}>
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span:16 }}>
            <Form.Item label='Email' name='email'
                rules={[{ required: true, message: 'Please Enter A Valid Email' }]}
            >
            </Form.Item>
            <Input />
            <Form.Item label='Password' name='password'
                rules={[{ required: true, message: 'Please enter your password' }]}
            >
            <Input.Password />
            </Form.Item>
            <Form.Item
            wrapperCol={{span: 16, offset: 8}}>
                <Button type='primary' htmlType='submit' ></Button>
            </Form.Item>

        </Form>
        </section>
    )
}