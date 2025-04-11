import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, BookOpen, Brain, FileText, HelpCircle, MessageCircle, Users } from "lucide-react"

type IconType = "BookOpen" | "Users" | "MessageCircle" | "HelpCircle" | "FileText" | "BarChart"

interface FeatureCardProps {
  title: string
  description: string
  icon: IconType
  items: string[]
}

export function FeatureCard({ title, description, icon, items }: FeatureCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "BookOpen":
        return <BookOpen className="h-6 w-6 text-cyan-400" />
      case "Users":
        return <Users className="h-6 w-6 text-cyan-400" />
      case "MessageCircle":
        return <MessageCircle className="h-6 w-6 text-cyan-400" />
      case "HelpCircle":
        return <HelpCircle className="h-6 w-6 text-cyan-400" />
      case "FileText":
        return <FileText className="h-6 w-6 text-cyan-400" />
      case "BarChart":
        return <BarChart className="h-6 w-6 text-cyan-400" />
      default:
        return <Brain className="h-6 w-6 text-cyan-400" />
    }
  }

  return (
    <div className="bg-slate-900/50 border-slate-800/60 overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md shadow-xl rounded-xl h-full">
      <div className="absolute h-1 w-full bg-gradient-to-r from-cyan-500 to-purple-600 top-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <CardHeader className="pb-2">
        <div className="h-10 w-10 rounded-lg bg-slate-800/60 flex items-center justify-center mb-3 group-hover:bg-slate-800/40 transition-colors">
          <IconComponent />
        </div>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-slate-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-slate-300">
              <div className="mr-2 h-4 w-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </div>
  )
}
