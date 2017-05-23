import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.text = this.text.bind(this);
    // this.photo = this.photo.bind(this);
    // this.quote = this.quote.bind(this);
    // this.link = this.link.bind(this);
    // this.chat = this.chat.bind(this);
    // this.audio = this.audio.bind(this);
    // this.video = this.video.bind(this);
  }

  text() {
    return (
      <div className="post-container">

        <img src={this.props.post.image} />

        <div className="post">
          <span className="poster">{this.props.post.username}</span>

          <div className="post-body">
            <p className="title">{this.props.post.title}</p>
          </div>

          <div className="description-container">
            <p className="post-description">{this.props.post.body}</p>
          </div>
        </div>
      </div>
    );
  }

  link() {
    return (
      <div className="post-container">

        <div className="post">
          <span className="poster">{this.props.post.username}</span>

          <div className="post-content">

          </div>

          <div className="description-container">
            <p className="post-description">{this.props.post.body}</p>
          </div>
        </div>
      </div>
    );
  }


  render() {
    const { post_type } = this.props.post;

    switch(post_type) {
      case "text":
        return this.text();
      case "photo":
        return this.photo();
      case "quote":
        return this.quote();
      case "link":
        return this.link();
      case "chat":
        return this.chat();
      case "audio":
        return this.audio();
      case "video":
        return this.video();
      default:
        return this.text();
    }
  }
}

export default FeedItem;
