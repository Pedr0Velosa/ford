import { Button } from '@mui/material'
import React from 'react'
import * as XLSX from 'xlsx'
import styles from '../styles/Modal.module.css'
import { Customer } from '../utils/TypeCustomer'

type props = {
  length: number,
  selectedRow: Customer[],
  showModal: boolean,
  setShowModal: any
}

const Modal = ({ length, selectedRow, showModal, setShowModal }: props) => {
  const handleOnExport = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(selectedRow)
    XLSX.utils.book_append_sheet(wb, ws, "Customers")
    XLSX.writeFile(wb, `Customers${ new Date().toISOString() }.xlsx`)
  }
  return (
    showModal ? <>
      <div
        id='modal'
        onClick={() => setShowModal(false)}>
        <div className={styles.modalBody}>
          <p
            style={{ textAlign: 'center' }}>
            Você irá exporta {length} linhas
          </p>
          <div className={styles.button}>
            <Button
              variant='contained'
              color='success'
              onClick={handleOnExport}
            >Confirmar</Button>
            <Button
              variant='contained'
              color='error'
              onClick={() => setShowModal(false)}
            >Cancelar</Button>
          </div>
        </div>
      </div>
    </> : null
  )
}

export default Modal