import './modal.scss'

function Modal({open, setOpen, data}) {


    function closeModal(evt) {
        if (evt.target.matches('.modal')) {
            setOpen(false)
        }
    }
    
    return (

        <>
            <div className="modal-wrapper">
                <div className={`modal ${open == true ? 'open-modal' : ''}`} onClick={closeModal}>
                    <div className="modal-inner">
                        <div className="modal-content">

                            <div className="modal-content-wrap">

                                <div className="modal-movie-avatar">
                                    <img className="modal-movie-avatar-img" src={data?.img} alt="" />
                                </div>

                                <div className="modal-movie-name">

                                    <h3 className="modal-movie-name-h3">{data?.name}</h3>

                                    <div className="modal-movie-disc-wrapper">
                                        <div className="modal-movie-disc">

                                            <p className="modal-movie-year-p"><b>Yili:</b></p>
                                            <p className="modal-movie-genre-p"><b>Janr:</b></p>
                                            <p className="modal-movie-qualty-p"><b>Sifat:</b></p>
                                            <p className="modal-movie-time-p"><b>Davomiyligi:</b></p>
                                        </div>

                                        <div className="modal-movie-disc-api">
                                            <span className="modal-movie-api-year">{data?.year}</span>
                                            <span className="modal-movie-api-genre">{data?.genre}</span>
                                            <span className="modal-movie-api-qualty">{data?.quality}</span>
                                            <span className="modal-movie-api-time">{data?.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal