// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


import prisma from '../../prisma/lib/prisma'

type carProps = {
  id: any;
  createdAt: { toLocaleDateString: () => any };
  plate: any
}

export async function CarFindMany() {

  const cars = await prisma.car.findMany({
    select: {
      id: true,
      plate: true,
      createdAt: true,
      //customerId: true,
      //bundle: true
    }
  })
  const dataCars = cars.map((car: carProps) => {
    return {
      id: car.id,
      createdAt: car.createdAt.toLocaleDateString(),
      plate: car.plate,
      //bundle: car.bundle,
      // customerId: car.customerId
    }
  })
  return { dataCars }
}
