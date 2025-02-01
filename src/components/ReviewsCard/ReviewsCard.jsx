import s from "./ReviewsCard.module.css";

const imgDefault =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

const ReviewsCard = ({ review }) => {
  const { author_details, author, content, created_at } = review;

  const data = new Date(created_at);
  const formattedDate = data.toLocaleString();

  return (
    <>
      <li className={s.item}>
        <div className={s.container}>
          <div className={s.avatar}>
            <img
              className={s.img}
              src={
                author_details.avatar_path
                  ? `https://image.tmdb.org/t/p/w500${author_details.avatar_path}`
                  : imgDefault
              }
              alt="avatar"
            />
          </div>
          <div className={s.details}>
            <h3>{author}</h3>
            <p>Created: {formattedDate}</p>
          </div>
        </div>
        <div className={s.content}>
          <p>{content}</p>
        </div>
      </li>
    </>
  );
};

export default ReviewsCard;
