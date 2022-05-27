import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-5'>
            <h1 className='text-secondary text-center font-bold text-4xl'>Some Important Questions and Answers</h1>
            <h2 className='text-2xl text-slate-700'>1.  How will you improve the performance of a React Application?</h2>
            <div>
                <ol>
                    <li>1.By ensuring components avoid unnessary props</li>
                    <li>2.Vertualize the lists in react</li>
                    <li>3.using dynamic import for code-spilting</li>
                    <li>4.Set component state in local</li>
                    <li>5.Don't use index as key</li>
                </ol>
            </div>
            <h2 className='text-2xl text-slate-700'>2. What are the different ways to manage a state in a React application?</h2>
            <p>There are four types of state to manage a state in a react application.They are explained below:
                <br />
                <span className='font-bold'>Local state :</span>Mostly local state is managed by the useState Hook. It is one kind of data to manage a component. 
                <br />
                <span className='font-bold'>Global State :</span>To manage across multiple components, the Global state is come forward.To get and update data global state is needed.
                <br />
                <span className='font-bold'>Server State: </span> Server state intregate data with UI which come from an external server. SWR and React Query Control server for server state.
                <br />
                <span className='font-bold'>URL State: </span>URL state exists on the url parameter.  pathname and query parameter also included with the url state
            </p>
            <h2 className='text-2xl text-slate-700'>3. How does prototypical inheritance work?</h2>
            <p>
                Proptotype is a method of get and set the value of an object. The value of the object can be a nested object. There are different types of portotype. Every object type has there own portotype. JavaScript is a prototype based Language.
            </p>
            <h2 className='text-2xl text-slate-700'>4. Why you do not set the state directly in React. Why you do not set products = [...] instead, you use the setProducts</h2>
            <h2 className='text-2xl text-slate-700'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
        </div>
    );
};

export default Blogs;