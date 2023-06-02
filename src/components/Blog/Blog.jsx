import React from 'react';
import "./Blog.css"
const Blog = () => {
    return (
        <div>
            <div className='blog'>
                <h2>When should we use context API?</h2>
                <p>We should use the Context API in React when we need to share data or state between multiple components, avoid prop drilling, or provide a theme or authentication state to all components without passing them down through props.</p>
            </div>
            <div className='blog'>
                <h2>What is a custom hook?</h2>
                <p>A custom hook is a reusable function in React that encapsulates logic and stateful behavior, which can be shared across multiple components in a React application. It starts with the prefix 'use' and enables you to abstract away complex code from your components, making them more readable and maintainable.</p>
            </div>
            <div className='blog'>
                <h2>What is useRef?</h2>
                <p>useRef is a hook in React that returns a mutable ref object whose current property is initialized to a specified value. It allows us to create a persistent reference to an element or value in the component, which can be accessed across re-renders without triggering a component update.</p>
            </div>
            <div className='blog'>
                <h2>What is useMemo?</h2>
                <p>useMemo is a hook in React that memoizes the result of a function with certain dependencies and returns the memoized value. It is used to optimize performance by avoiding unnecessary computations and re-renders when the dependencies have not changed.</p>
            </div>
        </div>
    );
};

export default Blog;