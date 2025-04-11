"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Brain, ChevronLeft, Code, Network, Rocket, Briefcase } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function WebinarPage() {
  const [activeSection, setActiveSection] = useState("sobre")

  const speakers = [
    {
      id: 1,
      name: "Nome do Palestrante 1",
      role: "Cargo / Empresa",
      topic: "Habilidades Técnicas Essenciais",
      icon: Code,
    },
    {
      id: 2,
      name: "Nome do Palestrante 2",
      role: "Cargo / Empresa",
      topic: "Construindo seu Network",
      icon: Network,
    },
    {
      id: 3,
      name: "Nome do Palestrante 3",
      role: "Cargo / Empresa",
      topic: "Estratégias de Crescimento",
      icon: Rocket,
    },
    {
      id: 4,
      name: "Nome do Palestrante 4",
      role: "Cargo / Empresa",
      topic: "Navegando pelo Mercado Tech",
      icon: Briefcase,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/tech-career-bg.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-900/80"></div>

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-30"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500/30"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/70">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Brain className="h-8 w-8 text-purple-400" />
              </motion.div>
              <span className="font-bold text-xl tracking-tight">
                Edu<span className="text-purple-400">AÍ</span>
              </span>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex space-x-4">
              <Button
                variant="ghost"
                className={activeSection === "sobre" ? "text-purple-400" : "text-slate-300 hover:text-white"}
                onClick={() => setActiveSection("sobre")}
              >
                Sobre
              </Button>
              <Button
                variant="ghost"
                className={activeSection === "palestrantes" ? "text-purple-400" : "text-slate-300 hover:text-white"}
                onClick={() => setActiveSection("palestrantes")}
              >
                Palestrantes
              </Button>
              <Button
                variant="ghost"
                className={activeSection === "inscricao" ? "text-purple-400" : "text-slate-300 hover:text-white"}
                onClick={() => setActiveSection("inscricao")}
              >
                Inscrição
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-400 shadow-lg shadow-purple-500/20 mb-4 backdrop-blur-sm"
              >
                Webinar Exclusivo
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 mb-6 drop-shadow-md"
              >
                De Estagiário a Sênior
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-[800px] text-slate-300 md:text-xl mb-8 leading-relaxed"
              >
                Habilidades, Networking e Estratégias para Crescer em Tech
              </motion.p>
            </div>

            {activeSection === "sobre" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Sobre o Evento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300">
                      Neste webinar exclusivo, quatro profissionais experientes da área de tecnologia compartilharão
                      suas jornadas, desde os primeiros passos como estagiários até alcançarem posições seniores em
                      empresas de destaque.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeSection === "palestrantes" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {speakers.map((speaker) => (
                    <Card
                      key={speaker.id}
                      className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden group"
                    >
                      <div className="absolute h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-500 top-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      <div className="h-48 bg-slate-800/60 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-slate-700/60 flex items-center justify-center">
                          <Camera className="h-10 w-10 text-slate-500" />
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-white">{speaker.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <speaker.icon className="h-4 w-4 text-purple-400" />
                          </div>
                          <span className="text-slate-300">{speaker.topic}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "inscricao" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Inscreva-se no Webinar</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-lg mb-6">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-11%20at%2001.57.41-vBrFUjgnuwO9achrTLKIJKL4UIhdbI.jpeg"
                        alt="QR Code para o grupo do Telegram"
                        className="w-64 h-64"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function Camera(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}
