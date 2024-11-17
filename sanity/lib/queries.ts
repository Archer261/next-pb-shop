// import { client } from './client'

// export async function getProducts() {
//     return client.fetch(`*[_type == "product"] {
// _id,
// name,
// price,
// description,
// "slug": slug.current,
// "image": image.asset->url
//   }`)
// }

// export async function getProduct(slug: string) {
//     return client.fetch(
//         `*[_type == "product" && slug.current == $slug][0] {
//       _id,
//       name,
//       price,
//       description,
//       "slug": slug.current,
//       "image": image.asset->url
//     }`,
//         { slug }
//     )
// }
import { defineQuery } from 'next-sanity'

export const getProducts = defineQuery(`*[_type == "product" && defined(slug.current)][0...12]{
      _id,
    name,
    price,
    description,
    "slug": slug.current,
    "image": image.asset->url
}`)

export const getProduct = defineQuery(`*[_type == "product" && slug.current == $slug][0]{
  title, body, mainImage
}`)