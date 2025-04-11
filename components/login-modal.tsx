"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Brain, User, Lock, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface LoginModalProps {
  onClose: () => void
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      if (username === "professor" && password === "professor") {
        router.push("/professor")
      } else if (username === "pai" && password === "pai") {
        router.push("/pais")
      } else {
        setError("Usuário ou senha inválidos")
        setIsLoading(false)
      }
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 15 }}
        className="bg-slate-900 border border-slate-800/80 rounded-lg shadow-2xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Brain className="h-6 w-6 text-cyan-400" />
            </motion.div>
            <h2 className="text-xl font-bold text-white">Login EduAÍ</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">
              Usuário
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input
                id="username"
                placeholder="Digite seu usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-slate-800/80 border-slate-700/80 text-white pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Senha
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-800/80 border-slate-700/80 text-white pl-10"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 text-red-400 px-3 py-2 rounded-md text-sm flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              {error}
            </div>
          )}

          <div className="pt-2">
            <Button
              onClick={handleLogin}
              disabled={!username || !password || isLoading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white relative overflow-hidden group shadow-lg shadow-cyan-500/20"
            >
              <div className="absolute inset-0 w-3 bg-white bg-opacity-20 skew-x-[45deg] group-hover:animate-shimmer" />
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                />
              ) : null}
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </div>

          <div className="text-center text-xs text-slate-400 mt-4 bg-slate-800/60 p-3 rounded-md backdrop-blur-sm">
            <p className="font-medium mb-1">Demonstração:</p>
            <p>
              Professor: usuário <span className="text-cyan-400">"professor"</span>, senha{" "}
              <span className="text-cyan-400">"professor"</span>
            </p>
            <p>
              Pais: usuário <span className="text-cyan-400">"pai"</span>, senha{" "}
              <span className="text-cyan-400">"pai"</span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
