"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Play, Pause, RefreshCw, Eye, EyeOff, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function AttendanceSimulator() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [recognizedStudents, setRecognizedStudents] = useState(0)
  const [totalStudents] = useState(25)
  const [attentionData, setAttentionData] = useState<number[]>([])
  const [showAttention, setShowAttention] = useState(false)
  const [attentionAlerts, setAttentionAlerts] = useState<string[]>([])
  const [scanLines, setScanLines] = useState(false)

  // Simulação de reconhecimento facial
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying && progress < 100) {
      setScanLines(true)
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 2
          // Incrementa estudantes reconhecidos proporcionalmente ao progresso
          if (newProgress % 10 === 0 && recognizedStudents < totalStudents) {
            setRecognizedStudents((prev) => Math.min(prev + 1, totalStudents))
          }

          // Adiciona dados de atenção simulados
          if (newProgress % 5 === 0) {
            const attentionValue = Math.floor(Math.random() * 30) + 70 // 70-100%
            setAttentionData((prev) => [...prev, attentionValue])

            // Simula alertas de atenção
            if (attentionValue < 80 && Math.random() > 0.7) {
              setAttentionAlerts((prev) => [`Queda de atenção detectada (${attentionValue}%)`, ...prev.slice(0, 2)])
            }
          }

          return newProgress > 100 ? 100 : newProgress
        })
      }, 200)
    } else if (progress >= 100) {
      setIsPlaying(false)
      setScanLines(false)
    }

    return () => {
      clearInterval(interval)
      if (!isPlaying) {
        setScanLines(false)
      }
    }
  }, [isPlaying, progress, recognizedStudents, totalStudents])

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const resetSimulation = () => {
    setIsPlaying(false)
    setProgress(0)
    setRecognizedStudents(0)
    setAttentionData([])
    setAttentionAlerts([])
    setScanLines(false)
  }

  // Lista de alunos fictícia
  const students = [
    { id: 1, name: "João Silva", present: progress >= 10, attention: "Alta" },
    { id: 2, name: "Maria Costa", present: progress >= 15, attention: "Alta" },
    { id: 3, name: "Ana Pereira", present: progress >= 20, attention: "Média" },
    { id: 4, name: "Daniel Lima", present: progress >= 25, attention: "Alta" },
    { id: 5, name: "Eduarda Costa", present: progress >= 30, attention: "Baixa" },
    { id: 6, name: "Felipe Martins", present: progress >= 35, attention: "Alta" },
    { id: 7, name: "Gabriela Souza", present: progress >= 40, attention: "Média" },
    { id: 8, name: "Henrique Alves", present: progress >= 45, attention: "Alta" },
    { id: 9, name: "Isabela Ferreira", present: progress >= 50, attention: "Alta" },
    { id: 10, name: "João Pedro", present: progress >= 55, attention: "Baixa" },
    { id: 11, name: "Karina Dias", present: progress >= 60, attention: "Alta" },
    { id: 12, name: "Lucas Mendes", present: progress >= 65, attention: "Média" },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-sm shadow-xl">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-slate-800/80 flex items-center justify-center">
                  <Users className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Simulação de Reconhecimento</h3>
                  <p className="text-xs text-slate-300">Turma 5º Ano A - Matemática</p>
                </div>
              </div>
              <div className="bg-slate-800/80 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                <span className="text-cyan-400">{recognizedStudents}</span>
                <span className="text-slate-300">/{totalStudents} alunos</span>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden mb-3">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
              <div className="relative">
                <img
                  src="/simulacao-captura.png"
                  alt="Simulação de reconhecimento facial"
                  className="w-full h-auto object-cover"
                />

                {/* Scan lines effect */}
                {scanLines && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
                    initial={{ y: -100 }}
                    animate={{ y: 400 }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                )}

                {/* Facial recognition boxes */}
                {progress > 10 && (
                  <motion.div
                    className="absolute top-[15%] left-[15%] w-[20%] h-[25%] border-2 border-cyan-500 rounded-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute -top-6 left-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded shadow-lg">
                      João Silva
                    </div>
                    <div className="absolute -bottom-6 left-0 bg-cyan-500/80 text-white text-xs px-2 py-1 rounded shadow-lg backdrop-blur-sm">
                      Presente às 07:45
                    </div>
                  </motion.div>
                )}

                {progress > 15 && (
                  <motion.div
                    className="absolute top-[15%] left-[45%] w-[20%] h-[25%] border-2 border-cyan-500 rounded-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <div className="absolute -top-6 left-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded shadow-lg">
                      Maria Costa
                    </div>
                    <div className="absolute -bottom-6 left-0 bg-cyan-500/80 text-white text-xs px-2 py-1 rounded shadow-lg backdrop-blur-sm">
                      Presente às 07:46
                    </div>
                  </motion.div>
                )}

                {progress > 20 && (
                  <motion.div
                    className="absolute top-[15%] right-[15%] w-[20%] h-[25%] border-2 border-cyan-500 rounded-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 }}
                  >
                    <div className="absolute -top-6 left-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded shadow-lg">
                      Ana Pereira
                    </div>
                    <div className="absolute -bottom-6 left-0 bg-cyan-500/80 text-white text-xs px-2 py-1 rounded shadow-lg backdrop-blur-sm">
                      Presente às 07:47
                    </div>
                  </motion.div>
                )}

                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-[80%] bg-slate-900/80 backdrop-blur-sm rounded-md p-2 shadow-xl">
                      <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cyan-500 transition-all duration-200"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs">
                        <span className="text-slate-300">Escaneando sala...</span>
                        <span className="text-cyan-400">{progress}%</span>
                      </div>
                    </div>
                  </div>
                )}
                {!isPlaying && progress === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-3 py-1 bg-slate-900/80 rounded-full text-xs text-cyan-400 backdrop-blur-sm shadow-lg">
                      Clique em Iniciar para simular o reconhecimento
                    </div>
                  </div>
                )}
                {!isPlaying && progress === 100 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-3 py-1 bg-slate-900/80 rounded-full text-xs text-green-400 backdrop-blur-sm shadow-lg">
                      Escaneamento completo!
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              <Button
                onClick={togglePlayback}
                className={`flex-1 ${isPlaying ? "bg-slate-700" : "bg-cyan-500 hover:bg-cyan-600"} shadow-lg ${isPlaying ? "" : "shadow-cyan-500/20"}`}
                disabled={progress === 100}
              >
                {isPlaying ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" />
                    Pausar
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    {progress === 0 ? "Iniciar" : "Continuar"}
                  </>
                )}
              </Button>
              <Button
                onClick={resetSimulation}
                variant="outline"
                className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-slate-800/60"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Reiniciar
              </Button>
            </div>

            {progress > 0 && (
              <Button
                onClick={() => setShowAttention(!showAttention)}
                variant="outline"
                className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-slate-800/60"
              >
                {showAttention ? (
                  <>
                    <EyeOff className="mr-2 h-4 w-4" />
                    Ocultar Monitoramento de Atenção
                  </>
                ) : (
                  <>
                    <Eye className="mr-2 h-4 w-4" />
                    Mostrar Monitoramento de Atenção
                  </>
                )}
              </Button>
            )}

            {showAttention && attentionData.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-slate-800/80 rounded-lg p-3 border border-slate-700 backdrop-blur-sm shadow-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-white">Nível de Atenção da Turma</h4>
                  <span className="text-xs font-medium text-cyan-400">{attentionData[attentionData.length - 1]}%</span>
                </div>
                <div className="h-20 flex items-end space-x-1">
                  {attentionData.slice(-20).map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${value}%`,
                        backgroundColor: value > 85 ? "#22c55e" : value > 75 ? "#0ea5e9" : "#ef4444",
                      }}
                    />
                  ))}
                </div>

                {attentionAlerts.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <h5 className="text-xs font-medium text-white flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1 text-amber-500" />
                      Alertas
                    </h5>
                    {attentionAlerts.map((alert, index) => (
                      <div key={index} className="text-xs text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
                        {alert}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-sm shadow-xl">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h3 className="font-medium text-white">Lista de Presença</h3>

            <div className="rounded-lg border border-slate-800 overflow-hidden">
              <div className="bg-slate-800/80 px-4 py-2 flex justify-between items-center backdrop-blur-sm">
                <span className="text-sm font-medium text-white">Aluno</span>
                <div className="flex space-x-4">
                  <span className="text-sm font-medium text-white">Status</span>
                  {showAttention && <span className="text-sm font-medium text-white">Atenção</span>}
                </div>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {students.map((student) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: student.present ? 1 : 0.5,
                      x: 0,
                      backgroundColor: student.present ? "rgba(16, 185, 129, 0.05)" : "transparent",
                    }}
                    transition={{
                      duration: 0.3,
                      delay: student.id * 0.1,
                    }}
                    className="px-4 py-2 flex justify-between items-center border-t border-slate-800"
                  >
                    <span className="text-sm text-slate-300">{student.name}</span>
                    <div className="flex space-x-4 items-center">
                      <div
                        className={`px-2 py-1 rounded-full text-xs ${student.present ? "bg-green-500/20 text-green-400" : "bg-slate-700 text-slate-400"}`}
                      >
                        {student.present ? "Presente" : "Aguardando"}
                      </div>

                      {showAttention && student.present && (
                        <div
                          className={`px-2 py-1 rounded-full text-xs ${
                            student.attention === "Alta"
                              ? "bg-green-500/20 text-green-400"
                              : student.attention === "Média"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {student.attention}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                {Array.from({ length: totalStudents - students.length }).map((_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="px-4 py-2 flex justify-between items-center border-t border-slate-800"
                  >
                    <span className="text-sm text-slate-500">Aluno {students.length + index + 1}</span>
                    <div className="flex space-x-4 items-center">
                      <div className="px-2 py-1 rounded-full text-xs bg-slate-700 text-slate-400">Aguardando</div>
                      {showAttention && <div className="w-14"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Total de alunos: {totalStudents}</span>
              <span className="text-cyan-400">Presentes: {recognizedStudents}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
