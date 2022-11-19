const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const CountSeats = document.getElementById('count')
const priceEl = document.getElementById('total')
const MovieSelect = document.getElementById('Movie')


PopulateUi()
let TicketPrice = MovieSelect.value

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('SelectedMovieIndex',movieIndex)
    localStorage.setItem('SelectedMoviePrice',moviePrice)
}


function updateSelectedSeats(){
    const Selectedseats = document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...Selectedseats].map(function(seat){
        return [...seats].indexOf(seat)
    })
    localStorage.setItem('SelectedSeats',JSON.stringify(seatsIndex))

    const TotalSeatsSelected = Selectedseats.length
    CountSeats.innerText = TotalSeatsSelected
    priceEl.innerText = TotalSeatsSelected * TicketPrice
}

function PopulateUi(){
    const SelectedSeats = JSON.parse(localStorage.getItem('SelectedSeats'))
    
    if(SelectedSeats !== null && SelectedSeats.length > 0){
        seats.forEach((seat,index) =>{
            if(SelectedSeats.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
    }
    const MovieSelectedIndex = localStorage.getItem('SelectedMovieIndex')
    console.log(MovieSelectedIndex)
   if(MovieSelectedIndex != null){
    MovieSelect.selectedIndex = MovieSelectedIndex
    console.log(MovieSelect.selectedIndex)
   }
}

MovieSelect.addEventListener('change' , e =>{
    TicketPrice = +e.target.value
    setMovieData(e.target.selectedIndex ,e.target.value)
    updateSelectedSeats()
})


container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && (!e.target.classList.contains('occupied'))){
        e.target.classList.toggle('selected')
        updateSelectedSeats()
    }
})

updateSelectedSeats()