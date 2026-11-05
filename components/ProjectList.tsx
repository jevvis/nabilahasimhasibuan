'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Skrining Resep & Penyiapan Obat Rawat Jalan dan Inap", en: "Prescription Screening & Outpatient/Inpatient Medication Preparation" },
    description: { id: "Skrining resep serta penyiapan kebutuhan obat pasien rawat jalan dan rawat inap untuk jadwal pemberian pagi, siang, dan malam.", en: "Prescription screening and preparation of outpatient and inpatient medication for morning, afternoon, and evening schedules." },
    framework: "RSUD DR. PIRNGADI MEDAN",
    techStack: ["Farmasi Klinis", "Skrining Resep"],
  },
  {
    number: '02',
    title: { id: "Visite Pasien, Konseling & PIO", en: "Patient Rounds, Counseling & DIS" },
    description: { id: "Berpartisipasi dalam visite untuk memantau kondisi klinis dan kebutuhan terapi, serta memberikan konseling dan PIO terkait penggunaan obat.", en: "Took part in patient rounds to monitor clinical condition and therapy needs, and provided counseling and DIS on medication use." },
    framework: "RSUD DR. PIRNGADI MEDAN",
    techStack: ["Visite", "PIO"],
  },
  {
    number: '03',
    title: { id: "Rekonsiliasi Obat & Pemantauan Terapi", en: "Medication Reconciliation & Therapy Monitoring" },
    description: { id: "Rekonsiliasi obat dan pemantauan terapi pasien untuk mendukung kesinambungan serta ketepatan pengobatan.", en: "Medication reconciliation and therapy monitoring to support continuity and accuracy of treatment." },
    framework: "RSUD DR. PIRNGADI MEDAN",
    techStack: ["Rekonsiliasi", "PTO"],
  },
  {
    number: '04',
    title: { id: "Pengelolaan Perbekalan Farmasi Rumah Sakit", en: "Hospital Pharmaceutical Supply Management" },
    description: { id: "Mempelajari dan berpartisipasi dalam pengelolaan perbekalan farmasi di rumah sakit.", en: "Learned about and took part in managing pharmaceutical supplies at the hospital." },
    framework: "RSUD DR. PIRNGADI MEDAN",
    techStack: ["Perbekalan", "Farmasi RS"],
  },
  {
    number: '05',
    title: { id: "Penerapan CPOB dalam Produksi dan Pengawasan Mutu", en: "Applying GMP (CPOB) in Production and Quality Control" },
    description: { id: "Mempelajari penerapan CPOB serta peran apoteker dalam proses produksi dan pengawasan mutu obat.", en: "Studied the application of GMP (CPOB) and the pharmacist’s role in drug production and quality control." },
    framework: "PT MUTHIA FARMA",
    techStack: ["CPOB", "Industri Farmasi"],
  },
  {
    number: '06',
    title: { id: "Alur Kerja QA, QC, R&D, Produksi & Pelulusan Batch", en: "QA, QC, R&D, Production & Batch Release Workflows" },
    description: { id: "Mempelajari fungsi dan alur kerja departemen QA, QC, penyimpanan, R&D, produksi, dan pelulusan batch, serta mempraktikkan penggunaan peralatan sesuai standar CPOB.", en: "Studied the functions and workflows of QA, QC, storage, R&D, production, and batch release, and practiced using equipment according to CPOB standards." },
    framework: "PT MUTHIA FARMA",
    techStack: ["Quality Assurance", "Quality Control"],
  },
  {
    number: '07',
    title: { id: "Peran Apoteker Penanggung Jawab & CDOB", en: "Responsible Pharmacist Role & GDP (CDOB)" },
    description: { id: "Mempelajari peran Apoteker Penanggung Jawab PBF dalam penerapan CDOB pada distribusi sediaan farmasi.", en: "Studied the PBF Responsible Pharmacist’s role in applying CDOB to pharmaceutical distribution." },
    framework: "PT RAJAWALI NUSINDO (PBF)",
    techStack: ["CDOB", "PBF"],
  },
  {
    number: '08',
    title: { id: "Penerimaan, Penyimpanan & Pengiriman Obat", en: "Receiving, Storage & Dispatch of Drugs" },
    description: { id: "Penerimaan, penyimpanan berdasarkan persyaratan suhu dan prinsip FIFO/FEFO, serta pengeluaran dan pengiriman obat ke fasilitas pelayanan kesehatan.", en: "Receiving, storage by temperature requirements and FIFO/FEFO principles, and dispatch of drugs to healthcare facilities." },
    framework: "PT RAJAWALI NUSINDO (PBF)",
    techStack: ["FIFO / FEFO", "Distribusi"],
  },
  {
    number: '09',
    title: { id: "Retur, Recall & Pelaporan SIPNAP", en: "Returns, Recalls & SIPNAP Reporting" },
    description: { id: "Pengendalian persediaan, penanganan retur dan penarikan kembali produk (recall), serta pelaporan narkotika dan psikotropika melalui SIPNAP.", en: "Inventory control, handling of returns and product recalls, and narcotics and psychotropics reporting through SIPNAP." },
    framework: "PT RAJAWALI NUSINDO (PBF)",
    techStack: ["Recall", "SIPNAP"],
  },
  {
    number: '10',
    title: { id: "Pemeriksaan Kelayakan Vaksin", en: "Vaccine Eligibility Checks" },
    description: { id: "Pemeriksaan kelayakan vaksin sebelum distribusi: kondisi fisik, rantai dingin, tanggal kedaluwarsa, dan Vaccine Vial Monitor (VVM).", en: "Vaccine eligibility checks before distribution: physical condition, cold chain, expiry date, and Vaccine Vial Monitor (VVM)." },
    framework: "PT RAJAWALI NUSINDO (PBF)",
    techStack: ["Cold Chain", "VVM"],
  },
  {
    number: '11',
    title: { id: "Pengelolaan Sediaan Farmasi & LPLPO", en: "Pharmaceutical Supply Management & LPLPO" },
    description: { id: "Mempelajari perencanaan, pengadaan, penyimpanan, serta pencatatan dan pelaporan melalui LPLPO.", en: "Studied planning, procurement, storage, and recording and reporting through LPLPO." },
    framework: "PUSKESMAS PADANG BULAN",
    techStack: ["LPLPO", "Puskesmas"],
  },
  {
    number: '12',
    title: { id: "Pelayanan Farmasi Klinis & UKM", en: "Clinical Pharmacy Services & Community Health Efforts" },
    description: { id: "Skrining resep, dispensing, konseling, dan PIO, serta partisipasi dalam kegiatan UKM termasuk Posyandu.", en: "Prescription screening, dispensing, counseling, and DIS, plus participation in UKM including Posyandu." },
    framework: "PUSKESMAS PADANG BULAN",
    techStack: ["Konseling", "UKM"],
  },
  {
    number: '13',
    title: { id: "Pengelolaan Sediaan: Faktur, FIFO & FEFO", en: "Supply Management: Invoices, FIFO & FEFO" },
    description: { id: "Pemeriksaan kesesuaian barang dengan faktur, penyimpanan berdasarkan FIFO dan FEFO, serta pengendalian persediaan.", en: "Checking goods against invoices, storage by FIFO and FEFO, and inventory control." },
    framework: "APOTEK KESHIA",
    techStack: ["FIFO / FEFO", "Persediaan"],
  },
  {
    number: '14',
    title: { id: "Skrining Resep, Dispensing & Konseling", en: "Prescription Screening, Dispensing & Counseling" },
    description: { id: "Skrining resep (administratif, farmasetik, klinis), dispensing sesuai resep, dan konseling penggunaan obat yang tepat dan rasional.", en: "Prescription screening (administrative, pharmaceutical, clinical), dispensing per prescription, and counseling on correct, rational medicine use." },
    framework: "APOTEK KESHIA",
    techStack: ["Dispensing", "Konseling"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'PHARMACEUTICAL PORTFOLIO & EXPERIENCE' : 'PORTOFOLIO KEFARMASIAN & PENGALAMAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Clinical, Industry & Distribution Experience' : 'Pengalaman Klinis, Industri & Distribusi'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of professional practice in a hospital, the pharmaceutical industry, a pharmaceutical wholesaler, a community health center, and a pharmacy.'
              : 'Rekam jejak praktik profesi di rumah sakit, industri farmasi, pedagang besar farmasi, puskesmas, dan apotek.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
