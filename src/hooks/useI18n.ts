/**
 * i18n stub — passthrough translation.
 *
 * Returns the key as-is. Replace with your own i18n library
 * (react-i18next, custom context, etc.) if needed.
 */
export function useI18n() {
  return {
    t: (key: string) => TRANSLATIONS[key] || key,
    localePath: (path: string) => path,
  }
}

/* ── Default English translations ── */
const TRANSLATIONS: Record<string, string> = {
  // Nav
  'agent.nav_back': '← ULTRA LAB',
  'agent.nav_cta': 'Talk to Agent',

  // Hero
  'agent.hero_tag': 'AUTONOMOUS AI FLEET',
  'agent.hero_title_1': 'Meet Our',
  'agent.hero_title_2': 'AI Agent Fleet',
  'agent.hero_desc': '4 AI agents running 24/7 — posting, engaging, scanning, and advising. $0/month operational cost.',

  // Stats
  'agent.stat_active': 'Active Agents',
  'agent.stat_posts': 'Total Posts',
  'agent.stat_interactions': 'Interactions',
  'agent.stat_cost': 'Monthly Cost',

  // Meta
  'agent.meta_title': 'AI Agent Fleet — Ultra Lab',
  'agent.meta_desc': 'Meet our autonomous AI agent fleet. 4 agents, $0/month.',
  'agent.meta_og_title': 'AI Agent Fleet — Ultra Lab',
  'agent.meta_og_desc': 'Autonomous AI agents running 24/7.',

  // Agent descriptions
  'agent.agent_main_desc': 'HQ Agent — AI security, automation, and SaaS development thought leader. Represents the brand on social platforms.',
  'agent.agent_mind_desc': 'Social automation expert — multi-account management, AI content generation, scheduled publishing.',
  'agent.agent_probe_desc': 'AI security researcher — 19 attack vectors, 200+ LLM application scans. Shares vulnerability findings.',
  'agent.agent_adv_desc': 'Financial planning advisor team — retirement planning, insurance strategy, asset allocation.',

  // Topics (English)
  'agent.topic_ai_security': 'AI Security',
  'agent.topic_saas': 'SaaS Dev',
  'agent.topic_automation': 'Automation',
  'agent.topic_agent_culture': 'Agent Culture',
  'agent.topic_threads': 'Threads Automation',
  'agent.topic_content_marketing': 'Content Marketing',
  'agent.topic_growth': 'Community Growth',
  'agent.topic_ai_copy': 'AI Copywriting',
  'agent.topic_prompt_injection': 'Prompt Injection',
  'agent.topic_llm_vuln': 'LLM Vulnerabilities',
  'agent.topic_scan': 'Security Scanning',
  'agent.topic_defense': 'Defense Strategy',
  'agent.topic_retirement': 'Retirement Planning',
  'agent.topic_insurance': 'Insurance Strategy',
  'agent.topic_asset': 'Asset Allocation',
  'agent.topic_financial': 'Financial Literacy',

  // Skills
  'agent.skill_moltbook': 'Community Ops',
  'agent.skill_mindthread_content': 'Content Generation',
  'agent.skill_ultraprobe_api': 'Security Scanner',
  'agent.skill_pricing': 'Product Pricing',
  'agent.skill_market_research': 'Market Research',
  'agent.skill_deep_research': 'Deep Research',
  'agent.skill_youtube': 'YouTube Analysis',
  'agent.skill_social_manager': 'Social Media Mgmt',
  'agent.skill_content_strategy': 'Content Strategy',
  'agent.skill_security_vuln': 'Vulnerability Scanner',
  'agent.skill_agent_eval': 'Agent Evaluation',
  'agent.skill_ultraprobe_api_scan': 'AI Vulnerability Scan',

  // Product link
  'agent.product_link': 'Product',

  // Tech
  'agent.tech_title': 'Tech Stack',
  'agent.tech_desc': 'Built on open-source tools with zero operational cost.',

  // CTA
  'agent.cta_title': 'Want Your Own Agent Fleet?',
  'agent.cta_desc': 'We build custom AI agent teams for your business.',
  'agent.cta_chat': 'Chat with Agent',
  'agent.cta_human': 'Talk to Human',

  // Footer
  'agent.footer_copy': '© 2026 Ultra Lab. All agents autonomous.',

  // Colony View
  'colony.tag': 'COLONY VIEW',
  'colony.title': 'HQ',
  'colony.title_accent': 'Floor Plan',
  'colony.subtitle': 'Watch agents work, wander, and collaborate in real-time',

  // Orbital Command
  'orbital.tag': 'ORBITAL COMMAND',
  'orbital.title': 'Station',
  'orbital.title_accent': 'Overview',
  'orbital.subtitle': 'Monitor all modules from orbit',
}
