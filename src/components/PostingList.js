import React from 'react';
import PostingListItem from './PostingListItem';

const PostingList = (props) => {
	const postingItems = props.postings.map((posting) => {
		return <PostingListItem key={posting.id} posting={posting} />;
	});

	return <ul className="col-md-4 list-group">{postingItems}</ul>;
};

export default PostingList;
