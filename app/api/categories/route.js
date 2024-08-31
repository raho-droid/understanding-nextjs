import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongoose";
import Category from "../../../models/Category";

export async function GET() {
  await connectToDatabase();
  try {
    const categories = await Category.find({});
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await connectToDatabase();
  const { id, name } = await request.json();
  try {
    const newCategory = new Category({ id, name });
    await newCategory.save();
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}
