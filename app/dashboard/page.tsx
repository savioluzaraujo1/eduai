import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, ChevronLeft, LogOut, Menu, User } from "lucide-react"
import Link from "next/link"
import DashboardSidebar from "@/components/dashboard-sidebar"
import LessonPlanner from "@/components/lesson-planner"
import ParentReportGenerator from "@/components/parent-report-generator"
import AttendanceSimulator from "@/components/attendance-simulator"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-cyan-500" />
              <span className="font-bold text-lg tracking-tight">
                Edu<span className="text-cyan-500">AÍ</span>
              </span>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Tabs defaultValue="professor" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-3 bg-slate-800">
                <TabsTrigger
                  value="professor"
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
                >
                  Professor
                </TabsTrigger>
                <TabsTrigger
                  value="presenca"
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
                >
                  Presença
                </TabsTrigger>
                <TabsTrigger value="pais" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
                  Portal Pais
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-slate-400 hover:text-white">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
            <Button variant="destructive" size="sm" className="hidden md:flex">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <Tabs defaultValue="professor" className="w-full">
            <TabsContent value="professor" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Painel do Professor</h1>
                  <p className="text-slate-400">Crie planos de aula personalizados com IA</p>
                </div>
                <LessonPlanner />
              </div>
            </TabsContent>
            <TabsContent value="presenca" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Simulação de Presença</h1>
                  <p className="text-slate-400">Demonstração de reconhecimento facial em sala de aula</p>
                </div>
                <AttendanceSimulator />
              </div>
            </TabsContent>
            <TabsContent value="pais" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Portal para Pais</h1>
                  <p className="text-slate-400">Gere relatórios personalizados para os pais</p>
                </div>
                <ParentReportGenerator />
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
