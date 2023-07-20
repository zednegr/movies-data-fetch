import './header.scss'
import MovieImg from "../../assets/img/movie-img.png"
import MovieStar from "../../assets/svg/movie-star.svg"
import MovieClock from "../../assets/svg/movie-clock.svg"

function Header() {

    return (
        <div className="section">
            <div className="container">
                <div className="wrapper">
                    <div className="movie-abpout">
                        <div className="about"><h1>Upcoming Movies</h1></div>
                    </div>

                    <div className="movie-cards-wrapper">
                        <div className="card-movie">
                            <div className="card-avatar">
                                <img src={MovieImg} alt="Movie" />
                            </div>
                            <div className="card-desc">

                                <div className="movie-name"><h4 className='movie-name-h4'>Free Guy</h4></div>
                                <div className="movie-year"><h5 className='movie-year-h5'>2023</h5></div>

                            </div>
                            <div className="card-data">

                                <div className="card-data-qualty"><p className='card-data-qualty-p'>HD</p></div>

                                <div className="card-min-reyting">

                                    <div className="card-min"><img className='MovieClock' src={MovieClock} width={'13px'} /><p className='card-min-p'>130 min</p></div>
                                    <div className="card-reyting"><img className='MovieStar' src={MovieStar} width={'12px'} /><p className='card-reyting-p'>7.0</p></div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header