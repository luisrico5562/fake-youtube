const videoInfo = [
    {
        title: '4.5 Billion Years in 1 Hour',
        author: 'Kurzgesagt – In a Nutshell &#10003;',
        time: '7:00',
        views: '10M views',
        timeReleased: '7 months ago',
        videoLink: 'https://www.youtube.com/watch?v=S7TUe5w6RHo',
        channelLink: 'https://www.youtube.com/@kurzgesagt',
        category: 'universe music',
        description: `Learn more about how complex life evolved with our new, elaborately detailed Timeline of Evolution Poster. 
            <br>Available only on the kurzgesagt shop here: <a href="">https://shop.kgs.link/timeline</a>`,
        commentCount: 28530
    }, {
        title: 'Why the US Army electrifies this water',
        author: 'Tom Scott &#10003;',
        time: '7:42',
        views: '17M views',
        timeReleased: '1 year ago',
        videoLink: 'https://www.youtube.com/watch?v=t3oLeSPINOk',
        channelLink: 'https://www.youtube.com/@TomScottGo',
        category: 'new-to-you media-theories',
        description: `The Chicago and Sanitary Ship Canal is the path that invasive carp would take to reach the Great Lakes. So to stop them, the US Army Corps of Engineers has installed an electric barrier. Although for obvious reasons, I didn't get to see it close up. [The interviewee is project manager Jeff Zuercher, whose name caption got missed out! Apologies, Jeff.]`,
        commentCount: 12681
    }, {
        title: "90's Lofi City 🌃 Rainy Lofi Hip Hop [ Chill Beats To Relax / Study To ]",
        author: 'Chill Cities Vibes',
        time: '11:54:59',
        views: '3.8M views',
        timeReleased: 'Streamed 5 months ago',
        videoLink: 'https://www.youtube.com/watch?v=q1pBwQl6zZ0',
        channelLink: 'https://www.youtube.com/@chillcitiesvibes',
        category: 'music',
        description: `90's Lofi City 🌃 Rainy Lofi Hip Hop [ Chill Beats To Relax / Study To ]<br>
            90's Lofi City 🌃 Rainy Lofi Hip Hop [ Chill Beats To Relax / Study To ]<br>
            90's Lofi City 🌃 Rainy Lofi Hip Hop [ Chill Beats To Relax / Study To ]`,
        commentCount: 816
    }, {
        title: 'how NASA writes space-proof code',
        author: 'Low Level Learning &#10003;',
        time: '6:03',
        views: '2M views',
        timeReleased: '1 year ago',
        videoLink: 'https://www.youtube.com/watch?v=GWYhtksrmhE',
        channelLink: 'https://www.youtube.com/@LowLevelLearning',
        category: 'computer-programming',
        description: `I've been told the worst thing that can happen to a developer is their code crashes in production? Well.... what happens if that production environment is outer space? `,
        commentCount: 2017
    }, {
        title: 'The Universe is Hostile to Computers',
        author: 'Veritasium &#10003;',
        time: '23:03',
        views: '21M views',
        timeReleased: '2 years ago',
        videoLink: 'https://www.youtube.com/watch?v=AaZ_RSt0KP8',
        channelLink: 'https://www.youtube.com/@veritasium',
        category: 'computer-programming universe media-theories',
        description: `Tiny particles from distant galaxies have caused plane accidents, election interference and game glitches. <br>
            This video is sponsored by -. The first 200 people to sign up via - get 20% off a yearly subscription.`,
        commentCount: 34562
    }, {
        title: "The Better Boarding Method Airlines Won't Use",
        author: 'CGP Grey &#10003;',
        time: '8:28',
        views: '21M views',
        timeReleased: '5 years ago',
        videoLink: 'https://www.youtube.com/watch?v=oAHbLRjF0vo',
        channelLink: 'https://www.youtube.com/@CGPGrey',
        category: 'new-to-you media-theories',
        description: `All boarding methods in full:    • All The Boarding Methods Shown in Full 🐝  <br>
            Adapted from 'Optimal Boarding Method for Airline Passengers': <a href="">https://arxiv.org/abs/0802.0733</a>`,
        commentCount: 22963
    }, {
        title: 'A playlist for when you are running out of time⏰ - The Best of Classical Music',
        author: 'Quintessence Of Classic',
        time: '3:07:56',
        views: '153K views',
        timeReleased: 'Streamed 4 months ago',
        videoLink: 'https://www.youtube.com/watch?v=Tw-5CjppGWU',
        channelLink: 'https://www.youtube.com/@QuintessenceOfClassic',
        category: 'music',
        description: `<a href="">#classicalmusic</a> <a href="">#deadline</a> <br>
            A playlist for when you are running out of time - The Best of Classical Music <br>
            _________________________________________________`,
        commentCount: 264
    }, {
        title: 'Official Minecraft Trailer',
        author: 'Minecraft &#10003;',
        time: '1:01',
        views: '168M views',
        timeReleased: '12 years ago',
        videoLink: 'https://www.youtube.com/watch?v=MmB9b5njVbA',
        channelLink: 'https://www.youtube.com/@minecraft',
        category: 'gaming',
        description: `Thank you to Vareide for making this awesome Minecraft trailer!<br>
            Check out other stuff from Vareide here: <a href="">/vareide</a>`,
        commentCount: 160528
    }, {
        title: 'I Made $114,127,975,963 by Exploiting the Public and Collapsing the Film Industry - Blockbuster Inc',
        author: "Let's Game It Out &#10003;",
        time: '29:31',
        views: '1.5M views',
        timeReleased: '2 days ago',
        videoLink: 'https://www.youtube.com/watch?v=hNRWpWEd_q4',
        channelLink: 'https://www.youtube.com/@LetsGameItOut',
        category: 'gaming recently-uploaded',
        description: `JOIN MY STREAMS! ►   <a href="">/letsgameitout</a>  <br>
        <br>
        Merch!  ► <a href="">http://bit.ly/LetsGameItOutStore</a>`,
        commentCount: 4873
    }, {
        title: 'Free Figma UX Design UI Essentials Course',
        author: 'Bring Your Own Laptop &#10003;',
        time: '2:57:40',
        views: '1.8M views',
        timeReleased: '2 years ago',
        videoLink: 'https://www.youtube.com/watch?v=kbZejnPXyLM',
        channelLink: 'https://www.youtube.com/@BringYourOwnLaptop',
        category: 'lessons',
        description: `Ready to take your Figma skills to the next level? Join our creative community for 10% off and get unlimited access to 30+ of my courses!: <a href="">https://byol.com/figess1023</a> <br>
            Watch the entire course: <a href="">https://BYOL.com/FIGFC</a>`,
        commentCount: 883
    }, {
        title: 'Age of Mythology: Retold – Xbox Games Showcase 2024',
        author: 'Age of Empires',
        time: '1:37',
        views: '380K views',
        timeReleased: '2 weeks ago',
        videoLink: 'https://www.youtube.com/watch?v=_OrFkvxC_N4',
        channelLink: 'https://www.youtube.com/@ageofempires',
        category: 'gaming',
        description: `Coming September 4, 2024 to Xbox and PC. Get up to 7 days advanced access with the Premium Edition. <br>
            From the creators of the award-winning Age of Empires franchise, Age of Mythology: Retold goes beyond history to a mythical age where gods, monsters, and humans collide. Combining the best elements of the beloved Age of Mythology with modern real-time strategy design and`,
        commentCount: 1727
    }, {
        title: "Let's Test the Economy 2.0 Patch by Building a New City LIVE! | Building and Brews!",
        author: 'City Planner Plays',
        time: 'LIVE',
        views: '1.7K watching',
        timeReleased: 'LIVE',
        videoLink: 'https://www.youtube.com/watch?v=HXy8QMTJyAI',
        channelLink: 'https://www.youtube.com/@CityPlannerPlays',
        category: 'live',
        description: `The economy 2.0 patch is finally live and we're going to see how it works by a brand new city.  This won't be the prettiest build, but I want to see how challenging the game is with the new patch.  This will be a mostly vanilla build, with the exception of a few visual enhancing mods.`,
        commentCount: 191
    }, {
        title: 'What happens when you divide by zero on a mechanical calculator?',
        author: 'Dylan Salas',
        time: '0:40',
        views: '3.6M views',
        timeReleased: '3 years ago',
        videoLink: 'https://www.youtube.com/watch?v=s_hbvRTGcUI',
        channelLink: 'https://www.youtube.com/@captaincosine',
        category: 'computer-hardware inventions',
        description: `This is how the Friden STW-10 handles 12345 ÷ 0. <br>
            <br>
            This calculator divides by trying to repeatedly subtract so it gets stuck in an infinite loop trying to subtract zero from the dividend. Fortunately `,
        commentCount: 2524
    }, {
        title: 'Graph Algorithms for Technical Interviews - Full Course',
        author: 'freeCodeCamp.org &#10003;',
        time: '2:12:19',
        views: '1.2M views',
        timeReleased: '2 years ago',
        videoLink: 'https://www.youtube.com/watch?v=tWVWeAqZ0WU',
        channelLink: 'https://www.youtube.com/@freecodecamp',
        category: 'computer-programming lessons',
        description: `Learn how to implement graph algorithms and how to use them to solve coding challenges.<br>
            <br>
            ✏️ This course was developed by Alvin Zablan from Structy. Check out Alvin's channel: <a href="">/alvintheprogrammer</a>`,
        commentCount: 712
    }, {
        title: 'How much was lost when the Library of Alexandria burned?',
        author: 'toldinstone &#10003;',
        time: '9:20',
        views: '2.8M views',
        timeReleased: '2 years ago',
        videoLink: 'https://www.youtube.com/watch?v=oQX9Lh65rAA',
        channelLink: 'https://www.youtube.com/@toldinstone',
        category: 'history new-to-you',
        description: `The Library of Alexandria was the classical world’s greatest repository of knowledge. How much was lost when it vanished in late antiquity? <br>
            This video is sponsored by Blinkist, an app that summarizes nonfiction books. Follow this link for a free 7-day trial: <a href="">https://www.blinkist.com/toldinstone</a>`,
        commentCount: 2851
    }, {
        title: 'Serialization in Hazel - My Game Engine',
        author: 'The Cherno &#10003;',
        time: '28:22',
        views: '10K views',
        timeReleased: '9 hours ago',
        videoLink: 'https://www.youtube.com/watch?v=EK4QSO_qO9Q',
        channelLink: 'https://www.youtube.com/@TheCherno',
        category: 'computer-programming inventions recently-uploaded ',
        description: `To try everything Brilliant has to offer—free—for a full 30 days, visit <a href="">https://brilliant.org/TheCherno</a>. You’ll also get 20% off an annual premium subscription.<br>
            <br>`,
        commentCount: 159
    }
];