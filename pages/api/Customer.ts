// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


import prisma from '../../prisma/lib/prisma'

export async function CustomerFindMany() {
  const customers = await prisma.customer.findMany()
  const dataCustomers = customers.map(customer => {
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
  const dataCars = cars.map(car => {
    return {
      id: car.id,
      createdAt: car.createdAt.toLocaleDateString(),
      plate: car.plate,
      customerId: car.customerId
    }
  })
  return { dataCustomers, dataCars }
}
