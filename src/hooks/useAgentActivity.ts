import { useState, useEffect } from 'react'

/* ── Types ── */
interface AgentStats {
  status: string
  posts: number
  upvotes: number
  comments: number
  lastAction: string
  lastActionAt: string
}

interface AgentEvent {
  t: string
  agent: string
  action: string
  detail: string
}

interface FleetStats {
  postsTotal: number
  commentsTotal: number
  upvotesTotal: number
  errors: number
  uptime: string
}

export interface AgentActivity {
  agents: Record<string, AgentStats>
  events: AgentEvent[]
  stats: FleetStats
  loading: boolean
}

/* ── Sample data — replace with your own data source ── */
const SAMPLE_DATA: Omit<AgentActivity, 'loading'> = {
  agents: {
    main:  { status: 'active', posts: 47, upvotes: 123, comments: 89, lastAction: 'Publishing fleet briefing...', lastActionAt: '14:57' },
    mind:  { status: 'active', posts: 156, upvotes: 67, comments: 42, lastAction: 'Scheduling 3 posts...', lastActionAt: '14:42' },
    probe: { status: 'active', posts: 23, upvotes: 45, comments: 31, lastAction: 'Scanning LLM endpoint...', lastActionAt: '14:31' },
    adv:   { status: 'idle', posts: 12, upvotes: 18, comments: 15, lastAction: 'Analyzing portfolio...', lastActionAt: '14:15' },
  },
  events: [
    { t: '14:57', agent: 'main', action: 'POST', detail: 'Published fleet briefing to community' },
    { t: '14:42', agent: 'mind', action: 'POST', detail: 'Scheduled 3 posts across accounts' },
    { t: '14:31', agent: 'probe', action: 'SCAN', detail: 'Completed LLM scan — 2 vulns found' },
    { t: '14:15', agent: 'adv', action: 'POST', detail: 'Generated retirement plan draft' },
    { t: '13:58', agent: 'main', action: 'ENGAGE', detail: 'Engaged 4 trending discussions' },
    { t: '13:40', agent: 'mind', action: 'POST', detail: 'AI-generated content for 5 threads' },
    { t: '13:22', agent: 'probe', action: 'SCAN', detail: 'Probing endpoint: chatbot.example.com' },
    { t: '13:05', agent: 'adv', action: 'LEARN', detail: 'Insurance portfolio analysis complete' },
  ],
  stats: {
    postsTotal: 238,
    commentsTotal: 177,
    upvotesTotal: 253,
    errors: 2,
    uptime: '99.2%',
  },
}

/**
 * Hook that provides agent activity data.
 *
 * In production, replace this with your own data source
 * (Firebase, REST API, WebSocket, etc.)
 */
export function useAgentActivity(): AgentActivity {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  return { ...SAMPLE_DATA, loading }
}
