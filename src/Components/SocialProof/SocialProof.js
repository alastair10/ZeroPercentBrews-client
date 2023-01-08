import Rating from "./Rating";
import ReviewCard from "./ReviewCard";
import ButtonPrimary from "../Core/ButtonPrimary";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SocialProof = (props) => {
  const [error, setError] = useState(undefined);
  const user_id = window.localStorage.getItem("user_id");
  const token = window.localStorage.getItem("token");
  const { id } = useParams();
  const [commentBody, setCommentBody] = useState("");

  const handleChange = (e) => {
    setCommentBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // `http://localhost:4000/api/beers/${id}/reviews`
    // `https://zero-percent-brews-api.onrender.com/api/beers/${id}/reviews`
    fetch(`https://zero-percent-brews-api.onrender.com/api/beers/${id}/reviews`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        comments: {
          user_id: user_id,
          body: commentBody,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          setCommentBody("");
          console.log("comment added to DB");
        }
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <>
      {props.beerData && (
        <>
          <Rating beerData={props.beerData} />

          <div className="comment_box">
            <h2>What's brewin'?</h2>
            <form>
              <input
                type="text"
                name="comment"
                value={commentBody}
                onChange={handleChange}
              />
              <ButtonPrimary text={"Submit"} onClick={handleSubmit} />
            </form>
            {error && <p>error</p>}
          </div>

          {props.beerData.comments.map((comment) => {
            return (
              <ReviewCard
                author={comment.user_id.username}
                key={comment._id}
                body={comment.body}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default SocialProof;
