"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Brain, ChevronLeft, Menu, User, BookOpen, Users, Bell, Settings, BarChart, Lightbulb } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import LessonPlanner from "@/components/lesson-planner"
import AttendanceSimulator from "@/components/attendance-simulator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function ProfessorDashboard() {
  const [activeTab, setActiveTab] = useState("planos")
  const [notifications] = useState([
    { id: 1, text: "João Silva está com baixa atenção", time: "Agora", priority: "high" },
    { id: 2, text: "Relatório semanal gerado", time: "10min atrás", priority: "medium" },
    { id: 3, text: "Novo plano de aula sugerido", time: "1h atrás", priority: "low" },
  ])

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/professor-Ij0W6sw3Uc53VvMpXVz2KgEotSSgfQ.png')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-900/80"></div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/70">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Brain className="h-6 w-6 text-cyan-400" />
              </motion.div>
              <span className="font-bold text-lg tracking-tight">
                Edu<span className="text-cyan-400">AÍ</span>
              </span>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <h2 className="text-lg font-medium text-white hidden md:block">Painel do Professor</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-cyan-500 rounded-full"></span>
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-slate-400 hover:text-white">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1 relative z-10">
        <aside className="hidden md:block w-64 border-r border-slate-800/60 bg-slate-900/50 backdrop-blur-md">
          <div className="flex flex-col h-full">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <User className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Professor</p>
                  <p className="text-xs text-slate-300">Matemática - 5º Ano</p>
                </div>
              </div>

              <nav className="space-y-1">
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "planos" ? "bg-cyan-500/10 text-cyan-400 font-medium" : "text-slate-300 hover:text-white"}`}
                  onClick={() => setActiveTab("planos")}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Planos de Aula
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "presenca" ? "bg-cyan-500/10 text-cyan-400 font-medium" : "text-slate-300 hover:text-white"}`}
                  onClick={() => setActiveTab("presenca")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Presença
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "insights" ? "bg-cyan-500/10 text-cyan-400 font-medium" : "text-slate-300 hover:text-white"}`}
                  onClick={() => setActiveTab("insights")}
                >
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Insights
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "analytics" ? "bg-cyan-500/10 text-cyan-400 font-medium" : "text-slate-300 hover:text-white"}`}
                  onClick={() => setActiveTab("analytics")}
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
                <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white">
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </Button>
              </nav>
            </div>

            <div className="mt-auto p-4 border-t border-slate-800/80">
              <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
                <CardContent className="p-3">
                  <h4 className="text-sm font-medium text-white mb-2 flex items-center">
                    <Bell className="h-4 w-4 mr-1.5 text-cyan-400" />
                    Notificações
                  </h4>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="text-xs bg-slate-900/60 p-2 rounded-md">
                        <div className="flex items-center">
                          <div
                            className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                              notification.priority === "high"
                                ? "bg-red-400"
                                : notification.priority === "medium"
                                  ? "bg-amber-400"
                                  : "bg-cyan-400"
                            }`}
                          />
                          <p className="text-slate-200 font-medium">{notification.text}</p>
                        </div>
                        <p className="text-slate-400 mt-1 ml-3">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-slate-800/50 backdrop-blur-md">
              <TabsTrigger value="planos" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
                <BookOpen className="mr-2 h-4 w-4" />
                Planos de Aula
              </TabsTrigger>
              <TabsTrigger value="presenca" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
                <Users className="mr-2 h-4 w-4" />
                Presença
              </TabsTrigger>
              <TabsTrigger
                value="insights"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white hidden md:flex"
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                Insights
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white hidden md:flex"
              >
                <BarChart className="mr-2 h-4 w-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="planos" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Painel do Professor</h1>
                  <p className="text-slate-300">Crie planos de aula personalizados com IA</p>
                </div>
                <LessonPlanner />
              </div>
            </TabsContent>

            <TabsContent value="presenca" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Simulação de Presença</h1>
                  <p className="text-slate-300">Demonstração de reconhecimento facial em sala de aula</p>
                </div>
                <AttendanceSimulator />
              </div>
            </TabsContent>

            <TabsContent value="insights" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Insights Pedagógicos</h1>
                  <p className="text-slate-300">Análises e recomendações baseadas em IA</p>
                </div>
                <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden p-8 text-center">
                  <Lightbulb className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">Módulo em desenvolvimento</h3>
                  <p className="text-slate-300">Esta funcionalidade estará disponível em breve.</p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Analytics Educacional</h1>
                  <p className="text-slate-300">Métricas e visualizações de desempenho</p>
                </div>
                <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden p-8 text-center">
                  <BarChart className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">Módulo em desenvolvimento</h3>
                  <p className="text-slate-300">Esta funcionalidade estará disponível em breve.</p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <Footer />
    </div>
  )
}
