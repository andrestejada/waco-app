import React from 'react'
import {ReactComponent as Pen} from '../../../../assets/pen-solid.svg';
import {ReactComponent as Trash} from '../../../../assets/trash-solid.svg';
import { useDispatch } from 'react-redux';
import './product.scss'
import { startDelete ,productSelected } from '../../../../actions/productActions';


const Product = ({product}) => {

const handleEdit =()=>{
    dispatch( productSelected(id) );
};

const dispatch = useDispatch();

    const {nombre,
        descripcion,
        precio,
        stock,
        id
    }= product;

    const handleDeleteUser =(id)=>{
        dispatch( startDelete(id) )
    }
    return (
        <tr>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>{`${stock} Und.`}</td>
            <td>{ `$ ${precio}` }</td>
            <td> 
                <Pen 
                    className='pen'
                    onClick={ handleEdit }
                />
                <Trash 
                    onClick={ ()=> handleDeleteUser(id) }
                    className='trash' 
                />
            </td>
            
        </tr>
    )
}

export default Product