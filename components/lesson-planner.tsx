"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, Download, Loader2, Save, Share, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function LessonPlanner() {
  const [topic, setTopic] = useState("")
  const [grade, setGrade] = useState("")
  const [duration, setDuration] = useState("50")
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const suggestions = [
    "Frações para 5º ano",
    "Fotossíntese para 7º ano",
    "Revolução Francesa para 9º ano",
    "Verbos no presente para 3º ano",
  ]

  const generatePlan = async () => {
    if (!topic || !grade) return

    setLoading(true)

    // Simulação de chamada de API - em um ambiente real, isso chamaria a API
    setTimeout(() => {
      const examplePlans = {
        frações: `# Plano de Aula: Frações e Resolução de Problemas

## Objetivos de Aprendizagem
- Aplicar frações em situações-problema do cotidiano
- Desenvolver estratégias para resolução de problemas com frações
- Compreender a equivalência de frações em contextos práticos

## Atividades (50 minutos)
1. **Desafio Inicial (10 min)**
   - Dividir uma pizza em partes iguais para diferentes números de pessoas
   - Discussão sobre representações fracionárias das partes

2. **Resolução Colaborativa (20 min)**
   - Trabalho em grupos de 3-4 alunos
   - Cada grupo recebe um conjunto de problemas contextualizados
   - Rotação de problemas entre grupos para comparar estratégias

3. **Jogo Digital "Frações na Prática" (15 min)**
   - Utilização do aplicativo interativo
   - Desafios progressivos de aplicação de frações

4. **Síntese e Avaliação (5 min)**
   - Discussão das estratégias utilizadas
   - Autoavaliação do aprendizado

## Recursos Necessários
- Simulador digital de frações (link: fracoes.eduai.com.br)
- Folha de problemas contextualizados (PDF anexo)
- Tablets ou computadores para o jogo digital

## Adaptações
- Para alunos com dificuldade: Utilizar material concreto como apoio
- Para alunos avançados: Problemas adicionais com frações mistas`,
        fotossíntese: `# Plano de Aula: Fotossíntese

## Objetivos de Aprendizagem
- Compreender o processo de fotossíntese e sua importância para os seres vivos
- Identificar os fatores necessários para a fotossíntese
- Relacionar a fotossíntese com questões ambientais atuais

## Atividades (50 minutos)
1. **Ativação de Conhecimentos Prévios (8 min)**
   - Brainstorming sobre "Como as plantas se alimentam?"
   - Registro das ideias no quadro para posterior verificação

2. **Apresentação do Processo (15 min)**
   - Explicação do processo com apoio de animação digital
   - Identificação dos elementos: luz, água, CO2, clorofila
   - Produtos: glicose e oxigênio

3. **Experimento Demonstrativo (20 min)**
   - Observação de plantas em diferentes condições
   - Registro de hipóteses e observações
   - Discussão dos resultados preliminares

4. **Síntese e Conexões (7 min)**
   - Elaboração de mapa conceitual coletivo
   - Conexão com temas ambientais: desmatamento e aquecimento global

## Recursos Necessários
- Animação digital sobre fotossíntese
- Kit de experimento com plantas em diferentes condições
- Folha de registro para observações

## Adaptações
- Para alunos com dificuldade: Uso de analogias visuais simplificadas
- Para alunos avançados: Pesquisa sobre variações da fotossíntese em diferentes biomas`,
        "revolução francesa": `# Plano de Aula: Revolução Francesa

## Objetivos de Aprendizagem
- Compreender as causas sociais, políticas e econômicas da Revolução Francesa
- Analisar o impacto dos ideais iluministas no processo revolucionário
- Relacionar os eventos da Revolução com a formação do mundo contemporâneo

## Atividades (50 minutos)
1. **Contextualização Histórica (10 min)**
   - Apresentação da França pré-revolucionária
   - Análise da estrutura social: clero, nobreza e terceiro estado
   - Crise econômica e fiscal do Antigo Regime

2. **Análise de Documentos Históricos (15 min)**
   - Trabalho em grupos com trechos de documentos da época
   - Declaração dos Direitos do Homem e do Cidadão
   - Relatos de participantes dos eventos

3. **Linha do Tempo Interativa (15 min)**
   - Construção coletiva de linha do tempo
   - Identificação das fases da Revolução
   - Discussão sobre os principais personagens e suas contribuições

4. **Debate: Legado da Revolução (10 min)**
   - Discussão sobre o impacto da Revolução Francesa no mundo atual
   - Conexões com conceitos de cidadania, democracia e direitos humanos

## Recursos Necessários
- Apresentação multimídia com imagens da época
- Cópias de documentos históricos adaptados
- Material para construção da linha do tempo

## Adaptações
- Para alunos com dificuldade: Glossário ilustrado de conceitos-chave
- Para alunos avançados: Análise comparativa com outras revoluções`,
      }

      // Seleciona um plano baseado no tópico ou usa um genérico
      let selectedPlan = ""
      if (topic.toLowerCase().includes("fração")) {
        selectedPlan = examplePlans["frações"]
      } else if (topic.toLowerCase().includes("fotossíntese")) {
        selectedPlan = examplePlans["fotossíntese"]
      } else if (topic.toLowerCase().includes("revolução francesa")) {
        selectedPlan = examplePlans["revolução francesa"]
      } else {
        selectedPlan = `# Plano de Aula: ${topic}

## Objetivos de Aprendizagem
- Compreender os conceitos fundamentais sobre ${topic}
- Aplicar conhecimentos em situações práticas
- Desenvolver habilidades de análise crítica relacionadas ao tema

## Atividades (${duration} minutos)
1. **Introdução ao Tema (${Math.round(Number(duration) * 0.2)} min)**
   - Ativação de conhecimentos prévios
   - Apresentação de conceitos-chave
   - Discussão inicial sobre aplicações práticas

2. **Desenvolvimento (${Math.round(Number(duration) * 0.4)} min)**
   - Atividades práticas em grupos
   - Resolução de problemas contextualizados
   - Exploração de recursos didáticos específicos

3. **Aplicação (${Math.round(Number(duration) * 0.3)} min)**
   - Exercícios de fixação
   - Projetos colaborativos
   - Conexões interdisciplinares

4. **Avaliação (${Math.round(Number(duration) * 0.1)} min)**
   - Síntese dos conceitos aprendidos
   - Autoavaliação do aprendizado
   - Feedback coletivo

## Recursos Necessários
- Apresentação digital interativa
- Material impresso para atividades
- Recursos audiovisuais de apoio

## Adaptações
- Para alunos com dificuldade: Materiais de apoio visual e concreto
- Para alunos avançados: Desafios complementares e pesquisa aprofundada`
      }

      setPlan(selectedPlan)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-slate-900/80 border-slate-700 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="space-y-2 relative">
              <Label htmlFor="topic" className="text-white">
                Tópico da Aula
              </Label>
              <div className="relative">
                <Input
                  id="topic"
                  placeholder="Ex: Frações, Revolução Francesa, Fotossíntese"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 pr-10"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-500"
                  onClick={() => setShowSuggestions(!showSuggestions)}
                >
                  <Sparkles className="h-4 w-4" />
                </Button>
              </div>

              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 mt-1 w-full bg-slate-800/90 border border-slate-700/60 rounded-md shadow-lg"
                >
                  <div className="p-2">
                    <p className="text-xs text-slate-400 mb-2">Sugestões:</p>
                    <div className="space-y-1">
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="px-2 py-1.5 text-sm text-slate-300 hover:bg-slate-700/60 rounded cursor-pointer"
                          onClick={() => {
                            setTopic(suggestion)
                            setShowSuggestions(false)
                          }}
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="grade" className="text-white">
                Ano Escolar
              </Label>
              <Select value={grade} onValueChange={setGrade}>
                <SelectTrigger className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400">
                  <SelectValue placeholder="Selecione o ano" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800/90 border-slate-700/60 text-white">
                  <SelectItem value="1">1º Ano</SelectItem>
                  <SelectItem value="2">2º Ano</SelectItem>
                  <SelectItem value="3">3º Ano</SelectItem>
                  <SelectItem value="4">4º Ano</SelectItem>
                  <SelectItem value="5">5º Ano</SelectItem>
                  <SelectItem value="6">6º Ano</SelectItem>
                  <SelectItem value="7">7º Ano</SelectItem>
                  <SelectItem value="8">8º Ano</SelectItem>
                  <SelectItem value="9">9º Ano</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="text-white">
                Duração da Aula (minutos)
              </Label>
              <Input
                type="number"
                id="duration"
                placeholder="Ex: 50"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>

            <Button
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white relative overflow-hidden group"
              onClick={generatePlan}
              disabled={loading}
            >
              <div className="absolute inset-0 w-3 bg-white bg-opacity-20 skew-x-[45deg] group-hover:animate-shimmer" />
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gerando plano...
                </>
              ) : (
                <>
                  <Brain className="mr-2 h-4 w-4" />
                  Gerar Plano de Aula com IA
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900/50 border-slate-800/60 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="text-lg font-semibold text-white">Plano de Aula</h2>
              <div className="flex gap-3">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium">
                  <Share className="mr-2 h-5 w-5" />
                  Compartilhar
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium">
                  <Download className="mr-2 h-5 w-5" />
                  Download
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                  <Save className="mr-2 h-5 w-5" />
                  Salvar
                </Button>
              </div>
            </div>
            {loading ? (
              <div className="flex flex-col items-center justify-center h-[400px] bg-slate-800/60 rounded-md backdrop-blur-sm">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-70 blur-md animate-pulse"></div>
                  <Loader2 className="h-10 w-10 animate-spin text-cyan-500 relative" />
                </div>
                <p className="text-slate-300 text-sm mt-4">Gerando seu plano de aula personalizado...</p>
                <div className="mt-4 w-48 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </div>
            ) : (
              <div className="bg-slate-800/90 border border-slate-700 rounded-md p-4 h-[400px] overflow-auto text-white font-mono text-sm">
                {plan ? (
                  <div className="whitespace-pre-wrap">
                    {plan.split("\n").map((line, index) => {
                      // Estilizar cabeçalhos
                      if (line.startsWith("# ")) {
                        return (
                          <h1 key={index} className="text-xl font-bold text-cyan-400 mb-3 mt-2">
                            {line.substring(2)}
                          </h1>
                        )
                      }
                      if (line.startsWith("## ")) {
                        return (
                          <h2 key={index} className="text-lg font-semibold text-cyan-300 mb-2 mt-4">
                            {line.substring(3)}
                          </h2>
                        )
                      }
                      // Estilizar itens de lista
                      if (line.startsWith("- ")) {
                        return (
                          <div key={index} className="flex items-start mb-1 ml-2">
                            <div className="mr-2 h-4 w-4 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                            </div>
                            <span>{line.substring(2)}</span>
                          </div>
                        )
                      }
                      // Estilizar itens numerados
                      if (/^\d+\.\s/.test(line)) {
                        return (
                          <p key={index} className="mb-1 ml-2 text-cyan-200 font-medium">
                            {line}
                          </p>
                        )
                      }
                      // Linhas normais
                      return (
                        <p key={index} className="mb-1">
                          {line}
                        </p>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-slate-400 flex items-center justify-center h-full">
                    O plano de aula gerado aparecerá aqui...
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
