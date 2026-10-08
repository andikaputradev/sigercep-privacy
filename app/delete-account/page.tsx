import type { Metadata } from "next";
import { PolicySection } from "@/components/policy-section";
import { Callout } from "@/components/callout";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { appConfig, routes } from "@/lib/config";

const pageUrl = `${appConfig.siteUrl}${routes.deleteAccount}`;
const pageDescription =
  "Panduan resmi untuk mengajukan penghapusan akun SIGERcep beserta data yang terkait dengan akun.";

export const metadata: Metadata = {
  title: "Penghapusan Akun",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Penghapusan Akun | ${appConfig.appName}`,
    description: pageDescription,
    url: pageUrl,
    siteName: appConfig.appName,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Penghapusan Akun | ${appConfig.appName}`,
    description: pageDescription,
  },
};

export default function DeleteAccountPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-12">
      <header className="border-b border-border pb-8">
        <p className="text-sm font-medium text-primary">{appConfig.appName}</p>
        <h1 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
          Penghapusan Akun
        </h1>
        <p className="mt-4 max-w-[65ch] text-[15.5px] leading-7 text-foreground/90">
          Jika Anda ingin menghapus akun {appConfig.appName}, Anda dapat
          mengajukan permintaan penghapusan akun melalui kontak resmi yang
          tersedia pada halaman ini.
        </p>
        <div className="mt-6">
          <WhatsAppButton />
        </div>
      </header>

      <div className="mt-4 max-w-[70ch]">
        <PolicySection
          id="cara-mengajukan"
          number={1}
          title="Cara Mengajukan Penghapusan Akun"
        >
          <ol className="list-decimal space-y-2.5 pl-5">
            <li>
              Selesaikan terlebih dahulu pesanan yang sedang berjalan,
              jika ada.
            </li>
            <li>
              Hubungi kontak resmi melalui WhatsApp pada nomor yang
              tercantum di halaman ini.
            </li>
            <li>
              Sampaikan nama dan username akun yang terdaftar pada
              Aplikasi.
            </li>
            <li>
              Sampaikan nomor telepon terdaftar atau informasi identitas
              akun lain yang diperlukan untuk proses verifikasi.
            </li>
            <li>
              Jelaskan bahwa Anda ingin menghapus akun beserta data yang
              terkait dengan akun tersebut.
            </li>
            <li>
              Tim pengelola melakukan verifikasi identitas pemilik akun.
              Setelah verifikasi selesai, akun dan data terkait diproses
              untuk penghapusan sesuai dengan kebijakan yang berlaku.
            </li>
          </ol>
          <Callout>
            Jangan mengirimkan kata sandi akun melalui WhatsApp. Tim
            pengelola tidak memerlukan kata sandi untuk memproses
            penghapusan akun.
          </Callout>
        </PolicySection>

        <PolicySection id="data-dihapus" number={2} title="Data yang Dihapus">
          <p>Sejauh data tersebut memang tersimpan pada sistem, penghapusan akun mencakup:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Data profil, meliputi nama, username, dan nomor telepon</li>
            <li>Informasi akun dan pengaturan akun</li>
            <li>
              Data pesanan dan riwayat penggunaan layanan yang terkait
              dengan akun, sejauh tidak wajib dipertahankan
            </li>
          </ul>
        </PolicySection>

        <PolicySection
          id="data-dipertahankan"
          number={3}
          title="Data yang Dipertahankan"
        >
          <p>
            Sebagian data mungkin harus dipertahankan untuk jangka waktu
            tertentu apabila diperlukan untuk:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Pemenuhan kewajiban hukum, termasuk pencatatan transaksi dan
              pembayaran
            </li>
            <li>Menjaga keamanan sistem</li>
            <li>Pencegahan penipuan dan penyalahgunaan Aplikasi</li>
            <li>
              Penyelesaian sengketa atau keluhan terkait pesanan dengan
              mitra dan driver
            </li>
            <li>Kewajiban administratif</li>
          </ul>
        </PolicySection>

        <PolicySection id="format-permintaan" number={4} title="Format Permintaan">
          <p>
            Untuk mempercepat proses verifikasi, sertakan informasi
            berikut saat menghubungi kontak resmi:
          </p>
          <div className="rounded-md border border-border bg-card p-4 font-mono text-[13.5px] leading-6 text-foreground/90">
            <p>Nama:</p>
            <p>Username:</p>
            <p>Nomor Telepon Terdaftar:</p>
            <p>
              Permintaan: &ldquo;Saya ingin menghapus akun {appConfig.appName}.&rdquo;
            </p>
          </div>
        </PolicySection>

        <PolicySection id="kontak" number={5} title="Kontak Resmi">
          <p>
            Ajukan permintaan penghapusan akun melalui nomor WhatsApp resmi
            berikut.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton />
            <span className="text-sm text-muted-foreground">
              {appConfig.phoneDisplay}
            </span>
          </div>
        </PolicySection>
      </div>
    </div>
  );
}
