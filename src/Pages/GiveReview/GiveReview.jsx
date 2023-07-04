import  { useState } from 'react';

const GiveReview = () => {
  const [inputValue, setInputValue] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Input Value:', inputValue);
    console.log('Rating:', rating);
    console.log('Comment:', comment);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
        value={inputValue}
        onChange={handleInputChange}
      />

      <div className="rating gap-1">
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-red-400"
          value={1}
          checked={rating === 1}
          onChange={handleRatingChange}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-orange-400"
          value={2}
          checked={rating === 2}
          onChange={handleRatingChange}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-yellow-400"
          value={3}
          checked={rating === 3}
          onChange={handleRatingChange}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-lime-400"
          value={4}
          checked={rating === 4}
          onChange={handleRatingChange}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-green-400"
          value={5}
          checked={rating === 5}
          onChange={handleRatingChange}
        />
      </div>

      <textarea
        className="textarea textarea-primary"
        placeholder="Comment"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Button
      </button>
    </div>
  );
};

export default GiveReview;
