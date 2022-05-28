import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{
                backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello, Here Moshiur Rahman</h1>
                        <p className="mb-5">Junior Front End Web Developer</p>
                        <button className="btn btn-primary">Welcome !!</button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/mtCLqLm/239909995-3058198827788946-8227483718259351115-n.jpg?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Personal Information!</h1>
                        <p>Email: rmosiur324@gmail.com</p>
                        <p>Address: Savar, Ashulia, Dhaka</p>
                        <p>phone: 01846156464</p>
                        <button className="btn btn-primary">Know More</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-5xl font-bold text-center text-secondary'>The Technologies</h1>
                <div className='grid grid-cols-4 gap-4 my-8'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/pXG8Bgz/jackson-so-t-l5-FFH8-VA-unsplash.jpg?"  alt="Shoes" className="rounded-xl w-96" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">HTML</h2>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/mGnzDyd/nate-grant-u-GIUm-EDAmo-A-unsplash.jpg?w=400&h=225" alt="Shoes" className="rounded-xl w-44 h-44" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">CSS</h2>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/0cps8zD/Ieg-UPpg-400x400.jpg?w=400&h=225" alt="Shoes" className="rounded-xl w-44 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">JavaScript</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/zN3fPBG/download.png?w=400&h=225" alt="Shoes" className="rounded-xl w-44 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">React</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/G7xrK9n/download-1.png?w=400&h=225" alt="Shoes" className="rounded-xl w-44 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Node.js</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/CQtg191/express-logo.png?w=400&h=225" alt="Shoes" className="rounded-xl w-44 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Express.js</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/LCQ3c3D/images.png?w=400&h=225" alt="Shoes" className="rounded-xl w-44 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Firebase</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/0J0zbLG/kuzt9r42or1fxvlq2-Meta-Generic.png?w=400&h=225" alt="Shoes" className="rounded-xl w-44 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MongoDB</h2>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default MyPortfolio;