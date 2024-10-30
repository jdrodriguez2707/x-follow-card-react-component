import { useState } from 'react'
import PropTypes from 'prop-types'
import './XFollowCard.css'

export function XFollowCard({ children, userName, initialIsFollowing }) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

	const handleClickFollowBtn = () => {
		setIsFollowing(prevIsFollowing => !prevIsFollowing)
	}

	const isFollowingText = isFollowing ? 'Following' : 'Follow'
	const followBtnClassName = isFollowing
		? 'follow-card__follow-btn follow-card__follow-btn--is-following'
		: 'follow-card__follow-btn'

	return (
		<article className='follow-card'>
			<div className='follow-card__profile-info'>
				<img
					className='follow-card__profile-image'
					src={`https://unavatar.io/youtube/${userName}`}
					alt={children}
				/>
				<div>
					<p className='follow-card__profile-name'>
						<strong>{children}</strong>
					</p>
					<p className='follow-card__profile-username'>@{userName}</p>
				</div>
			</div>
			<button className={followBtnClassName} onClick={handleClickFollowBtn}>
				<span className='follow-card__follow-following-text'>
					{isFollowingText}
				</span>
				<span className='follow-card__unfollow-text'>Unfollow</span>
			</button>
		</article>
	)
}

XFollowCard.propTypes = {
	children: PropTypes.node.isRequired,
	userName: PropTypes.string.isRequired,
	initialIsFollowing: PropTypes.bool.isRequired,
}
