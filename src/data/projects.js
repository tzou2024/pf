import spotlightimg from './images/spotlight.png'
import notesappimg from './images/notesapp.png'
import gradimg from './images/grad.png'
import wordleimg from './images/wordle.png'
import edgiimg from './images/edgi.png'
import plantimg from './images/plant.png'
import bipedal from './images/bipedal.png'
import reach from './images/reach4help.png'
import bod from './images/BOD.png' 
import hydroimg from './images/hydro.png'
const data = [
    {
        name: "Hydro",
        description: 'part of a cloud-based automated hydroponics system as part of for Olin\'s sustainable food systems project team.',
        bullets: ["Implement cloud-based automated hydroponics cart and wall using microcontrollers, containerized and automatically deployed to ECS using Git Actions", "Custom API for garden logging and configuration using python and FastAPI", "Data Processing Microservice 'Mother Nature' in Go automatically deployed using Hetzner and Ansible Playbooks", "Responsive monitoring Web App in React"
        ],
        tags: ["Backend", "Python", "Go",  "FastAPI", "MongoDB", "AWS", "CI/CD", "EC2", "React"],
        repos: {
            "API": "https://github.com/tzou2024/hydrangea",
            "MN":"https://github.com/Olin-Hydro/mother-nature",
            "Front End": "https://github.com/Olin-Hydro/saffron",
            "Design Doc": "https://docs.google.com/document/d/1Pc2PLaOh7dCDCJWnpELBCgfNip4MotUVfBgKtQ5LqRU/edit?usp=sharing"
        },
        img: hydroimg
    },
    {
        name: "Spotlight",
        bullets:["Clean responsive UI using React, Chakra UI with modals, alerts, and color modes.", "Image Storage using Amazon S3 Buckets", "API in Javascript using express with multiple CRUD operations and auth, database in MongoDB"],
        description: 'a social media app allowing users to "Spotlight" personal stories and meaningful events.',
        tags: ["React", "Chakra UI", "Express", "AWS", "Mongoose/MongoDB"],
        repos: {
            "Website": "https://transcendent-kelpie-8238b1.netlify.app/",
            "Front End": "https://github.com/tzou2024/project-3-react",
            "Back End": "https://github.com/tzou2024/project-3-mongoose-express",
        },
        img: spotlightimg
    },
    {
        name: "Notes App",
        bullets:[],
        description: 'a google docs style note taking app with folders and notes. Backend with folder, note, and user models, one-to-many relationships and token auth. Front end with React.',
        tags: ["React", "Chakra UI", "Django", "PostgreSQL", "Django REST framework"],
        repos: {
            "Front End": "https://github.com/tzou2024/noteclient",
            "Back End": "https://github.com/tzou2024/noteserver",
        },
        img: notesappimg
    },
    {
        name: "Grad",
        bullets:[],
        description: 'a graduation requirement tracker for Olin college. 2 complete CRUD operations, auth, and seeded data. Designed using superkube CSS and Javascript.',
        tags: ["MongoDB/Mongoose", "Express", "Liquid", "Superkube", "User Oriented Design", "Javascript"],
        repos: {
            "Repo": "https://github.com/tzou2024/GraduationPlanner",
        },
        img: gradimg
    },
    {
        name: "W||dle",
        bullets: [],
        description: "a wordle clone with multiplayer, variable word length, and timed modes",
        tags: ["Vanilla JavaSript", "HTML", "CSS", "API"],
        repos: {
            "Website": "https://tzou2024.github.io/wordle/",
            "Repo": "https://github.com/tzou2024/wordle",
        },
        img: wordleimg
    },
    {
        name: "EDGI",
        bullets: [],
        description: "a notebook exposing race-based data gaps in the EPA's Enforcement and Compliance History Online database. Made as part of PInT, Olin's Public Interest Technology Project Team",
        tags: ["DataScience", "EPA", "Environmental Justice"],
        repos: {
            "Website": "https://colab.research.google.com/drive/1UY7XKbKMt3aG5j-MGR2b_IhTmV4qqC88?usp=sharing%2F"
        },
        img: edgiimg
    },
    {
        name: "ML Disease Identifier",
        bullets: [],
        description: "a convolutional neural network in Pytorch to detect diseases in bean crops based on images o their leaves. 85% accuracy on a diverse training set of images taken from a smartphone",
        tags: ["Machine Learning", "Pytorch", "Python"],
        repos: {
            "Website": "https://colab.research.google.com/drive/1eG-8ldb9euBKTyACA6XzEzOGCdSGH-v5?usp=sharing"
        },
        img: plantimg
    },
    {
        name: "ML Bipedal Walker",
        bullets: [],
        description: "a solution reinforcement learning algorithm for the OpenAI Bipedal Walker Model using PPO Actor-Critic",
        tags: ["Machine Learning", "OpenAI", "Keras"],
        repos: {
            "Website": "https://docs.google.com/presentation/d/1uodCubXmw-QO0ZTsGR8Wr9Br0pX0QflNKuw9jVlFZFo/edit?usp=sharing"
        },
        img: bipedal
    },
    {
        name: "Reach4Help",
        bullets: [],
        description: "a part of my work on the Data Science Team doing data Science and development for nonprofit democratizing access to volunteer help worldwide through accessible online mutual-aid program. I parsed and filtered User-Submitted Data for input into resource map, cleaned and synced data across web-storage spaces, including Airtable, Firestore, and Algolia. Currently working on a project compiling and analyzing social media trends and language to create real-time location-specific crisis and resource demand maps",
        tags: ["DataScience", "NLP", "Big Data"],
        repos: {
        },
        img: reach
    },
    {
        name: "Gauntlet",
        bullets: [],
        description: "a program to autonomously pilot a NEATO through a gauntlet filled with obstacle. We used a RANSAC algorithm and LIDAR scans to detect walls and obstacles. We combined that with a pro-programmed Barrel of Benevolence to make a potential field, and used the gradient vector at points in the vector field to find a path of descent.",
        tags: ["RANSAC", "Gradient Descent", "Linear Algebra", "Matlab"],
        repos: {
            "Website": "https://docs.google.com/document/d/18S6SBOwofDlwyvvGMqeGAvr5HjAt8ZRSVZMJ0o-GBtI/edit?usp=sharing"
        },
        img: bod
    },
    
    
]

export default data
