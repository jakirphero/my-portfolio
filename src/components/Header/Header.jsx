import { Link } from 'react-router-dom';
import profile from '../../assets/my-profile.png'
const Header = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={profile} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='md:w-1/2 md:pl-16 space-y-7'>
                    <h1 className="text-5xl font-bold text-purple-400">- I AM JAKIR.</h1>
                    <h2 className='text-4xl font-bold underline'>FRONT-END DEVELOPER</h2>
                    <p className="py-6 font-bold">I am web-developer in the World, Create React base Website and more Functional base website and Server.</p>
                    <Link to='/about'>
                        <button className="btn btn-primary">About More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;