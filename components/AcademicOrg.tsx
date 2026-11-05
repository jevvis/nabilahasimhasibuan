'use client'

import TypewriterTitle from './TypewriterTitle'
import { InternshipImageStack } from './WorkGallery'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AcademicOrg() {
  const { t } = useLanguage()
  const acad = [1, 2, 3]

  return (
    <section id="trainings" className="relative py-24 px-4 md:px-8 overflow-x-clip font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('trainings.label')}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <TypewriterTitle text={t('trainings.title')} />
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-xs font-semibold tracking-wider text-[var(--muted)] shrink-0 w-max">
            {t('trainings.campus')}
          </span>
        </div>

        {/* Pengalaman akademik: tiga kartu teks (CV tidak menyertakan foto asisten laboratorium) */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-emerald-500 mb-6 font-semibold">{t('acad.label')}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {acad.map((n) => (
            <div
              key={n}
              className="group p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-emerald-500/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3v2M15 3v2M10 5a2 2 0 0 0-2 2v7.74a2 2 0 0 1-.2.87L5.33 21h13.34l-2.47-5.39a2 2 0 0 1-.2-.87V7a2 2 0 0 0-2-2h-4z" />
                  </svg>
                </div>
                <span className="text-[10px] tracking-wider px-2.5 py-1 rounded-full border bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)] font-medium shrink-0">
                  {t(`acad.${n}.period`)}
                </span>
              </div>
              <h3 className="font-bold text-lg leading-snug mb-1 group-hover:text-emerald-500 transition-colors">{t(`acad.${n}.role`)}</h3>
              <p className="text-xs font-semibold text-[var(--muted)] mb-4">{t(`acad.${n}.inst`)}</p>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">{t(`acad.${n}.desc`)}</p>
              <div className="flex flex-wrap gap-1.5 pt-3 mt-auto border-t border-[var(--card-border)]/50">
                {t(`acad.${n}.tags`).split('|').map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md border font-medium bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pengalaman organisasi: BEM dengan tumpukan foto */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-emerald-500 mb-6 font-semibold">{t('org.label')}</p>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">01</span>
              <span className="text-[11px] tracking-widest text-[var(--muted)] uppercase font-semibold">{t('org.1.period')}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-1">{t('org.1.inst')}</h3>
            <h4 className="text-lg md:text-xl font-semibold text-emerald-500 mb-2">{t('org.1.role')}</h4>
            <p className="text-xs md:text-sm font-semibold text-[var(--muted)] mb-5">{t('org.1.sub')}</p>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 text-justify">{t('org.1.desc')}</p>
            <div className="flex flex-wrap gap-2">
              {t('org.1.tags').split('|').map((tag) => (
                <span key={tag} className="text-[10px] font-medium px-3 py-1.5 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] opacity-90">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <InternshipImageStack images={['/projects/org-bem-1.jpg', '/projects/org-bem-2.jpg']} title={t('org.1.inst')} align="left" />
          </div>
        </div>
      </div>
    </section>
  )
}
