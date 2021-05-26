import React from 'react'
import { useSelector } from 'react-redux'
import Product from './product/Product'
import ModalForm from '../../modal/ModalForm'
import './products.scss'

function Products () {
  const { products } = useSelector(state => state.products)

  return (
    <div className='user-container'>
      <div className='header-users'>
        <div className='d-flex'>
          <i className='fab fa-product-hunt'></i>
          <h2 className='fs-3'>Productos existentes</h2>
        </div>
        <ModalForm />
      </div>

      {products.length === 0 ? (
        <div className='text-center alert alert-primary mt-2'>
          Aun no tienes productos , empieza creando uno
        </div>
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Descripcion</td>
              <td>Stock</td>
              <td>Precio</td>
              <td>Acción</td>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Products
