import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/NTdjMrH/visuals-Jp-TY4g-Uvi-JM-unsplash.jpg?w=260&h=400" alt='Not Found page' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-9xl text-error font-bold">404!</h1>
                    <p className="py-6 text-secondary text-3xl">opps!!! Page Not Found</p>
                    <Link to='/' className="btn btn-primary">Go HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;