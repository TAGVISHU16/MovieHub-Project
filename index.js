// const movieForm = document.querySelector("#movieForm");
// const movieInput = document.querySelector("#movieInput");
// const movieHub = document.querySelector("#movieHub");
// const hamburger = document.querySelector("#hamburger");
// const options = document.querySelector("#options");

// movieForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let query = movieInput.value.trim()

//     if (!query) {
//         return
//     }
//     console.log(query);
//     searchMovies(query)
// })

// async function searchMovies(movieName) {

//     movieHub.innerHTML = `<span class="loader"></span>`

//     let response = await fetch(`https://www.omdbapi.com/?apikey=7df74c01&s=${encodeURIComponent(movieName)}`)
//     let data = await response.json()
//     console.log(data);

//     if(data.Response === "True") {
//         displayMovies(data.Search)
//     }else{
//         console.log(data.Error);
//         movieHub.innerHTML = `<p>${data.Error}</p>`
//     }

// }

// function displayMovies(movies) {

//     movieHub.innerHTML = ""

//     movies.forEach((movie) => {
//         const div = document.createElement("div")
//         div.dataset.imdbID = movie.imdbID
//         div.setAttribute("class" , "movie-card")

//         div.innerHTML = `
//             <div>
//                 <img src=${movie.Poster} alt="">
//             </div>

//             <div>
//                 <p>${movie.Title}</p>
//                 <p>${movie.Year}</p>
//             </div>
//         `
//         movieHub.append(div)
//     })
// }

// movieHub.addEventListener("click" , (e) => {
//     e.stopPropagation();
//     const movieCard = e.target.closest(".movie-card")
//     const imdbID = movieCard.dataset.imdbID
//     console.log(imdbID);
//     location.href = `movie-details.html?id=${imdbID}`
// })

// let data = [
//     {
//         "Title": "Spider-Man: No Way Home",
//         "Year": "2021",
//         "imdbID": "tt10872600",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
//     },
//     {
//         "Title": "Spider-Man",
//         "Year": "2002",
//         "imdbID": "tt0145487",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg"
//     },
//     {
//         "Title": "Spider-Man: Homecoming",
//         "Year": "2017",
//         "imdbID": "tt2250912",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_QL75_UX380_CR0,0,380,562_.jpg"
//     },
//     {
//         "Title": "Spider-Man 2",
//         "Year": "2004",
//         "imdbID": "tt0316654",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_SX300.jpg"
//     },
//     {
//         "Title": "Spider-Man: Into the Spider-Verse",
//         "Year": "2018",
//         "imdbID": "tt4633694",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
//     },
//     {
//         "Title": "The Amazing Spider-Man",
//         "Year": "2012",
//         "imdbID": "tt0948470",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_QL75_UX380_CR0,1,380,562_.jpg"
//     },
//     {
//         "Title": "Spider-Man 3",
//         "Year": "2007",
//         "imdbID": "tt0413300",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BODE2NzNhMDctYjUzMC00Y2M5LWI2Y2EtODJkZTFjN2Y5ODlmXkEyXkFqcGc@._V1_SX300.jpg"
//     },
//     {
//         "Title": "Spider-Man: Far from Home",
//         "Year": "2019",
//         "imdbID": "tt6320628",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg"
//     },
//     {
//         "Title": "The Amazing Spider-Man 2",
//         "Year": "2014",
//         "imdbID": "tt1872181",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_QL75_UX380_CR0,0,380,562_.jpg"
//     },
//     {
//         "Title": "Spider-Man: Across the Spider-Verse",
//         "Year": "2023",
//         "imdbID": "tt9362722",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg"
//     }
// ]

// displayMovies(data)

// hamburger.addEventListener("click" , (e) => {
//     e.stopPropagation();

//     options.classList.toggle("hidden")

//     console.log("hii");
// })



const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");
const hamburger = document.querySelector("#hamburger");
const options = document.querySelector("#options");


/* ================= SEARCH FORM ================= */

movieForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let query = movieInput.value.trim();

    if (!query) {
        movieInput.focus();
        return;
    }

    searchMovies(query);

});


/* ================= SEARCH MOVIES ================= */

async function searchMovies(movieName) {

    movieHub.innerHTML = `
        <div class="col-span-full flex justify-center py-16">
            <span class="loader"></span>
        </div>
    `;

    try {

        let response = await fetch(
            `https://www.omdbapi.com/?apikey=7df74c01&s=${encodeURIComponent(movieName)}`
        );

        let data = await response.json();

        console.log(data);

        if (data.Response === "True") {

            displayMovies(data.Search);

        } else {

            movieHub.innerHTML = `
                <div class="col-span-full py-16 text-center">

                    <div class="text-5xl">😕</div>

                    <h2 class="mt-4 text-2xl font-bold">
                        No Movies Found
                    </h2>

                    <p class="mt-2 text-zinc-500">
                        ${data.Error}
                    </p>

                </div>
            `;

        }

    } catch (error) {

        console.error(error);

        movieHub.innerHTML = `
            <div class="col-span-full py-16 text-center">

                <div class="text-5xl">⚠️</div>

                <h2 class="mt-4 text-2xl font-bold">
                    Something went wrong
                </h2>

                <p class="mt-2 text-zinc-500">
                    Please check your internet connection.
                </p>

            </div>
        `;

    }

}


/* ================= DISPLAY MOVIES ================= */

function displayMovies(movies) {

    movieHub.innerHTML = "";

    movies.forEach((movie) => {

        const div = document.createElement("div");

        div.dataset.imdbID = movie.imdbID;

        div.className =
            "movie-card group cursor-pointer overflow-hidden rounded-2xl " +
            "border border-zinc-800 bg-zinc-900 transition duration-300 " +
            "hover:-translate-y-2 hover:border-red-600 hover:shadow-2xl " +
            "hover:shadow-red-600/10";


        const poster = movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Poster";


        div.innerHTML = `

            <!-- Poster -->

            <div class="relative aspect-[2/3] overflow-hidden bg-zinc-800">

                <img
                    src="${poster}"
                    alt="${movie.Title}"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                >

                <!-- Hover Overlay -->

                <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100">

                    <div class="p-4">

                        <span class="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase">
                            ${movie.Type}
                        </span>

                    </div>

                </div>

            </div>


            <!-- Movie Info -->

            <div class="p-4">

                <h2
                    class="line-clamp-2 text-base font-bold text-white"
                    title="${movie.Title}">
                    ${movie.Title}
                </h2>

                <div class="mt-2 flex items-center justify-between">

                    <p class="text-sm text-zinc-400">
                        ${movie.Year}
                    </p>

                    <span class="text-xs font-medium uppercase text-red-500">
                        ${movie.Type}
                    </span>

                </div>

            </div>
        `;


        movieHub.append(div);

    });

}


/* ================= MOVIE CARD CLICK ================= */

movieHub.addEventListener("click", (e) => {

    const movieCard = e.target.closest(".movie-card");

    if (!movieCard) return;

    const imdbID = movieCard.dataset.imdbID;

    location.href = `movie-details.html?id=${imdbID}`;

});


/* ================= DEFAULT MOVIES ================= */

let data = [
    {
        "Title": "Spider-Man: No Way Home",
        "Year": "2021",
        "imdbID": "tt10872600",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "Title": "Spider-Man",
        "Year": "2002",
        "imdbID": "tt0145487",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Spider-Man: Homecoming",
        "Year": "2017",
        "imdbID": "tt2250912",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "Spider-Man 2",
        "Year": "2004",
        "imdbID": "tt0316654",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Spider-Man: Into the Spider-Verse",
        "Year": "2018",
        "imdbID": "tt4633694",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
    },
    {
        "Title": "The Amazing Spider-Man",
        "Year": "2012",
        "imdbID": "tt0948470",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_QL75_UX380_CR0,1,380,562_.jpg"
    },
    {
        "Title": "Spider-Man 3",
        "Year": "2007",
        "imdbID": "tt0413300",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODE2NzNhMDctYjUzMC00Y2M5LWI2Y2EtODJkZTFjN2Y5ODlmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Spider-Man: Far from Home",
        "Year": "2019",
        "imdbID": "tt6320628",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg"
    },
    {
        "Title": "The Amazing Spider-Man 2",
        "Year": "2014",
        "imdbID": "tt1872181",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "Spider-Man: Across the Spider-Verse",
        "Year": "2023",
        "imdbID": "tt9362722",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg"
    }
];


displayMovies(data);


/* ================= HAMBURGER ================= */

hamburger.addEventListener("click", (e) => {

    e.stopPropagation();

    options.classList.toggle("hidden");

});