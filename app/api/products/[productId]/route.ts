import { db } from "@/firebase/config";
import { NextResponse } from "next/server";
import { Product } from "@/lib/schema";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

// GET: Fetch product by ID
export async function GET(req: Request, { params }: { params: { productId: string } }) {
  try {
    const { productId } = params;

    const productRef = doc(db, "products", productId);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    const product = productSnap.data() as Product;

    return NextResponse.json(
      {
        message: "Product retrieved successfully",
        product,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch product",
        error,
      },
      { status: 500 }
    );
  }
}

// POST: Update product by ID
export async function POST(req: Request, { params }: { params: { productId: string } }) {
  try {
    const { productId } = params;
    const body = await req.json();

    const productRef = doc(db, "products", productId);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    const product = productSnap.data() as Product;

    const { name, price, description, sizes, category, images } = product;

    // Validate request body
    if (!productId) {
      return NextResponse.json({ message: "Required details" }, { status: 400 });
    }

    const stockToUpdate = typeof body.stockUpdate == undefined ? false : body.stockUpdate;

    const newProduct: Product = {
      ...product,
      name: body.name || name,
      price: body.price || price,
      description: body.description || description,
      sizes: body.sizes || sizes || [],
      category: body.category || category,
      images: body.images || images || [],
      updatedAt: new Date(),
      stockUpdate: stockToUpdate,
    };

    console.log("New product Images:", newProduct.images);

    await setDoc(productRef, newProduct);

    return NextResponse.json({ message: "Product details updated successfully", product: newProduct }, { status: 201 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ message: "Failed to update product", error }, { status: 500 });
  }
}

// DELETE: Remove product by ID
export async function DELETE(req: Request, { params }: { params: { productId: string } }) {
  try {
    const { productId } = params;

    const productRef = doc(db, "products", productId);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    await deleteDoc(productRef);

    return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ message: "Failed to delete product", error }, { status: 500 });
  }
}
