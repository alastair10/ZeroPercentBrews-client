import star from '../../images/star.svg';
import ButtonTertiary from "../Core/ButtonTertiary";
import ButtonSecondary from "../Core/ButtonSecondary";
import { useState } from "react";

import './BeerCardExpanded.css';

const BeerCardExpanded = ({ beerData }) => {
  const [isSaved, setIsSaved] = useState(false);
  const token = window.localStorage.getItem("token");
  const user_id = window.localStorage.getItem("user_id")

  const handleSave = () => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/user/${user_id}/saved`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        beer_id: beerData._id
         }),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          setIsSaved(true);
        }
      })
  }

  const handleUnsave = () => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/user/${user_id}/saved`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        beer_id: beerData._id,
        isSaved: true
         }),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          setIsSaved(false);
        }
      })
  }

  return (
    <>
      {beerData && (
        <>
          <h1 className='beer__title'>{beerData.title}</h1>
          <div className='beer__card__container'>
            <img className='beer__image' src={beerData.image} alt='' />
            <div className='beer__basic__info'>
              <div className='social__proof'>
                <div className='rating'>
                  <div className='rating__score'>{beerData.upvote}</div>
                  <img src={star} className='rating__star' alt='star__icon' />
                </div>
                <a className='reviews__info' href='#reviews'>
                  {beerData.comments.length} Comments
                </a>
              </div>
              {!isSaved ? 
                <ButtonSecondary text={'Save'} onClick={handleSave} /> : 
                <ButtonTertiary text={'Unsave'} onClick={handleUnsave} />}
              <div className='basic__info__desc'>{beerData.description}</div>

            </div>
            
          </div>
        </>
      )}
    </>
  );
};

export default BeerCardExpanded;
