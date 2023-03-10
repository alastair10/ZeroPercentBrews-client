import styles from './ButtonUpVote.module.css';

const ButtonUpVote = ({ handleKegVote }) => {
  return (
    <button onClick={handleKegVote} className={styles.upvote__button}>
      <svg
        viewBox='0 0 513 513'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.up}
      >
        <g transform='matrix(0.962053,0,0,-0.999998,9.71792,512.171)'>
          <g>
            <path
              className={styles.fill}
              d='M479.046,283.925C477.382,279.936 473.499,277.333 469.19,277.333L352.305,277.333L352.305,10.667C352.305,4.779 347.526,0 341.638,0L170.971,0C165.083,0 160.304,4.779 160.304,10.667L160.304,277.334L42.971,277.334C38.662,277.334 34.779,279.937 33.115,283.905C31.472,287.894 32.368,292.481 35.419,295.532L248.219,509.036C250.224,511.041 252.934,512.172 255.771,512.172C258.608,512.172 261.318,511.041 263.323,509.057L476.742,295.553C479.793,292.501 480.71,287.915 479.046,283.925Z'
            />
            <path
              className={styles.outline}
              d='M479.046,283.925C477.382,279.936 473.499,277.333 469.19,277.333L352.305,277.333L352.305,10.667C352.305,4.779 347.526,0 341.638,0L170.971,0C165.083,0 160.304,4.779 160.304,10.667L160.304,277.334L42.971,277.334C38.662,277.334 34.779,279.937 33.115,283.905C31.472,287.894 32.368,292.481 35.419,295.532L248.219,509.036C250.224,511.041 252.934,512.172 255.771,512.172C258.608,512.172 261.318,511.041 263.323,509.057L476.742,295.553C479.793,292.501 480.71,287.915 479.046,283.925ZM469.399,287.649C469.345,287.52 469.33,287.333 469.19,287.333L352.305,287.333C346.564,287.333 341.911,282.856 341.911,277.333L341.911,10.667C341.911,10.382 341.923,10 341.638,10L170.971,10C170.686,10 170.698,10.382 170.698,10.667L170.698,277.334C170.698,282.857 166.045,287.334 160.304,287.334L42.971,287.334C42.831,287.334 42.809,287.517 42.755,287.646C42.637,287.932 42.647,288.337 42.91,288.599C42.914,288.603 42.918,288.607 42.922,288.611L255.722,502.115C255.733,502.126 255.738,502.172 255.771,502.172C255.817,502.172 255.838,502.118 255.87,502.086C255.831,502.125 469.25,288.621 469.25,288.621C469.25,288.621 469.25,288.621 469.25,288.621C469.503,288.368 469.537,287.98 469.399,287.649L469.399,287.649Z'
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

export default ButtonUpVote;
