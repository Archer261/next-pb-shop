import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import page from './page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, page],
}
