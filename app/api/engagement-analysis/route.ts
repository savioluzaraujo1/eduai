import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { classData, activityType, duration, engagementMetrics } = await req.json()

    // Validação básica
    if (!classData || !engagementMetrics) {
      return NextResponse.json({ error: "Dados da turma e métricas de engajamento são obrigatórios" }, { status: 400 })
    }

    const prompt = `
      Analise os dados de engajamento da turma ${classData.name} durante a atividade de ${activityType} 
      que durou ${duration} minutos.
      
      Métricas de engajamento:
      - Atenção média: ${engagementMetrics.averageAttention}%
      - Picos de desatenção: ${engagementMetrics.inattentionPeaks} vezes
      - Participação ativa: ${engagementMetrics.activeParticipation}%
      
      Com base nesses dados:
      1. Forneça uma análise concisa do engajamento da turma
      2. Identifique possíveis padrões (ex: queda de atenção após 20 minutos)
      3. Sugira 2-3 estratégias específicas para aumentar o engajamento em atividades futuras semelhantes
      4. Mantenha o foco em dados agregados, sem identificar alunos específicos
      
      Formate a resposta de maneira estruturada e prática para o professor.
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: prompt,
      temperature: 0.7,
      maxTokens: 800,
    })

    return NextResponse.json({ analysis: text })
  } catch (error) {
    console.error("Erro ao gerar análise de engajamento:", error)
    return NextResponse.json({ error: "Falha ao processar a solicitação" }, { status: 500 })
  }
}
