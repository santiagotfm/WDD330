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