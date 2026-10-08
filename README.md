# SIGERcep: Kebijakan Privasi dan Penghapusan Akun

Situs statis berisi halaman Kebijakan Privasi dan Penghapusan Akun untuk
aplikasi Android **SIGERcep** (`com.mysigercep140.sigercep140`), untuk
memenuhi persyaratan Google Play Console.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript (strict mode)
- Tailwind CSS 4

## Rute

| Rute | Deskripsi |
|---|---|
| `/` | Redirect ke `/privacy-policy` |
| `/privacy-policy` | Kebijakan Privasi (18 bagian) |
| `/delete-account` | Penghapusan Akun |

## Perintah

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

## Environment Variable

Salin `.env.example` menjadi `.env.local`, lalu isi domain final:

```
NEXT_PUBLIC_SITE_URL=https://domain-anda.vercel.app
```

## Deploy ke Vercel

1. Push repository ke Git, atau gunakan `vercel` dan `vercel --prod`.
2. Tambahkan `NEXT_PUBLIC_SITE_URL` pada pengaturan proyek Vercel.
3. Gunakan pada Play Console:
   - Privacy Policy: `https://domain-anda.vercel.app/privacy-policy`
   - Account Deletion: `https://domain-anda.vercel.app/delete-account`

## Mengganti Data Aplikasi

Semua nama, package, deskripsi, dan kontak ada di `lib/config.ts`.
Nomor WhatsApp wajib berformat kode negara tanpa angka `0` di depan
(contoh `https://wa.me/6282278988415`).

## Hal yang Wajib Dikonfirmasi Sebelum Publikasi

Kebijakan ditulis konservatif karena detail teknis belum terkonfirmasi.
Sesuaikan `app/privacy-policy/page.tsx` bila implementasi berbeda:

1. **Izin lokasi:** apakah hanya saat aplikasi dibuka (foreground) atau
   juga di latar belakang. Kebijakan saat ini tidak menyebut latar
   belakang.
2. **Penyedia pihak ketiga:** backend, peta, dan pembayaran/PPOB. Tambahkan
   nama dan tautan kebijakan privasi masing-masing pada bagian 9.
3. **Data profil:** apakah nomor telepon dan nama benar-benar diminta.
4. **Kontak driver dan mitra:** apakah nomor kontak ditampilkan kepada
   mereka (bagian 6).
5. **Keberadaan saldo atau dompet** dan periode retensi data transaksi.
6. Isian **Data Safety** di Play Console harus konsisten dengan kebijakan
   ini (lokasi, info pribadi, info finansial, riwayat pembelian).

## Catatan Keamanan

Kredensial akun demo tidak dicantumkan pada situs ini. Isikan pada
bagian "App access" di Play Console.
