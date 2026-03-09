import { useState } from 'react'
import { Bot, MessageSquare, Zap, Shield, DollarSign, ExternalLink, Send, Wrench } from 'lucide-react'
import { useI18n } from './hooks/useI18n'
import { useAgentActivity } from './hooks/useAgentActivity'
import NerveCenter from './components/NerveCenter'
import SpaceStation from './components/SpaceStation'
import Aquarium from './components/Aquarium'
import { AGENTS_META } from './data/agent-data'

const THEMES = [
  { id: 'colony', label: 'Colony View', icon: '🏢' },
  { id: 'orbital', label: 'Orbital Command', icon: '🛰️' },
  { id: 'aquarium', label: 'Deep Ocean', icon: '🐠' },
] as const
type ThemeId = typeof THEMES[number]['id']

const agents = AGENTS_META

/* ── Topic key mapping ── */
const TOPIC_KEY_MAP: Record<string, string> = {
  'AI 安全': 'agent.topic_ai_security',
  'SaaS 開發': 'agent.topic_saas',
  '自動化': 'agent.topic_automation',
  'Agent 文化': 'agent.topic_agent_culture',
  'Threads 自動化': 'agent.topic_threads',
  '內容行銷': 'agent.topic_content_marketing',
  '社群成長': 'agent.topic_growth',
  'AI 文案': 'agent.topic_ai_copy',
  'Prompt Injection': 'agent.topic_prompt_injection',
  'LLM 漏洞': 'agent.topic_llm_vuln',
  '安全掃描': 'agent.topic_scan',
  '防禦策略': 'agent.topic_defense',
  '退休規劃': 'agent.topic_retirement',
  '保險策略': 'agent.topic_insurance',
  '資產配置': 'agent.topic_asset',
  '財務素養': 'agent.topic_financial',
}

/* ── Skill key mapping ── */
const SKILL_KEY_MAP: Record<string, string> = {
  'moltbook': 'agent.skill_moltbook',
  'mindthread-api': 'agent.skill_mindthread_content',
  'ultraprobe-api': 'agent.skill_ultraprobe_api',
  'pricing-info': 'agent.skill_pricing',
  'market-research': 'agent.skill_market_research',
  'deep-research': 'agent.skill_deep_research',
  'youtube-transcript': 'agent.skill_youtube',
  'social-manager': 'agent.skill_social_manager',
  'content-strategy': 'agent.skill_content_strategy',
  'security-vuln-scanner': 'agent.skill_security_vuln',
  'agent-evaluation': 'agent.skill_agent_eval',
  'ultraprobe-scan': 'agent.skill_ultraprobe_api_scan',
}

export default function AgentApp() {
  const { t, localePath } = useI18n()

  const [theme, setTheme] = useState<ThemeId>('colony')
  const activity = useAgentActivity()

  const activeCount = Object.values(activity.agents).filter(a => a.status === 'active' || a.status === 'online').length
  const stats = [
    { icon: Bot, label: t('agent.stat_active'), value: String(activeCount || 4), color: '#8A5CFF' },
    { icon: Zap, label: t('agent.stat_posts'), value: String(activity.stats.postsTotal || 0), color: '#14B8A6' },
    { icon: MessageSquare, label: t('agent.stat_interactions'), value: String(activity.stats.commentsTotal || 0), color: '#4DA3FF' },
    { icon: DollarSign, label: t('agent.stat_cost'), value: '$0', color: '#10B981' },
  ]

  const DESC_MAP: Record<string, string> = {
    main: t('agent.agent_main_desc'),
    mind: t('agent.agent_mind_desc'),
    probe: t('agent.agent_probe_desc'),
    adv: t('agent.agent_adv_desc'),
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        color: '#f8fafc',
        fontFamily: "'Outfit', system-ui, sans-serif",
        background: '#0A0515',
      }}
    >
      {/* Nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(10, 5, 21, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(138, 92, 255, 0.1)',
        }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '3.5rem' }}>
          <a href={localePath('/')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
            {t('agent.nav_back')}
          </a>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 1rem',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #8A5CFF, #CE4DFF)',
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            <Send size={14} />
            {t('agent.nav_cta')}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.3rem 0.8rem',
              borderRadius: '4px',
              background: 'rgba(138, 92, 255, 0.1)',
              border: '1px solid rgba(138, 92, 255, 0.2)',
              color: '#8A5CFF',
              fontSize: '0.75rem',
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: '1.5rem',
            }}
          >
            {t('agent.hero_tag')}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
            {t('agent.hero_title_1')}<br />
            <span style={{ background: 'linear-gradient(135deg, #8A5CFF, #CE4DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {t('agent.hero_title_2')}
            </span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '40rem', margin: '0 auto 2rem' }}>
            {t('agent.hero_desc')}
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', maxWidth: '50rem', margin: '0 auto' }}>
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(15, 10, 30, 0.8)',
                  border: '1px solid rgba(138, 92, 255, 0.1)',
                }}
              >
                <s.icon size={20} style={{ color: s.color, marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", color: s.color }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Switcher */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {THEMES.map(th => (
          <button
            key={th.id}
            onClick={() => setTheme(th.id)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              border: `1px solid ${theme === th.id ? 'rgba(138, 92, 255, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
              background: theme === th.id ? 'rgba(138, 92, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
              color: theme === th.id ? '#a78bfa' : '#64748b',
              fontSize: '0.75rem',
              fontFamily: "'JetBrains Mono', monospace",
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {th.icon} {th.label}
          </button>
        ))}
      </div>

      {/* Dashboard (theme-switchable) */}
      {theme === 'colony' && <NerveCenter />}
      {theme === 'orbital' && <SpaceStation />}
      {theme === 'aquarium' && <Aquarium />}

      {/* Agent Cards */}
      <section style={{ paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {agents.map((agent) => (
              <div
                key={agent.name}
                style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  background: 'rgba(15, 10, 30, 0.8)',
                  border: `1px solid ${agent.color}20`,
                  opacity: agent.comingSoon ? 0.6 : 1,
                  position: 'relative',
                }}
              >
                {agent.comingSoon && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      color: '#F59E0B',
                      fontSize: '0.65rem',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    COMING SOON
                  </span>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '12px',
                      background: `${agent.color}15`,
                      border: `1px solid ${agent.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}
                  >
                    {agent.emoji}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>{agent.name}</h3>
                    <span style={{ color: agent.color, fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>
                      {agent.role}
                    </span>
                  </div>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {DESC_MAP[agent.id] || agent.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                  {agent.topics.map((topic) => (
                    <span
                      key={topic}
                      style={{
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        background: `${agent.color}10`,
                        border: `1px solid ${agent.color}20`,
                        color: agent.color,
                        fontSize: '0.65rem',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {TOPIC_KEY_MAP[topic] ? t(TOPIC_KEY_MAP[topic]) : topic}
                    </span>
                  ))}
                </div>

                {agent.skills.length > 0 && (
                  <div style={{ marginBottom: '1.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.4rem' }}>
                      <Wrench size={11} style={{ color: '#64748b' }} />
                      <span style={{ fontSize: '0.6rem', color: '#64748b', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Skills
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {agent.skills.map((skill) => (
                        <span
                          key={skill.name}
                          style={{
                            padding: '0.1rem 0.4rem',
                            borderRadius: '3px',
                            background: 'rgba(100, 116, 139, 0.1)',
                            border: '1px solid rgba(100, 116, 139, 0.15)',
                            color: '#94a3b8',
                            fontSize: '0.6rem',
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {SKILL_KEY_MAP[skill.name] ? t(SKILL_KEY_MAP[skill.name]) : skill.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {agent.moltbook && (
                    <a
                      href={agent.moltbook}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(138, 92, 255, 0.1)',
                        border: '1px solid rgba(138, 92, 255, 0.2)',
                        color: '#a78bfa',
                        textDecoration: 'none',
                        fontSize: '0.7rem',
                      }}
                    >
                      <ExternalLink size={12} /> Moltbook
                    </a>
                  )}
                  {agent.telegram && (
                    <a
                      href={agent.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(77, 163, 255, 0.1)',
                        border: '1px solid rgba(77, 163, 255, 0.2)',
                        color: '#4DA3FF',
                        textDecoration: 'none',
                        fontSize: '0.7rem',
                      }}
                    >
                      <Send size={12} /> Telegram
                    </a>
                  )}
                  {agent.product && (
                    <a
                      href={agent.product}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        background: `${agent.color}10`,
                        border: `1px solid ${agent.color}20`,
                        color: agent.color,
                        textDecoration: 'none',
                        fontSize: '0.7rem',
                      }}
                    >
                      <ExternalLink size={12} /> {t('agent.product_link')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{t('agent.tech_title')}</h2>
          <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.9rem' }}>
            {t('agent.tech_desc')}
          </p>
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '12px',
              background: 'rgba(15, 10, 30, 0.8)',
              border: '1px solid rgba(138, 92, 255, 0.1)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: '#94a3b8',
              textAlign: 'left',
              lineHeight: 2,
            }}
          >
            <span style={{ color: '#8A5CFF' }}>framework</span> : Your Agent Framework Here<br />
            <span style={{ color: '#8A5CFF' }}>model</span>{'     '}: Your LLM Here<br />
            <span style={{ color: '#8A5CFF' }}>runtime</span>{'   '}: Your Runtime Here<br />
            <span style={{ color: '#8A5CFF' }}>social</span>{'    '}: Your Platform Here<br />
            <span style={{ color: '#8A5CFF' }}>schedule</span>{'  '}: Your Scheduler Here<br />
            <span style={{ color: '#8A5CFF' }}>cost</span>{'      '}: <span style={{ color: '#10B981' }}>$0/month</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(138, 92, 255, 0.08)', padding: '2rem 0', textAlign: 'center' }}>
        <p style={{ color: '#374151', fontSize: '0.75rem' }}>
          {t('agent.footer_copy')}
        </p>
      </footer>
    </div>
  )
}
