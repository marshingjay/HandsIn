import { useState, useContext } from 'react';
import UserContext from '../components/UserContext';

const SignInForm = () => {
    const { signIn } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, password] = useState('');
    const [message, setMessage] = useState('');

    const authenticate = e => {
        e.preventDefault();
        if(username != '' && password!=''){
            signIn(username, password);
        }else {
            setMessage('Enter username and password');
        }
    };

    return (
        <form>
            <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            {message != '' && <div className="message">{message}</div>}
            <button onClick={(e) => authenticate(e)}>
                Sign In
            </button>
        </form>
    );
};

export default SignInForm;