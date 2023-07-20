import { useRef, useState, useEffect } from "react"
import './header.scss'
import MovieImg from "../../assets/img/movie-img.png"
import MovieStar from "../../assets/svg/movie-star.svg"
import MovieClock from "../../assets/svg/movie-clock.svg"

function Header() {

    const elModal = useRef()
    // const [getData, setgetData] = useState()

    function closeModal(evt) {
        if (evt.target.matches('.modal')) {
            elModal.current.style.display = 'none'
        }
    }

    // fetch('https://64b8278821b9aa6eb0799f1f.mockapi.io/movie/films')
    //     .then((res) => res.json())
    //     .then((data) => setgetData(data))

    return (

        <div className="section">
            <div className="container">
                <div className="wrapper">
                    <div className="movie-about">
                        <div className="about"><h1>Upcoming Movies</h1></div></div>

                    <div className="movie-cards-wrapper">
                        <div className="card-movie" onClick={() => {
                            elModal.current.style.display = 'block'
                        }}>
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



            {/*================================== Modal ========================= */}

            <div className="modal-wrapper">
                <div className="modal" ref={elModal} onClick={closeModal}>
                    <div className="modal-inner">
                        <div className="modal-content">

                            <div className="modal-content-wrap">

                                <div className="modal-movie-avatar">
                                    <img className="modal-movie-avatar-img" src={MovieImg} alt="" />
                                </div>

                                <div className="modal-movie-name">

                                    <h3 className="modal-movie-name-h3">Uzbek tilida Haqiqiy Afsona</h3>

                                    <div className="modal-movie-disc-wrapper">
                                        <div className="modal-movie-disc">

                                            <p className="modal-movie-year-p"><b>Yili:</b></p>
                                            <p className="modal-movie-country-p"><b>Mamlakat:</b></p>
                                            <p className="modal-movie-genre-p"><b>Janr:</b></p>
                                            <p className="modal-movie-qualty-p"><b>Sifat:</b></p>
                                            <p className="modal-movie-time-p"><b>Davomiyligi:</b></p>
                                            <p className="modal-movie-time-p"><b>Tili:</b></p>
                                        </div>

                                        <div className="modal-movie-disc-api">
                                            <span className="modal-movie-api-year">2010</span>
                                            <span className="modal-movie-api-country">Xitoy</span>
                                            <span className="modal-movie-api-genre">Drama</span>
                                            <span className="modal-movie-api-qualty">UHD</span>
                                            <span className="modal-movie-api-time">1h</span>
                                            <span className="modal-movie-api-lang">Uzbek</span>
                                        </div>
                                    </div>
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