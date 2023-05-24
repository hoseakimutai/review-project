// local reviews
const reviews = [
    {
        id: 1,
        name: "Ezron Kemboi",
        job: "software Engineer",
        img: "./image/kemboi.jpeg.jpg",

        text: "Software engineers design and develop computer programs and applications. Strong demand for skilled software engineers means that professionals can pursue many employment options in various industries."
    },
    {
        id: 2,
        name: "Abel Kibet",
        job: "graphic designer",
        img: "./image/abelo.jpg.jpg",

        text: "A graphic designer creates visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, or captivate consumers"
    },

    {
        id: 3,
        name: "wizkid koech",
        job: "web designer",
        img: "./image/koech.jpg.jpg",

        text: "Web developers build websites and ensure they perform reliably and efficiently. Learn more about this critical role in the tech industry and how to get started."
    },
    {
        id: 4,
        name: "Hosea Cheboi",
        job: "web developer",
        img: "./image/hosea.jpeg.jpg",

        text: " Computer software engineers develop programs and operating systems for computers. They work with system programmers, analysts, and other engineers to design systems, project capabilities, and determine performance interfaces. Computer software engineers also analyze user needs, provide consultation services to discuss design elements, and coordinate software installation. Designing software systems requires engineers to consider mathematical models and scientific analysis to project outcomes."
    },
]



const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

});
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});




