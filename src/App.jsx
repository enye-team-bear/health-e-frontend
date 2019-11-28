import React from 'react';
import logo from './logo.svg';
import './App.css';

const pageFiles = {
    code: 'src/App.js',
    edit: 'Edit',
    learn: 'Learn React',
    reload: 'and save to reload.',
};

const Link = () => (
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        {pageFiles.learn}
    </a>
);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {pageFiles.edit} <code>{pageFiles.code}</code>{' '}
                    {pageFiles.reload}
                </p>
                <Link />
            </header>
        </div>
    );
}

export default App;
