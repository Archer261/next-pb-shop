import Link from "next/link";
import StripeCheckoutButton from "./components/StripeCheckoutButton";
import Hero from "./components/Hero";

export default async function Home() {

  const cartItems = [
    {
      id: 'prod_123',
      name: 'Pro Pickleball Paddle',
      price: 99.99,
      quantity: 1
    }
  ];

  // const products = await sanityFetch<SanityDocument[]>({ query: getProducts});
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <section>
        <Hero />
      </section>
      <section className="text-center">
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <Link
              href="/products"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
            >
              Shop Now
            </Link>

            <StripeCheckoutButton items={cartItems} />
          </div>
        </div>
      </section>
    </div>
  );
}