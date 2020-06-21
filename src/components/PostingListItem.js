import React from 'react';
import { Link } from 'react-router-dom';

const PostingListItem = (props) => {
	const posting = props.posting;

	return (
		<Link to={posting.id}>
			<li className="list-group-item" key={posting.id}>
				<div className="post-list">
					<h5>{posting.name}</h5>
					<h6>
						{posting.location.city}, {posting.customField[1].valueLabel}
					</h6>
				</div>
			</li>
		</Link>
	);
};

export default PostingListItem;
