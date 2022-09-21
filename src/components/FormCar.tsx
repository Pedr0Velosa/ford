import { Button } from '@mui/material'
import React, { useState } from 'react'
import styles from '../styles/Modal.module.css'

type createReq = {
  plate: string,
  customerId: string,
  bundle: number,
}

export const FormModalCar = ({ setShowFormModalCar }: any) => {
  const [newCar, setNewCar] = useState<createReq>({
    plate: '',
    customerId: '',
    bundle: 0,
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();
    resetCar()
  }
  const resetCar = () => {
    setNewCar({
      plate: '',
      customerId: '',
      bundle: 0
    })
  }
  return (
    <div id='modal'>
      <div className={styles.modalBody}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="plate">plate</label>
          <input type={'text'}
            id='plate'
            autoComplete='off'
            value={newCar.plate}
            onChange={e => setNewCar({ ...newCar, plate: e.target.value })} />
          <label htmlFor="customerId">customerId</label>
          <input type={'text'} id='customerId'
            value={newCar.customerId}
            onChange={e => setNewCar({ ...newCar, customerId: e.target.value })} />
          <label htmlFor="bundle">bundle</label>
          <input type={'text'} id='bundle'
            value={newCar.bundle}
            onChange={e => setNewCar({ ...newCar, bundle: parseInt((e.target.value)) })} />
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
                setShowFormModalCar(false)
                resetCar();
              }}
            >Cancelar</Button>
          </div>

        </form>
      </div>
    </div>
  )
}
