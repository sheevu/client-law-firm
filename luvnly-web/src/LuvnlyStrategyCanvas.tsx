import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Bot, Globe2, MapPin, Zap, BookOpen, Brain, Link as LinkIcon, ShieldCheck, Sparkles, PlayCircle, RotateCcw, ChevronRight, BarChart4, Workflow, TimerReset, Search, Palette, LayoutTemplate } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, CartesianGrid, RadialBarChart, RadialBar, Legend } from 'recharts'

// Lightweight UI wrappers to avoid external UI libs
const Card = ({ children, className='' }) => <div className={`rounded-2xl border border-white/20 bg-black/60 backdrop-blur-xl ${className}`}>{children}</div>
const CardContent = ({ children, className='' }) => <div className={`p-4 ${className}`}>{children}</div>
const Button = ({ children, className='', ...props }) => <button className={`px-3 py-2 rounded-xl ${className}`} {...props}>{children}</button>

// ==========================
// LUVNLY INTERACTIVE DASHBOARD — HIGH CONTRAST & VIBRANT
// ==========================

const keywordBursts = [
  { kw: 'lucknow call girls', vol: 2200, intent: 'Head' },
  { kw: 'lucknow escort service', vol: 1600, intent: 'Head' },
  { kw: 'call girl number lucknow', vol: 1400, intent: 'Trans' },
  { kw: 'justdial spa', vol: 1600, intent: 'Topo' },
  { kw: 'aryan hazratganj', vol: 2400, intent: 'Topo' },
  { kw: 'b2b massage lucknow', vol: 590, intent: 'Trans' },
  { kw: 'hotels in charbagh below 500', vol: 390, intent: 'Info' },
]

const funnelData = [
  { step: 'Impressions', value: 100 },
  { step: 'Clicks', value: 42 },
  { step: 'Sessions', value: 29 },
  { step: 'Leads', value: 12 },
  { step: 'Bookings', value: 6 },
]

const roadmap = [
  { q: 'Week 1', item: 'WP + Astra + Elementor on Hostinger', icon: <Globe2 className='w-4 h-4'/> },
  { q: 'Week 2', item: 'Lucknow hub + 20 profiles + FAQ schema', icon: <Search className='w-4 h-4'/> },
  { q: 'Week 3', item: 'Blog cluster (Safety, Local Guides)', icon: <BookOpen className='w-4 h-4'/> },
  { q: 'Week 4', item: 'Backlinks + GMB + Citations', icon: <LinkIcon className='w-4 h-4'/> },
  { q: 'Month 2', item: 'Automation: GPT-5 content + cron refresh', icon: <Bot className='w-4 h-4'/> },
  { q: 'Quarter 2', item: 'City expansion (Kanpur/Delhi)', icon: <MapPin className='w-4 h-4'/> },
]

const competitors = [
  { name: 'FunGirl (Delhi)', usp: 'Schema + multi-city + daily refresh', learn: ['Service schema','Sticky CTA','City sub-sites'] },
  { name: 'Ankitabasu (Mumbai)', usp: 'Strong titles + category/location hubs', learn: ['Category pages','Locality pages','Dark bold UI'] },
  { name: 'PoonamAggarwal (Lucknow)', usp: 'Card profiles + Hinglish tone', learn: ['Profile grid','Emoji hooks','Hindi keywords'] },
]

const lucknowAreas = ['Hazratganj','Gomti Nagar','Aliganj','Indira Nagar','Charbagh','Aminabad','Chowk','Rajajipuram']
const areaActivitySeries = lucknowAreas.map(a=>({ area:a, score: Math.round(40+60*Math.random()) }))
const COLORS = ['#22d3ee','#a78bfa','#f472b6','#f59e0b','#34d399','#60a5fa','#fb7185','#06b6d4']

const pulseVariants = { initial:{scale:.98,opacity:.95}, animate:{ scale:1, opacity:1, transition:{duration:.8, repeat:Infinity, repeatType:'reverse'} } }
const marquee = { initial:{x:0}, animate:{ x:[0,-800], transition:{duration:14, ease:'linear', repeat:Infinity} } }

function useKpis(){
  const [kpis,setKpis]=useState({rankings:18, profiles:24, ctr:2.1, da:9})
  useEffect(()=>{ const id=setInterval(()=>{ setKpis(k=>({
      rankings: Math.max(1, Math.round(k.rankings - Math.random()*0.3)),
      profiles: k.profiles + (Math.random()>0.7?1:0),
      ctr: +(k.ctr + (Math.random()-0.45)*0.05).toFixed(2),
      da: Math.min(40, k.da + (Math.random()>0.8?1:0)),
  }))},1800); return ()=>clearInterval(id)},[])
  return kpis
}

function useAutoSection(total,delay=6000){ const [idx,setIdx]=useState(0); useEffect(()=>{ const id=setInterval(()=>setIdx(i=>(i+1)%total),delay); return ()=>clearInterval(id)},[total,delay]); return [idx,setIdx] as const }

export default function LuvnlyStrategyCanvas(){
  const kpis=useKpis(); const [tab,setTab]=useAutoSection(5,7000)
  const intentCounts = useMemo(()=>{ const m={}; keywordBursts.forEach(k=>m[k.intent]=(m[k.intent]||0)+1); return Object.entries(m).map(([name,value])=>({name,value})) },[])
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-neutral-950 to-black text-white p-6 md:p-10 overflow-hidden'>
      <motion.div className='pointer-events-none absolute -top-28 -right-20 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-cyan-400/20 via-fuchsia-500/15 to-amber-400/20 blur-3xl' variants={pulseVariants} initial='initial' animate='animate'/>
      <motion.div className='pointer-events-none absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-emerald-400/20 via-sky-400/15 to-pink-500/20 blur-3xl' variants={pulseVariants} initial='initial' animate='animate'/>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8'>
        <div>
          <div className='flex items-center gap-3'>
            <motion.div className='p-2 rounded-2xl bg-sky-400/20 ring-1 ring-sky-300/30' variants={pulseVariants} initial='initial' animate='animate'>
              <Sparkles className='w-6 h-6 text-sky-300'/>
            </motion.div>
            <h1 className='text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-sky-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent'>Luvnly — SEO + AI Command Center</h1>
          </div>
          <p className='mt-1 text-slate-100/90'>Futuristic, dynamic, interactive & auto-animated insights for Lucknow launch → pan‑India.</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          <Button className='rounded-2xl bg-white text-black hover:bg-white/90'><RotateCcw className='w-4 h-4 mr-1'/> Auto‑Mode</Button>
          <Button className='rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-400'><PlayCircle className='w-4 h-4 mr-1'/> Demo Flow</Button>
        </div>
      </div>
      <div className='grid md:grid-cols-4 gap-4 mb-8'>
        <KpiCard title='Avg Rank (Head KW)' value={`#${kpis.rankings}`} icon={<TrendingUp/>} hint='Target: Top 3 in 8 weeks'/>
        <KpiCard title='Profiles Live (Lucknow)' value={kpis.profiles} icon={<BarChart4/>} hint='+2 weekly'/>
        <KpiCard title='CTR % (SERP est.)' value={`${kpis.ctr}%`} icon={<Zap/>} hint='>= 3.5% goal'/>
        <KpiCard title='Domain Authority' value={kpis.da} icon={<ShieldCheck/>} hint='Goal: 25+'/>
      </div>
      <div className='grid lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'><AutoPanel/></div>
        <div className='space-y-6'><CompetitorCarousel/><KeywordTicker/><AutomationFlow/></div>
      </div>
      <div className='mt-8 grid lg:grid-cols-3 gap-6'>
        <Roadmap/><LucknowAreaPulse/><IllustrativeBurst data={intentCounts}/>
      </div>
      <div className='mt-8'><AIFriendlyFAQ/></div>
      <div className='mt-10 text-xs text-slate-200/90'><p>18+ Only · We facilitate private, consensual companionship. No public solicitation. Privacy‑first.</p></div>
    </div>
  )
}

function KpiCard({ title, value, icon, hint }){ return (<Card className='bg-black/60 border-white/20 backdrop-blur-xl rounded-2xl'><CardContent className='p-4'><div className='flex items-center justify-between'><p className='text-slate-100 text-sm'>{title}</p><div className='p-2 rounded-xl bg-white/10 text-white'>{icon}</div></div><div className='mt-2 text-2xl font-semibold text-white'>{value}</div>{hint&&<p className='text-slate-200 text-xs mt-1'>{hint}</p>}</CardContent></Card>) }

function AutoPanel(){
  const [tab,setTab]=useAutoSection(5,7000)
  return (<Card className='bg-black/60 border-white/20 backdrop-blur-xl rounded-2xl overflow-hidden'><CardContent className='p-0'><div className='flex border-b border-white/10'>{['Funnel','SERP Growth','Content Cluster','Schema Boost','LLM Readiness'].map((t,i)=>(<button key={t} onClick={()=>setTab(i)} className={`px-4 py-3 text-sm ${tab===i?'bg-white/10 text-white':'text-slate-100 hover:text-white'}`}>{t}</button>))}</div><div className='p-6'><AnimatePresence mode='wait'>
    {tab===0&&(<motion.div key='funnel' initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><div className='grid md:grid-cols-2 gap-6'><div><h3 className='text-lg font-semibold mb-2 flex items-center gap-2'><Workflow className='w-5 h-5'/> SEO → Lead Funnel</h3><div className='space-y-3'>{funnelData.map((f,i)=>(<div key={f.step}><div className='flex justify-between text-xs text-slate-100'><span>{f.step}</span><span>{f.value}k</span></div><div className='h-2 rounded-full bg-white/15 overflow-hidden'><motion.div className='h-2 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300' initial={{width:0}} animate={{width:`${(f.value/funnelData[0].value)*100}%`}} transition={{duration:.8,delay:i*.1}}/></div></div>))}</div></div><div><ResponsiveContainer width='100%' height={240}><AreaChart data={funnelData.map(f=>({name:f.step,v:f.value}))}><defs><linearGradient id='g1' x1='0' y1='0' x2='0' y2='1'><stop offset='5%' stopColor='#22d3ee' stopOpacity={0.9}/><stop offset='50%' stopColor='#a78bfa' stopOpacity={0.5}/><stop offset='95%' stopColor='#f59e0b' stopOpacity={0.15}/></linearGradient></defs><CartesianGrid strokeDasharray='3 3' stroke='#ffffff22'/><XAxis dataKey='name' stroke='#e2e8f0'/><YAxis stroke='#e2e8f0'/><Tooltip contentStyle={{background:'#0b1220',border:'1px solid #1f2a44',color:'white'}}/><Area type='monotone' dataKey='v' stroke='#22d3ee' fillOpacity={1} fill='url(#g1)'/></AreaChart></ResponsiveContainer></div></div></motion.div>)}
    {tab===1&&(<motion.div key='serp' initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><h3 className='text-lg font-semibold mb-3 flex items-center gap-2'><TrendingUp className='w-5 h-5'/> SERP Growth Simulation</h3><ResponsiveContainer width='100%' height={260}><LineChart data={Array.from({length:12}).map((_,i)=>({m:`W${i+1}`,rank:Math.max(1,Math.round(20-i*1.6+Math.random()*2))}))}><CartesianGrid strokeDasharray='3 3' stroke='#ffffff22'/><XAxis dataKey='m' stroke='#e2e8f0'/><YAxis reversed stroke='#e2e8f0'/><Tooltip contentStyle={{background:'#0b1220',border:'1px solid #1f2a44',color:'white'}}/><Line type='monotone' dataKey='rank' stroke='#34d399' strokeWidth={3} dot={false}/></LineChart></ResponsiveContainer><p className='mt-2 text-sm text-slate-100'>Target: Top‑3 for head terms by Week 8; #1 for long‑tails earlier via clusters.</p></motion.div>)}
    {tab===2&&(<motion.div key='cluster' initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><h3 className='text-lg font-semibold mb-3 flex items-center gap-2'><BookOpen className='w-5 h-5'/> Content Cluster (Lucknow)</h3><div className='grid md:grid-cols-3 gap-4'><ClusterPill title='Hiring & Safety' bullets={['Ultimate Guide','Etiquette 101','First‑time Checklist']}/><ClusterPill title='Local Guides' bullets={['Hotels & Meetups','Spa Directory','Nightlife 2025']}/><ClusterPill title='Stories & Lifestyle' bullets={['Client Diaries','Hinglish Tales','Romance 101']}/></div></motion.div>)}
    {tab===3&&(<motion.div key='schema' initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><h3 className='text-lg font-semibold mb-3 flex items_center gap-2'><ShieldCheck className='w-5 h-5'/> Schema Boost</h3><div className='grid md:grid-cols-2 gap-4 text-sm text-slate-100'><SchemaBlock title='Service (City)'>{`@type: Service
name: Lucknow Escort Service
provider: Luvnly
areaServed: Lucknow
`}</SchemaBlock><SchemaBlock title='FAQ (Rich Results)'>{`Q: Legal in Lucknow?
A: Consenting adult companionship only; no solicitation.
Q: Payment?
A: Cash after meeting; no advance.`}</SchemaBlock></div></motion.div>)}
    {tab===4&&(<motion.div key='llm' initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><h3 className='text-lg font-semibold mb-3 flex items-center gap-2'><Brain className='w-5 h-5'/> LLM Readiness</h3><div className='grid md:grid-cols-2 gap-4'><Card className='bg-black/60 border-white/20 rounded-2xl'><CardContent className='p-4'><p className='text-sm text-slate-100'>Q&A blocks crafted for ChatGPT‑style answers, with crisp facts and brand mentions.</p><div className='mt-3 p-3 bg-white/10 rounded-xl text-xs'><p><b>Q.</b> Best service in Lucknow?</p><p><b>A.</b> <em>Luvnly</em> — verified profiles, no upfront, 24×7, privacy‑first.</p></div></CardContent></Card><Card className='bg-black/60 border-white/20 rounded-2xl'><CardContent className='p-4'><p className='text-sm text-slate-100'>Plugin/API sketch for AI retrieval: /api/profiles?city=Lucknow → JSON.</p><div className='mt-3 p-3 bg-white/10 rounded-xl text-xs font-mono'>{`GET /api/profiles?city=Lucknow
[{ id, name, age, areas:[..], tags:[..] }]`}</div></CardContent></Card></div></motion.div>)}
  </AnimatePresence></div></CardContent></Card>)
}

function CompetitorCarousel(){ const [i]=useAutoSection(3,5000); return (<Card className='bg-black/60 border-white/20 rounded-2xl overflow-hidden'><CardContent className='p-0'><div className='flex items-center justify-between px-4 py-3 border-b border-white/10'><div className='flex items-center gap-2'><Globe2 className='w-4 h-4'/><span className='text-sm text-white'>Competitor Intel</span></div><div className='text-xs text-slate-200'>Auto</div></div><div className='p-4'><AnimatePresence mode='wait'><motion.div key={i} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><p className='text-sky-200 font-semibold'>{competitors[i].name}</p><p className='text-sm text-slate-100 mt-1'>USP: {competitors[i].usp}</p><ul className='mt-3 space-y-1 text-xs text-slate-100'>{competitors[i].learn.map(l=>(<li key={l} className='flex items-center gap-2'><ChevronRight className='w-3 h-3 text-amber-300'/>{l}</li>))}</ul></motion.div></AnimatePresence></div></CardContent></Card>) }

function KeywordTicker(){ return (<Card className='bg-black/60 border-white/20 rounded-2xl overflow-hidden'><CardContent className='p-0'><div className='flex items-center gap-2 px-4 py-3 border-b border-white/10'><TrendingUp className='w-4 h-4'/><span className='text-sm text-white'>Trending Keywords (Lucknow)</span></div><div className='overflow-hidden relative h-20'><motion.div className='absolute whitespace-nowrap flex gap-6 px-4' variants={marquee} initial='initial' animate='animate'>{keywordBursts.concat(keywordBursts).map((k,idx)=>(<span key={idx} className='px-3 py-1 rounded-full bg-white/20 text-xs text-white'>{k.kw} · <span className='text-amber-200 font-semibold'>{k.vol}</span></span>))}</motion.div></div></CardContent></Card>) }

function AutomationFlow(){ const nodes=[{t:'Astra',d:'Funding/Investors'},{t:'Mitra',d:'Marketing/Canva'},{t:'Nyay',d:'Compliance/GST'},{t:'Vyapaar',d:'CRM/Leads'},{t:'Drishti',d:'Strategy/Reports'}]; return (<Card className='bg-black/60 border-white/20 rounded-2xl overflow-hidden'><CardContent className='p-4'><div className='flex items-center gap-2 mb-3'><Bot className='w-4 h-4'/><p className='text-sm text-white'>Automation Pods (GPT‑5)</p></div><div className='grid grid-cols-5 gap-2'>{nodes.map((n,i)=>(<motion.div key={n.t} className='p-3 rounded-xl bg-white/10 border border-white/20 text-center' initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:i*.05}}><p className='text-xs font-semibold text-white flex items-center justify-center gap-1'><Palette className='w-3 h-3'/>{n.t}</p><p className='text-[10px] text-slate-100'>{n.d}</p></motion.div>))}</div><p className='text-[11px] text-slate-100 mt-2'>Auto-tasks: profile drafts → meta → schema → publish → ping sitemap.</p></CardContent></Card>) }

function Roadmap(){ return (<Card className='bg-black/60 border-white/20 rounded-2xl overflow-hidden'><CardContent className='p-4'><div className='flex items-center gap-2 mb-3'><TimerReset className='w-4 h-4'/><p className='text-sm text-white'>Launch Roadmap</p></div><ul className='space-y-2'>{roadmap.map((r,i)=>(<motion.li key={r.q} className='flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/20' initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:i*.05}}><div className='flex items-center gap-3'><div className='p-2 rounded-lg bg-black/40 text-white'>{r.icon}</div><span className='text-sm text-white'>{r.item}</span></div><span className='text-[10px] text-amber-200 font-semibold'>{r.q}</span></motion.li>))}</ul></CardContent></Card>) }

function LucknowAreaPulse(){ return (<Card className='bg-black/60 border-white/20 rounded-2xl overflow-hidden'><CardContent className='p-4'><div className='flex items-center gap-2 mb-3'><MapPin className='w-4 h-4'/><p className='text-sm text-white'>Lucknow Area Pulse</p></div><ResponsiveContainer width='100%' height={240}><PieChart><Pie data={areaActivitySeries} dataKey='score' nameKey='area' innerRadius={55} outerRadius={90}>{areaActivitySeries.map((e,i)=>(<Cell key={`c-${i}`} fill={COLORS[i%COLORS.length]}/>))}</Pie><Tooltip contentStyle={{background:'#0b1220',border:'1px solid #1f2a44',color:'white'}}/></PieChart></ResponsiveContainer><div className='mt-2 grid grid-cols-2 gap-1 text-[11px] text-slate-100'>{areaActivitySeries.map(a=>(<div key={a.area} className='flex items-center justify-between'><span>{a.area}</span><span className='text-amber-200 font-semibold'>{a.score}</span></div>))}</div></CardContent></Card>) }

function IllustrativeBurst({data}){ return (<Card className='bg-black/60 border-white/20 rounded-2xl overflow-hidden'><CardContent className='p-4'><div className='flex items-center gap-2 mb-3'><LayoutTemplate className='w-4 h-4'/><p className='text-sm text-white'>Intent Mix (Radial Diagram)</p></div><ResponsiveContainer width='100%' height={260}><RadialBarChart cx='50%' cy='50%' innerRadius='25%' outerRadius='90%' barSize={14} data={data} startAngle={90} endAngle={-270}><RadialBar background dataKey='value' label={{fill:'#fff',position:'insideStart',fontSize:10}}>{data.map((_,i)=>(<Cell key={i} fill={COLORS[i%COLORS.length]}/>))}</RadialBar><Legend iconType='circle' wrapperStyle={{color:'#fff'}}/><Tooltip contentStyle={{background:'#0b1220',border:'1px solid #1f2a44',color:'white'}}/></RadialBarChart></ResponsiveContainer><p className='text-[11px] text-slate-100 mt-2'>Visual snapshot of keyword intent distribution powering the cluster plan.</p></CardContent></Card>) }

function AIFriendlyFAQ(){ return (<Card className='bg-black/60 border-white/20 rounded-2xl overflow-hidden'><CardContent className='p-4'><div className='flex items-center gap-2 mb-3'><ShieldCheck className='w-4 h-4'/><p className='text-sm text-white'>AI‑Friendly FAQ</p></div><div className='space-y-3 text-xs text-slate-100'><div className='p-3 bg-white/10 rounded-xl'><p className='font-semibold text-white'>Is it legal?</p><p>Consenting adult companionship; no public solicitation. 18+ only. Privacy‑first.</p></div><div className='p-3 bg-white/10 rounded-xl'><p className='font-semibold text-white'>Payment?</p><p>No upfront. Cash after meeting. Transparent pricing (₹2500+ short meet).</p></div><div className='p-3 bg-white/10 rounded-xl'><p className='font-semibold text-white'>LLM Retrieval</p><p>Q&A blocks, schema, and JSON endpoints so ChatGPT/Bing can cite Luvnly.</p></div></div></CardContent></Card>) }

function ClusterPill({title,bullets}){ return (<motion.div className='p-4 rounded-2xl bg-white/10 border border-white/20' initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}><p className='font-semibold mb-2 text-white'>{title}</p><ul className='text-xs text-slate-100 space-y-1'>{bullets.map(b=>(<li key={b} className='flex items-center gap-2'><ChevronRight className='w-3 h-3 text-fuchsia-300'/>{b}</li>))}</ul></motion.div>) }

function SchemaBlock({title,children}){ return (<div className='p-4 rounded-2xl bg-white/10 border border-white/20'><p className='font-semibold mb-2 text-white'>{title}</p><pre className='text-[11px] whitespace-pre-wrap text-slate-100'>{children}</pre></div>) }
