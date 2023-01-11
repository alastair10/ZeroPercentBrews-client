import './ReviewCard.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ReviewCard = ({ author, body, date }) => {
  return (
    <>
      <div className='review__info'>
        <div className='review__header'>
          <h3 className='review__title'>{formatDistanceToNow(new Date(date), { addSuffix: true })}</h3>
        </div>
        <div className='review__body'>{body}</div>
        <div className='review__author'>{author}</div>
      </div>
    </>
  );
};

export default ReviewCard;
