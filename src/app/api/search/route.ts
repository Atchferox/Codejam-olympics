import productsData from "@/data/products.json";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  [key: string]: unknown;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim().toLowerCase() ?? "";

  const allProducts = (productsData as { products: Product[] }).products || [];

  const results =
    query === ""
      ? []
      : allProducts.filter((product) => {
          const title = (product.title ?? "").toLowerCase();
          const description = (product.description ?? "").toLowerCase();
          return (
            title.includes(query) ||
            description.includes(query) ||
            product.category.toLowerCase().includes(query)
          );
        });

  return new Response(JSON.stringify({ query, results }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
