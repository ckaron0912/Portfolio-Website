app.controller('ProjectController', ['$scope', function($scope){

  $scope.projects = [
    {
      modal_id: 'portfolioModal5',
      title: 'Bloxeo',
      img: 'img/portfolio/bloxeo.png',
      desc: 'Bloxeo is a web-based collaborative brainstorming application. It was made in an effort to make it easier on teams to come up with new ideas and vote on them. My contribution was back-end server development along with 5 others and were part of a larger team of 21 people for a whole semester.',
      url: 'http://bloxeo.herokuapp.com/',
      gitUrl: 'https://github.com/IGME-Research-Studio/bloxeo-server',
      client: 'College Project',
      date: 'December 2015',
      service: 'Web Development'
    },
    {
      modal_id: 'portfolioModal3',
      title: 'Chuters',
      img: 'img/portfolio/chuters.png',
      desc: 'Chuters is a casual game made by Derrick Hunt and myself. The player controls a soldier who is being parachuted into enemy territory. It is an endless game that continues until the player has run out of lives and every 3 successful consecutive landings earn them an airstrike. My contribution was mostly gameplay as well as some code to play animations from a sprite sheet.',
      url: 'projects/Chuters/index.html',
      gitUrl: 'https://github.com/ckaron0912/casualGames',
      client: 'College Project',
      date: 'April 2015',
      service: 'Web Development/Game Design'
    },
    {
      modal_id: 'portfolioModal4',
      title: 'Admiralty',
      img: 'img/portfolio/admiralty.png',
      desc: 'Admiralty is a game, slightly based off Cookie Clicker. It is a project showcasing server  programming. The requirements were to make a server using Node.js, express, MongoDB, Redis, Jade and Javascript. It also had to make use of user accounts. In the game, players have a steady income of resources and they use these resource to buy ships to increase their war score. Different types of ships offer their own score and miners increase the rate that resources come in. This was a solo project and was programmed entirly by me. The only things I cannot take credit for are the countdown circles and the ship art, both of which was found for free online.',
      url: 'https://admiralty.herokuapp.com/',
      gitUrl: 'https://github.com/ckaron0912/rich-media-mvc-project',
      client: 'College Project',
      date: 'November 2015',
      service: 'Web Development/Game Design'
    },
    {
      modal_id: 'portfolioModal6',
      title: 'YouDog Magic',
      img: 'img/portfolio/youdog.png',
      desc: 'YouDog Magic is a web app that allows a person to search for Magic: The Gathering cards. It also shows possible prices as well as a link to where it may be puchased. The project was to make a web that made use of two different web APIs. One API is a database that contains all of the cards and images along with estimated prices. The other provides a link that automatically searches ebay for the card. It was created in a team of two I was responsible for making sure the Magic API worked and displayed properly as well as the color scheme.',
      url: 'https://ckaron0912.github.io/YouDog-Magic/',
      gitUrl: 'https://github.com/ckaron0912/YouDog-Magic',
      client: 'College Project',
      date: 'May 2014',
      service: 'Web Development'
    },
    {
      modal_id: 'portfolioModal2',
      title: 'Lava Leap',
      img: 'img/portfolio/lava.png',
      desc: 'Lava Leap is an arcade-like platformer wher the objective is to stay alive as long as possible. The game features various platform types that all affect the player differently. The longer the player survives, the faster the game scrolls. It also has local multiplayer. 2 players with the keyboard or 4 players Gamepads. I worked in a group of 4 and my responsibility was working on gameplay as well as coding the animations of the characters and platforms.',
      notice: ': Due to complications, this games resolution is locked to 1080. Unfortunately, this means that smaller resolution moniters will cut off some of the game.',
      url: 'projects/Lava-Leap/index.html',
      gitUrl: 'https://github.com/kurtstohrer/Lava-Leap',
      client: 'College Project',
      date: 'December 2014',
      service: 'Web Development/Game Design'
    },
    {
      modal_id: 'portfolioModal1',
      title: 'Crystalline Collector',
      img: 'img/portfolio/crystal.png',
      desc: 'One of my first projects, the objective is to collect as many crystals as possible. Whoever has the most when the timer runs out wins. There are various power-ups that can increase max speed, acceleration, size or weight. It was created in a team of 4 and my contribution was mainly in gameplay and coding animations with spritesheets (including the background image transitions). The project was created in HTML5, Canvas and javascript.',
      notice: ': Due to complications, this games resolution is locked to 1080. Unfortunately, this means that smaller resolution moniters will cut off some of the game.',
      url: 'projects/Crystalline-Collector/index.html',
      gitUrl: 'https://github.com/kurtstohrer/Lava-Leap',
      client: 'College Project',
      date: 'November 2014',
      service: 'Web Development/Game Design'
    }
  ];
}]);
