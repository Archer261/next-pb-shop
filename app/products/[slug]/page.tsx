// app/products/[slug]/page.tsx
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import ProductDisplay from './ProductDisplay';

// Define all types at the top
type ProductSlug = {
  slug: {
    current: string;
  };
};

type Product = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
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

type PageProps = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
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

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const query = groq`*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products: ProductSlug[] = await client.fetch(query);

  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.slug);

  return <ProductDisplay product={product} />;
}