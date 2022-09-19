import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, phone } = req.body
  console.log(name);

  try {
    await prisma.customer.create({
      data: {
        name,
        email,
        phone
      }
    })
  } catch (error) {
    res.status(403)
  }
}