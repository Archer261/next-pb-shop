
// app/products/[slug]/page.tsx
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import ProductDisplay from './ProductDisplay';

type Product = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  images: {
    asset: {
      url: string;
    };
  }[];
  variants?: string[];
  stockLevel: number;
  details?: {
    material?: string;
    dimensions?: string;
    weight?: string;
  };
};

async function getProduct(slug: string): Promise<Product> {
  const query = groq`
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      price,
      description,
      "images": images[]{
        asset->{
          url
        }
      },
      variants,
      stockLevel,
      details
    }
  `;

  return await client.fetch(query, { slug });
}

export async function generateStaticParams() {
  const query = groq`*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return products.map((product: any) => ({
    slug: product.slug.current,
  }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  return <ProductDisplay product={product} />;
}