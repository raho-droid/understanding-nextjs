import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongoose";
import Category from "../../../../models/Category";

export async function GET(request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const category = await Category.findOne({ id });
    if (!category)
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch category" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  await connectToDatabase();
  const { id } = new URL(request.url).searchParams;
  const { name } = await request.json();

  try {
    const updatedCategory = await Category.findOneAndUpdate(
      { id },
      { name },
      { new: true }
    );
    if (!updatedCategory)
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    return NextResponse.json(updatedCategory);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update category" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  await connectToDatabase();
  const { id } = new URL(request.url).searchParams;

  try {
    const deletedCategory = await Category.findOneAndDelete({ id });
    if (!deletedCategory)
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    return NextResponse.json({ message: "Category deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 }
    );
  }
}
