import { OrderType } from "./types";

export const orders: OrderType[] = [
  {
    id: "order123",
    orderId: "ORD0001",
    userId: "user123",
    status: "pending",
    items: [
      {
        id: "prod001",
        details: {
          id: "prod001",
          productId: "PROD-001",
          name: "Leather Jacket Leather Jacket Leather Jacket Leather Jacket Leather Jacket",
          price: 199.99,
          description: { text: "Premium leather jacket", features: ["Genuine leather", "Water-resistant"] },
          sizes: ["M"],
          category: "Clothing",
          images: ["/images/leather-jacket.jpg"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        quantity: 1,
      },
      {
        id: "prod002",
        details: {
          id: "prod002",
          productId: "PROD-002",
          name: "Casual Sneakers",
          price: 59.99,
          description: { text: "Comfortable everyday sneakers", features: ["Breathable", "Non-slip sole"] },
          sizes: ["8", "9", "10"],
          category: "Footwear",
          images: ["/images/sneakers.jpg"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        quantity: 2,
      },
      {
        id: "prod003",
        details: {
          id: "prod003",
          productId: "PROD-003",
          name: "Sunglasses",
          price: 29.99,
          description: { text: "UV Protection Sunglasses", features: ["UV400", "Polarized"] },
          sizes: ["One size"],
          category: "Accessories",
          images: ["/images/sunglasses.jpg"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        quantity: 1,
      },
    ],
    paymentStatus: "pending",
    shippingAddress: {
      id: "a1",
      name: "John Doe",
      address: ["123 Fashion St", "Apt 101"],
      city: "New York",
      state: "NY",
      country: "USA",
      postalCode: "10001",
      phoneNumber: "+1 555-555-5555",
      default: true,
    },
    billingAddress: {
      id: "a1",
      name: "John Doe",
      address: ["123 Fashion St", "Apt 101"],
      city: "New York",
      state: "NY",
      country: "USA",
      postalCode: "10001",
      phoneNumber: "+1 555-555-5555",
      default: true,
    },
    fare: {
      total: 349.95,
      shipping: 10,
      discount: 20,
      amountPaid: 339.95,
    },
    placedAt: new Date(),
    deliveredAt: null,
    updatedAt: new Date(),
    trackingId: "TRK123456",
    paymentMethod: "credit_card",
  },
  {
    id: "order124",
    orderId: "ORD0002",
    userId: "user124",
    status: "shipped",
    items: [
      {
        id: "prod004",
        details: {
          id: "prod004",
          productId: "PROD-004",
          name: "Graphic T-shirt",
          price: 19.99,
          description: { text: "Cool graphic T-shirt", features: ["100% Cotton", "Machine washable"] },
          sizes: ["S", "M", "L"],
          category: "Clothing",
          images: ["/images/graphic-tshirt.jpg"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        quantity: 3,
      },
      {
        id: "prod005",
        details: {
          id: "prod005",
          productId: "PROD-005",
          name: "Backpack",
          price: 49.99,
          description: { text: "Stylish backpack for everyday use", features: ["Waterproof", "Multiple pockets"] },
          sizes: ["One size"],
          category: "Accessories",
          images: ["/images/backpack.jpg"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        quantity: 1,
      },
    ],
    paymentStatus: "completed",
    shippingAddress: {
      id: "a2",
      name: "John Doe",
      address: ["456 Trendy Ave", "Suite 202"],
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      phoneNumber: "+1 555-555-5555",
      postalCode: "90001",
      default: true,
    },
    billingAddress: {
      id: "a2",
      name: "John Doe",
      address: ["456 Trendy Ave", "Suite 202"],
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      phoneNumber: "+1 555-555-5555",
      postalCode: "90001",
      default: true,
    },
    fare: {
      total: 129.96,
      shipping: 5,
      discount: 10,
      amountPaid: 124.96,
    },
    placedAt: new Date(),
    deliveredAt: null,
    updatedAt: new Date(),
    trackingId: "TRK7891011",
    paymentMethod: "paypal",
  },
  {
    id: "order125",
    orderId: "ORD0003",
    userId: "user125",
    status: "completed",
    items: [
      {
        id: "prod006",
        details: {
          id: "prod006",
          productId: "PROD-006",
          name: "Laptop Stand",
          price: 39.99,
          description: { text: "Adjustable laptop stand", features: ["Ergonomic", "Aluminum"] },
          sizes: ["One size"],
          category: "Electronics",
          images: ["/images/laptop-stand.jpg"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        quantity: 1,
      },
      {
        id: "prod007",
        details: {
          id: "prod007",
          productId: "PROD-007",
          name: "Wireless Mouse",
          price: 24.99,
          description: { text: "Sleek wireless mouse", features: ["Bluetooth", "Ergonomic design"] },
          sizes: ["One size"],
          category: "Electronics",
          images: ["/images/wireless-mouse.jpg"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        quantity: 2,
      },
    ],
    paymentStatus: "completed",
    shippingAddress: {
      id: "a3",
      name: "John Doe",
      address: ["789 Tech Lane", "Building 5"],
      city: "San Francisco",
      state: "CA",
      country: "USA",
      phoneNumber: "+1 555-555-5555",
      postalCode: "94103",
      default: true,
    },
    billingAddress: {
      id: "a3",
      name: "John Doe",
      address: ["789 Tech Lane", "Building 5"],
      city: "San Francisco",
      state: "CA",
      phoneNumber: "+1 555-555-5555",
      country: "USA",
      postalCode: "94103",
      default: true,
    },
    fare: {
      total: 89.97,
      shipping: 0,
      discount: 10,
      amountPaid: 79.97,
    },
    placedAt: new Date(),
    deliveredAt: new Date(),
    updatedAt: new Date(),
    trackingId: "TRK654321",
    paymentMethod: "credit_card",
  },
];
