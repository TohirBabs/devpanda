import React, {useState} from 'react'

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () =>{
      setModal(!modal)
  }
  return (
    <>
    <div className='box btn_shadow'>
      <div className='img'>
        <img src={props.image} alt='' onClick={toggleModal}/>
      </div>
      <div className='category uppercase d_flex'>
        <span onClick={toggleModal}>{props.category}</span>
      </div>
      
      <div className='title'>
        <h2 onClick={toggleModal}>{props.title} </h2>
      </div>
         
    </div>



    {modal &&(
      <div className='modal'>
        <div className='overlay'>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt="" />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>{props.about}</p>
            <div className='button f_flex mtop'>
              <button className='btn btn_shadow uppercase'>
                like <i className='far fa-thumbs-up'></i>
              </button>
              <button className='btn btn_shadow uppercase' onClick={()=> window.open(props.link, "_blank")}>
                view project <i className='fas fa-chevron-right'></i>
              </button>
            </div>
            <button className='close-modal btn_shadow' onClick={toggleModal}>
              <i className='fas fa-times '></i>
            </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Card