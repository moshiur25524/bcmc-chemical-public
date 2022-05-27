import React from 'react';

const UserReview = ({ review }) => {
    const { img, name, minimum_Quantity, available_Quantity, price, short_description } = review;
    return (
        <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" className='object-cover h-48 w-96'/></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{short_description}</p>
                <div class="rating rating-half">
                    <input type="radio" name="rating-9" class="rating-hidden" />
                    <input type="radio" name="rating-9" class="mask mask-star-2" />
                    <input type="radio" name="rating-9" class="mask mask-star-2" checked />
                    <input type="radio" name="rating-9" class="mask mask-star-2" />
                    <input type="radio" name="rating-9" class="mask mask-star-2" />
                    <input type="radio" name="rating-9" class="mask mask-star-2" />
                </div>
            </div>
        </div>
    );
};

export default UserReview;