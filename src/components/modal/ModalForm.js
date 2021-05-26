import Modal from 'react-modal';
import React , {useEffect} from 'react';
import './ModalForm.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNewProduct, cleanProductSelected, startUpdateProduct } from '../../actions/productActions';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.566)'
  },

    content : {
      width                 : '600px',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      
    }
  };
  const ModalForm = () => {

  const dispatch = useDispatch()

  const {productSelected} = useSelector(state => state.products);

  const initialState={
    nombre:'',
    descripcion:'',
    precio:'',
    stock:'',
  }

  const [formValues, setformValues] = useState(initialState)
  
  useEffect(() => {

    if(productSelected){
      openModal();
      setformValues(productSelected)
    }else{
      return
    }

  }, [productSelected,setformValues]);

  const {
    nombre,
    descripcion,
    precio,
    stock,    
    
    } = formValues;

  const handleOnchangeForm =(e)=>{
    setformValues({
      ...formValues,
      [e.target.name] : e.target.value
    })
  };

  const handleSubmitModal=(e)=>{
    e.preventDefault();
    

    if(productSelected){
      dispatch( startUpdateProduct(formValues) )
    }else{
      dispatch( addNewProduct(formValues) ) 
    }
    setformValues(initialState)
    closeModal();
    
  }
  
  const [modalIsOpen,setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  
  function closeModal(){
    setIsOpen(false);
    setformValues(initialState)
    dispatch( cleanProductSelected() )
  }
      return ( 
        <div>
        <button 
        className='btn btn-waco'
        onClick={openModal}>Crear Producto</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >

          <div className='header-modal' >
            <h2>{ productSelected ?'Editar Producto' :'Agregar Nuevo Producto' }</h2>
            <button
              className='close-modal-btn' 
              onClick={closeModal}
            >&times;</button>
          </div>
          

          <form 
            className="row" 
            onSubmit={handleSubmitModal}
          >
            <div className='col-6' >
              <label>Nombre</label>
              <input 
                type='text'
                className="form-control"
                name='nombre'
                onChange={handleOnchangeForm}
                value={nombre}  
              />
            </div>
            <div className='col-6' >
              <label>descripcion</label>
              <input 
                type='text'
                className="form-control"
                name='descripcion'
                onChange={handleOnchangeForm}
                value={descripcion} 
              />
            </div>
            <div className='col-6' >
              <label>Stock</label>
              <input 
                type='number'
                className="form-control"
                name='stock'
                onChange={handleOnchangeForm}
                value={stock}   
              />
            </div>
            <div className='col-6' >
              <label>Precio</label>
              <input 
                className="form-control"
                type='number'
                name='precio'
                onChange={handleOnchangeForm}
                value={precio} 
              />
            </div>
  
            <div className='row justify-content-center mt-4' >
              <button
                className="col-3 btn btn-waco mx-3"
                type='submit'
              >Aceptar</button>
              <button
                type='button'
                className="col-3 btn btn-outline-success mx-3"
                onClick={closeModal}
              >Cancelar</button>
            </div>
          </form>
        </Modal>
      </div>
       );
  }
   
  export default ModalForm;