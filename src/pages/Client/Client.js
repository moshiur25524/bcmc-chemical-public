import React from 'react';

const Client = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-orange-300 rounded-box place-items-center">
                <h2 className="card-title">Our Clients Speak!</h2>
                <p>
                    Consumer Choice Award Winner For Best Industrial Production in the city of New jersey</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Comment</button>
                </div>
            </div>

            <div className="grid flex-grow h-32 bg-red-300 rounded-box place-items-center">
                <div>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Client;