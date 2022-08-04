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
    const [name, setName] = useState('')
    const [date, setDate] = useState("")
    const [poster, setPoster] = useState("")
    const [rating, setRating] = useState(1)
    const handleRat =(x)=> setRating(x);


    function openModal() {
      setIsOpen(true);
    }
  
   
    function closeModal() {
      setIsOpen(false);
    }
    const handleSubmit =(e)=>{e.preventDefault();
    const newMovie={
        id : Math.random(),
        name,
        date,
        poster,
        rating
    }
add(newMovie)
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
        <input type= "text" value = {name} onChange= {(e)=>setName(e.target.value)}/>
        <label> date </label>
        <input type = "date" value = {date} onChange= {(e)=>setDate(e.target.value)}/>
        <label> poster </label>
        <input value = {poster} type='url' onChange= {(e)=>setPoster(e.target.value)}/>
        <label> rating </label>
        <Rating className='rating-input'rating = {rating} handleRat={handleRat}/>
        <button type='Submit'>Confirm</button>
        <button> cancel </button>
        </form>
      </Modal>
        {/* <Rating/> */}
    </div>
  )
}

export default AddMovie