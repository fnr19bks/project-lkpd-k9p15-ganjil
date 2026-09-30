/* ============================================ */
/* FILE: script.js                               */
/* ============================================ */

/* ============================================================
   KONFIG — Ubah parameter di sini
   ============================================================ */
const KONFIG = {
  namaSekolah: "SMP Negeri 19 Kota Bekasi",
  namaGuru: "Tim MGMP Informatika",
  judulGame: "Misi Keamanan Digital",
  tahun: 2026,

  skorPerSoalMisi1: 20,
  skorPerSoalMisi3: 20,
  skorPerKasusMisi4: 20,
  totalSkorMaksimal: 400,
  predikatA: 90,
  predikatB: 75,
  predikatC: 60,

  timerAktif: true,
  durasiTimer: 30,
  soundAktif: false,
  bahasaDefault: "id",

  warnaPrimer: "#1F3B73",
  warnaSekunder: "#2E74B5",
  warnaSukses: "#2E7D32",
  warnaBahaya: "#C62828",
  fontUtama: "Poppins",

  footerText: "LKPD Informatika Kelas 9 · Malware, Phishing, DoS, dan Mitigasi · © 2026 SMP Negeri 19 Kota Bekasi",

  daftarKelas: ["9A", "9B", "9C", "9D", "9E", "9F", "9G", "9H"]
};

/* ============================================================
   DATA SOAL — Bersumber dari MATERI_K9P15_GANJIL
   ============================================================ */
const DATA_SOAL = {

  /* ---------- MISI 1: KUIS KILAT ---------- */
  misi1: [
    {
      id: "s1",
      id_text: "Sebuah aplikasi game populer dimodifikasi oleh pihak tidak resmi dan disebarkan gratis. Setelah dipasang, HP pengguna menjadi lambat dan data kontaknya terkirim ke pihak lain. Jenis malware ini disebut...",
      en_text: "A popular game app was modified by an unauthorized party and distributed for free. After installation, the user's phone became slow and their contact data was sent to another party. This type of malware is called...",
      options_id: ["Adware", "Spyware", "Ransomware", "Worm"],
      options_en: ["Adware", "Spyware", "Ransomware", "Worm"],
      correct: 1,
      explanation_id: "Spyware adalah malware yang mengintai dan merekam aktivitas pengguna, termasuk mencuri data kontak.",
      explanation_en: "Spyware is malware that spies on and records user activity, including stealing contact data."
    },
    {
      id: "s2",
      id_text: "Perhatikan pesan berikut: 'Selamat! Anda menang undian Rp50.000.000. Klik tautan ini dalam 1 jam atau hadiah hangus.' Ciri phishing yang paling menonjol pada pesan ini adalah...",
      en_text: "Look at this message: 'Congratulations! You won Rp50,000,000. Click this link within 1 hour or the prize expires.' The most prominent phishing characteristic in this message is...",
      options_id: [
        "Menggunakan bahasa asing",
        "Menekan waktu dan menjanjikan hadiah besar",
        "Dikirim melalui email",
        "Mengandung lampiran"
      ],
      options_en: [
        "Uses a foreign language",
        "Pressures with time limit and promises a big prize",
        "Sent via email",
        "Contains an attachment"
      ],
      correct: 1,
      explanation_id: "Ciri phishing: urgensi waktu + hadiah tidak masuk akal. Bank/lembaga resmi tidak pernah meminta OTP atau data lewat link.",
      explanation_en: "Phishing signs: urgency + unrealistic prize. Official banks/institutions never ask for OTP or data via links."
    },
    {
      id: "s3",
      id_text: "Serangan yang membuat situs web tidak dapat diakses karena dibanjiri permintaan palsu disebut...",
      en_text: "An attack that makes a website inaccessible because it is flooded with fake requests is called...",
      options_id: ["Phishing", "Malware", "DoS", "Spoofing"],
      options_en: ["Phishing", "Malware", "DoS", "Spoofing"],
      correct: 2,
      explanation_id: "DoS (Denial of Service) = membanjiri server dengan permintaan palsu hingga layanan tidak bisa melayani pengguna sungguhan.",
      explanation_en: "DoS (Denial of Service) = floods the server with fake requests until it cannot serve real users."
    },
    {
      id: "s4",
      id_text: "Tindakan mitigasi yang paling tepat untuk mencegah kerugian akibat ransomware adalah...",
      en_text: "The most appropriate mitigation action to prevent losses from ransomware is...",
      options_id: [
        "Membayar tebusan secepat mungkin",
        "Melakukan pencadangan (backup) data secara berkala",
        "Mematikan komputer dan tidak menyalakannya lagi",
        "Menghapus semua file di komputer"
      ],
      options_en: [
        "Pay the ransom as fast as possible",
        "Perform regular data backups",
        "Turn off the computer and never turn it on again",
        "Delete all files on the computer"
      ],
      correct: 1,
      explanation_id: "Backup rutin membuat file tetap bisa dipulihkan tanpa harus membayar tebusan.",
      explanation_en: "Regular backups allow files to be restored without paying the ransom."
    },
    {
      id: "s5",
      id_text: "Andi menerima email dari 'bank' yang meminta ia mengklik tautan dan memasukkan PIN. Tindakan paling tepat adalah...",
      en_text: "Andi received an email from a 'bank' asking him to click a link and enter his PIN. The most appropriate action is...",
      options_id: [
        "Mengklik tautan karena pengirimnya terlihat resmi",
        "Membalas email dan menanyakan kebenarannya",
        "Mengabaikan dan melaporkan email tersebut sebagai penipuan",
        "Mengirimkan PIN hanya jika diminta melalui telepon"
      ],
      options_en: [
        "Click the link because the sender looks official",
        "Reply to the email and ask if it is real",
        "Ignore and report the email as fraud",
        "Send the PIN only if requested by phone"
      ],
      correct: 2,
      explanation_id: "Bank resmi TIDAK PERNAH meminta PIN/OTP lewat email atau link. Laporkan sebagai phishing.",
      explanation_en: "Official banks NEVER ask for PIN/OTP via email or link. Report it as phishing."
    }
  ],

  /* ---------- MISI 2: COCOKKAN ISTILAH ---------- */
  misi2: [
    {
      id: "m1",
      istilah: "Malware",
      istilah_en: "Malware",
      definisi: "Perangkat lunak berbahaya yang dibuat untuk merusak, mencuri, atau mengambil alih perangkat orang lain tanpa izin.",
      definisi_en: "Malicious software designed to damage, steal, or take over another person's device without permission."
    },
    {
      id: "m2",
      istilah: "Phishing",
      istilah_en: "Phishing",
      definisi: "Upaya menipu pengguna agar menyerahkan data rahasia (username, password, OTP) dengan menyamar sebagai pihak yang dipercaya.",
      definisi_en: "An attempt to trick users into giving away confidential data (username, password, OTP) by impersonating a trusted party."
    },
    {
      id: "m3",
      istilah: "DoS",
      istilah_en: "DoS",
      definisi: "Serangan yang membanjiri server dengan permintaan palsu sehingga layanan tidak bisa diakses pengguna sungguhan.",
      definisi_en: "An attack that floods a server with fake requests so the service becomes inaccessible to real users."
    },
    {
      id: "m4",
      istilah: "Mitigasi",
      istilah_en: "Mitigation",
      definisi: "Tindakan untuk mengurangi risiko atau dampak dari suatu ancaman, dimulai dari kebiasaan kecil sehari-hari.",
      definisi_en: "Actions to reduce the risk or impact of a threat, starting from small daily habits."
    }
  ],

  /* ---------- MISI 3: BENAR ATAU SALAH ---------- */
  misi3: [
    {
      id: "tf1",
      id_text: "Bank boleh meminta kode OTP melalui pesan WhatsApp.",
      en_text: "Banks may ask for an OTP code via WhatsApp message.",
      benar: false,
      explanation_id: "Bank dan platform resmi TIDAK PERNAH meminta OTP lewat pesan, telepon, atau email.",
      explanation_en: "Official banks and platforms NEVER ask for OTP via message, phone, or email."
    },
    {
      id: "tf2",
      id_text: "Password yang kuat minimal 12 karakter dan mengandung huruf, angka, serta simbol.",
      en_text: "A strong password is at least 12 characters and contains letters, numbers, and symbols.",
      benar: true,
      explanation_id: "Kombinasi panjang dan variasi karakter menyulitkan pembobolan akun.",
      explanation_en: "The combination of length and character variety makes account cracking difficult."
    },
    {
      id: "tf3",
      id_text: "Virus dapat menyebar tanpa bantuan pengguna, sedangkan worm memerlukan file yang dibuka.",
      en_text: "A virus can spread without user help, while a worm requires an opened file.",
      benar: false,
      explanation_id: "Terbalik. Virus butuh file dibuka; worm menyebar sendiri lewat jaringan.",
      explanation_en: "Reversed. A virus needs a file to be opened; a worm spreads by itself over the network."
    },
    {
      id: "tf4",
      id_text: "Ransomware mengenkripsi file dan meminta tebusan.",
      en_text: "Ransomware encrypts files and demands a ransom.",
      benar: true,
      explanation_id: "Contoh nyata: serangan ke Pusat Data Nasional (PDNS) 2024.",
      explanation_en: "Real example: the 2024 National Data Center (PDNS) attack."
    },
    {
      id: "tf5",
      id_text: "WiFi publik aman untuk melakukan transaksi perbankan.",
      en_text: "Public WiFi is safe for banking transactions.",
      benar: false,
      explanation_id: "WiFi publik rentan penyadapan data. Gunakan koneksi pribadi atau VPN untuk transaksi penting.",
      explanation_en: "Public WiFi is vulnerable to data interception. Use a private connection or VPN for important transactions."
    }
  ],

  /* ---------- MISI 4: DETEKTIF KASUS ---------- */
  misi4: [
    {
      id: "kA",
      judul: "KARTU A — Game Modifikasi",
      judul_en: "CARD A — Modified Game",
      id_text: "Andi, murid kelas IX, mengunduh aplikasi 'Free Fire Mod Unlimited Diamond' dari situs tidak resmi. Dua hari kemudian, HP-nya lambat, iklan muncul terus, dan pulsa berkurang Rp150.000 tanpa dipakai.",
      en_text: "Andi, a grade IX student, downloaded a 'Free Fire Mod Unlimited Diamond' app from an unofficial site. Two days later, his phone was slow, ads kept appearing, and Rp150,000 of credit was gone without use.",
      jawaban: "malware",
      explanation_id: "Ciri malware: aplikasi mod dari sumber tidak resmi, perangkat lambat, iklan muncul, pulsa terkuras.",
      explanation_en: "Malware signs: mod app from unofficial source, slow device, ads appear, credit drained."
    },
    {
      id: "kB",
      judul: "KARTU B — Lampiran Email Palsu",
      judul_en: "CARD B — Fake Email Attachment",
      id_text: "Bu Rina menerima email dari 'Dinas Pendidikan' berisi lampiran 'Data_Siswa_2025.zip'. Setelah dibuka, semua file di komputer tidak bisa dibuka dan muncul pesan meminta pembayaran 5 Bitcoin.",
      en_text: "Mrs. Rina received an email from 'Education Office' with an attachment 'Data_Siswa_2025.zip'. After opening it, all files on the computer were locked and a message demanding 5 Bitcoin appeared.",
      jawaban: "malware",
      explanation_id: "Ini ransomware — jenis malware yang mengenkripsi file dan meminta tebusan.",
      explanation_en: "This is ransomware — a type of malware that encrypts files and demands a ransom."
    },
    {
      id: "kC",
      judul: "KARTU C — Situs Kelulusan Lumpuh",
      judul_en: "CARD C — Down Graduation Site",
      id_text: "Hari pengumuman kelulusan, situs sekolah tidak bisa diakses sama sekali dan menampilkan pesan '503 Service Unavailable'. Kepala sekolah menerima pesan anonim meminta uang agar situs kembali normal.",
      en_text: "On graduation announcement day, the school website was completely inaccessible and showed '503 Service Unavailable'. The principal received an anonymous message demanding money to restore it.",
      jawaban: "dos",
      explanation_id: "Server dibanjiri permintaan palsu sehingga tidak bisa melayani pengguna sungguhan. Pesan tebusan menguatkan indikasi DoS.",
      explanation_en: "The server was flooded with fake requests so it could not serve real users. The ransom message reinforces the DoS indication."
    }
  ],

  /* ---------- MISI 5: CHECKLIST MITIGASI ---------- */
  misi5: [
    { id: "c1", text: "Saya menggunakan password minimal 12 karakter (huruf besar-kecil, angka, simbol)." },
    { id: "c2", text: "Saya menggunakan password berbeda untuk setiap akun." },
    { id: "c3", text: "Saya mengaktifkan verifikasi dua langkah (2FA) di email dan media sosial." },
    { id: "c4", text: "Saya memperbarui (update) sistem operasi dan aplikasi secara rutin." },
    { id: "c5", text: "Saya memiliki antivirus dan rutin memindai perangkat." },
    { id: "c6", text: "Saya mencadangkan (backup) data penting secara berkala." },
    { id: "c7", text: "Saya tidak pernah membagikan kode OTP kepada siapa pun." },
    { id: "c8", text: "Saya memeriksa alamat situs sebelum login." },
    { id: "c9", text: "Saya hanya mengunduh aplikasi dari toko resmi (Play Store/App Store)." },
    { id: "c10", text: "Saya tahu cara melaporkan penipuan online (cekrekening.id / lapor.go.id)." }
  ]
};

/* ============================================================
   GLOSARIUM
   ============================================================ */
const GLOSARIUM = [
  { istilah: "Client",   arti: "Perangkat pengguna yang meminta layanan (HP, laptop)." },
  { istilah: "Server",   arti: "Komputer penyedia layanan yang menyimpan data." },
  { istilah: "Request",  arti: "Permintaan yang dikirim client ke server." },
  { istilah: "Response", arti: "Tanggapan yang dikirim server ke client." },
  { istilah: "Malware",  arti: "Perangkat lunak berbahaya." },
  { istilah: "Phishing", arti: "Penipuan untuk mencuri data rahasia." },
  { istilah: "DoS/DDoS", arti: "Serangan yang membanjiri server sehingga layanan tidak bisa diakses." },
  { istilah: "Mitigasi", arti: "Tindakan mengurangi risiko." },
  { istilah: "Botnet",   arti: "Kumpulan komputer terinfeksi yang dikendalikan penyerang." },
  { istilah: "OTP",      arti: "Kode sekali pakai untuk verifikasi (One-Time Password)." },
  { istilah: "2FA",      arti: "Verifikasi dua langkah." },
  { istilah: "Backup",   arti: "Pencadangan data." },
  { istilah: "Enkripsi", arti: "Pengubahan data menjadi kode agar tidak bisa dibaca pihak lain." }
];

/* ============================================================
   STATE GLOBAL
   ============================================================ */
const State = {
  nama: "",
  kelas: "",
  bahasa: KONFIG.bahasaDefault,
  soundAktif: KONFIG.soundAktif,
  misiSelesai: { 1: false, 2: false, 3: false, 4: false, 5: false },
  skor: { misi1: 0, misi2: 0, misi3: 0, misi4: 0, misi5: 0 },
  misi1Index: 0,
  misi1Jawaban: [],
  misi1Mulai: 0,
  misi3Index: 0,
  misi4Index: 0,
  matchSelected: null,
  matchAttempts: 0,
  checklistChecked: [],
  badges: []
};

/* ============================================================
   UTILITAS
   ============================================================ */
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function showScreen(id) {
  $$(".screen").forEach(s => { s.hidden = true; s.classList.remove("active"); });
  const target = document.getElementById("screen-" + id);
  if (target) { target.hidden = false; target.classList.add("active"); }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(msg, type = "info") {
  const c = $("#toastContainer");
  const t = document.createElement("div");
  t.className = "toast " + type;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

function playSound(type) {
  if (!State.soundAktif) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    if (type === "correct") { osc.frequency.value = 880; gain.gain.value = 0.08; }
    else if (type === "wrong") { osc.frequency.value = 220; gain.gain.value = 0.06; }
    else { osc.frequency.value = 660; gain.gain.value = 0.07; }
    osc.start();
    setTimeout(() => { osc.stop(); ctx.close(); }, 180);
  } catch (e) { /* silent */ }
}

function confetti() {
  const emojis = ["🎉", "✨", "⭐", "🎊"];
  for (let i = 0; i < 12; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.textContent = emojis[i % emojis.length];
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-30px";
    el.style.animationDelay = Math.random() * 0.4 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  }
}

function t(obj, field) {
  // Ambil field sesuai bahasa aktif. Contoh: t(soal, "text") -> soal.id_text atau soal.en_text
  return State.bahasa === "id" ? obj[field + "_id"] : obj[field + "_en"];
}

/* ============================================================
   LOCALSTORAGE
   ============================================================ */
const LS_KEY = "lkpd_k9p15_state";

function simpanProgres() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({
      nama: State.nama, kelas: State.kelas, bahasa: State.bahasa,
      soundAktif: State.soundAktif,
      misiSelesai: State.misiSelesai, skor: State.skor,
      checklistChecked: State.checklistChecked, badges: State.badges,
      refleksi: {
        ref1: $("#ref1")?.value || "",
        ref2: $("#ref2")?.value || "",
        ref3: $("#ref3")?.value || ""
      }
    }));
  } catch (e) { /* silent */ }
}

function muatProgres() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) { return null; }
}

function resetProgres() {
  localStorage.removeItem(LS_KEY);
}

/* ============================================================
   BAHASA
   ============================================================ */
function switchLanguage() {
  State.bahasa = State.bahasa === "id" ? "en" : "id";
  $("#btnLang").textContent = State.bahasa === "id" ? "🇮🇩 ID" : "🇬🇧 EN";
  // Re-render screen yang sedang aktif
  const active = document.querySelector(".screen:not([hidden])");
  if (!active) return;
  const id = active.id.replace("screen-", "");
  if (id === "misi1") { State.misi1Index = 0; renderMisi1(); }
  if (id === "misi2") { renderMisi2(); }
  if (id === "misi3") { State.misi3Index = 0; renderMisi3(); }
  if (id === "misi4") { State.misi4Index = 0; renderMisi4(); }
  if (id === "misi5") { renderMisi5(); }
  if (id === "hasil") { renderHasil(); }
  simpanProgres();
}

/* ============================================================
   PROGRESS BAR
   ============================================================ */
function updateProgress() {
  const done = Object.values(State.misiSelesai).filter(Boolean).length;
  const pct = (done / 5) * 100;
  $("#progressFill").style.width = pct + "%";
  $("#progressText").textContent = `${done} / 5`;
  $$(".node").forEach(n => {
    const m = parseInt(n.dataset.misi);
    n.classList.toggle("done", !!State.misiSelesai[m]);
  });
  $$(".misi-card").forEach(c => {
    const m = parseInt(c.dataset.misi);
    c.classList.toggle("done", !!State.misiSelesai[m]);
  });
  $("#btnLihatHasil").disabled = done < 4;
}

/* ============================================================
   MISI 1 — KUIS KILAT
   ============================================================ */
let timerMisi1 = null;

function renderMisi1() {
  if (State.misi1Index >= DATA_SOAL.misi1.length) {
    // Selesai
    State.misiSelesai[1] = true;
    State.skor.misi1 = Math.round((State.misi1Jawaban.filter(j => j).length / DATA_SOAL.misi1.length) * 100);
    updateProgress();
    simpanProgres();
    showToast("Misi 1 selesai! 🧠", "success");
    showScreen("splash");
    return;
  }
  const soal = DATA_SOAL.misi1[State.misi1Index];
  const total = DATA_SOAL.misi1.length;
  $("#misi1Progress").style.width = ((State.misi1Index) / total) * 100 + "%";
  const content = $("#misi1Content");
  content.innerHTML = `
    <div class="soal-text">
      <span style="color:var(--secondary);font-size:12px;">Soal ${State.misi1Index + 1} / ${total}</span><br>
      ${t(soal, "text")}
    </div>
    <div class="opsi-list" id="opsiMisi1"></div>
    <div class="feedback" id="fbMisi1" hidden></div>
  `;
  const opsi = State.bahasa === "id" ? soal.options_id : soal.options_en;
  const list = $("#opsiMisi1");
  opsi.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "opsi-btn";
    btn.innerHTML = `<span class="kode">${String.fromCharCode(65 + i)}.</span><span>${opt}</span>`;
    btn.onclick = () => jawabMisi1(i, btn);
    list.appendChild(btn);
  });

  // Timer
  if (KONFIG.timerAktif) {
    $("#timerMisi1").hidden = false;
    startTimerMisi1();
  } else {
    $("#timerMisi1").hidden = true;
  }
}

function startTimerMisi1() {
  clearInterval(timerMisi1);
  let sisa = KONFIG.durasiTimer;
  const el = $("#timerMisi1");
  el.textContent = "⏱ " + sisa;
  el.classList.remove("warning");
  timerMisi1 = setInterval(() => {
    sisa--;
    el.textContent = "⏱ " + sisa;
    if (sisa <= 10) el.classList.add("warning");
    if (sisa <= 0) {
      clearInterval(timerMisi1);
      jawabMisi1(-1, null); // waktu habis
    }
  }, 1000);
}

function jawabMisi1(pilih, btn) {
  clearInterval(timerMisi1);
  const soal = DATA_SOAL.misi1[State.misi1Index];
  const opsiBtns = $$("#opsiMisi1 .opsi-btn");
  opsiBtns.forEach(b => b.disabled = true);
  const benar = pilih === soal.correct;
  State.misi1Jawaban.push(benar);

  // Tandai
  opsiBtns.forEach((b, i) => {
    if (i === soal.correct) b.classList.add("correct");
    if (i === pilih && !benar) b.classList.add("wrong");
  });

  // Feedback
  const fb = $("#fbMisi1");
  fb.hidden = false;
  fb.className = "feedback " + (benar ? "ok" : "err");
  fb.innerHTML = `<b>${benar ? "✅ Benar!" : "❌ Belum tepat"}</b>${t(soal, "explanation")}`;

  // Suara & confetti
  if (benar) { playSound("correct"); confetti(); } else { playSound("wrong"); }

  // Tombol lanjut
  const btnLanjut = document.createElement("button");
  btnLanjut.className = "btn btn-primary btn-block";
  btnLanjut.style.marginTop = "12px";
  btnLanjut.textContent = State.misi1Index === DATA_SOAL.misi1.length - 1 ? "Lihat Ringkasan" : "Lanjut →";
  btnLanjut.onclick = () => {
    State.misi1Index++;
    renderMisi1();
  };
  fb.after(btnLanjut);
}

/* ============================================================
   MISI 2 — COCOKKAN ISTILAH
   ============================================================ */
function renderMisi2() {
  const left = $("#matchLeft");
  const right = $("#matchRight");
  left.innerHTML = "";
  right.innerHTML = "";
  State.matchSelected = null;
  State.matchAttempts = 0;

  const leftItems = DATA_SOAL.misi2.map(x => ({ id: x.id, text: State.bahasa === "id" ? x.istilah : x.istilah_en }));
  const rightItems = DATA_SOAL.misi2.map(x => ({ id: x.id, text: State.bahasa === "id" ? x.definisi : x.definisi_en }));
  // Acak kolom kanan
  rightItems.sort(() => Math.random() - 0.5);

  leftItems.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "match-item left";
    btn.textContent = item.text;
    btn.dataset.id = item.id;
    btn.onclick = () => pilihMatch(item.id, btn);
    left.appendChild(btn);
  });
  rightItems.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "match-item";
    btn.textContent = item.text;
    btn.dataset.id = item.id;
    btn.onclick = () => cekMatch(item.id, btn);
    right.appendChild(btn);
  });

  $("#btnMatchDone").disabled = true;
}

function pilihMatch(id, btn) {
  $$("#matchLeft .match-item").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  State.matchSelected = { id, btn };
}

function cekMatch(id, btn) {
  if (!State.matchSelected) { showToast("Pilih istilah dulu!", "warning"); return; }
  State.matchAttempts++;
  if (State.matchSelected.id === id) {
    State.matchSelected.btn.classList.add("done");
    State.matchSelected.btn.classList.remove("selected");
    btn.classList.add("done");
    State.matchSelected = null;
    playSound("correct");
    const done = $$("#matchLeft .match-item.done").length;
    if (done === DATA_SOAL.misi2.length) {
      State.misiSelesai[2] = true;
      State.skor.misi2 = 100;
      updateProgress();
      simpanProgres();
      $("#btnMatchDone").disabled = false;
      confetti();
      showToast(`Semua cocok! Percobaan: ${State.matchAttempts}`, "success");
    }
  } else {
    btn.classList.add("shake");
    setTimeout(() => btn.classList.remove("shake"), 400);
    playSound("wrong");
  }
}

/* ============================================================
   MISI 3 — BENAR / SALAH
   ============================================================ */
function renderMisi3() {
  if (State.misi3Index >= DATA_SOAL.misi3.length) {
    State.misiSelesai[3] = true;
    updateProgress();
    simpanProgres();
    showToast("Misi 3 selesai! ✅", "success");
    showScreen("splash");
    return;
  }
  const soal = DATA_SOAL.misi3[State.misi3Index];
  const total = DATA_SOAL.misi3.length;
  const content = $("#misi3Content");
  content.innerHTML = `
    <div class="soal-text">
      <span style="color:var(--secondary);font-size:12px;">Pernyataan ${State.misi3Index + 1} / ${total}</span><br>
      ${t(soal, "text")}
    </div>
    <div class="tf-buttons">
      <button class="tf-btn benar" id="btnBenar">BENAR ✓</button>
      <button class="tf-btn salah" id="btnSalah">SALAH ✗</button>
    </div>
    <div class="feedback" id="fbMisi3" hidden></div>
  `;
  $("#btnBenar").onclick = () => jawabMisi3(true);
  $("#btnSalah").onclick = () => jawabMisi3(false);
}

function jawabMisi3(pilihBenar) {
  const soal = DATA_SOAL.misi3[State.misi3Index];
  const benar = pilihBenar === soal.benar;
  if (benar) State.skor.misi3 = (State.skor.misi3 || 0) + KONFIG.skorPerSoalMisi3;

  $("#btnBenar").disabled = true;
  $("#btnSalah").disabled = true;
  // Tandai
  const btnPilih = pilihBenar ? $("#btnBenar") : $("#btnSalah");
  btnPilih.classList.add(benar ? "correct" : "wrong");

  const fb = $("#fbMisi3");
  fb.hidden = false;
  fb.className = "feedback " + (benar ? "ok" : "err");
  fb.innerHTML = `<b>${benar ? "✅ Benar!" : "❌ Belum tepat"}</b>${t(soal, "explanation")}`;

  if (benar) { playSound("correct"); confetti(); } else { playSound("wrong"); }

  const btnLanjut = document.createElement("button");
  btnLanjut.className = "btn btn-primary btn-block";
  btnLanjut.style.marginTop = "12px";
  btnLanjut.textContent = State.misi3Index === DATA_SOAL.misi3.length - 1 ? "Selesai" : "Lanjut →";
  btnLanjut.onclick = () => {
    State.misi3Index++;
    renderMisi3();
  };
  fb.after(btnLanjut);
}

/* ============================================================
   MISI 4 — DETEKTIF KASUS
   ============================================================ */
function renderMisi4() {
  if (State.misi4Index >= DATA_SOAL.misi4.length) {
    State.misiSelesai[4] = true;
    updateProgress();
    simpanProgres();
    showToast("Misi 4 selesai! 🕵️", "success");
    showScreen("splash");
    return;
  }
  const k = DATA_SOAL.misi4[State.misi4Index];
  const total = DATA_SOAL.misi4.length;
  const content = $("#misi4Content");
  content.innerHTML = `
    <div class="kasus-box">
      <div class="kasus-label">${State.bahasa === "id" ? k.judul : k.judul_en} · ${State.misi4Index + 1}/${total}</div>
      <p style="margin-top:8px;">${t(k, "text")}</p>
    </div>
    <p style="font-weight:600;margin-bottom:10px;">Jenis serangan apa ini?</p>
    <div class="kasus-jawab">
      <button class="kasus-btn" data-jawab="malware">🦠 Malware</button>
      <button class="kasus-btn" data-jawab="phishing">🎣 Phishing</button>
      <button class="kasus-btn" data-jawab="dos">💥 DoS / DDoS</button>
      <button class="kasus-btn" data-jawab="bukan">✅ Bukan Serangan</button>
    </div>
    <div class="feedback" id="fbMisi4" hidden></div>
  `;
  $$("#misi4Content .kasus-btn").forEach(b => {
    b.onclick = () => jawabMisi4(b.dataset.jawab);
  });
}

function jawabMisi4(jawab) {
  const k = DATA_SOAL.misi4[State.misi4Index];
  const benar = jawab === k.jawaban;
  if (benar) State.skor.misi4 = (State.skor.misi4 || 0) + KONFIG.skorPerKasusMisi4;

  $$("#misi4Content .kasus-btn").forEach(b => {
    b.disabled = true;
    if (b.dataset.jawab === k.jawaban) b.classList.add("correct");
    if (b.dataset.jawab === jawab && !benar) b.classList.add("wrong");
  });

  const fb = $("#fbMisi4");
  fb.hidden = false;
  fb.className = "feedback " + (benar ? "ok" : "err");
  fb.innerHTML = `<b>${benar ? "✅ Tepat!" : "❌ Belum tepat"}</b>${t(k, "explanation")}`;

  if (benar) { playSound("correct"); confetti(); } else { playSound("wrong"); }

  const btnLanjut = document.createElement("button");
  btnLanjut.className = "btn btn-primary btn-block";
  btnLanjut.style.marginTop = "12px";
  btnLanjut.textContent = State.misi4Index === DATA_SOAL.misi4.length - 1 ? "Selesai" : "Lanjut →";
  btnLanjut.onclick = () => {
    State.misi4Index++;
    renderMisi4();
  };
  fb.after(btnLanjut);
}

/* ============================================================
   MISI 5 — CHECKLIST MITIGASI
   ============================================================ */
function renderMisi5() {
  const content = $("#misi5Content");
  content.innerHTML = "";
  DATA_SOAL.misi5.forEach(item => {
    const label = document.createElement("label");
    label.className = "checklist-item";
    const checked = State.checklistChecked.includes(item.id);
    label.innerHTML = `
      <input type="checkbox" data-id="${item.id}" ${checked ? "checked" : ""}>
      <span>${item.text}</span>
    `;
    label.querySelector("input").onchange = (e) => {
      const id = e.target.dataset.id;
      if (e.target.checked) {
        if (!State.checklistChecked.includes(id)) State.checklistChecked.push(id);
      } else {
        State.checklistChecked = State.checklistChecked.filter(x => x !== id);
      }
      updateChecklistResult();
      simpanProgres();
    };
    content.appendChild(label);
  });
  updateChecklistResult();
}

function updateChecklistResult() {
  const jumlah = State.checklistChecked.length;
  State.skor.misi5 = jumlah;
  const box = $("#checklistResult");
  box.hidden = false;
  let pesan = "";
  if (jumlah <= 3) pesan = "⚠️ Waspada! Perangkatmu rentan. Yuk mulai perbaiki kebiasaan digitalmu.";
  else if (jumlah <= 6) pesan = "🙂 Cukup baik. Tingkatkan lagi keamanan digitalmu.";
  else if (jumlah <= 9) pesan = "👍 Hebat! Kamu sudah cukup aman. Pertahankan!";
  else pesan = "🏆 Luar biasa! Kamu adalah Duta Keamanan Digital!";

  box.innerHTML = `
    <div class="angka-besar">${jumlah}<small style="font-size:20px;color:var(--text-muted);">/10</small></div>
    <div class="pesan">${pesan}</div>
  `;

  if (jumlah >= 10) {
    State.misiSelesai[5] = true;
    updateProgress();
    simpanProgres();
    confetti();
  } else if (jumlah > 0) {
    // Anggap selesai bila murid sudah mencentang minimal 1
    State.misiSelesai[5] = true;
    updateProgress();
  }
}

/* ============================================================
   HASIL AKHIR
   ============================================================ */
function hitungSkorAkhir() {
  const total = (State.skor.misi1 || 0) + (State.skor.misi3 || 0) + (State.skor.misi4 || 0);
  // Maksimum = 100 + 100 + 60 = 260
  const maks = 100 + 100 + (DATA_SOAL.misi4.length * KONFIG.skorPerKasusMisi4);
  const nilai = Math.round((total / maks) * 100);
  return nilai;
}

function tentukanPredikat(nilai) {
  if (nilai >= KONFIG.predikatA) return { label: "A", desc: "Sangat Berkembang", emoji: "🥇" };
  if (nilai >= KONFIG.predikatB) return { label: "B", desc: "Berkembang Sesuai Harapan", emoji: "🥈" };
  if (nilai >= KONFIG.predikatC) return { label: "C", desc: "Mulai Berkembang", emoji: "🥉" };
  return { label: "D", desc: "Perlu Bimbingan", emoji: "📚" };
}

function cekBadges() {
  const badges = [];
  if (State.skor.misi4 >= (DATA_SOAL.misi4.length * KONFIG.skorPerKasusMisi4)) badges.push("🕵️ Detektif Digital");
  if (State.skor.misi1 >= 80) badges.push("🧠 Cepat Tanggap");
  if (State.skor.misi5 === 10) badges.push("🛡️ Si Paling Aman");
  if (Object.values(State.misiSelesai).filter(Boolean).length === 5) badges.push("🏆 Rajin Belajar");
  State.badges = badges;
  return badges;
}

function renderHasil() {
  const nilai = hitungSkorAkhir();
  const p = tentukanPredikat(nilai);
  const badges = cekBadges();
  const content = $("#hasilContent");
  content.innerHTML = `
    <div class="hasil-nama">${State.nama || "(Tanpa Nama)"}</div>
    <div class="hasil-kelas">Kelas ${State.kelas || "-"}</div>
    <div class="skor-besar">${nilai}</div>
    <div class="predikat" style="background:${nilai >= 75 ? "var(--success)" : nilai >= 60 ? "var(--warning)" : "var(--danger)"}">
      ${p.emoji} Predikat ${p.label} — ${p.desc}
    </div>
    <div class="skor-detail">
      <div class="skor-item"><strong>${State.skor.misi1 || 0}</strong><small>Misi 1 · Kuis</small></div>
      <div class="skor-item"><strong>${State.skor.misi2 || 0}</strong><small>Misi 2 · Cocokkan</small></div>
      <div class="skor-item"><strong>${State.skor.misi3 || 0}</strong><small>Misi 3 · B/S</small></div>
      <div class="skor-item"><strong>${State.skor.misi4 || 0}</strong><small>Misi 4 · Kasus</small></div>
      <div class="skor-item"><strong>${State.skor.misi5 || 0}/10</strong><small>Misi 5 · Checklist</small></div>
    </div>
  `;

  if (badges.length > 0) {
    $("#badgesCard").hidden = false;
    $("#badgesList").innerHTML = badges.map(b => `<span class="badge-item">${b}</span>`).join("");
  } else {
    $("#badgesCard").hidden = true;
  }
}

function unduhHasil() {
  const nilai = hitungSkorAkhir();
  const p = tentukanPredikat(nilai);
  const tanggal = new Date().toLocaleString("id-ID");
  const ref1 = $("#ref1")?.value || "-";
  const ref2 = $("#ref2")?.value || "-";
  const ref3 = $("#ref3")?.value || "-";

  const isi = `
====================================================
HASIL LKPD INTERAKTIF — MISI KEAMANAN DIGITAL
${KONFIG.namaSekolah}
====================================================
Nama       : ${State.nama || "(Tanpa Nama)"}
Kelas      : ${State.kelas || "-"}
Tanggal    : ${tanggal}

----------------------------------------------------
SKOR PER MISI
----------------------------------------------------
Misi 1 — Kuis Kilat          : ${State.skor.misi1 || 0} / 100
Misi 2 — Cocokkan Istilah    : ${State.skor.misi2 || 0} / 100
Misi 3 — Benar / Salah       : ${State.skor.misi3 || 0} / 100
Misi 4 — Detektif Kasus      : ${State.skor.misi4 || 0} / ${DATA_SOAL.misi4.length * KONFIG.skorPerKasusMisi4}
Misi 5 — Checklist Mitigasi  : ${State.skor.misi5 || 0} / 10

----------------------------------------------------
NILAI AKHIR  : ${nilai}
PREDIKAT     : ${p.label} (${p.desc}) ${p.emoji}
----------------------------------------------------

REFLEKSI DIRI:
1. Apa hal baru yang kamu pelajari hari ini?
   ${ref1}

2. Bagian mana yang paling sulit? Mengapa?
   ${ref2}

3. Satu kebiasaan digital yang akan kamu ubah:
   ${ref3}

====================================================
© 2026 ${KONFIG.namaSekolah} — ${KONFIG.namaGuru}
====================================================
`.trim();

  const blob = new Blob([isi], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Hasil_LKPD_${(State.nama || "murid").replace(/\s+/g, "_")}_${State.kelas || ""}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("File berhasil diunduh! 📄", "success");
}

function salinUntukGuru() {
  const nilai = hitungSkorAkhir();
  const p = tentukanPredikat(nilai);
  const teks = `LKPD K9P15 — ${State.nama} (${State.kelas})\nNilai: ${nilai} — Predikat ${p.label}\nMisi1:${State.skor.misi1} Misi3:${State.skor.misi3} Misi4:${State.skor.misi4} Checklist:${State.skor.misi5}/10`;
  navigator.clipboard.writeText(teks).then(() => {
    showToast("Tersalin! Kirim ke guru via WhatsApp/Email.", "success");
  }).catch(() => showToast("Gagal menyalin.", "error"));
}

/* ============================================================
   GLOSARIUM
   ============================================================ */
function openGlosarium() {
  const list = $("#glosariumList");
  list.innerHTML = GLOSARIUM.map(g => `
    <div class="glosarium-item">
      <strong>${g.istilah}</strong>
      <span>${g.arti}</span>
    </div>
  `).join("");
  $("#modalGlosarium").hidden = false;
}
function closeGlosarium() { $("#modalGlosarium").hidden = true; }

/* ============================================================
   INISIALISASI
   ============================================================ */
function initApp() {
  // Muat progres lama (jika ada)
  const lama = muatProgres();
  if (lama && lama.nama) {
    if (confirm("Ditemukan progres sebelumnya milik " + lama.nama + ". Lanjutkan?")) {
      Object.assign(State, {
        nama: lama.nama, kelas: lama.kelas, bahasa: lama.bahasa || "id",
        soundAktif: !!lama.soundAktif,
        misiSelesai: lama.misiSelesai || State.misiSelesai,
        skor: lama.skor || State.skor,
        checklistChecked: lama.checklistChecked || [],
        badges: lama.badges || []
      });
      $("#inputNama").value = State.nama;
      $("#selectKelas").value = State.kelas;
      if (lama.refleksi) {
        setTimeout(() => {
          if ($("#ref1")) $("#ref1").value = lama.refleksi.ref1 || "";
          if ($("#ref2")) $("#ref2").value = lama.refleksi.ref2 || "";
          if ($("#ref3")) $("#ref3").value = lama.refleksi.ref3 || "";
        }, 300);
      }
    } else {
      resetProgres();
    }
  }

  // Set bahasa & sound di UI
  $("#btnLang").textContent = State.bahasa === "id" ? "🇮🇩 ID" : "🇬🇧 EN";
  $("#btnSound").textContent = State.soundAktif ? "🔊" : "🔇";

  // Event listeners
  $("#btnLang").onclick = switchLanguage;
  $("#btnSound").onclick = () => {
    State.soundAktif = !State.soundAktif;
    $("#btnSound").textContent = State.soundAktif ? "🔊" : "🔇";
    simpanProgres();
  };
  $("#btnGlosarium").onclick = openGlosarium;
  $("#btnCloseGlosarium").onclick = closeGlosarium;
  $("#modalGlosarium").onclick = (e) => { if (e.target.id === "modalGlosarium") closeGlosarium(); };

  // Navigasi misi
  $$(".misi-card").forEach(card => {
    card.onclick = () => {
      const nama = $("#inputNama").value.trim();
      const kelas = $("#selectKelas").value;
      if (nama.length < 3) { showToast("Isi nama dulu (min 3 huruf).", "warning"); $("#inputNama").focus(); return; }
      if (!kelas) { showToast("Pilih kelas dulu.", "warning"); $("#selectKelas").focus(); return; }
      State.nama = nama; State.kelas = kelas;
      simpanProgres();
      const m = parseInt(card.dataset.misi);
      if (m === 1) { State.misi1Index = 0; State.misi1Jawaban = []; renderMisi1(); showScreen("misi1"); }
      if (m === 2) { renderMisi2(); showScreen("misi2"); }
      if (m === 3) { State.misi3Index = 0; State.skor.misi3 = 0; renderMisi3(); showScreen("misi3"); }
      if (m === 4) { State.misi4Index = 0; State.skor.misi4 = 0; renderMisi4(); showScreen("misi4"); }
      if (m === 5) { renderMisi5(); showScreen("misi5"); }
    };
  });

  // Tombol kembali
  $$(".btn-back").forEach(b => {
    b.onclick = () => {
      clearInterval(timerMisi1);
      simpanProgres();
      showScreen("splash");
    };
  });

  // Selesai Misi 2
  $("#btnMatchDone").onclick = () => { showScreen("splash"); };

  // Tombol hasil akhir
  $("#btnLihatHasil").onclick = () => {
    State.nama = $("#inputNama").value.trim() || State.nama;
    State.kelas = $("#selectKelas").value || State.kelas;
    renderHasil();
    showScreen("hasil");
  };

  // Unduh / kirim / ulangi
  $("#btnUnduh").onclick = unduhHasil;
  $("#btnKirim").onclick = salinUntukGuru;
  $("#btnUlangi").onclick = () => {
    if (confirm("Yakin ingin mengulang dari awal? Semua progres akan dihapus.")) {
      resetProgres();
      location.reload();
    }
  };

  // Reset dari menu
  $("#btnReset").onclick = () => {
    if (confirm("Reset semua progres?")) {
      resetProgres();
      location.reload();
    }
  };

  updateProgress();
}

/* ============================================================
   START
   ============================================================ */
document.addEventListener("DOMContentLoaded", initApp);