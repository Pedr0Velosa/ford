import { Button } from '@mui/material'
import React, { useState } from 'react'
import styles from '../styles/Modal.module.css'
import { useRouter } from 'next/router';


type createReq = {
  name: string,
  email: string,
  phone: string
}
const reg = /^(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})$/

export const FormModal = ({ setShowFormModal }: any) => {
  const [newCustomer, setNewCustomer] = useState<createReq>({
    name: '',
    email: '',
    phone: ''
  })
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
  async function create(data: createReq) {
    try {
      fetch('http://localhost:3000/api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (reg.test(newCustomer.phone)) {
      create(newCustomer)
      resetCustomer()
      refreshData();
      return
    }
    alert('Número de telefone invalido')
  }
  const resetCustomer = () => {
    setNewCustomer({
      name: '',
      email: '',
      phone: ''
    })
  }

  return (
    <div id='modal'>
      <div className={styles.modalBody}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input type={'text'}
            id='name'
            autoComplete='off'
            value={newCustomer.name}
            onChange={e => setNewCustomer({ ...newCustomer, name: e.target.value })} />
          <label htmlFor="email">Email</label>
          <input type={'text'} id='email'
            value={newCustomer.email}
            onChange={e => setNewCustomer({ ...newCustomer, email: e.target.value })} />
          <label htmlFor="phone">Phone</label>
          <input type={'text'} id='phone'
            value={newCustomer.phone}
            placeholder='xx xxxx xxxxx'
            onChange={e => setNewCustomer({ ...newCustomer, phone: e.target.value })} />
          <div className={styles.button}>
            <Button
              variant='contained'
              color='success'
              type='submit'
              sx={{ mr: '1rem' }}
            >Confirmar</Button>
            <Button
              variant='contained'
              color='error'
              onClick={() => {
                setShowFormModal(false)
                resetCustomer();
              }
              }
            >Cancelar</Button>
          </div>

        </form>
      </div>
    </div>
  )
}
