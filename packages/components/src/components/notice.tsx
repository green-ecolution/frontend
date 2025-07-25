import { Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import type { ReactNode } from 'react'

interface NoticeProps {
  title: string
  description: string
  icon?: ReactNode
  variant?: 'default' | 'destructive'
}

const Notice = ({ title, description, variant, icon = <Info /> }: NoticeProps) => {
  return (
    <Alert variant={variant}>
      {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}

export default Notice
