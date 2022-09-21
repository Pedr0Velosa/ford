// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


import prisma from '../../prisma/lib/prisma'

type customerProps = {
  id: any;
  name: any;
  email: any;
  phone: any;
  createdAt: { toLocaleDateString: () => any }
}
type carProp = {
  id: any;
  createdAt: { toLocaleDateString: () => any };
  plate: any;
  customerId: any
}
export async function CustomerFindMany() {
  const customers = await prisma.customer.findMany()
  const dataCustomers = customers.map((customer: customerProps) => {
    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      createdAt: customer.createdAt.toLocaleDateString(),
    }
  })
  const cars = await prisma.car.findMany({
    select: {
      id: true,
      plate: true,
      createdAt: true,
      customerId: true,
    }
  })
  const dataCars = cars.map((car: carProp) => {
    return {
      id: car.id,
      createdAt: car.createdAt.toLocaleDateString(),
      plate: car.plate,
      customerId: car.customerId
    }
  })
  return { dataCustomers, dataCars }
}
