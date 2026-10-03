// const movieDetail = document.querySelector("#movie-detail");
// const params = new URLSearchParams(location.search)
// const imdbID = params.get("id");

// if(imdbID){
//     searchMovie(imdbID.trim())
// }

// async function searchMovie(imdbID) {

//     let response = await fetch(`https://www.omdbapi.com/?apikey=7df74c01&i=${imdbID}`)
//     let data = await response.json()
//     console.log(data);

//     if(data.Response === "True") {
//         displayMovie(data)
//     }else{
//         console.log(data.Error);
//     }

// }

// function displayMovie(data){

//     movieDetail.innerHTML = `<div>
//             <img src="${data.Poster}" alt="">
//         </div>

//         <div>
//             <h2>${data.Title}</h2>
//             <section>
//                 <p>${data.Released}</p>
//                 <p>${data.Rated}</p>
//                 <p>${data.Runtime}</p>
//                 <p>${data.Genre}</p>
//                 <p>IMDb: ${data.imdbRating} / 10</p>
//             </section>

//             <div>
//                 <p>Plot Overview</p>
//                 <p>${data.Plot}</p>
//             </div>

//             <div>
//                 <section>
//                     <p>Director</p>
//                     <p>${data.Director}</p>
//                 </section>
//                 <section>
//                     <p>Writer</p>
//                     <p>${data.Writer}</p>
//                 </section>
//             </div>

//             <div>
//                 <p>Actors</p>
//                 <p>${data.Actors}</p>
//             </div>

//             <div>
//                 <section>
//                     <p>Language</p>
//                     <p>${data.Language}</p>
//                 </section>
//                 <section>
//                     <p>Country</p>
//                     <p>${data.Country}</p>
//                 </section>
//             </div>

//             <button>
//             <a href=https://www.imdb.com/title/${data.imdbID} target="_blank">View on IMDb</a>
//             </button>

//         </div>`

// }



const movieDetail = document.querySelector("#movie-detail");

const params = new URLSearchParams(location.search);

const imdbID = params.get("id");


if (imdbID) {
    searchMovie(imdbID.trim());
}


/* ================= SEARCH MOVIE ================= */

async function searchMovie(imdbID) {

    movieDetail.innerHTML = `
        <div class="flex justify-center py-20">
            <span class="loader"></span>
        </div>
    `;

    try {

        let response = await fetch(
            `https://www.omdbapi.com/?apikey=7df74c01&i=${imdbID}`
        );

        let data = await response.json();

        console.log(data);

        if (data.Response === "True") {

            displayMovie(data);

        } else {

            movieDetail.innerHTML = `
                <div class="py-20 text-center">

                    <h2 class="text-3xl font-bold">
                        Movie Not Found
                    </h2>

                    <p class="mt-3 text-zinc-500">
                        ${data.Error}
                    </p>

                </div>
            `;

        }

    } catch (error) {

        console.error(error);

        movieDetail.innerHTML = `
            <div class="py-20 text-center">

                <h2 class="text-3xl font-bold">
                    Something went wrong
                </h2>

            </div>
        `;

    }

}


/* ================= DISPLAY MOVIE ================= */

function displayMovie(data) {

    movieDetail.innerHTML = `

        <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-[300px_1fr]">


            <!-- POSTER -->

            <div>

                <img
                    src="${data.Poster}"
                    alt="${data.Title}"
                    class="w-full rounded-2xl shadow-2xl shadow-red-600/10"
                >

            </div>


            <!-- DETAILS -->

            <div>

                <h1 class="text-4xl font-extrabold sm:text-5xl">
                    ${data.Title}
                </h1>


                <!-- META -->

                <div class="mt-5 flex flex-wrap gap-3">

                    <span class="rounded-full bg-zinc-800 px-4 py-2 text-sm">
                        ${data.Released}
                    </span>

                    <span class="rounded-full bg-zinc-800 px-4 py-2 text-sm">
                        ${data.Rated}
                    </span>

                    <span class="rounded-full bg-zinc-800 px-4 py-2 text-sm">
                        ${data.Runtime}
                    </span>

                    <span class="rounded-full bg-zinc-800 px-4 py-2 text-sm">
                        ${data.Genre}
                    </span>

                    <span class="rounded-full bg-red-600 px-4 py-2 text-sm font-bold">
                        ⭐ ${data.imdbRating} / 10
                    </span>

                </div>


                <!-- PLOT -->

                <div class="mt-8">

                    <h2 class="text-xl font-bold">
                        Plot Overview
                    </h2>

                    <p class="mt-3 leading-7 text-zinc-400">
                        ${data.Plot}
                    </p>

                </div>


                <!-- DIRECTOR / WRITER -->

                <div class="mt-8 grid gap-6 sm:grid-cols-2">

                    <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5">

                        <p class="text-sm text-zinc-500">
                            Director
                        </p>

                        <p class="mt-2 font-semibold">
                            ${data.Director}
                        </p>

                    </div>


                    <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5">

                        <p class="text-sm text-zinc-500">
                            Writer
                        </p>

                        <p class="mt-2 font-semibold">
                            ${data.Writer}
                        </p>

                    </div>

                </div>


                <!-- ACTORS -->

                <div class="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-5">

                    <p class="text-sm text-zinc-500">
                        Actors
                    </p>

                    <p class="mt-2 font-semibold">
                        ${data.Actors}
                    </p>

                </div>


                <!-- LANGUAGE / COUNTRY -->

                <div class="mt-6 grid gap-6 sm:grid-cols-2">

                    <div>

                        <p class="text-sm text-zinc-500">
                            Language
                        </p>

                        <p class="mt-1 font-semibold">
                            ${data.Language}
                        </p>

                    </div>


                    <div>

                        <p class="text-sm text-zinc-500">
                            Country
                        </p>

                        <p class="mt-1 font-semibold">
                            ${data.Country}
                        </p>

                    </div>

                </div>


                <!-- IMDB BUTTON -->

                <a
                    href="https://www.imdb.com/title/${data.imdbID}"
                    target="_blank"
                    class="mt-8 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
                >
                    View on IMDb ↗
                </a>

            </div>

        </div>

    `;

}