import IssueCard from './IssueCard'
import type { Issue } from '@/types/issue'

interface IssueGridProps {
  issues: Issue[]
}

/**
 * Dergi sayıları grid layout
 */
function IssueGrid({ issues }: IssueGridProps) {
  if (issues.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-cosmos-muted text-lg">Henüz yayınlanmış sayı bulunmuyor.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {issues.map((issue) => (
        <IssueCard key={issue.slug} issue={issue} />
      ))}
    </div>
  )
}

export default IssueGrid

