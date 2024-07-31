const url = new URL(window.location.href);
const videoPlayed = parseInt(url.searchParams.get('v')) || 0;

window.onload = renderVideo();
window.onload = renderComments();
window.onload = renderRelatedVideos();

function renderVideo() {
    let videoPlayedHTML = '';

    const { title, author, time, views, timeReleased, videoLink, channelLink, category, description } = videoInfo[videoPlayed];

    videoPlayedHTML = `
        <img class="video-img" src="thumbnails/thumbnail-${videoPlayed+1}.webp">
        <p class="video-title">${title}</p>
        <div class="video-info-flex">
          

          <div class="video-info__channel">
            <a href="" class="channel-picture">
              <img src="channel-pictures/channel-${videoPlayed+1}.jpeg" class="channel-picture">
            </a>
            <div class="channel-info">
              <p class="channel-name">${author}</p>
              <p class="channel-subscribers">22.6M subscribers</p>
            </div>
            <button class="subscribe-button">Subscribe</button>
          </div>

          <div class="video-info__options">
            <button class="like-button">
              <img src="icons/like.svg" class="like-icon">
              610K
            </button>
            <button class="dislike-button">
              <img src="icons/like.svg" class="dislike-icon">
            </button>
            <button class="share-button">
              <img src="icons/share.svg" class="share-icon">
              Share
            </button>
            <button class="download-button">
              <img src="icons/download.svg" class="download-icon">
              Download
            </button>
            <button class="three-dots-button">
              <img src="icons/three-dots.svg" class="three-dots-icon">
            </button>
          </div>


        </div>
        <div class="video-description">
          <p><strong>${views}  ${timeReleased}</strong></p>
          <p>${description}</p>
          <p class="see-full-description"><strong>...more</strong></p>
        </div>
    `;
    document.querySelector('.js-video-played').innerHTML = videoPlayedHTML;
}

function createCommentPicture(channelId) {

  let commentPictureHTML = '';

  let rChannel = 255;
  let gChannel = 255;
  let bChannel = 255;

  while ((rChannel + gChannel + bChannel) > 600) {
    rChannel = Math.floor(Math.random() * 256);
    gChannel = Math.floor(Math.random() * 256);
    bChannel = Math.floor(Math.random() * 256);
  }

  commentPictureHTML = `
  <button style="
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 20px;
    margin-right: 15px;
    cursor: pointer;
    color: white;
    font-size: 22px;
    min-width: 40px;
    background-color: rgb(${rChannel}, ${gChannel}, ${bChannel});

  ">${channelId[0].toUpperCase()}</button>
  `;

  return commentPictureHTML;
}

function renderComments() {

    document.querySelector('.js-comment-count').innerHTML = 
    ` <p class="comment-count">${videoInfo[videoPlayed].commentCount} comments</p>
      <div class="sort-by-container"> 
        <div class="sort-by">
          <img src="icons/list.svg" class="list-icon">
          <p>Sort by</p>
        </div>
      </div>`;


    let commentsHTML = '';

    comments.forEach((comment, i) => {
        const {channelId, date, commentString, likes, replies} = comment;
        if (replies !== 0) {
            commentsHTML += `
            <div class="comment">
              ${createCommentPicture(channelId)}
              <div class="comment__content">
                <p class="comment__channel-id">@${channelId}</p>
                <p class="comment__date">${date}</p>
                <p>${commentString}</p>
                <div class="comment__likes">
                  <img src="icons/like.svg" class="like-icon">
                  <p class="comment__likes-amount">${likes}</p>
                  <img src="icons/like.svg" class="dislike-icon">
                  <p class="comment__reply">Reply</p>
                </div>
                <p class="comment__replies"><img class="down-arrow-icon" src="icons/down-arrow.svg">${replies} replies</p>
              </div>
              <img class="dots-icon" src="icons/three-dots-vertical.svg">
            </div>
            `;
        } else {
            commentsHTML += `
            <div class="comment">
              ${createCommentPicture(channelId)}
              <div class="comment__content">
                <p class="comment__channel-id">@${channelId}</p>
                <p class="comment__date">${date}</p>
                <p>${commentString}</p>
                <div class="comment__likes">
                  <img src="icons/like.svg" class="like-icon">
                  <p class="comment__likes-amount">${likes}</p>
                  <img src="icons/like.svg" class="dislike-icon">
                  <p class="comment__reply">Reply</p>
                </div>
              </div>
              <img class="dots-icon" src="icons/three-dots-vertical.svg">
            </div>
            `;
        }
    });
    document.querySelector('.js-comments').innerHTML = commentsHTML;
}

// <a href="watch-video.html?v=${i}">

function renderRelatedVideos() {
    let relatedVideosHTML = '';

    videoInfo.forEach((info, i) => {
        const { title, author, time, views, timeReleased, videoLink, channelLink, category } = info;
        if (videoPlayed != i) {
            relatedVideosHTML += `
            <div class="related-video">
            <div class="related-video__left-column">
                <div class="related-video__thumbnail-grid">
                  <a href="watch-video.html?v=${i}">
                    <img class="related-video__thumbnail" src="thumbnails/thumbnail-${i+1}.webp">
                    <div class="related-video__video-time">${time}</div>
                  </a>
                </div>
            <div class="related-video__info">
                <a href="watch-video.html?v=${i}">
                <p class="related-video__title">${title}</p>
                </a>
                <a href="">
                <p class="related-video__author">${author}</p>
                </a>
                <p class="related-video__stats">${views} views <strong>&#183;</strong> ${timeReleased}</p>
            </div>
            </div>
            <div class="related-video__right-column">
                <img class="dots-icon" src="icons/three-dots-vertical.svg">
            </div>
            </div>
            `;
        }
    });
    document.querySelector('.js-related-videos').innerHTML = relatedVideosHTML;
}