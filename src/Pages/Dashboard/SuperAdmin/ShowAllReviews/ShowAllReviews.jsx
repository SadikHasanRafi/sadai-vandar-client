import axios from "axios";
import { useEffect, useState } from "react";
import ShowReview from "./ShowReview";

const ShowAllReviews = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
      const fetchReviews = async () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setReviews(res.data)
        })
      }

      fetchReviews()
      
      return () => {
        
      }
    }, [])
    


    return (
        <div>
            <p>{reviews.length}</p>
            

            {
                reviews.map((review,index)=>{
                    return <ShowReview
                        key={index}
                        review={review}
                    ></ShowReview>
                })
            }
            



        </div>
    );
};

export default ShowAllReviews;