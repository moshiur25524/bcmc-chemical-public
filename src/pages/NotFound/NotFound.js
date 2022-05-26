import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/NTdjMrH/visuals-Jp-TY4g-Uvi-JM-unsplash.jpg?w=260&h=400" alt='Not Found page' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-9xl text-error font-bold">404!</h1>
                    <p class="py-6 text-secondary text-3xl">opps!!! Page Not Found</p>
                    <Link to='/' class="btn btn-primary">Go HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;