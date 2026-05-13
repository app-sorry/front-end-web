import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, Trophy, Calendar, Users,
  Wallet, Bell, LayoutGrid, CheckCircle2,
  TrendingUp, Activity
} from 'lucide-react';
import {
  LogoMark, PrimaryButton, SecondaryButton,
  SectionEyebrow, LiquidGlassCard
} from './components/primitives';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white font-sans selection:bg-brand/30">

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF6A00] opacity-[0.03] blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF6A00] opacity-[0.02] blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay" />
        {/* Subtle vertical guide lines for desktop */}
        <div className="hidden lg:flex absolute inset-0 max-w-7xl mx-auto w-full justify-between px-6">
          <div className="w-[1px] h-full bg-white/[0.02]" />
          <div className="w-[1px] h-full bg-white/[0.02]" />
          <div className="w-[1px] h-full bg-white/[0.02]" />
          <div className="w-[1px] h-full bg-white/[0.02]" />
        </div>
      </div>

      {/* Section 1 - Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-lg border-b border-white/[0.05] py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="text-xl font-bold tracking-tight">Sorry</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#arenas" className="hover:text-white transition-colors">Para Arenas</a>
            <a href="#jogadores" className="hover:text-white transition-colors">Para Jogadores</a>
            <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#comunidade" className="hover:text-white transition-colors">Comunidade</a>
          </div>

          <div className="hidden md:block">
            <PrimaryButton>Quero conhecer a solução</PrimaryButton>
          </div>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] inset-x-0 z-40 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              <a href="#arenas" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Para Arenas</a>
              <a href="#jogadores" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Para Jogadores</a>
              <a href="#funcionalidades" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Funcionalidades</a>
              <a href="#comunidade" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Comunidade</a>
              <PrimaryButton className="w-full">Quero conhecer a solução</PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">

        {/* Section 2 - Hero */}
        <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6">
          {/* Spline 3D Background */}
          <div
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-100"
            style={{
              maskImage: 'radial-gradient(ellipse at 50% 40%, black 10%, transparent 65%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 10%, transparent 65%)'
            }}
          >
            <div className="absolute inset-0 transform scale-[1.2] md:scale-[1.7] -translate-y-[10%] md:-translate-y-[15%]">
              <Spline
                scene="https://prod.spline.design/X98QwoLgmL7OugVx/scene.splinecode"
                style={{ filter: 'contrast(1.4) brightness(0.6)' }}
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="flex justify-center mb-6">
                <SectionEyebrow>App para arenas e jogadores</SectionEyebrow>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                A plataforma que organiza <br className="hidden md:block" />
                a gestão das arenas <br className="hidden md:block" />
                e melhora a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF9040]">experiência de quem joga.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
                O Sorry conecta operação, reservas, torneios, rankings, comunidade e experiência de jogo em uma plataforma feita para arenas e jogadores. Nascemos com foco no beach tennis e com estrutura para acompanhar a evolução dos esportes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <PrimaryButton className="w-full sm:w-auto text-base px-8 py-4">Quero conhecer a solução</PrimaryButton>
                <SecondaryButton className="w-full sm:w-auto text-base px-8 py-4">Quero levar para minha arena</SecondaryButton>
              </div>

              <p className="text-sm text-white/40 font-medium tracking-wide uppercase">
                Para arenas, jogadores e comunidades esportivas.
              </p>
            </motion.div>

            {/* Hero Visual - Conceptual Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-20 relative mx-auto w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,106,0,0.08)] bg-[#0A0A0A]/80 backdrop-blur-xl flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0" />

              {/* Abstract UI Elements */}
              <div className="relative z-10 w-full h-full p-6 grid grid-cols-12 grid-rows-6 gap-4 opacity-80">
                {/* Left Nav */}
                <div className="col-span-2 row-span-6 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/20 mb-4" />
                  <div className="w-full h-8 rounded-md bg-white/10" />
                  <div className="w-3/4 h-8 rounded-md bg-white/5" />
                  <div className="w-4/5 h-8 rounded-md bg-white/5" />
                </div>

                {/* Top Bar */}
                <div className="col-span-10 row-span-1 rounded-xl bg-white/5 border border-white/5 flex items-center px-6 justify-between">
                  <div className="w-1/3 h-6 rounded-md bg-white/5" />
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                    <div className="w-8 h-8 rounded-full bg-[#FF6A00]/80" />
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-7 row-span-5 rounded-xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00]/20 blur-[80px] rounded-full" />
                  <div className="w-1/2 h-8 rounded-md bg-white/20 mb-6" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-lg bg-white/5 border border-white/10" />
                    <div className="h-32 rounded-lg bg-white/5 border border-white/10" />
                    <div className="h-32 rounded-lg bg-white/5 border border-white/10" />
                    <div className="h-32 rounded-lg bg-[#FF6A00]/10 border border-[#FF6A00]/30" />
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="col-span-3 row-span-5 flex flex-col gap-4">
                  <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="w-1/2 h-6 rounded-md bg-white/10 mb-4" />
                    <div className="space-y-3">
                      <div className="w-full h-12 rounded-lg bg-white/5" />
                      <div className="w-full h-12 rounded-lg bg-white/5" />
                      <div className="w-full h-12 rounded-lg bg-white/5" />
                    </div>
                  </div>
                  <div className="h-1/3 rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="w-1/3 h-6 rounded-md bg-white/10 mb-4" />
                    <div className="w-full h-full rounded-lg bg-gradient-to-t from-[#FF6A00]/20 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3 - Context */}
        <section className="py-24 px-6 border-t border-white/[0.05] relative">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Quando gestão, jogo e comunidade ficam separados, <br />
                <span className="text-white/40">a experiência perde força.</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="space-y-8"
            >
              <p className="text-xl text-white/70 leading-relaxed">
                Rotinas esportivas fragmentadas geram fricção. A arena sofre com gestão descentralizada, o jogador tem dificuldade em encontrar oportunidades, e a comunidade se perde em grupos isolados. A Sorry centraliza tudo isso.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                {[
                  { title: "Operação mais clara", icon: LayoutGrid },
                  { title: "Participação fluida", icon: Activity },
                  { title: "Comunidade conectada", icon: Users }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <item.icon className="w-5 h-5 text-[#FF6A00]" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4 - Audience Split */}
        <section id="arenas" className="py-24 px-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[#FF6A00]/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionEyebrow>Dois universos, um aplicativo.</SectionEyebrow>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <LiquidGlassCard className="group hover:border-white/20 transition-colors">
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FF9040] flex items-center justify-center mb-6 shadow-lg shadow-[#FF6A00]/20">
                    <LayoutGrid className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Para Arenas</h3>
                  <p className="text-white/60 text-lg">
                    Gestão unificada para crescer com menos fricção operacional. Tenha previsibilidade e conexão direta com sua base de jogadores.
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "Gerencie quadras, horários e políticas operacionais",
                    "Organize torneios, categorias, inscrições e standings",
                    "Acompanhe rankings contínuos por categoria",
                    "Conecte sua arena à comunidade",
                    "Tenha mais previsibilidade na operação e no financeiro"
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <PrimaryButton className="w-full">Quero levar para minha arena</PrimaryButton>
              </LiquidGlassCard>

              <LiquidGlassCard id="jogadores" className="group hover:border-white/20 transition-colors">
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                    <Activity className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Para Jogadores</h3>
                  <p className="text-white/60 text-lg">
                    A experiência de jogar levada a sério. Descubra onde jogar, participe de competições e interaja com a comunidade.
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "Descubra torneios, rankings, arenas e jogadores",
                    "Reserve quadras com mais facilidade",
                    "Entre em categorias solo ou em dupla",
                    "Receba convites, notificações e atualizações",
                    "Participe de uma comunidade conectada"
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <SecondaryButton className="w-full">Quero acompanhar</SecondaryButton>
              </LiquidGlassCard>
            </div>
          </div>
        </section>

        {/* Section 5 - Features Grid */}
        <section id="funcionalidades" className="py-24 px-6 border-t border-white/[0.05] bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <SectionEyebrow>Capacidades do Produto</SectionEyebrow>
              <h2 className="text-4xl font-bold max-w-2xl">Ferramentas desenhadas para a realidade da quadra.</h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Trophy,
                  title: "Gestão de Torneios",
                  desc: "Criação de torneios, categorias solo/dupla, inscrições, convites, chaves, draft, partidas, standings e integração com pagamento."
                },
                {
                  icon: TrendingUp,
                  title: "Gestão de Rankings",
                  desc: "Rankings contínuos por arena, categorias, convites, partidas por rodada, revisão de placar e classificação recalculada com suporte a W.O."
                },
                {
                  icon: Calendar,
                  title: "Quadras e Reservas",
                  desc: "Disponibilidade por quadra, hold de reserva, prevenção de conflito, exceções de agenda, cancelamentos e políticas operacionais claras."
                },
                {
                  icon: Users,
                  title: "Comunidade e Social",
                  desc: "Feed híbrido com publicações, curtidas e comentários. Siga jogadores e arenas. Aproximação entre a operação e quem consome."
                },
                {
                  icon: Bell,
                  title: "Notificações",
                  desc: "Agrupamento social, avisos de seguidores, convites de dupla, separação de contexto por perfil e marcação inteligente de leitura."
                },
                {
                  icon: Wallet,
                  title: "Financeiro da Arena",
                  desc: "Onboarding ágil, saldo disponível e aguardando liquidação, extrato, saques, antecipação de recebíveis e fluxo de monetização."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-[#FF6A00] mb-6" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 6 - Ecosystem Mockup Showcase */}
        <section className="py-32 px-6 overflow-hidden relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionEyebrow>Vislumbre do produto</SectionEyebrow>
              <h2 className="text-4xl md:text-5xl font-bold">Operação, jogo e comunidade <br className="hidden md:block" /> em um só fluxo.</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl md:rounded-[2.5rem] bg-[#111] border border-white/10 p-4 md:p-8 shadow-2xl overflow-hidden"
            >
              {/* Top Bar inside mockup */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded bg-[#FF6A00]" />
                  <div className="h-4 w-32 bg-white/10 rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/5" />
                  <div className="w-8 h-8 rounded-full bg-white/5" />
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-6">
                {/* Left Panel - Operations */}
                <div className="md:col-span-3 space-y-4">
                  <div className="h-6 w-24 bg-white/10 rounded mb-4" />
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <div className="h-3 w-16 bg-white/20 rounded" />
                        <div className="h-3 w-8 bg-[#FF6A00]/50 rounded" />
                      </div>
                      <div className="h-4 w-full bg-white/10 rounded" />
                    </div>
                  ))}
                </div>

                {/* Center Panel - Tournament/Ranking */}
                <div className="md:col-span-6 space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10">
                    <div className="h-8 w-1/2 bg-white/20 rounded mb-6" />
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="h-24 rounded-xl bg-white/5" />
                      <div className="h-24 rounded-xl bg-white/5" />
                    </div>
                    <div className="h-40 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center">
                      <div className="h-8 w-1/3 bg-[#FF6A00]/30 rounded" />
                    </div>
                  </div>
                </div>

                {/* Right Panel - Community/Finance */}
                <div className="md:col-span-3 space-y-6">
                  <div className="p-5 rounded-xl bg-[#FF6A00]/5 border border-[#FF6A00]/20">
                    <div className="h-3 w-20 bg-[#FF6A00]/40 rounded mb-3" />
                    <div className="h-8 w-3/4 bg-white/20 rounded mb-2" />
                    <div className="h-3 w-1/2 bg-white/10 rounded" />
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5">
                    <div className="h-4 w-32 bg-white/10 rounded mb-4" />
                    <div className="space-y-3">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex gap-3 items-center">
                          <div className="w-8 h-8 rounded-full bg-white/10 shrink-0" />
                          <div className="h-3 w-full bg-white/5 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7 - How it works */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "A arena organiza sua operação",
                  desc: "Configure quadras, horários, reservas, torneios, rankings e regras operacionais em um dashboard feito para dar previsibilidade."
                },
                {
                  step: "02",
                  title: "O jogador encontra uma experiência mais simples",
                  desc: "Descoberta rápida, inscrição em um clique, convites para parceiros, reservas fáceis e notificações para acompanhar cada partida."
                },
                {
                  step: "03",
                  title: "A comunidade ganha fluidez",
                  desc: "A conexão entre jogo, rotina esportiva e relacionamento social cria uma recorrência natural para todos."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                >
                  <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent shrink-0">
                    {item.step}
                  </div>
                  <div className="pt-2 md:pt-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8 - Social Proof Placeholder */}
        <section className="py-24 px-6 border-y border-white/[0.05] bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Feito para arenas e jogadores que vivem o esporte na prática</h2>
            <p className="text-white/50 text-lg mb-16">Tecnologia para conectar operação, comunidade e jogo</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/[0.05]">
              {[
                { label: "Arenas parceiras" },
                { label: "Rotinas organizadas" },
                { label: "Participações acompanhadas" },
                { label: "Comunidades em movimento" }
              ].map((stat, i) => (
                <div key={i} className="px-4">
                  <div className="text-4xl font-bold text-white mb-2">—</div>
                  <div className="text-sm text-white/50 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9 - Territory / Future */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF6A00]/10 z-0" />
          <div className="absolute inset-0 z-0">
            {/* Subtle court lines graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border border-white/5 rounded-sm" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[400px] bg-white/5" />
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Foco no beach tennis? <br />
                <span className="text-[#FF6A00]">Estrutura pronta para evoluir.</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Nascemos para resolver as dores reais do beach tennis, construindo uma arquitetura robusta e escalável. Hoje, estammos perfeitamente desenhados para apoiar a evolução de ecossistemas em outros esportes.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] bg-black py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <LogoMark className="w-6 h-6" />
              <span className="text-lg font-bold">Sorry</span>
            </div>
            <p className="text-white/40 text-sm text-center md:text-left">
              Tecnologia para conectar arenas, jogadores e rotina de quadra.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white/60">
            <a href="#arenas" className="hover:text-white transition-colors">Para Arenas</a>
            <a href="#jogadores" className="hover:text-white transition-colors">Para Jogadores</a>
            <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#comunidade" className="hover:text-white transition-colors">Comunidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
