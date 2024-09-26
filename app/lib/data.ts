const data = {
    app_info: {
        title: "Swift-Portfo",
        description: "Welcome to the portfolio of a passionate web developer.",
        light_logo: "/images/logo/light-logo.svg",
        dark_logo: "/images/logo/dark-logo.svg"
    },
    about: {
        first_name: "Arlo",
        last_name: "Kalen",
        info: "Experienced web developer specializing in front-end and back-end technologies. Proficient in JavaScript, HTML, CSS, and various web frameworks. Committed to delivering high-quality, responsive websites.",
        experience: "With over 8 years of experience in web development, I've had the opportunity to work on diverse projects ranging from e-commerce platforms to interactive web applications.",
        image: "/images/common/about-me.png",
        resume_link: "/",
        socials: [
            {
                link: "/",
                icon: `<svg viewBox='0 0 20 20'>
                <path fill='currentColor' d='M10,0.5c-5.247,0-9.5,4.253-9.5,9.5c0,5.247,4.253,9.5,9.5,9.5c5.247,0,9.5-4.253,9.5-9.5C19.5,4.753,15.247,0.5,10,0.5 M10,18.637c-4.77,0-8.636-3.867-8.636-8.637S5.23,1.364,10,1.364S18.637,5.23,18.637,10S14.77,18.637,10,18.637 M10.858,7.949c0-0.349,0.036-0.536,0.573-0.536h0.719v-1.3H11c-1.38,0-1.866,0.65-1.866,1.743v0.845h-0.86V10h0.86v3.887h1.723V10h1.149l0.152-1.299h-1.302L10.858,7.949z'></path>
            </svg>`
            },
            {
                link: "/",
                icon: `<svg viewBox='0 0 20 20'>
                <path
                    fill='currentColor'
                    d='M14.467,6.707c-0.34,0.198-0.715,0.342-1.115,0.419c-0.318-0.335-0.775-0.545-1.279-0.545c-0.969,0-1.754,0.773-1.754,1.727c0,0.135,0.015,0.267,0.045,0.394C8.905,8.628,7.612,7.94,6.747,6.896C6.596,7.151,6.509,7.448,6.509,7.764c0,0.599,0.31,1.128,0.78,1.438C7.002,9.192,6.732,9.115,6.495,8.985c0,0.007,0,0.014,0,0.021c0,0.837,0.605,1.535,1.408,1.694c-0.147,0.04-0.302,0.06-0.462,0.06c-0.113,0-0.223-0.011-0.33-0.031c0.223,0.687,0.871,1.186,1.638,1.199c-0.6,0.464-1.356,0.739-2.179,0.739c-0.142,0-0.281-0.007-0.418-0.023c0.777,0.489,1.699,0.775,2.689,0.775c3.228,0,4.991-2.63,4.991-4.913c0-0.075-0.002-0.149-0.004-0.223c0.342-0.244,0.639-0.547,0.875-0.894c-0.316,0.137-0.652,0.23-1.008,0.272C14.057,7.448,14.336,7.11,14.467,6.707 M10,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.196,0,9.407-4.211,9.407-9.406C19.406,4.805,15.195,0.594,10,0.594 M10,18.552c-4.723,0-8.551-3.829-8.551-8.552S5.277,1.449,10,1.449c4.723,0,8.551,3.829,8.551,8.551S14.723,18.552,10,18.552'
                ></path>
            </svg>`
            },
            {
                link: "/",
                icon: `<svg viewBox='0 0 20 20'>
                <path
                    fill='currentColor'
                    d='M9.969,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.375,4.805,15.164,0.594,9.969,0.594 M9.969,18.552c-4.723,0-8.551-3.829-8.551-8.552s3.829-8.551,8.551-8.551S18.521,5.277,18.521,10S14.691,18.552,9.969,18.552 M12.534,5.724H7.403c-0.944,0-1.71,0.766-1.71,1.71v5.131c0,0.944,0.766,1.71,1.71,1.71h5.131c0.944,0,1.71-0.766,1.71-1.71V7.435C14.244,6.49,13.479,5.724,12.534,5.724M11.679,7.007h1.283V8.29h-1.283V7.007z M9.969,8.29c0.944,0,1.71,0.766,1.71,1.71s-0.766,1.71-1.71,1.71s-1.71-0.766-1.71-1.71S9.024,8.29,9.969,8.29 M13.39,12.565c0,0.472-0.384,0.854-0.855,0.854H7.403c-0.472,0-0.855-0.383-0.855-0.854V9.573h0.898C7.423,9.712,7.403,9.854,7.403,10c0,1.417,1.149,2.565,2.565,2.565c1.416,0,2.565-1.148,2.565-2.565c0-0.146-0.02-0.288-0.043-0.427h0.898V12.565z'
                ></path>
            </svg>`
            },
            {
                link: "/",
                icon: `<svg viewBox='0 0 20 20'>
                <path
                    fill='currentColor'
                    d='M10,4.784C7.12,4.784,4.784,7.12,4.784,10c0,2.881,2.335,5.216,5.216,5.216c2.881,0,5.216-2.335,5.216-5.216C15.216,7.12,12.881,4.784,10,4.784 M10,5.653c1.034,0,1.983,0.362,2.729,0.966c-0.705,0.566-1.475,1.056-2.303,1.442C9.94,7.257,9.356,6.52,8.702,5.852C9.111,5.723,9.548,5.653,10,5.653 M7.837,6.233c0.672,0.649,1.271,1.375,1.767,2.173c-1.205,0.451-2.503,0.709-3.863,0.72C5.994,7.888,6.775,6.844,7.837,6.233 M5.653,10c1.549,0,3.03-0.292,4.392-0.821c0.146,0.282,0.283,0.568,0.405,0.863c-1.5,0.563-2.761,1.603-3.616,2.93C6.104,12.194,5.653,11.151,5.653,10 M10,14.347c-0.934,0-1.796-0.298-2.504-0.798c0.753-1.221,1.892-2.179,3.253-2.691c0.338,1.04,0.527,2.145,0.547,3.292C10.887,14.277,10.452,14.347,10,14.347 M12.147,13.776c-0.051-1.102-0.238-2.166-0.562-3.172c0.47-0.107,0.956-0.169,1.458-0.169c0.434,0,0.852,0.059,1.261,0.141C14.122,11.949,13.302,13.118,12.147,13.776 M13.043,9.565c-0.606,0-1.193,0.082-1.757,0.22c-0.131-0.324-0.276-0.64-0.434-0.95c0.903-0.427,1.74-0.969,2.505-1.595c0.558,0.677,0.909,1.527,0.974,2.456C13.912,9.62,13.485,9.565,13.043,9.565 M10,0.438c-5.281,0-9.562,4.281-9.562,9.562S4.719,19.562,10,19.562c5.281,0,9.562-4.281,9.562-9.562S15.281,0.438,10,0.438 M10,18.693c-4.801,0-8.693-3.892-8.693-8.693c0-4.801,3.892-8.693,8.693-8.693c4.802,0,8.693,3.892,8.693,8.693C18.693,14.802,14.802,18.693,10,18.693'
                ></path>
            </svg>`
            },
        ]
    },
    services: [
        {
            title: "Front-end Development",
            description: "Crafting beautiful and interactive user interfaces using the latest front-end technologies.",
            icon: "<svg viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4.5 19H20.5M4.5 5V16H20.5V5L16.5 9L12.5 5L8.5 9L4.5 5Z' stroke='currentColor' stroke-width='1.5'stroke-linecap='round' strokeLinejoin='round' /></svg>",
        },
        {
            title: "Back-end Development",
            description: "Building robust server-side applications and APIs to power dynamic websites efficiently, securely, and responsively.",
            icon: `<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0878 3.2517C13.4368 2.91968 12.5546 2.91456 11.8984 3.24572C9.60476 4.73726 7.1796 6.15909 5.10231 7.58476C4.79314 7.83439 4.57373 8.19713 4.57747 8.62411C4.5812 9.04933 4.80508 9.40722 5.11237 9.65274C7.1796 10.8985 9.60476 12.3204 11.8477 13.9529C12.4987 14.2849 13.3809 14.29 14.0371 13.9588C16.3952 12.3204 17.3653 11.8464 20.8332 9.6198C21.1424 9.37017 21.3618 9.00743 21.3581 8.58046C21.3543 8.15524 21.1305 7.79734 20.8232 7.55183C18.8204 6.15909 16.3952 4.73726 14.0878 3.2517ZM12.5661 4.50902C12.7986 4.3917 13.1805 4.39281 13.4146 4.51218C15.4252 5.68515 17.3653 7.10698 19.8238 8.59018C17.8503 9.95065 15.9102 11.3725 13.3694 12.6955C13.1369 12.8129 12.755 12.8118 12.521 12.6924C10.202 11.3725 8.14966 9.95065 6.11175 8.61438C8.14966 7.10698 9.60476 6.15909 12.5661 4.50902Z" fill="currentColor"/>
            <path d="M21.8895 12.1029C22.1023 12.4359 21.9985 12.8745 21.6577 13.0824L15.7332 16.6966C14.9401 17.0598 13.9642 17.5337 13 17.5338C12.0358 17.5338 11.0599 17.0598 10.202 16.6969L4.34245 13.1236C4.00157 12.9157 3.8977 12.4772 4.11044 12.1441C4.32318 11.811 4.77197 11.7095 5.11285 11.9174L10.9724 15.4907C11.5002 15.8126 12.2497 16.112 13 16.1119C13.7503 16.1119 14.4349 15.8125 14.9626 15.4905L20.8871 11.8763C21.2279 11.6684 21.6767 11.7698 21.8895 12.1029Z" fill="currentColor"/>
            <path d="M21.8895 15.6619C22.1023 15.9949 21.9985 16.4334 21.6577 16.6414L16.5271 19.7722C14.9401 20.531 14.2178 20.9999 12.9676 21C11.7175 21.0001 10.0898 20.057 9.40793 19.7726L4.34237 16.6826C4.00152 16.4747 3.8977 16.0362 4.11048 15.7031C4.32326 15.3701 4.77207 15.2686 5.11292 15.4765L10.1785 18.5665C10.9284 19.0239 11.9314 19.4296 12.9676 19.4295C14.0039 19.4295 15.0067 19.0237 15.7564 18.5662L20.887 15.4354C21.2278 15.2275 21.6766 15.3288 21.8895 15.6619Z" fill="currentColor"/>
            </svg>
            `,
        },
        {
            title: "Responsive Design",
            description: "Ensuring websites look great and function flawlessly across various devices and screen sizes.",
            icon: `<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 12C21.5 16.9706 17.4706 21 12.5 21M21.5 12C21.5 7.02944 17.4706 3 12.5 3M21.5 12H3.5M12.5 21C7.52944 21 3.5 16.9706 3.5 12M12.5 21C12.5 21 16.5 18 16.5 12C16.5 6 12.5 3 12.5 3M12.5 21C12.5 21 8.5 18 8.5 12C8.5 6 12.5 3 12.5 3M3.5 12C3.5 7.02944 7.52944 3 12.5 3" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            `,
        },
    ],
    projects: [
        {
            title: "A free stock photography stock media website.",
            technologies: ["React", "Express"],
            image: "/images/portfolio/portfolio-1.png",
            link: "/",
        },
        {
            title: "ERP System Application",
            technologies: ["React", "Express"],
            image: "/images/portfolio/portfolio-1.png",
            link: "/",
        },
        {
            title: "Portfolio Website.",
            technologies: ["React", "Express"],
            image: "/images/portfolio/portfolio-1.png",
            link: "/",
        },
        {
            title: "Walmart E-commerce",
            technologies: ["React", "Express"],
            image: "/images/portfolio/portfolio-1.png",
            link: "/",
        },
        {
            title: "Dashboard Website.",
            technologies: ["React", "Express"],
            image: "/images/portfolio/portfolio-1.png",
            link: "/",
        },
    ],
    experiences: [
        {
            company: "Apple",
            title: "Front-end Developer  Apple .Inc",
            location: "California, United States",
            period: "Nov 2020 - Present · Full-time",
            technologies: ["Swift", "Go", "Python"],
            points: ["Improving overall website performance for mobile users.", "Collaborate with back-end developers and web designers to improve usability", "Add voice search feature for mobile app.", "Developing an admin panel to manage contents, users, products"],
        },
        {
            company: "Microsoft",
            title: "Front-end Developer  Microsoft",
            location: "California, United States",
            period: "Nov 2020 - Present · Full-time",
            technologies: ["C++", "C#", "Python"],
            points: ["Improving overall website performance for mobile users.", "Collaborate with back-end developers and web designers to improve usability", "Add voice search feature for mobile app.", "Developing an admin panel to manage contents, users, products"],
        },
        {
            company: "Facebook",
            title: "Front-end Developer  Facebook",
            location: "California, United States",
            period: "Nov 2020 - Present · Full-time",
            technologies: ["Swift", "Go", "Python"],
            points: ["Improving overall website performance for mobile users.", "Collaborate with back-end developers and web designers to improve usability", "Add voice search feature for mobile app.", "Developing an admin panel to manage contents, users, products"],
        },
        {
            company: "Slack",
            title: "Front-end Developer  Slack",
            location: "California, United States",
            period: "Nov 2020 - Present · Full-time",
            technologies: ["PHP", "Go", "Python"],
            points: ["Improving overall website performance for mobile users.", "Collaborate with back-end developers and web designers to improve usability", "Add voice search feature for mobile app.", "Developing an admin panel to manage contents, users, products"],
        },
    ],
    skills: [
        {
            title: "HTML",
            img: "/images/common/html.svg",
        },
        {
            title: "CSS",
            img: "/images/common/css-3.svg",
        },
        {
            title: "CSS",
            img: "/images/common/tailwind.svg",
        },
        {
            title: "JavaScript",
            img: "/images/common/javascript.svg",
        },
        {
            title: "React",
            img: "/images/common/react.svg",
        },
        {
            title: "Angular",
            img: "/images/common/angular.svg",
        },
        {
            title: "Python",
            img: "/images/common/python.svg",
        },
        {
            title: "C++",
            img: "/images/common/cpp.svg",
        },
        {
            title: "Go",
            img: "/images/common/go.svg",
        },
        {
            title: "Java",
            img: "/images/common/java.svg",
        },
        {
            title: "Ruby",
            img: "/images/common/ruby.svg",
        },
        {
            title: "Red",
            img: "/images/common/red.svg",
        },
        {
            title: "Figma",
            img: "/images/common/figma.png",
        },
    ],
    educations: [
        {
            title: "Kingston university",
            degree: "Master's degree",
            department: "Software Engineering",
            session: "2019 - 2021",
        },
        {
            title: "Kingston university",
            degree: "Bachelor's degree",
            department: "Computer Engineering",
            session: "2015 - 2019",
        },
        {
            title: "Westminster School	",
            degree: "Diploma's degree",
            department: "Mathematics",
            session: "2013 - 2015",
        },
    ],
    testimonials: [
        {
            author: "Jhon Doe",
            position: "CEO, Google",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio magni laudantium vel iure, tenetur iste ducimus laborum repellat harum eius reiciendis aspernatur sapiente perferendis tempore sunt ratione est. Fuga, soluta. Doloremque velit veritatis magni nobis maiores dicta. Commodi, corporis.",
            image: "/images/client/client-1.png",
            link: "/",
        },
        {
            author: "Alexander",
            position: "CEO, Google",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio magni laudantium vel iure, tenetur iste ducimus laborum repellat harum eius reiciendis aspernatur sapiente perferendis tempore sunt ratione est. Fuga, soluta. Doloremque velit veritatis magni nobis maiores dicta. Commodi, corporis.",
            image: "/images/client/client-1.png",
            link: "/",
        },
        {
            author: "Mikel",
            position: "CEO, Google",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio magni laudantium vel iure, tenetur iste ducimus laborum repellat harum eius reiciendis aspernatur sapiente perferendis tempore sunt ratione est. Fuga, soluta. Doloremque velit veritatis magni nobis maiores dicta. Commodi, corporis.",
            image: "/images/client/client-1.png",
            link: "/",
        },
        {
            author: "Sakira",
            position: "CEO, Google",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio magni laudantium vel iure, tenetur iste ducimus laborum repellat harum eius reiciendis aspernatur sapiente perferendis tempore sunt ratione est. Fuga, soluta. Doloremque velit veritatis magni nobis maiores dicta. Commodi, corporis.",
            image: "/images/client/client-1.png",
            link: "/",
        },
        {
            author: "Suhad",
            position: "CEO, Google",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio magni laudantium vel iure, tenetur iste ducimus laborum repellat harum eius reiciendis aspernatur sapiente perferendis tempore sunt ratione est. Fuga, soluta. Doloremque velit veritatis magni nobis maiores dicta. Commodi, corporis.",
            image: "/images/client/client-1.png",
            link: "/",
        },
        {
            author: "Mik",
            position: "CEO, Google",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio magni laudantium vel iure, tenetur iste ducimus laborum repellat harum eius reiciendis aspernatur sapiente perferendis tempore sunt ratione est. Fuga, soluta. Doloremque velit veritatis magni nobis maiores dicta. Commodi, corporis.",
            image: "/images/client/client-1.png",
            link: "/",
        },
    ],
    blogs: [
        {
            title: "How to prototype in figma",
            date: "July 15, 2023",
            technologies: ["App", "Design", "Figma"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus...",
            image: "/images/blog/blog-1.png",
            link: "/",
        },
        {
            title: "Being more productive with Notion.",
            date: "July 15, 2022",
            technologies: ["Productivity", "App"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus...",
            image: "/images/blog/blog-1.png",
            link: "/",
        },
        {
            title: "Beginners guide to adobe illustrator",
            date: "July 15, 2021",
            technologies: ["Adobe", "Illustrator"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus...",
            image: "/images/blog/blog-1.png",
            link: "/",
        },
        {
            title: "Learn React 18",
            date: "July 15, 2020",
            technologies: ["React", "JavaScript"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus...",
            image: "/images/blog/blog-1.png",
            link: "/",
        },
        {
            title: "Learn NextJs 14",
            date: "July 15, 2019",
            technologies: ["React", "Next", "JavaScript"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus...",
            image: "/images/blog/blog-1.png",
            link: "/",
        },
        {
            title: "Learn Vue 3",
            date: "July 15, 2018",
            technologies: ["Vue", "JavaScript"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus...",
            image: "/images/blog/blog-1.png",
            link: "/",
        },
    ],
    cta: {
        title: "Let's Create Your Big Project Together.",
        detail: "Embark on a collaborative journey with Your Big Project. We blend creativity and expertise, using cutting-edge technology to bring your vision to life. Let's shape the future together, break barriers, and build something extraordinary. Your Big Project is a shared adventure, and we're here to make it remarkable.",
        marketplace_link: "/"
    },
    contact: {
        address: "San Jose, California, USA",
        phone: "(+60) 923-4567",
        mail: "dev.example@mail.com",
        map_location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406276.3665678497!2d-122.43989809539977!3d37.294325311626395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1703502074465!5m2!1sen!2sbd"
    },
    menus: [
        {
            name: "About Me",
            link: "#about",
        },
        {
            name: "Services",
            link: "#services",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Blog",
            link: "#blog",
        },
        {
            name: "Contact Me",
            link: "#contact",
        },
    ]
}


export default data