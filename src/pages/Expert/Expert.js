import React from 'react';

const Expert = () => {
    return (
        <div>
            <h1 className='text-center text-accent font-bold text-9xl my-12'>Our Experts</h1>
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/JxbMQjp/julia-koblitz-Rl-OAw-Xt2f-EA-unsplash.jpg?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Anandi Gopal Joshi</h2>
                        <p>Anandi Gopal Joshi is an Indian chemist and X-ray crystallographer whose work was central to the understanding of the molecular structures of DNA, RNA, viruses, coal, and graphite.</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/p1kLm3t/jametlene-reskp-Lob-A-aac-Tt-Y-unsplash.jpg?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Carolyn Bertozzi</h2>
                        <p>Carolyn Bertozzi is the Anne T. and Robert M. Bass Professor in the School of Humanities and Sciences at Stanford University, and is an investigator at the Howard Hughes Medical Institute. </p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/thbDbbZ/fulvio-ciccolo-0-YZki-HNp-N4-unsplash.jpg?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Eric Scerri</h2>
                        <p>Scerri is Lecturer at the University of California, Los Angeles. He is also Founder and Editor-in-Chief of Foundations of Chemistry, a triannual a peer-reviewed academic journal. Yonath is Director of the Helen and Milton A. Kimmelman Center for Biomolecular Structure and Assembly </p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/27JP33h/mick-henson-v-RPl-Y8m5y-IA-unsplash.jpg?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Ada Yonath</h2>
                        <p>Yonath is Director of the Helen and Milton A. Kimmelman Center for Biomolecular Structure and Assembly of the Weizmann Institute of Science. She received her bachelor’s degree in Chemistry from the Hebrew University of Jerusalem in 1962</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;