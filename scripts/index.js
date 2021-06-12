const links = [
    {
        label: "Week 1 notes",
        url: "/wdd330/week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "/wdd330/week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "/wdd330/week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "/wdd330/week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "/wdd330/week5/index.html"
    },
    {
        label: "Week 6 notes",
        url: "/wdd330/week6/index.html"
    },
    {
        label: "Week 7 notes",
        url: "/wdd330/week7/index.html"
    },
    {
        label: "Week 8 notes",
        url: "/wdd330/week8/index.html"
    },
];

// get pointer to <ul> element
let ul = document.querySelector('ul');

links.forEach(
    link => {
        ul.innerHTML +=  
        `
            <li>
                <a href="${link.url}">${link.label}</a>
            </li>
        `;
    }
);