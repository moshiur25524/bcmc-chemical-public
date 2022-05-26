import React from 'react';

const Client = () => {
    return (
        <div class="flex flex-col w-full lg:flex-row">
            <div class="grid flex-grow h-32 card bg-orange-300 rounded-box place-items-center">
                <h2 class="card-title">Our Clients Speak!</h2>
                <p>
                    Consumer Choice Award Winner For Best Industrial Production in the city of New jersey</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>

            <div class="grid flex-grow h-32 card bg-cyan-300 rounded-box place-items-center">content</div>
        </div>
    );
};

export default Client;