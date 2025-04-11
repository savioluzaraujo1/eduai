import { NextResponse } from "next/server"

// Esta é uma versão simulada da API que não requer OpenAI
// Em um ambiente de produção, você usaria a API real

export async function POST(req: Request) {
  try {
    const { topic, grade, duration } = await req.json()

    // Validação básica
    if (!topic || !grade) {
      return NextResponse.json({ error: "Tópico e série são obrigatórios" }, { status: 400 })
    }

    // Simulação de resposta - em produção, isso chamaria a OpenAI
    const examplePlans = {
      frações: `# Plano de Aula: Frações e Resolução de Problemas

## Objetivos de Aprendizagem
- Aplicar frações em situações-problema do cotidiano
- Desenvolver estratégias para resolução de problemas com frações
- Compreender a equivalência de frações em contextos práticos

## Atividades (${duration} minutos)
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

## Atividades (${duration} minutos)
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
      default: `# Plano de Aula: ${topic}

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
- Para alunos avançados: Desafios complementares e pesquisa aprofundada`,
    }

    // Seleciona um plano baseado no tópico ou usa um genérico
    let plan = examplePlans.default
    if (topic.toLowerCase().includes("fração")) {
      plan = examplePlans.frações
    } else if (topic.toLowerCase().includes("fotossíntese")) {
      plan = examplePlans.fotossíntese
    }

    // Simula um pequeno atraso para parecer mais realista
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ plan })
  } catch (error) {
    console.error("Erro ao gerar plano de aula:", error)
    return NextResponse.json({ error: "Falha ao processar a solicitação" }, { status: 500 })
  }
}
