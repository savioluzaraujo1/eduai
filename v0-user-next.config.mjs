/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações existentes...
  
  // Adicione esta configuração para permitir domínios personalizados
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ]
  },
}

export default nextConfig
