document.addEventListener(`DOMContentLoaded`, () => {
    let availableTickets, ticketsSold,capacity;
fetch('http://localhost:3000/films/1')
  .then(response => response.json())
  .then(film => {
    const title = film.title;
    const poster = film.poster;
    const runtime = film.runtime;
    const showtime = film.showtime;
    ticketsSold = film.tickets_sold;
    capacity = film.capacity;
    availableTickets = capacity-ticketsSold;


      const filmTitle = document.getElementById('film.title');
      filmTitle.textContent = poster;
    
      const filmPoster = document.getElementById('film-poster');
      filmPoster.src = poster;

      const filmRunTime = document.getElementById('film-runtime')
      filmRuntime.textContent = `Runtime: ${runtime} minutes`;

      const filmShowtime = document.getElementById('film-showtime');
      filmShowtime.textContent = `showtime: ${showtime}`;

      const filmAvailableTickets = document.getElementById('available-tickets');
      filmAvailableTickets.textContent = `Available Tickets: ${availableTickets}`;
});

fetch(`http://localhost:3000/films`)
.then(response => response,json())
.then(movies => {

    const filmsMenu = document.getElementById('films');
    movies.forEach (movie => {
        const id = movie.id;
        const title = movie.title;
        const list = document.createElement('li');
        list.textContent = title;
        list.classList.add('film');
        list.addEventListener('click', () => {
            displayMovieDetails(id);

        });
        filmsMenu.appendChild(list);

    });  
})
function displayMovieDetails(movieId) {
    fetch(`http://localhost:3000/films/${movieId}`)
    .then(response => response.json())
    .then(movie => {
     const { poster, title, runtime,showtime, tickets_sold, capacity} = movie;
     const availableTickets = capacity - tickets_sold;

     const movieposter = document.getElementById('film-poster');
     const movietitle = document.getElementById('film-title');
     const movieRuntime = document.getElementById('film-runtime')
     const movieShowtime =document.getElementById('film-showtime');
     const ticketsSoldElement = document.getElementById('tickets-sold');
     const availableTicketsElement = document.getElementById(available-tickets);
     const buyTicketButton = document.getElementById('Available-tickets');

     movieposter.src = poster;
     movietitle.textContent = title;
     movieRuntime.textContent = `runtime: ${runtime} minutes`;
     movieShowtime.textContent =`Showtime: ${showtime}`;
     ticketsSoldElement.textContent = `Tickets sold: ${tickets_sold}`;

     buyTicketButton.addEventListener('click', () => {

if (availableTickets > 0) {
    const updatedTicketsSold = tickets_sold + 1;
    const updatedAvailableTickets = availableTickets - 1;
    ticketsSoldElement.textContent = `Tickets Sold: ${updatedTicketsSold}`;
    availableTicketsElement.textContent = `Available Tickets: ${updatedAvailableTickets}`;
    ticketsSold = updatedTicketsSold;
    availableTickets = updatedAvailableTickets;
} else {
    alert('sorry, the showing is sold out.');
}

     })
    })
}
})
