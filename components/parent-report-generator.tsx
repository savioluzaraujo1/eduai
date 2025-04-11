"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Brain, Download, Loader2, Mail, Share, BarChart, TrendingUp, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function ParentReportGenerator() {
  const [studentName, setStudentName] = useState("")
  const [attendancePresent, setAttendancePresent] = useState("4")
  const [attendanceTotal, setAttendanceTotal] = useState("5")
  const [participationNotes, setParticipationNotes] = useState("")
  const [subjects, setSubjects] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState("")
  const [showStats, setShowStats] = useState(false)

  const availableSubjects = [
    { id: "matematica", label: "Matemática" },
    { id: "portugues", label: "Português" },
    { id: "ciencias", label: "Ciências" },
    { id: "historia", label: "História" },
    { id: "geografia", label: "Geografia" },
    { id: "artes", label: "Artes" },
    { id: "educacaofisica", label: "Educação Física" },
  ]

  const generateReport = async () => {
    if (!studentName || subjects.length === 0) return

    setLoading(true)

    // Simulação de chamada de API - em um ambiente real, isso chamaria a API
    setTimeout(() => {
      const attendanceRate = Math.round((Number(attendancePresent) / Number(attendanceTotal)) * 100)

      const report = `**Relatório Semanal: ${studentName}**

${studentName} teve uma semana produtiva, com presença de ${attendanceRate}% nas aulas. 

${subjects.includes("Matemática") ? "Em Matemática, demonstrou bom entendimento dos conceitos apresentados e participou ativamente das atividades em grupo. " : ""}
${subjects.includes("Português") ? "Nas aulas de Português, mostrou progresso na compreensão textual e expressão escrita. " : ""}
${subjects.includes("Ciências") ? "Em Ciências, demonstrou curiosidade e engajamento durante os experimentos práticos. " : ""}
${participationNotes ? `\nObservações adicionais: ${participationNotes}` : ""}

**Sugestão para casa:**
${subjects.includes("Matemática") ? "Pratique problemas matemáticos em situações do dia a dia, como medidas na cozinha ou cálculos de tempo. " : ""}
${subjects.includes("Português") ? "Incentive a leitura diária por pelo menos 15 minutos antes de dormir. " : ""}
${subjects.includes("Ciências") ? "Explore vídeos educativos sobre os temas estudados em Ciências para reforçar o aprendizado. " : ""}

Estamos à disposição para qualquer esclarecimento adicional.`

      setReport(report)
      setShowStats(true)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="studentName" className="text-white">
                Nome do Aluno
              </Label>
              <Input
                id="studentName"
                placeholder="Ex: Maria Silva"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="attendancePresent" className="text-white">
                  Dias Presentes
                </Label>
                <Input
                  id="attendancePresent"
                  type="number"
                  min="0"
                  max="7"
                  value={attendancePresent}
                  onChange={(e) => setAttendancePresent(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="attendanceTotal" className="text-white">
                  Total de Dias
                </Label>
                <Input
                  id="attendanceTotal"
                  type="number"
                  min="1"
                  max="7"
                  value={attendanceTotal}
                  onChange={(e) => setAttendanceTotal(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-white">Disciplinas da Semana</Label>
              <div className="grid grid-cols-2 gap-2">
                {availableSubjects.map((subject) => (
                  <div key={subject.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={subject.id}
                      checked={subjects.includes(subject.label)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSubjects([...subjects, subject.label])
                        } else {
                          setSubjects(subjects.filter((s) => s !== subject.label))
                        }
                      }}
                      className="border-slate-700 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                    />
                    <Label htmlFor={subject.id} className="text-sm font-normal text-slate-300">
                      {subject.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="participationNotes" className="text-white">
                Notas sobre Participação
              </Label>
              <Textarea
                id="participationNotes"
                placeholder="Ex: Participou ativamente nas discussões de ciências, mas teve dificuldade em matemática"
                value={participationNotes}
                onChange={(e) => setParticipationNotes(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>

            <Button
              onClick={generateReport}
              disabled={!studentName || subjects.length === 0 || loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-3 bg-white bg-opacity-20 skew-x-[45deg] group-hover:animate-shimmer" />
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gerando relatório...
                </>
              ) : (
                <>
                  <Brain className="mr-2 h-4 w-4" />
                  Gerar Relatório para Pais com IA
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <Label htmlFor="report" className="text-white">
                Relatório Semanal
              </Label>
              <div
                className={`rounded-lg border p-4 min-h-[200px] ${report ? "bg-slate-800 border-slate-700" : "bg-slate-800 border-slate-700"}`}
              >
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-70 blur-md animate-pulse"></div>
                      <Loader2 className="h-8 w-8 animate-spin text-cyan-500 relative" />
                    </div>
                    <p className="text-slate-400 text-sm mt-4">Gerando relatório personalizado...</p>
                    <div className="mt-4 w-48 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                  </div>
                ) : report ? (
                  <div className="prose prose-invert prose-sm max-w-none text-slate-300">
                    {report.split("\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-500">
                    <Brain className="h-12 w-12 mb-4 text-slate-700" />
                    <p className="text-center">O relatório para os pais aparecerá aqui...</p>
                  </div>
                )}
              </div>

              {report && (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 w-3 bg-white bg-opacity-10 skew-x-[45deg] group-hover:animate-shimmer" />
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar por Email
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 w-3 bg-white bg-opacity-10 skew-x-[45deg] group-hover:animate-shimmer" />
                    <Share className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 w-3 bg-white bg-opacity-10 skew-x-[45deg] group-hover:animate-shimmer" />
                    <Download className="mr-2 h-4 w-4" />
                    Exportar PDF
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {showStats && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-cyan-500" />
                      Análise de Desempenho
                    </h3>
                    <span className="text-xs text-slate-400">Última semana</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-400">Participação</span>
                        <span className="text-xs font-medium text-cyan-400">85%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-400">Atenção</span>
                        <span className="text-xs font-medium text-cyan-400">78%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium text-white flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-cyan-500" />
                        Progresso por Disciplina
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {subjects.includes("Matemática") && (
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-slate-400">Matemática</span>
                            <span className="text-xs font-medium text-cyan-400">B+</span>
                          </div>
                          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {subjects.includes("Português") && (
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-slate-400">Português</span>
                            <span className="text-xs font-medium text-green-400">A-</span>
                          </div>
                          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-green-500 to-cyan-500"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {subjects.includes("Ciências") && (
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-slate-400">Ciências</span>
                            <span className="text-xs font-medium text-purple-400">A</span>
                          </div>
                          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {subjects.includes("História") && (
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-slate-400">História</span>
                            <span className="text-xs font-medium text-yellow-400">B</span>
                          </div>
                          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium text-white flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-cyan-500" />
                        Próximas Atividades
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">Prova de Matemática</span>
                        <span className="text-cyan-400">15/04</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">Trabalho de Ciências</span>
                        <span className="text-cyan-400">22/04</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">Apresentação de História</span>
                        <span className="text-cyan-400">29/04</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
