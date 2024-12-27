import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full py-6 px-4 mt-auto border-t">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
        <Link href="/privacy" target="_blank" rel="noopener noreferrer">
          <Button variant="link" className="text-gray-500 hover:text-gray-700">
            Privacidade
          </Button>
        </Link>
        <Link href="/terms" target="_blank" rel="noopener noreferrer">
          <Button variant="link" className="text-gray-500 hover:text-gray-700">
            Termos de Serviço
          </Button>
        </Link>
        <Link href="/commercial" target="_blank" rel="noopener noreferrer">
          <Button variant="link" className="text-gray-500 hover:text-gray-700">
            Uso Comercial
          </Button>
        </Link>
        <Link href="/support" target="_blank" rel="noopener noreferrer">
          <Button variant="link" className="text-gray-500 hover:text-gray-700">
            Suporte
          </Button>
        </Link>
      </div>
    </footer>
  )
}

export default Footer 