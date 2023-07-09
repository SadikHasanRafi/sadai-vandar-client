import  { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const GiveReview = () => {
  const { user } = useContext(AuthContext)
  const [inputValue, setInputValue] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

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
    <div className='flex min-h-screen justify-center items-center'>
      {/* <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
        value={inputValue}
        onChange={handleInputChange}
      /> */}

      <div className="card flex-shrink-0 w-full max-w-md shadow-lg bg-base-100">
      <div className="card-body">
    <p className='text-center text-3xl font-semibold mb-5'>Review</p>

      <div className="form-control">
        <div className="rating gap-1 w-full flex justify-center">
        <input
          type="radio"
          name="rating-3 rating-lg"
          className="mask mask-star-2 bg-orange-400"
          value={1}
          checked={rating === 1}
          onChange={handleRatingChange}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-orange-400"
          value={2}
          checked={rating === 2}
          onChange={handleRatingChange}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-orange-400"
          value={3}
          checked={rating === 3}
          onChange={handleRatingChange}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-orange-400"
          value={4}
          checked={rating === 4}
          onChange={handleRatingChange}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-orange-400"
          value={5}
          checked={rating === 5}
          onChange={handleRatingChange}
        />
      </div>
        </div>




        <div className="form-control">
          <label className="label">
            <span className="label-text">Your email</span>
          </label>
          <input type="text"
            value={user?.email || "Email"}
            disabled
          placeholder="Type here" className="input input-bordered input-primary w-full max-w-xl" />        
          </div>



          <div className="form-control">
          <label className="label">
            <span className="label-text">Your name</span>
          </label>
          <input type="text" value={user?.displayName || "Anonymous"} disabled placeholder="Type here" className="input input-bordered input-primary w-full max-w-xl" />        
          </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <textarea type="text"
          placeholder="Comment" className="input input-bordered input-primary w-full max-w-xl pt-2"  value={comment} onChange={handleCommentChange}/>        
          </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleSubmit}>Review</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GiveReview;
