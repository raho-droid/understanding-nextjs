import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongoose";
import Product from "../../../../models/Product";

export async function GET(request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const product = await Product.findOne({ id });
    if (!product)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  await connectToDatabase();
  const { id } = new URL(request.url).searchParams;
  const { name } = await request.json();

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { id },
      { name },
      { new: true }
    );
    if (!updatedProduct)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  await connectToDatabase();
  const { id } = new URL(request.url).searchParams;

  try {
    const deletedProduct = await Product.findOneAndDelete({ id });
    if (!deletedProduct)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
