"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Brain, ChevronRight, LockKeyhole } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import LoginModal from "@/components/login-modal"
import { FeatureCard } from "@/components/feature-card"
import Footer from "@/components/footer"

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number }>>([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-4QoDuUMhbLSClQKAGkI5MT4vDA5087.png')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-900/80"></div>
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
                <Brain className="h-8 w-8 text-cyan-400" />
              </motion.div>
              <span className="font-bold text-xl tracking-tight">
                Edu<span className="text-cyan-400">AÍ</span>
              </span>
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <Button
              className="bg-cyan-500 hover:bg-cyan-600 text-white group relative overflow-hidden shadow-lg shadow-cyan-500/20"
              onClick={() => setShowLoginModal(true)}
            >
              <div className="absolute inset-0 w-3 bg-white bg-opacity-20 skew-x-[45deg] group-hover:animate-shimmer" />
              <LockKeyhole className="mr-2 h-4 w-4" />
              Acessar Sistema
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            {/* Animated particles */}
            <div className="absolute inset-0">
              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-cyan-400/30"
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                  }}
                  initial={{
                    x: `${particle.x}%`,
                    y: `${particle.y}%`,
                    opacity: Math.random() * 0.5 + 0.3,
                  }}
                  animate={{
                    y: [`${particle.y}%`, `${(particle.y + 100) % 100}%`],
                  }}
                  transition={{
                    duration: 20 / particle.speed,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block rounded-lg bg-slate-800/50 px-3 py-1 text-sm text-cyan-400 shadow-lg shadow-cyan-500/20 mb-4 backdrop-blur-sm"
              >
                Revolucionando a Educação com IA
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400 mb-6 drop-shadow-md"
              >
                Transforme suas aulas com inteligência artificial
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-[700px] text-slate-300 md:text-xl mb-8 leading-relaxed"
              >
                O EduAÍ utiliza tecnologia avançada de IA para automatizar tarefas administrativas, criar planos de aula
                personalizados e conectar pais ao progresso dos alunos em tempo real.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white group relative overflow-hidden shadow-lg shadow-cyan-500/20 text-lg"
                  onClick={() => setShowLoginModal(true)}
                >
                  <div className="absolute inset-0 w-3 bg-white bg-opacity-20 skew-x-[45deg] group-hover:animate-shimmer" />
                  Experimentar Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FeatureCard
                  title="Planejamento Inteligente"
                  description="Gera planos de aula personalizados com base no currículo e no perfil da turma"
                  icon="BookOpen"
                  items={[
                    "Sugestões de atividades adaptadas ao nível da turma",
                    "Recomendação de recursos educacionais",
                    "Adaptação a diferentes estilos de aprendizagem",
                  ]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <FeatureCard
                  title="Análise de Engajamento"
                  description="Monitora padrões de atenção e participação para insights valiosos"
                  icon="Users"
                  items={[
                    "Detecção de níveis de atenção coletiva",
                    "Sugestões para reengajar a turma",
                    "Relatórios agregados de participação",
                  ]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <FeatureCard
                  title="Comunicação com Pais"
                  description="Gera relatórios personalizados e sugestões para envolvimento familiar"
                  icon="MessageCircle"
                  items={[
                    "Resumos semanais do desempenho do aluno",
                    "Sugestões de atividades complementares",
                    "Respostas automáticas a dúvidas frequentes",
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-slate-900/50 relative">
          <div className="absolute inset-0 bg-[url('/digital-education.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <div className="inline-block rounded-lg bg-slate-800/50 px-3 py-1 text-sm text-cyan-400 backdrop-blur-sm">
                  Comece Agora
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md">
                  Pronto para transformar sua sala de aula?
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white group relative overflow-hidden shadow-lg shadow-cyan-500/20"
                  onClick={() => setShowLoginModal(true)}
                >
                  <div className="absolute inset-0 w-3 bg-white bg-opacity-20 skew-x-[45deg] group-hover:animate-shimmer" />
                  Experimentar Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>{showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}</AnimatePresence>
    </div>
  )
}
