import './ReviewCard.css';

const ReviewCard = ({ author, body }) => {
  return (
    <>
      <div className='review__info'>
        <div className='review__header'>
          <h3 className='review__title'>Comment</h3>
        </div>
        <div className='review__body'>{body}</div>
        <div className='review__author'>{author}</div>
      </div>
    </>
  );
};

export default ReviewCard;
