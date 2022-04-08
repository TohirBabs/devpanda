import React, {useState} from 'react'




const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () =>{
      setModal(!modal)
      if (!modal) {
        document.body.style.overflow = 'hidden'
        console.log(modal)
      }
      else{
        document.body.style.overflow = 'visible'
        console.log(modal)

      }
  }
  return (
    <>
    <div className='box btn_shadow'>
      <div className='img'>
        <img src={props.image} alt='' onClick={toggleModal}/>
      </div>
      <div className='date uppercase d_flex'>
        <span>{props.date}</span>
        
      </div>
      
      <div className='title_one'>
        <h2 onClick={toggleModal}>{props.title_one} </h2>
        <a href='#popup' className='arrow' onClick={toggleModal}>
          <i className='fas fa-arrow-right'></i> 
        </a>
      </div>
         
    </div>
      

    {modal &&(
      
      
      <div className='modal modal-blog'>
        <div className='overlay'>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={props.image} alt="" />
            </div>
            <div className='modal-text right'>
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>
            
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times '></i>
              </button>

              <div className='contact mtop'>
                <h1>Leave a Reply</h1>

                <form className='blog_contact d_flex grid'>
                  <div className='left'>
                    <input type='text' placeholder='Name' /> 
                    <input type='text' placeholder='Email' />  
                  </div> 
                  <div className='right'>
                  <textarea cols='30' rows='12' placeholder='Comment'></textarea>  
                    
                  </div> 
                   
                  <button className='btn_shadow uppercase'>submit now</button>
                </form>  
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Card