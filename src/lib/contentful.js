import { createClient } from 'contentful'

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

const client = (spaceId && accessToken)
  ? createClient({ space: spaceId, accessToken })
  : null

export default client

export async function getBlogPosts() {
  if (!client) return []
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
  })
  return entries.items
}

export async function getBlogPost(slug) {
  if (!client) return null
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  })
  return entries.items[0] || null
}