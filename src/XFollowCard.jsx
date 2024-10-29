import "./XFollowCard.css";

export function XFollowCard({ children, userName, isFollowing }) {
  const isFollowingText = isFollowing ? "Following" : "Follow";
  const followBtnClassName = isFollowing
    ? "follow-card__follow-btn follow-card__follow-btn--is-following"
    : "follow-card__follow-btn";

  return (
    <article className="follow-card">
      <div className="follow-card__profile-info">
        <img
          className="follow-card__profile-image"
          src={`https://unavatar.io/youtube/${userName}`}
          alt={children}
        />
        <div>
          <p className="follow-card__profile-name">
            <strong>{children}</strong>
          </p>
          <p className="follow-card__profile-username">@{userName}</p>
        </div>
      </div>
      <button className={followBtnClassName}>
        <span className="follow-card__follow-following-text">
          {isFollowingText}
        </span>
        <span className="follow-card__unfollow-text">Unfollow</span>
      </button>
    </article>
  );
}
