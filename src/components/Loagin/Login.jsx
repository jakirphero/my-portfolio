
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider";

const Login = () => {
    
    const {logIn} = useContext(UserContext);

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-center text-5xl">Login</h2>
                        <form onSubmit={handelLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p>New to Account? <Link to='/register' className="text-purple-500 font-bold">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;