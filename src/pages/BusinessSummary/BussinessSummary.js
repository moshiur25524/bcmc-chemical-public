import React from 'react';
import { GrOverview } from 'react-icons/gr'
import { SiVirustotal } from 'react-icons/si'
import { BsPersonFill } from 'react-icons/bs'
import { MdReviews } from 'react-icons/md'

const BussinessSummary = () => {
    return (
        <div>
            <h1 className='text-center text-accent font-bold text-6xl my-12'>Our Business Summary</h1>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K+</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <GrOverview className="inline-block w-8 h-8 stroke-current"></GrOverview>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M+</div>
                    <div className="stat-desc">55% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <SiVirustotal className="inline-block w-8 h-8 stroke-current" />
                    </div>
                    <div className="stat-title">Total chemical</div>
                    <div className="stat-value text-primary">43.2K+</div>
                    <div className="stat-desc">60% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <BsPersonFill className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-title">Visiting Customer</div>
                    <div className="stat-value text-secondary">9.5K+</div>
                    <div className="stat-desc">80% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <MdReviews className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-title">Client Reviews</div>
                    <div className="stat-value text-primary">8K+</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

            </div>
        </div>
    );
};

export default BussinessSummary;