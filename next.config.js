/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports:{
    '@mui/icons-material':{
      transform: '@mui/icons-material/{{member}}',
    },
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
