const links = [
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week 6 notes",
        url: "week6/index.html"
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