import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongoose";
import Product from "../../../models/Product";

export async function GET() {
  await connectToDatabase();
  try {
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await connectToDatabase();
  const { id, name } = await request.json();
  try {
    const newProduct = new Product({ id, name });
    await newProduct.save();
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create Product" },
      { status: 500 }
    );
  }
}
