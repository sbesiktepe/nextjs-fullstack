import { getCurrentUser } from "@/app/actions/getCurremtUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  const body = await request.json();
  const { name, description, brand, category, price, inStock } = body;

  const product = await prisma.product.create({
    data: {
      name,
      description,
      brand,
      category,
      price: parseFloat(price),
      inStock,
    },
  });

  return NextResponse.json(product);
}
