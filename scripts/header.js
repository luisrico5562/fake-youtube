const videoInfo = [
    {
        title: '1,000km Cable to the Stars - The Skyhook',
        author: 'Kurzgesagt – In a Nutshell &#10003;',
        time: '7:00',
        views: '11M views',
        timeReleased: '4 years ago',
        videoLink: 'https://www.youtube.com/watch?v=dqwpQarrDwk',
        channelLink: 'https://www.youtube.com/@kurzgesagt'
    }, {
        title: 'Why the US Army electrifies this water',
        author: 'Tom Scott &#10003;',
        time: '7:42',
        views: '17M views',
        timeReleased: '1 year ago',
        videoLink: 'https://www.youtube.com/watch?v=t3oLeSPINOk',
        channelLink: 'https://www.youtube.com/@TomScottGo'
    },  {
        title: "90's Lofi City 🌃 Rainy Lofi Hip Hop [ Chill Beats To Relax / Study To ]",
        author: 'Chill Cities Vibes',
        time: '11:54:59',
        views: '3.8M views',
        timeReleased: 'Streamed 5 months ago',
        videoLink: 'https://www.youtube.com/watch?v=q1pBwQl6zZ0',
        channelLink: 'https://www.youtube.com/@chillcitiesvibes'
    },  {
        title: 'how NASA writes space-proof code',
        author: 'Low Level Learning &#10003;',
        time: '6:03',
        views: '2M views',
        timeReleased: '1 year ago',
        videoLink: 'https://www.youtube.com/watch?v=GWYhtksrmhE',
        channelLink: 'https://www.youtube.com/@LowLevelLearning'
    },  {
        title: 'The Universe is Hostile to Computers',
        author: 'Veritasium &#10003;',
        time: '23:03',
        views: '21M views',
        timeReleased: '2 years ago',
        videoLink: 'https://www.youtube.com/watch?v=AaZ_RSt0KP8',
        channelLink: 'https://www.youtube.com/@veritasium'
    },  {
        title: "The Better Boarding Method Airlines Won't Use",
        author: 'CGP Grey &#10003;',
        time: '8:28',
        views: '21M views',
        timeReleased: '5 years ago',
        videoLink: 'https://www.youtube.com/watch?v=oAHbLRjF0vo',
        channelLink: 'https://www.youtube.com/@CGPGrey'
    },  {
        title: 'A playlist for when you are running out of time⏰ - The Best of Classical Music',
        author: 'Quintessence Of Classic',
        time: '3:07:56',
        views: '153K views',
        timeReleased: 'Streamed 4 months ago',
        videoLink: 'https://www.youtube.com/watch?v=Tw-5CjppGWU',
        channelLink: 'https://www.youtube.com/@QuintessenceOfClassic'
    },  {
        title: 'Official Minecraft Trailer',
        author: 'Minecraft &#10003;',
        time: '1:01',
        views: '168M views',
        timeReleased: '12 years ago',
        videoLink: 'https://www.youtube.com/watch?v=MmB9b5njVbA',
        channelLink: 'https://www.youtube.com/@minecraft'
    }, 
];

window.onload = renderThumbnails();

function renderThumbnails() {
    let thumbnailsHTML = '';
    for (let i = 0; i < videoInfo.length; i++) {
        const {title, author, time, views, timeReleased, videoLink, channelLink} = videoInfo[i];
        thumbnailsHTML += `
        <div class="video-preview">
          <div class="thumbnail-row">
            <a href="${videoLink}">
              <img class="thumbnail" src="thumbnails/thumbnail-${i+1}.webp">
                <div class="video-time">${time}</div>
            </a>
          </div>
          <div class="video-info-grid">
            <div class="channel-picture">
              <a href="${channelLink}">
                <img class="profile-picture" src="channel-pictures/channel-${i+1}.jpeg">
              </a>
            </div>
            <div class="video-info">
              <a href="${videoLink}">
                <p class="video-title">${title}</p>
              </a>
              <a href="${channelLink}">
                <p class="video-author">${author}</p>
              </a>
              <p class="video-stats">${views} <strong>&#183;</strong> ${timeReleased}</p>
            </div>
          </div>
        </div>
        `;
    }
    console.log(thumbnailsHTML);
    document.querySelector('.video-grid').innerHTML = thumbnailsHTML;
}

function changeCategory(selection) {
    const oldSelectedButton = document.querySelector('.category--selected');
    oldSelectedButton.classList.remove('category--selected');
    oldSelectedButton.classList.add('category');
    const selectedButton = document.querySelector(`.${selection}`);
    selectedButton.classList.remove('category');
    selectedButton.classList.add('category--selected');
}