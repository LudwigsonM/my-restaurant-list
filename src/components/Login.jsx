import { initializeApp } from "firebase/app";
import { Button, Form, Input } from 'antd'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useContext } from "react";
import { UserContext } from "../App";

const firebaseConfig = {
  apiKey: "AIzaSyDSFwp55sUWih5Hs5k51kPRibV6NHQVaAQ",
  authDomain: "my-first-firestore-lm.firebaseapp.com",
  projectId: "my-first-firestore-lm",
  storageBucket: "my-first-firestore-lm.appspot.com",
  messagingSenderId: "815273013415",
  appId: "1:815273013415:web:603c96efd928c3ba37ab82"
};

export default function Login() {
    const { setUser } = useContext(UserContext);
    const handleLogin = ({ email, password }) => {  
        const app = initializeApp(firebaseConfig); // Initialize Firebase // connect to firebase
        const auth = getAuth(app); // connect to firebase/auth
                         //login with FirebaseAuth
        signInWithEmailAndPassword(auth, email, password)
            .then(res => setUser(res.user))
            .catch(console.error)
}
    const handleGoogleLogin = () => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(res => setUser(res.user))
            .catch(console.error)
}
    return (
        <section style={{ padding: '2em' }}>
        <Form
            onFinish={handleLogin}
            labelCol={{ span: 8 }}
            wrapperCol={{ span:16 }}
            >
            <Form.Item label='Email' name='email'
                rules={[{ required: true, message: 'Please Enter A Valid Email' }]}
            >
            <Input />
            </Form.Item>
            <Form.Item label='Password' name='password'
                rules={[{ required: true, message: 'Please enter your password' }]}
            >
            <Input.Password />
            </Form.Item>
            <Form.Item
            wrapperCol={{span: 16, offset: 8}}
            >
                <Button type='primary' htmlType='submit' ></Button>
            </Form.Item>
            <Form.Item
            wrapperCol={{span: 16, offset: 8}}
            >
                <Button onClick={handleGoogleLogin}>Google Login</Button>
            </Form.Item>
        </Form>
    </section>
    )
}