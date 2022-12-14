import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../src/utils/CustomersTable';
import { Button } from '@mui/material';
import Modal from '../src/components/Modal'
import { CUSTOMERS } from '../src/utils/customers';
import { FormModal } from '../src/components/FormModal';
import { FormModalCar } from '../src/components/FormCar';
import { FindCar } from '../src/components/FindCar';
import Head from 'next/head';

type customerProp = {
  id: any;
  name: any;
  phone: any;
  email: any;
  createdAt: any;
}

const Customer = ({ data }: any) => {
  const initialRows: any = data.map((customer: customerProp) => (
    {
      id: customer.id,
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
      createdAt: customer.createdAt,
      cars: data.dataCars?.filter((car: { customerId: any; }) =>
        car.customerId === customer.id)
        .map((customerCar: { id: any; }) => customerCar.id) || 'Sem carro registrado'
    }
  ))
  const [selectedRow, setSelectedRow] = useState<any>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showFormModal, setShowFormModal] = useState<boolean>(false)
  const [showFormModalCar, setShowFormModalCar] = useState<boolean>(false)
  const [showFindaCar, setShowFindCar] = useState<boolean>(false)
  const [rows, setRows] = useState<customerProp[]>([])
  useEffect(() => {
    setRows(initialRows)
  }, [])
  return (
    <>
      <Head>
        <title>Customer</title>
      </Head>
      <Modal
        length={selectedRow.length}
        selectedRow={selectedRow}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {showFormModal &&
        <FormModal setShowFormModal={setShowFormModal} setRows={setRows} />}
      {showFormModalCar &&
        <FormModalCar setShowFormModalCar={setShowFormModalCar} />}
      {showFindaCar &&
        <FindCar setShowFindCar={setShowFindCar} />}
      <main>
        <div
          style={{
            height: '750px',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '1rem'
          }}>
          <Button
            sx={{ my: '1rem', mx: '0.5rem' }}
            variant='contained'
            onClick={() => setShowModal(true)}
          >
            Export Customers
          </Button>
          <Button
            sx={{ my: '1rem', mx: '0.5rem' }}
            variant='contained'
            onClick={() => setShowFormModal(true)}
          >
            Create Customers
          </Button>
          <Button
            sx={{ my: '1rem', mx: '0.5rem' }}
            variant='contained'
            onClick={() => setShowFormModalCar(true)}
          >
            Create Car
          </Button>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRowData = rows.filter((row) =>
                selectedIDs.has(row?.id?.toString())
              );
              setSelectedRow(selectedRowData);
            }}
          />
        </div>
      </main>
    </>

  )
}

export default Customer

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  return {
    props: {
      data: CUSTOMERS
    },
  }

}