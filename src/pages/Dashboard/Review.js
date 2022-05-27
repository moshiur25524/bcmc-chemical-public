import React, { useEffect, useState } from 'react';
import UserReview from './UserReview';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('tools.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1 className='text-5xl text-accent text-center font-bold my-5'>Customer Review</h1>
            {
                reviews.map(review => <UserReview
                review = {review}
                ></UserReview>)
            }
        </div>
    );
};

export default Review;