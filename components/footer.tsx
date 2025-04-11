import { Brain, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-slate-950/80 border-t border-slate-800/80 backdrop-blur-sm relative z-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-cyan-400" />
              <span className="font-bold text-white">
                Edu<span className="text-cyan-400">AÍ</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/webinar" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors">
              WEBINAR
            </Link>
            <div className="flex items-center">
              <span className="text-xs text-cyan-400 font-medium">SAVIO.DEV 2025</span>
              <Link
                href="https://wa.me/5586999482285"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors ml-2"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
