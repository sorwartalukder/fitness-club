import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div className='py-5 text-color'>
                <Question
                    question="1. How does react work?"
                    ans="React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.

                    Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred."
                ></Question>
                <Question question="2.What is the difference between props and state?" ans="State is internal and controlled by the component itself while Props are external and controlled by whatever renders the component."></Question>
                <Question question="3. What is the useEffect without data load?" ans="useEffect use-> 1. Validating input field. 2. Live filtering. 3.  Trigger animation on new array value"></Question>
            </div>
        </Container>

    );
};
const Question = ({ question, ans }) => {
    return (
        <div className=' mt-5 '>
            <h1 >{question}</h1>
            <p className='fs-4'>{ans}</p>
        </div>
    );
};

export default Blog;