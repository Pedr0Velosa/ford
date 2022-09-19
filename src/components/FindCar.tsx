import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Modal.module.css'
//import { CarFindUnique } from '../../pages/api/findUnique'

export const FindCar = ({ setShowFindCar }: any) => {
  const [plate, setPlate] = useState('')
  const [carid, setCarId] = useState('')
  const [findCars, setFindCars] = useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    //CarFindUnique(carid)
  }
  console.log(findCars);

  return (
    <div id='modal'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.modalBody}>
          <label htmlFor="plate">plate</label>
          <input type={'text'}
            id='plate'
            autoComplete='off'
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
          />
          <p>Ou</p>
          <label htmlFor="carid">carid</label>
          <input type={'text'} id='carid'
            value={carid}
            onChange={(e) => setCarId(e.target.value)}
          />
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
                setShowFindCar(false)
              }}
            >Cancelar</Button>
          </div>
        </div>
      </form>
    </div>
  )
}
