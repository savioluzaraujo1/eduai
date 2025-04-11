"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Brain,
  ChevronLeft,
  Menu,
  User,
  BookOpen,
  Calendar,
  MessageCircle,
  Settings,
  Bell,
  BarChart,
  TrendingUp,
  Award,
  AlertTriangle,
  Users,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Footer from "@/components/footer"

export default function PaisDashboard() {
  const [activeTab, setActiveTab] = useState("desempenho")
  const [notifications] = useState([
    { id: 1, text: "Novo relatório disponível", time: "Agora", priority: "high" },
    { id: 2, text: "Reunião de pais agendada", time: "2h atrás", priority: "medium" },
  ])

  // Dados fictícios do aluno
  const studentData = {
    name: "Maria Silva",
    grade: "5º Ano A",
    attendance: 92,
    subjects: [
      { name: "Matemática", grade: 8.5, strengths: ["Frações", "Geometria"], weaknesses: ["Divisão longa"] },
      { name: "Português", grade: 9.2, strengths: ["Interpretação", "Redação"], weaknesses: ["Gram. avançada"] },
      { name: "Ciências", grade: 7.8, strengths: ["Experimentos"], weaknesses: ["Nomenclatura científica"] },
      { name: "História", grade: 8.0, strengths: ["História do Brasil"], weaknesses: ["História Mundial"] },
      { name: "Geografia", grade: 8.7, strengths: ["Mapas", "Clima"], weaknesses: ["Geopolítica"] },
    ],
    upcomingActivities: [
      { name: "Prova de Matemática", date: "15/04/2025", type: "exam" },
      { name: "Trabalho de Ciências", date: "22/04/2025", type: "project" },
      { name: "Apresentação de História", date: "29/04/2025", type: "presentation" },
    ],
    participationData: [
      { category: "Perguntas", value: 12 },
      { category: "Respostas", value: 18 },
      { category: "Trabalhos", value: 8 },
      { category: "Discussões", value: 15 },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pais-RfYARAmk8oCgDzNXSYQeVGDnLiCNyU.png')] bg-cover bg-center opacity-40"></div>
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
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg"
              >
                Bem-vindo ao Portal dos Pais!
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-cyan-500"></div>
              </motion.div>
            </div>
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
                  <p className="font-medium text-white">Responsável</p>
                  <p className="text-xs text-slate-300">Aluno: {studentData.name}</p>
                </div>
              </div>

              <nav className="space-y-1">
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "desempenho" ? "bg-cyan-500/10 text-cyan-400 font-medium" : "text-slate-300 hover:text-white"}`}
                  onClick={() => setActiveTab("desempenho")}
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Desempenho
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "calendario" ? "bg-cyan-500/10 text-cyan-400 font-medium" : "text-slate-300 hover:text-white"}`}
                  onClick={() => setActiveTab("calendario")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendário
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "mensagens" ? "bg-cyan-500/10 text-cyan-400 font-medium" : "text-slate-300 hover:text-white"}`}
                  onClick={() => setActiveTab("mensagens")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Mensagens
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
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-800/50 backdrop-blur-md">
              <TabsTrigger
                value="desempenho"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
              >
                <BarChart className="mr-2 h-4 w-4" />
                Desempenho
              </TabsTrigger>
              <TabsTrigger
                value="calendario"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Calendário
              </TabsTrigger>
              <TabsTrigger value="mensagens" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Mensagens
              </TabsTrigger>
            </TabsList>

            <TabsContent value="desempenho" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Desempenho do Aluno</h1>
                  <p className="text-slate-300">
                    {studentData.name} - {studentData.grade}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center text-white">
                        <Award className="mr-2 h-5 w-5 text-cyan-400" />
                        Média Geral
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-white mb-2">
                        {(
                          studentData.subjects.reduce((acc, subject) => acc + subject.grade, 0) /
                          studentData.subjects.length
                        ).toFixed(1)}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-300">de 10.0 pontos possíveis</p>
                        <div className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                          Acima da média
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center text-white">
                        <Users className="mr-2 h-5 w-5 text-cyan-400" />
                        Presença
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-white mb-2">{studentData.attendance}%</div>
                      <p className="text-sm text-slate-300">nos últimos 30 dias</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center text-white">
                        <TrendingUp className="mr-2 h-5 w-5 text-cyan-400" />
                        Participação
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {studentData.participationData.map((item, index) => (
                          <div key={index} className="bg-slate-800/60 p-2 rounded-lg text-center">
                            <div className="text-xl font-bold text-cyan-400">{item.value}</div>
                            <div className="text-xs text-slate-300">{item.category}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-cyan-400" />
                      Desempenho por Disciplina
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Análise detalhada do desempenho em cada matéria
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {studentData.subjects.map((subject, index) => (
                        <div key={index} className="bg-slate-800/60 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                              <span className="text-white font-medium">{subject.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span
                                className={`text-sm font-medium px-2 py-0.5 rounded-full ${
                                  subject.grade >= 9
                                    ? "bg-green-500/20 text-green-400"
                                    : subject.grade >= 7
                                      ? "bg-cyan-500/20 text-cyan-400"
                                      : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {subject.grade.toFixed(1)}
                              </span>
                            </div>
                          </div>
                          <Progress
                            value={subject.grade * 10}
                            className="h-2"
                            indicatorClassName={
                              subject.grade >= 9 ? "bg-green-500" : subject.grade >= 7 ? "bg-cyan-500" : "bg-red-500"
                            }
                          />
                          <div className="flex justify-between mt-3 text-xs">
                            <div className="flex items-center text-green-400 bg-green-500/10 px-2 py-1 rounded-md">
                              <Award className="h-3 w-3 mr-1" />
                              <span>Pontos fortes: {subject.strengths.join(", ")}</span>
                            </div>
                            <div className="flex items-center text-amber-400 bg-amber-500/10 px-2 py-1 rounded-md">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              <span>Melhorar: {subject.weaknesses.join(", ")}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-cyan-400" />
                      Próximas Atividades
                    </CardTitle>
                    <CardDescription className="text-slate-300">Agenda de avaliações e entregas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {studentData.upcomingActivities.map((activity, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-slate-800/60 rounded-lg backdrop-blur-sm"
                        >
                          <div className="flex items-center">
                            <div
                              className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                                activity.type === "exam"
                                  ? "bg-red-500/20"
                                  : activity.type === "project"
                                    ? "bg-cyan-500/20"
                                    : "bg-amber-500/20"
                              }`}
                            >
                              {activity.type === "exam" ? (
                                <BookOpen
                                  className={`h-4 w-4 ${activity.type === "exam" ? "text-red-400" : activity.type === "project" ? "text-cyan-400" : "text-amber-400"}`}
                                />
                              ) : activity.type === "project" ? (
                                <Users className="h-4 w-4 text-cyan-400" />
                              ) : (
                                <MessageCircle className="h-4 w-4 text-amber-400" />
                              )}
                            </div>
                            <div>
                              <div className="text-white">{activity.name}</div>
                              <div className="text-xs text-slate-400">
                                {activity.type === "exam"
                                  ? "Avaliação"
                                  : activity.type === "project"
                                    ? "Projeto"
                                    : "Apresentação"}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-md">
                            {activity.date}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="calendario" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Calendário Escolar</h1>
                  <p className="text-slate-300">Eventos e atividades programadas</p>
                </div>
                <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden p-8 text-center">
                  <Calendar className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">Calendário em desenvolvimento</h3>
                  <p className="text-slate-300">Esta funcionalidade estará disponível em breve.</p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="mensagens" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Mensagens</h1>
                  <p className="text-slate-300">Comunicação com professores e escola</p>
                </div>
                <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden p-8 text-center">
                  <MessageCircle className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">Sistema de mensagens em desenvolvimento</h3>
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
