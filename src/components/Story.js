import React from "react";

const Link = ({ url, title }) => <a href={url}>{title}</a>;

const Story = ({ story: { id, by, title, kids, time, url } }) => {
  return (
    <div className="story">
      <span className="story-date-time">
        {new Date(time * 1000).toLocaleDateString("en-US", {
          hour: "numeric",
          minute: "numeric",
        })}
      </span>
      <div className="story-title">
        <a href={url}>{title}</a>
      </div>
      <div className="story-info">
        <span className="story-author">
          by{" "}
          <Link url={`https://news.ycombinator.com/user?id${by}`} title={by} />
        </span>
        <span className="story-comments">
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>
  );
};

export default Story;
