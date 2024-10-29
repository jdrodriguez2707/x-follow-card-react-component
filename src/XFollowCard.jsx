import "./XFollowCard.css";

export function XFollowCard() {
  return (
    <article className="follow-card">
      <div className="follow-card__profile-info">
        <img
          className="follow-card__profile-image"
          src="https://unavatar.io/youtube/icasadelrey"
          alt="Casa del Rey"
        />
        <div>
          <p className="follow-card__profile-name">
            <strong>Casa del Rey</strong>
          </p>
          <p className="follow-card__profile-username">@icasadelrey</p>
        </div>
      </div>
      <button className="follow-card__follow-btn">
        <span className="follow-card__follow-following-text">Follow</span>
        <span className="follow-card__unfollow-text">Unfollow</span>
      </button>
    </article>
  );
}
