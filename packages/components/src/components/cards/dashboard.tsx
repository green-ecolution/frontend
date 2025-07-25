import { MoveRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'

interface DashboardCard {
  headline: string
  description: string
  linkLabel: string
  theme: 'dark' | 'light' | 'white'
}

const themeClasses = {
  dark: 'border-green-dark bg-green-dark/5 hover:bg-green-dark/10',
  light: 'border-green-light bg-green-light/5 hover:bg-green-light/10',
  white: 'border-dark bg-white hover:bg-dark/5',
}

const DashboardCard = ({ headline, description, linkLabel, theme }: DashboardCard) => {
  return (
    <Card
      className={cn(
        'shadow-cards border h-full rounded-xl group flex flex-col gap-4 transition-all ease-in-out duration-300 hover:cursor-pointer',
        themeClasses[theme],
      )}
    >
      <CardHeader>
        <CardTitle className="font-lato text-lg text-dark font-semibold">{headline}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="font-lato font-semibold text-green-dark flex items-center gap-x-2">
        <span>{linkLabel}</span>
        <MoveRight className="transition-all ease-in-out duration-300 group-hover:translate-x-2" />
      </CardFooter>
    </Card>
  )
}

export default DashboardCard
