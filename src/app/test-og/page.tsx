import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Test OG - Pokus',
  description: 'Testing Open Graph meta tags for Pokus',
  openGraph: {
    title: 'Test OG - Pokus',
    description: 'Testing Open Graph meta tags for Pokus',
    images: ['/og'],
  },
}

export default function TestOGPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">OG Image Test</h1>
        <p className="text-xl mb-8">This page is for testing Open Graph meta tags</p>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Test Links:</h2>
            <div className="space-y-2 text-left max-w-md mx-auto">
              <a 
                href="https://cards-dev.twitter.com/validator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300"
              >
                Twitter Card Validator
              </a>
              <a 
                href="https://developers.facebook.com/tools/debug/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300"
              >
                Facebook Sharing Debugger
              </a>
              <a 
                href="https://www.opengraph.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300"
              >
                OpenGraph.xyz
              </a>
              <a 
                href="https://www.linkedin.com/post-inspector/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300"
              >
                LinkedIn Post Inspector
              </a>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Current OG Image:</h2>
            <Image 
              src="/og" 
              alt="OG Image" 
              width={400}
              height={210}
              className="max-w-full h-auto border border-gray-600 rounded-lg"
              style={{ maxWidth: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 