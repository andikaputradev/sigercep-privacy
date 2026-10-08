import type { Metadata } from "next";
import Link from "next/link";
import { PolicySection } from "@/components/policy-section";
import { Callout } from "@/components/callout";
import { TableOfContents } from "@/components/table-of-contents";
import { appConfig, routes } from "@/lib/config";

const pageUrl = `${appConfig.siteUrl}${routes.privacyPolicy}`;
const pageDescription =
  "Kebijakan Privasi SIGERcep yang menjelaskan data akun, lokasi, pesanan, transaksi, dan pembagian informasi kepada mitra dan driver.";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Kebijakan Privasi | ${appConfig.appName}`,
    description: pageDescription,
    url: pageUrl,
    siteName: appConfig.appName,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Kebijakan Privasi | ${appConfig.appName}`,
    description: pageDescription,
  },
};

const sections = [
  { id: "pengantar", title: "Pengantar" },
  { id: "informasi-aplikasi", title: "Informasi Aplikasi" },
  { id: "data-akun", title: "Data Akun" },
  { id: "data-lokasi", title: "Data Lokasi" },
  { id: "data-transaksi", title: "Data Pesanan, Transaksi, dan Pembayaran" },
  { id: "mitra-driver", title: "Mitra dan Driver" },
  { id: "informasi-teknis", title: "Informasi Teknis" },
  { id: "tujuan-penggunaan", title: "Tujuan Penggunaan Data" },
  { id: "pihak-ketiga", title: "Penyedia Layanan Pihak Ketiga" },
  { id: "pembagian-informasi", title: "Pembagian Informasi" },
  { id: "keamanan-data", title: "Keamanan Data" },
  { id: "usia-pengguna", title: "Usia Pengguna" },
  { id: "penyimpanan-data", title: "Penyimpanan Data" },
  { id: "penghapusan-akun", title: "Penghapusan Akun" },
  { id: "hak-pengguna", title: "Hak Pengguna" },
  { id: "perubahan-kebijakan", title: "Perubahan Kebijakan" },
  { id: "kontak", title: "Kontak" },
  { id: "persetujuan", title: "Persetujuan" },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-12">
      <header className="border-b border-border pb-8">
        <p className="text-sm font-medium text-primary">{appConfig.appName}</p>
        <h1 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
          Kebijakan Privasi
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Tanggal pembaruan: {appConfig.lastUpdated}
        </p>
      </header>

      <div className="mt-8">
        <TableOfContents items={[...sections]} />
      </div>

      <div className="mt-4 max-w-[70ch]">
        <PolicySection id="pengantar" number={1} title="Pengantar">
          <p>
            Kebijakan Privasi ini menjelaskan bagaimana aplikasi{" "}
            {appConfig.appName} (selanjutnya disebut &ldquo;Aplikasi&rdquo;)
            memperoleh, menggunakan, menyimpan, dan melindungi informasi
            yang berkaitan dengan pengguna Aplikasi. Kebijakan ini berlaku
            bagi seluruh pengguna yang memakai layanan melalui Aplikasi.
          </p>
          <p>
            Dengan mengunduh, memasang, atau menggunakan Aplikasi, pengguna
            dianggap telah membaca dan memahami Kebijakan Privasi ini.
          </p>
        </PolicySection>

        <PolicySection
          id="informasi-aplikasi"
          number={2}
          title="Informasi Aplikasi"
        >
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Nama Aplikasi: {appConfig.listingName}</li>
            <li>Nama Paket (Package Name): {appConfig.packageName}</li>
          </ul>
          <p>
            Aplikasi adalah layanan digital yang memudahkan berbagai
            kebutuhan masyarakat dalam satu platform. Layanan yang
            tersedia meliputi:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Layanan transportasi motor dan mobil</li>
            <li>Pemesanan makanan melalui SIGER Food</li>
            <li>Pengiriman barang</li>
            <li>Jasa titip dan pembelian</li>
            <li>Layanan massage</li>
            <li>Pembayaran dan PPOB</li>
            <li>Jasa Suruh</li>
            <li>Layanan tambahan lainnya melalui menu See All</li>
          </ul>
          <p>
            Aplikasi juga menghubungkan pengguna dengan mitra dan driver
            lokal.
          </p>
        </PolicySection>

        <PolicySection id="data-akun" number={3} title="Data Akun">
          <p>
            Untuk menggunakan layanan pada Aplikasi, pengguna membuat dan
            menggunakan akun. Data akun yang dapat dikumpulkan meliputi:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Username</li>
            <li>
              Kata sandi (password), yang digunakan semata-mata untuk
              proses autentikasi dan tidak ditampilkan kepada pihak lain
              melalui antarmuka Aplikasi
            </li>
            <li>
              Nama dan nomor telepon, sejauh data tersebut diminta oleh
              Aplikasi atau diisi oleh pengguna
            </li>
            <li>Data profil lain yang diisi sendiri oleh pengguna</li>
          </ul>
          <p>
            Data akun digunakan untuk autentikasi, pengelolaan sesi,
            pengelolaan riwayat pesanan dan transaksi, serta keamanan akun.
          </p>
        </PolicySection>

        <PolicySection id="data-lokasi" number={4} title="Data Lokasi">
          <p>
            Layanan seperti transportasi, pesan antar makanan, pengiriman
            barang, jasa titip, dan Jasa Suruh memerlukan informasi lokasi
            agar pesanan dapat dipenuhi. Sejauh fitur tersebut digunakan,
            Aplikasi dapat memproses informasi lokasi berikut:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Lokasi perangkat pengguna</li>
            <li>Titik jemput dan titik tujuan yang dipilih pengguna</li>
            <li>Alamat pengantaran yang dimasukkan pengguna</li>
          </ul>
          <p>
            Informasi lokasi digunakan untuk menentukan titik jemput dan
            tujuan, mencocokkan pesanan dengan driver atau mitra, serta
            menjalankan layanan pesanan yang sedang berlangsung.
          </p>
          <Callout>
            Akses lokasi diminta melalui sistem izin Android dan dapat
            dikelola pengguna melalui pengaturan perangkat. Jika izin
            lokasi tidak diberikan, sebagian layanan seperti transportasi
            dan pengiriman mungkin tidak dapat digunakan secara optimal.
          </Callout>
        </PolicySection>

        <PolicySection
          id="data-transaksi"
          number={5}
          title="Data Pesanan, Transaksi, dan Pembayaran"
        >
          <p>
            Sejauh data tersebut memang disimpan oleh sistem, Aplikasi
            dapat memproses data yang berkaitan dengan pesanan dan
            transaksi, antara lain:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Jenis layanan yang dipesan dan rincian pesanan</li>
            <li>
              Item pesanan, seperti makanan, barang titipan, atau
              deskripsi tugas pada Jasa Suruh
            </li>
            <li>Catatan yang ditulis pengguna untuk driver atau mitra</li>
            <li>Waktu, status, dan nominal pesanan atau transaksi</li>
            <li>Metode pembayaran yang dipilih pengguna</li>
            <li>
              Nomor tujuan pada layanan PPOB, seperti nomor ponsel atau
              nomor pelanggan, sejauh dimasukkan oleh pengguna
            </li>
            <li>Riwayat pesanan dan transaksi pada akun</li>
          </ul>
          <p>
            Pemrosesan pembayaran dan layanan PPOB dapat melibatkan
            penyedia layanan pembayaran atau mitra produk digital pihak
            ketiga, sebagaimana dijelaskan pada bagian Penyedia Layanan
            Pihak Ketiga.
          </p>
          <Callout>
            Pengguna dapat memasukkan data pihak lain, misalnya nama dan
            nomor telepon penerima barang. Pengguna bertanggung jawab
            memastikan memiliki hak untuk memberikan data tersebut.
          </Callout>
        </PolicySection>

        <PolicySection id="mitra-driver" number={6} title="Mitra dan Driver">
          <p>
            Aplikasi menghubungkan pengguna dengan mitra dan driver lokal.
            Agar pesanan dapat dipenuhi, sebagian data pesanan dapat
            ditampilkan kepada mitra atau driver yang menangani pesanan
            tersebut, sejauh diperlukan, seperti:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Nama pengguna atau nama penerima</li>
            <li>Nomor kontak, sejauh fitur koordinasi pesanan tersedia</li>
            <li>Titik jemput, titik tujuan, atau alamat pengantaran</li>
            <li>Rincian dan catatan pesanan</li>
          </ul>
          <p>
            Data tersebut dibagikan untuk keperluan pemenuhan pesanan
            terkait dan tidak dimaksudkan untuk digunakan di luar
            keperluan tersebut.
          </p>
        </PolicySection>

        <PolicySection
          id="informasi-teknis"
          number={7}
          title="Informasi Teknis"
        >
          <p>
            Sebagaimana lazimnya aplikasi berbasis Android, Aplikasi dapat
            memproses informasi teknis dasar dari perangkat, seperti jenis
            perangkat dan versi sistem operasi, sejauh diperlukan agar
            Aplikasi dapat berjalan dengan baik.
          </p>
        </PolicySection>

        <PolicySection
          id="tujuan-penggunaan"
          number={8}
          title="Tujuan Penggunaan Data"
        >
          <p>Data yang dikumpulkan digunakan untuk:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Pendaftaran, autentikasi, dan pengelolaan akun</li>
            <li>
              Menjalankan layanan transportasi, pesan antar, pengiriman,
              jasa titip, Jasa Suruh, massage, serta pembayaran dan PPOB
            </li>
            <li>Menghubungkan pengguna dengan mitra dan driver</li>
            <li>Menampilkan riwayat pesanan dan transaksi</li>
            <li>Pemeliharaan keamanan akun dan pencegahan penyalahgunaan</li>
            <li>Penanganan keluhan, sengketa, dan bantuan pengguna</li>
            <li>Perbaikan dan pengembangan kualitas Aplikasi</li>
          </ul>
        </PolicySection>

        <PolicySection
          id="pihak-ketiga"
          number={9}
          title="Penyedia Layanan Pihak Ketiga"
        >
          <p>
            Untuk menjalankan layanannya, Aplikasi dapat menggunakan
            layanan pihak ketiga untuk kebutuhan berikut:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Layanan backend dan basis data untuk akun dan pesanan</li>
            <li>Layanan peta dan lokasi untuk titik jemput dan tujuan</li>
            <li>Layanan pembayaran dan produk digital untuk PPOB</li>
          </ul>
          <p>
            Sejauh ini, nama masing-masing penyedia layanan tersebut belum
            teridentifikasi secara pasti sehingga belum dicantumkan pada
            bagian ini. Apabila penyedia layanan telah dipastikan, bagian
            ini akan diperbarui untuk mencantumkan nama penyedia, jenis
            data yang mungkin diproses, serta kebijakan privasi terkait.
          </p>
        </PolicySection>

        <PolicySection
          id="pembagian-informasi"
          number={10}
          title="Pembagian Informasi"
        >
          <p>
            Aplikasi tidak menjual data pribadi pengguna kepada pihak
            ketiga. Informasi dapat dibagikan secara terbatas dalam
            situasi berikut:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Kepada mitra dan driver yang menangani pesanan, sebagaimana
              dijelaskan pada bagian Mitra dan Driver
            </li>
            <li>
              Kepada penyedia layanan pihak ketiga sebagaimana dijelaskan
              pada bagian Penyedia Layanan Pihak Ketiga, sejauh fitur
              terkait digunakan
            </li>
            <li>
              Apabila diwajibkan oleh peraturan perundang-undangan atau
              permintaan resmi dari pihak yang berwenang
            </li>
          </ul>
          <p>Aplikasi tidak membagikan kata sandi pengguna kepada pihak mana pun.</p>
        </PolicySection>

        <PolicySection id="keamanan-data" number={11} title="Keamanan Data">
          <p>
            Aplikasi menerapkan langkah-langkah wajar untuk melindungi
            data pengguna dan praktik pengelolaan akun yang baik.
            Meskipun demikian, tidak ada sistem elektronik yang dapat
            dijamin sepenuhnya bebas dari risiko keamanan.
          </p>
          <p>
            Pengguna disarankan untuk menjaga kerahasiaan kata sandi dan
            kode verifikasi, tidak membagikannya kepada siapa pun
            termasuk melalui pesan, dan segera menghubungi kontak resmi
            pada bagian Kontak apabila menemukan indikasi penyalahgunaan
            akun.
          </p>
        </PolicySection>

        <PolicySection id="usia-pengguna" number={12} title="Usia Pengguna">
          <p>
            Aplikasi tidak ditujukan bagi anak-anak. Pengguna yang belum
            berusia 18 tahun disarankan menggunakan Aplikasi dengan
            sepengetahuan orang tua atau wali. Orang tua atau wali yang
            mengetahui anaknya menggunakan Aplikasi tanpa izin dapat
            menghubungi kontak resmi pada bagian Kontak.
          </p>
        </PolicySection>

        <PolicySection
          id="penyimpanan-data"
          number={13}
          title="Penyimpanan Data"
        >
          <p>
            Data pengguna disimpan sejauh diperlukan untuk menyediakan
            layanan Aplikasi. Data pesanan dan transaksi dapat
            dipertahankan untuk keperluan administrasi, keamanan,
            penanganan sengketa, dan kewajiban hukum. Aplikasi belum
            menetapkan periode retensi data yang baku untuk seluruh jenis
            data, sehingga bagian ini akan diperbarui apabila kebijakan
            retensi yang lebih rinci telah ditetapkan oleh pengelola
            Aplikasi.
          </p>
        </PolicySection>

        <PolicySection
          id="penghapusan-akun"
          number={14}
          title="Penghapusan Akun"
        >
          <p>
            Pengguna yang ingin menghapus akun beserta data terkait pada
            Aplikasi dapat mengajukan permintaan penghapusan melalui laman{" "}
            <Link
              href={routes.deleteAccount}
              className="font-medium text-primary underline underline-offset-2"
            >
              Penghapusan Akun
            </Link>
            . Penjelasan lebih lanjut mengenai mekanisme, data yang
            dihapus, dan data yang mungkin dipertahankan tersedia pada
            laman tersebut.
          </p>
        </PolicySection>

        <PolicySection id="hak-pengguna" number={15} title="Hak Pengguna">
          <p>Sesuai dengan data yang dikelola Aplikasi, pengguna berhak untuk:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Mengetahui data apa saja yang dikumpulkan dan digunakan oleh
              Aplikasi
            </li>
            <li>Meminta koreksi atas data akun yang tidak akurat</li>
            <li>
              Mengelola izin akses lokasi melalui pengaturan perangkat
            </li>
            <li>
              Mengajukan permintaan penghapusan akun sebagaimana
              dijelaskan pada laman Penghapusan Akun
            </li>
            <li>
              Mengajukan pertanyaan atau keberatan terkait pemrosesan data
              melalui kontak resmi
            </li>
          </ul>
        </PolicySection>

        <PolicySection
          id="perubahan-kebijakan"
          number={16}
          title="Perubahan Kebijakan"
        >
          <p>
            Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu
            untuk menyesuaikan dengan perubahan fitur Aplikasi, ketentuan
            hukum yang berlaku, atau praktik pengelolaan data yang lebih
            baik. Tanggal pembaruan terakhir dicantumkan pada bagian atas
            halaman ini.
          </p>
        </PolicySection>

        <PolicySection id="kontak" number={17} title="Kontak">
          <p>
            Pertanyaan, masukan, atau permintaan terkait Kebijakan Privasi
            ini dan pengelolaan data pada Aplikasi dapat disampaikan
            melalui:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Nomor kontak resmi (WhatsApp):{" "}
              <a
                href={appConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-2"
              >
                {appConfig.phoneDisplay}
              </a>
            </li>
          </ul>
        </PolicySection>

        <PolicySection id="persetujuan" number={18} title="Persetujuan">
          <p>
            Dengan menggunakan Aplikasi, pengguna menyatakan telah membaca,
            memahami, dan menyetujui Kebijakan Privasi ini. Apabila
            pengguna tidak menyetujui ketentuan dalam Kebijakan Privasi
            ini, pengguna disarankan untuk tidak melanjutkan penggunaan
            Aplikasi.
          </p>
        </PolicySection>
      </div>
    </div>
  );
}
