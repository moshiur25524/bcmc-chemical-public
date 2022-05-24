import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>This is My Blog page</h1>
            <h2>1.  How will you improve the performance of a React Application?</h2>
            <div>
                <ol>
                    <li>By ensuring components avoid unnessary props</li>
                    <li>Vertualize the lists in react</li>
                    <li>using dynamic import for code-spilting</li>
                    <li>Set component state in local</li>
                    <li>Don't use index as key</li>
                </ol>
            </div>
            <h2>2. What are the different ways to manage a state in a React application?</h2>
            <h2>3. How does prototypical inheritance work?</h2>
            <h2>4. Why you do not set the state directly in React. Why you do not set products = [...] instead, you use the setProducts</h2>
            <h2>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
        </div>
    );
};

export default Blogs;