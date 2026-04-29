# 📝 Jawaban — 01. React vs Next.js

| Info | Detail |
|------|--------|
| **Nama** | ASHABUL KAHFI |
| **NIM** | 105841108523 |
| **Halaman** | 01. React vs Next.js |
| **Tanggal** | 29 April 2026, 14.11 |

---

## 📝 Kuis Singkat

### 1. Next.js adalah...

**Jawaban:** Framework fullstack yang membungkus library React. Next.js menambahkan fitur-fitur yang tidak dimiliki React secara default, seperti routing otomatis, API backend bawaan, dan proses rendering di server (SSR/SSG).

### 2. Mana yang TIDAK perlu di-install manual di Next.js?

**Jawaban:** Library routing (seperti react-router-dom), server backend terpisah (seperti Express.js), dan alat build (seperti Webpack atau Vite). Seluruh kapabilitas tersebut sudah terintegrasi sebagai fungsi bawaan kerangka kerja.

### 3. Saat install Next.js, agar menggunakan JavaScript (bukan TypeScript), kita harus pilih...

**Jawaban:** Memilih opsi "No" pada pertanyaan interaktif Would you like to use TypeScript? saat menjalankan instalasi via terminal.

### 4. Apakah komponen React bisa dipakai di Next.js?

**Jawaban:** Ya. Next.js menggunakan React sebagai inti pembangun antarmuka pengguna. Komponen yang didefinisikan menggunakan React biasa dapat digunakan tanpa modifikasi fungsional di lingkungan Next.js.

### 5. Sebutkan minimal 3 fitur yang Next.js berikan di atas React biasa!

**Jawaban:** 1. Routing otomatis berbasis sistem direktori file (App Router).
2. Infrastruktur API backend yang terintegrasi di dalam proyek yang sama (route.js).
3. Dukungan penuh untuk Server-Side Rendering (SSR) dan Static Site Generation (SSG) secara default.

---

## ✏️ Jawaban Latihan

### Latihan 1 — Halaman Utama

```js
export default function Home() {
  return (
    <main>
      <h1>🎓 Halo Kahfi</h1>
      <p>Ini proyek Yg Luar Biasa,Allahumma Barik</p>
      <p>Menggunakan <strong>JavaScript</strong>, bukan TypeScript.</p>
    </main>
  );
}
```
![alt text](image-1.png)

### Latihan 2 — Halaman About

```js
export default function About() {
  return (
    <main>
      <h1>Tentang Saya</h1>
      <p>Nama: kahfi</p>
      <p>Jurusan: Teknik Informatika</p>
    </main>
  );
}
```

![alt text](image.png)

### Latihan 3 — Halaman Mahasiswa

export default function Mahasiswa() {
  return (
    <main>
      <h1>Mahasiswa</h1>
      <p>Ini adalah halaman untuk menampilkan informasi mahasiswa.</p>
    </main>
  );
}

![alt text](image-2.png)

### Latihan 4 — Tantangan: Bandingkan Routing

Pada ekosistem React standar, proses routing memerlukan instalasi modul eksternal (contoh: react-router-dom) dan pendefinisian <Route> secara manual untuk memetakan URL ke komponen. Pada Next.js, sistem routing berjalan otomatis. Setiap file page.js yang diletakkan di dalam struktur folder app/ langsung diinterpretasikan sebagai rute unik sesuai dengan hierarki foldernya tanpa menuntut pengaturan manual.

---

## 📊 Ringkasan

| Metrik | Nilai |
|--------|-------|
| Total dijawab | 8 / 8 |
| Skor kuis | 4 / 4 (100%) |
| Latihan terisi | 3 / 3 |

---

_Dibuat otomatis oleh Sistem Kuis Pertemuan 00_
