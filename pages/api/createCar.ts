import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { plate, customerId } = req.body

  try {
    await prisma.car.create({
      data: {
        plate,
        customerId,
        bundle: 0
      }
    })
  } catch (error) {
    res.status(403)
  }
}