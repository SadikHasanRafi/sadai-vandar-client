/* eslint-disable react/prop-types */
import  'react';

const ShowReview = (props) => {
    console.log(props.review)
    return (
        <div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.review.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{props.review.body}</span>
    </div>
</div>
        </div>
    );
};

export default ShowReview;