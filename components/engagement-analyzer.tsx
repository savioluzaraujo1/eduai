"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Brain, LineChart, Loader2, Save } from "lucide-react"

export default function EngagementAnalyzer() {
  const [classData, setClassData] = useState({ name: "5º Ano A", size: 25 })
  const [activityType, setActivityType] = useState("")
  const [duration, setDuration] = useState("45")
  const [engagementMetrics, setEngagementMetrics] = useState({
    averageAttention: 75,
    inattentionPeaks: 3,
    activeParticipation: 60,
  })
  const [loading, setLoading] = useState(false)
  const [analysis, setAnalysis] = useState("")

  const generateAnalysis = async () => {
    if (!activityType) return

    setLoading(true)
    try {
      const response = await fetch("/api/engagement-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          classData,
          activityType,
          duration,
          engagementMetrics,
        }),
      })

      const data = await response.json()
      if (data.analysis) {
        setAnalysis(data.analysis)
      } else {
        console.error("Erro:", data.error)
      }
    } catch (error) {
      console.error("Falha ao gerar análise:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="className" className="text-white">
                Turma
              </Label>
              <Input
                id="className"
                value={classData.name}
                onChange={(e) => setClassData({ ...classData, name: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="activityType" className="text-white">
                Tipo de Atividade
              </Label>
              <Select value={activityType} onValueChange={setActivityType}>
                <SelectTrigger id="activityType" className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Selecione o tipo de atividade" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="aula expositiva">Aula Expositiva</SelectItem>
                  <SelectItem value="trabalho em grupo">Trabalho em Grupo</SelectItem>
                  <SelectItem value="atividade prática">Atividade Prática</SelectItem>
                  <SelectItem value="apresentação de alunos">Apresentação de Alunos</SelectItem>
                  <SelectItem value="jogo educativo">Jogo Educativo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="text-white">
                Duração (minutos)
              </Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger id="duration" className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Duração da atividade" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="15">15 minutos</SelectItem>
                  <SelectItem value="30">30 minutos</SelectItem>
                  <SelectItem value="45">45 minutos</SelectItem>
                  <SelectItem value="60">60 minutos</SelectItem>
                  <SelectItem value="90">90 minutos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-white">Atenção Média</Label>
                  <span className="text-cyan-500 font-medium">{engagementMetrics.averageAttention}%</span>
                </div>
                <Slider
                  value={[engagementMetrics.averageAttention]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setEngagementMetrics({ ...engagementMetrics, averageAttention: value[0] })}
                  className="[&>span]:bg-cyan-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-white">Picos de Desatenção</Label>
                  <span className="text-cyan-500 font-medium">{engagementMetrics.inattentionPeaks}</span>
                </div>
                <Slider
                  value={[engagementMetrics.inattentionPeaks]}
                  min={0}
                  max={10}
                  step={1}
                  onValueChange={(value) => setEngagementMetrics({ ...engagementMetrics, inattentionPeaks: value[0] })}
                  className="[&>span]:bg-cyan-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-white">Participação Ativa</Label>
                  <span className="text-cyan-500 font-medium">{engagementMetrics.activeParticipation}%</span>
                </div>
                <Slider
                  value={[engagementMetrics.activeParticipation]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) =>
                    setEngagementMetrics({ ...engagementMetrics, activeParticipation: value[0] })
                  }
                  className="[&>span]:bg-cyan-500"
                />
              </div>
            </div>

            <Button
              onClick={generateAnalysis}
              disabled={!activityType || loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analisando dados...
                </>
              ) : (
                <>
                  <Brain className="mr-2 h-4 w-4" />
                  Analisar Engajamento com IA
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-white">Análise de Engajamento</Label>
              <div className="flex items-center space-x-1 text-xs text-slate-400">
                <LineChart className="h-3 w-3" />
                <span>Dados Agregados</span>
              </div>
            </div>

            <div
              className={`rounded-lg border p-4 min-h-[350px] ${analysis ? "bg-slate-800 border-slate-700" : "bg-slate-800 border-slate-700"}`}
            >
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-cyan-500 mb-4" />
                  <p className="text-slate-400 text-sm">Analisando padrões de engajamento...</p>
                </div>
              ) : analysis ? (
                <div className="prose prose-invert prose-sm max-w-none text-slate-300">
                  {analysis.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-500">
                  <Brain className="h-12 w-12 mb-4 text-slate-700" />
                  <p className="text-center">A análise de engajamento aparecerá aqui...</p>
                </div>
              )}
            </div>

            {analysis && (
              <Button
                variant="outline"
                className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <Save className="mr-2 h-4 w-4" />
                Salvar Análise
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
