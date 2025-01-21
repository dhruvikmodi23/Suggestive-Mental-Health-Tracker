import React from 'react';
import DynamicQuestion from './DynamicQuestion';

const Question = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Dynamic Question Generator</h1>
            <DynamicQuestion />
        </div>
    );
};

export default Question;
