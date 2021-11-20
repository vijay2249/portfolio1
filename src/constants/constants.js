let id = 0;
// source->source code
// visit -> live demo
export const projects = [
  {
    title: 'Smart-Brain',
    description: "Using React and react hooks and Clarifai api created a new project SmartBrain, this detects the human face in a picture, stores userdata in sql programmed heroku server",
    tags: ['React', 'API','HTML','Css','Hooks', "Redux" ,"SQL", "Heroku", "Github"],
    source: 'https://github.com/vijay2249/Smart-Brain',
    visit: 'https://vijay2249.github.io/Smart-Brain/',
    id: id++,
  },
  {
    title: 'Robo-Friends',
    description: "Using React, and some Html and Css styling properties created a new Robofriends app that combines the topics that i learned along my way to master React.js framework.",
    tags: ['React','JavaScript', 'Css', 'Html'],
    source: 'https://github.com/vijay2249/RoboFriends',
    visit: 'https://vijay2249.github.io/RoboFriends/',
    id: id++,
  },
  {
    title: "Delete duplicated in folder",
    description: "Sometimes its better to have a program/software that do check for duplicate files and deleted them, I got the same issue and created this python script. In this script based on the arguments provided, it either deletes/prints the duplicate files",
    source: "https://github.com/vijay2249/stress-relief",
    visit: "https://github.com/vijay2249/stress-relief",
    tags: ['Python', "Hashing"]
  },
  {
    title: 'Frontend Learnings',
    description:"The best move while learning web development is to apply the learnings and learn from the mistakes, so here are some of my learning applications done in codesandbox.io ",
    tags: ['React', 'JavaScript', 'Scss', 'Css', 'Bootstrap','Html','npm'],
    source: 'https://codesandbox.io/u/vijay2249',
    visit: 'https://codesandbox.io/u/vijay2249',
    id: id++,
  },
  {
    title: "Blog-Posts",
    description: 'Completely server rendered and using no-sql mongodb database, Personal Blog posts website based on NodeJS and EJS templates and ExpressJs',
    source: 'https://github.com/vijay2249/blog-posts-ejs',
    visit: "https://github.com/vijay2249/blog-posts-ejs",
    tags: ['NodeJs', 'EJS', 'MongDB', 'Mongoose', 'ExpressJs']
  },
  {
    title:'My CyberSecurity Learnings',
    description:'Apart from learning web development, in my free time I try to learn about cybersecurity and hence after learning something new, I try to share it to the world',
    image:'/images/5.png',
    tags: ['Python', 'Automation','OSINT','Networking', 'Linux'],
    source:'https://github.com/V1-ZEI',
    visit: 'https://github.com/V1-ZEI',
    id:id++,
  }
];

export const WebDevData = [
  { year: 2021, text: 'Started contributing to open source projects'},
  { year: 2020, text: 'Leisure time given to Cyber Security along with Web dev'},
  { year: 2019, text: 'Started Self learning intrest towards web dev'},
  { year: 2019, text: 'Started my journey'},
];

export const StudyData = [
  {year:"2019-", School:"National Institute of Technology"},
  {year:"2017-19", School:"Sri Chaitanya Jr. College, Vijayawada"},
  {year:"2015-17", School:"Sri Chaitanya School, Vijayawada"}
]
