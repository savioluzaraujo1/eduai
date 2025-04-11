import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, BookOpen, Brain, FileText, HelpCircle, MessageCircle, Users } from "lucide-react"

type IconType = "BookOpen" | "Users" | "MessageCircle" | "HelpCircle" | "FileText" | "BarChart"

interface AIFeatureCardProps {
  title: string
  description: string
  icon: IconType
  items: string[]
}

export function AIFeatureCard({ title, description, icon, items }: AIFeatureCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "BookOpen":
        return <BookOpen className="h-6 w-6 text-cyan-500" />
      case "Users":
        return <Users className="h-6 w-6 text-cyan-500" />
      case "MessageCircle":
        return <MessageCircle className="h-6 w-6 text-cyan-500" />
      case "HelpCircle":
        return <HelpCircle className="h-6 w-6 text-cyan-500" />
      case "FileText":
        return <FileText className="h-6 w-6 text-cyan-500" />
      case "BarChart":
        return <BarChart className="h-6 w-6 text-cyan-500" />
      default:
        return <Brain className="h-6 w-6 text-cyan-500" />
    }
  }

  return (
    <Card className="bg-slate-900 border-slate-800 overflow-hidden group">
      <div className="absolute h-1 w-full bg-gradient-to-r from-cyan-500 to-purple-600 top-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <CardHeader className="pb-2">
        <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center mb-3">
          <IconComponent />
        </div>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-slate-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-slate-300">
              <div className="mr-2 h-4 w-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
