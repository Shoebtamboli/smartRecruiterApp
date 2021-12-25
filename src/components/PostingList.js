import React from "react";
import { Link } from "react-router-dom";

const PostingList = (props) => {
  const postingItems = props.postings.map((posting) => {
    return (
      <div className="post">
        <Link to={posting.id}>
          <ul className="list-group">
            <li
              className="list-group-item list-group-item-primary"
              key={posting.id}
            >
              <h5>{posting.name}</h5>
              <h6>
                {posting.location.city}, {posting.customField[1].valueLabel}
              </h6>
            </li>
          </ul>
        </Link>
      </div>
    );
  });

  return <ul className="col-md-4 list-group">{postingItems}</ul>;
};

export default PostingList;
