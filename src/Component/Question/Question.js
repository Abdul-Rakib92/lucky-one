import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='que-field'>
            <div className='que-ans'>
                <h1> 1. How react work?</h1>
                <p>প্রথমত React কোন Framework না। এটি Javascript এর একটা library. React দিয়ে HTML এর মত code ব্যাবহার করে খুব সাবলিন ভাবে User এর interface তৈরি করা যায়। React ব্যাবহার করে খুব সহজে যে কন ধরনের single page applications, mobile apps অথবা কোন বড় complex ধরনের apps বা website বানানো যায়। React ব্যাবহার এর জন্য JSX এর প্রয়োজন হয় না। তবে বেশির ভাগ মানুষ মনে করে Javascript এর কোড দিয়ে UI তৈরি করলে react এর ভিতরে কোন এ error বা warning থাকলে তা খুব সহজেই ধরা পড়ে।</p>
                
                

                <h1>2. props এবং state এই দুইটার মধ্যে পার্থক্য কি?</h1>
                <p>props আর state এর মূল পার্থক্য হোল, props ব্যাবহার করা হয় এক Component থেকে অন্য Component এ data পাঠানোর জন্য। আর state দিয়ে Component এর ভিতরের নিজস্ব data store করা হয়। state পুরাপুরি Component দ্বারা controlled করা হয়, এটি দিয়ে অন্য কোন Component এ data পাঠানো যায় না। props কে জানা হয় properties হিসেবে, এটি modify করা যায় না, এটি Immutable and read-only মাত্র। আর state হোল প্রতিটি Component এর নিজস্ব part, যেটা প্রয়োজন মত পরিবর্তন করা যায়। </p>
            </div>
        </div>
    );
};

export default Question;