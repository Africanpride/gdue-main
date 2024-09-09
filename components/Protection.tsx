import { Protect } from '@clerk/nextjs'
interface Props {
  children: React.ReactNode
}

export const Protection = ({ children }: Props) => {
  return (
    <Protect
      role="org:admin"
      fallback={<p>Only a member of the Admin department can access this content.</p>}
    >
      {children}
    </Protect>
  )
}
