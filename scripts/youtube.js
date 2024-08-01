window.onload = renderThumbnails();

function renderThumbnails(thumbnailsCategory = 'all') {
    let thumbnailsHTML = '';
    
    videoInfo.forEach((info, i) => {
        const { title, author, time, views, timeReleased, videoLink, channelLink, category } = info;
        if (category.includes(thumbnailsCategory) || thumbnailsCategory === 'all') {
            if (category === 'live') {
                thumbnailsHTML += `
                <div class="video-preview">
                    <div class="thumbnail-row">
                    <a href="watch-video.html?v=${i}">
                        <img class="thumbnail" src="thumbnails/thumbnail-${i + 1}.webp">
                    </a>
                    </div>
                    <div class="video-info-grid">
                    <div class="channel-picture">
                        <a href="">
                        <img class="profile-picture" src="channel-pictures/channel-${i + 1}.jpeg">
                        </a>
                    </div>
                    <div class="video-info">
                        <a href="watch-video.html?v=${i}">
                        <p class="video-title">${title}</p>
                        </a>
                        <a href="">
                        <p class="video-author">${author}</p>
                        </a>
                        <p class="video-stats">${views}</p>
                        <p class="live-video"><img src="icons/stream.svg"> ${timeReleased}</p>
                    </div>
                    </div>
                </div>
                `;
            } else {
                thumbnailsHTML += `
                <div class="video-preview">
                    <div class="thumbnail-row">
                    <a href="watch-video.html?v=${i}">
                        <img class="thumbnail" src="thumbnails/thumbnail-${i + 1}.webp">
                        <div class="video-time">${time}</div>
                    </a>
                    </div>
                    <div class="video-info-grid">
                    <div class="channel-picture">
                        <a href="">
                        <img class="profile-picture" src="channel-pictures/channel-${i + 1}.jpeg">
                        </a>
                    </div>
                    <div class="video-info">
                        <a href="watch-video.html?v=${i}">
                        <p class="video-title">${title}</p>
                        </a>
                        <a href="">
                        <p class="video-author">${author}</p>
                        </a>
                        <p class="video-stats">${views} <strong>&#183;</strong> ${timeReleased}</p>
                    </div>
                    </div>
                </div>
                `;
            }
        }
    });
    document.querySelector('.js-video-grid').innerHTML = thumbnailsHTML;
}

function changeCategory(selectedCategory) {
    const oldSelectedButton = document.querySelector('.category--selected');
    oldSelectedButton.classList.remove('category--selected');
    oldSelectedButton.classList.add('category');
    const selectedButton = document.querySelector(`.category--${selectedCategory}`);
    selectedButton.classList.remove('category');
    selectedButton.classList.add('category--selected');

    document.querySelector('.video-grid').innerHTML = '';

    renderThumbnails(selectedCategory);
}