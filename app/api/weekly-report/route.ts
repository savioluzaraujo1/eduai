import { NextResponse } from "next/server"

// Esta é uma versão simulada da API que não requer OpenAI
// Em um ambiente de produção, você usaria a API real

export async function POST(req: Request) {
  try {
    const { studentName, attendanceData, participationNotes, subjects } = await req.json()

    // Validação básica
    if (!studentName || !subjects) {
      return NextResponse.json({ error: "Nome do aluno e disciplinas são obrigatórios" }, { status: 400 })
    }

    // Calcular estatísticas básicas
    const attendanceRate = attendanceData ? Math.round((attendanceData.present / attendanceData.total) * 100) : null

    // Simulação de resposta - em produção, isso chamaria a OpenAI
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

    // Simula um pequeno atraso para parecer mais realista
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ report })
  } catch (error) {
    console.error("Erro ao gerar relatório semanal:", error)
    return NextResponse.json({ error: "Falha ao processar a solicitação" }, { status: 500 })
  }
}
