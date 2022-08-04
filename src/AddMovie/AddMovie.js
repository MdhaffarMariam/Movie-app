import { Button } from 'bootstrap';
import React, { useState } from 'react'
import Modal from 'react-modal';
import Rating from '../rating/Rating';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');
const AddMovie = ({add}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState("")
    const [posterURL, setPosterURL] = useState("")
    const [rating, setRating] = useState(1)
    const handleRating =(x)=> setRating(x);


    function openModal() {
      setIsOpen(true);
    }
  
   
    function closeModal() {
      setIsOpen(false);
    }
    const handleSubmit =(e)=>{
      e.preventDefault();
    const newMovie = {
        id : Math.random(),
        title,
        description,
        posterURL,
        rating
    };
add(newMovie);
closeModal()
}
  return (
    <div>
        <button onClick={openModal}>Add movie</button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className='form-container' onSubmit={handleSubmit}>
        <label> name </label>
        <input type= "text" value = {title} onChange= {(e)=>setTitle(e.target.value)} className='Form-control'/>
        <label> date </label>
        <input type = "date" value = {description} onChange= {(e)=>setDescription(e.target.value)}/>
        <label> poster </label>
        <input value = {posterURL} type='url' onChange= {(e)=>setPosterURL(e.target.value)}/>
        <label> rating </label>
        <Rating rating = {rating} handleRating={handleRating}/>
        <div>
        <button type='submit'>Confirm</button>
        <button> cancel </button>
        </div>
        </form>
      </Modal>
        {/* <Rating/> */}
    </div>
  )
}

export default AddMovie