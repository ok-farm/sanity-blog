import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: '3vvt5v86',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})