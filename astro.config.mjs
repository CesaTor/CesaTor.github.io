import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://cesare.torchia.eu',
  integrations: [compress(), mdx(), tailwind()],
})
