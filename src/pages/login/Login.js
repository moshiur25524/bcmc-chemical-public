import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Login = () => {

    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, reseterror] = useSendPasswordResetEmail(
        auth
    );

    const handleLoginForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
        event.target.reset()
    }

    const handleResetPassword = async (event) => {
        const email = event.target.email.value;
        await sendPasswordResetEmail(email);
        toast('Email sending to reset password')
    }

    if (user) {
        navigate('/products')
    }

    if(loading || gloading || sending){
        return <Loading> </Loading>
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold"><span className='text-primary'>LOGIN</span> now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLoginForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="label-text-alt text-sm">Don't Have any Account? <Link to='/signup' className='text-secondary'>sing up now !</Link></p>
                                </label>
                                <label className="label">
                                    <button href="#" className="btn btn-link text-sm text-warning" onClick={handleResetPassword}>Forgot password?</button>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="LOGIN" className='btn btn-primary' />
                            </div>
                            
                        </form>
                        <div className="divider">OR</div>
                        <button className="btn btn-accent" onClick={() => signInWithGoogle()}>SIGNIN WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;