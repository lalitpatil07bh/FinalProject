import React, { useState } from 'react';


const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit= (e)=>{
        e.preventDefault();

        const formData= {
            feedback,
            email,
            rating
        };
    }
    return (

        );
    
};

