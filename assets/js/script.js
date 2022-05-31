const linksObject = {
  BountyBook: {
    text: "Horrorscope",
    link: "https://bountybook.herokuapp.com/",
    image: "./assets/images/cowboy-01.jpg",
  },
  Horrorscope: {
    text: "Horrorscope",
    link: "https://horrorscopes-project.herokuapp.com/",
    image: "./assets/images/primary-star-bg-2.jpg",
  },
  newJobs: {
    text: "newJobs(you) - Job Aggregator",
    link: "https://spencerhulse.github.io/newJobs-you/landingpage.html",
    image: "./assets/images/newjobsyou.svg",
  },
  runBuddy: {
    text: "Run Buddy",
    link: "https://atticus-robinson.github.io/run-buddy/",
    image: "./assets/images/hero-bg.jpg",
  },
  passgem: {
    text: "PassGem Password Generator",
    link: "https://atticus-robinson.github.io/PassGem/",
    image: "./assets/images/passgem.png",
  },
  taskinator: {
    text: "Taskinator Task Tracker",
    link: "https://atticus-robinson.github.io/taskinator/",
    image: "./assets/images/robot.jpg",
  },
  willow: {
    text: "Willow",
    link: "https://www.instagram.com/atticus.robinson/?hl=en",
    image: "./assets/images/30-1.jpg",
  },
  steeple: {
    text: "Steeple",
    link: "https://www.instagram.com/atticus.robinson/?hl=en",
    image: "./assets/images/BW-7.jpg",
  },
  friends: {
    text: "Friends",
    link: "https://www.instagram.com/atticus.robinson/?hl=en",
    image: "./assets/images/30-6.jpg",
  },
  hey: {
    text: "Hey, Take A Picture",
    link: "https://www.instagram.com/atticus.robinson/?hl=en",
    image: "./assets/images/BW-5.jpg",
  },
  hiking: {
    text: "Hiking",
    link: "https://www.instagram.com/atticus.robinson/?hl=en",
    image: "./assets/images/30-5.jpg",
  },
};

for (const increment in linksObject) {
  var ul = $(".work");

  var tile = $("<li>").addClass("tile");
  var link = $("<a>").attr("href", linksObject[increment].link);
  console.log(linksObject[increment].img);
  var image = $("<img>").attr("src", linksObject[increment].image);
  var overlay = $("<div>").addClass("overlay");
  var tileText = $("<div>")
    .addClass("tile-text")
    .text(linksObject[increment].text);

  overlay.append(tileText);
  link.append(image, overlay);
  tile.append(link);
  ul.append(tile);
}
