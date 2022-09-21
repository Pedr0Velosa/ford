import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Modal.module.css'
import { v4 as uuidv4 } from 'uuid';


type createReq = {
  name: string,
  email: string,
  phone: string,
  id: string,
  createdAt: string,
}
const reg = /^(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})$/

export const FormModal = ({ setShowFormModal, setRows }: any) => {
  const [newCustomer, setNewCustomer] = useState<createReq>({
    id: '',
    name: '',
    email: '',
    phone: '',
    createdAt: '',
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setNewCustomer(oldVal => ({ ...oldVal, id: uuidv4() }))
    setNewCustomer(oldVal => ({ ...oldVal, createdAt: new Date().toLocaleDateString() }))
  }
  const resetCustomer = () => {
    setNewCustomer({
      id: '',
      name: '',
      email: '',
      phone: '',
      createdAt: '',
    })
  }
  useEffect(() => {
    if (!newCustomer.id || !newCustomer.createdAt) return
    setRows((previusCustomer: any) => [...previusCustomer, newCustomer])
    resetCustomer()
  }, [newCustomer.id, newCustomer.createdAt])
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
