import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
    <h2 className='head' tabIndex="5">
        Namaste React using JSX element
    </h2>
);

const HeadingComponent = () => (
    <div id='container'>
        {Title()}
        <Title />
        <Title></Title>
        <h1 className='heading'>Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);