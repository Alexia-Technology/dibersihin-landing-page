<template>
  <div>
    <br /><br /><br /><br />
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <faqItem
          v-for="(faq, index) in faqs"
          :key="index"
          :pertanyaan="faq.pertanyaan"
          :jawaban="faq.jawaban"
        />
      </div>
    </div>
  </div>
</template>

<script>
import faqItem from "@/components/card/question_card";
export default {
  layout: "multiPage",
  data() {
    return {
      title: "FAQ - Dibersihin",
      faqs: [
        {
          pertanyaan:
            "Apakah aplikasi “dibersihin” dapat diinstal disemua jenis dan merk gadget?",
          jawaban:
            "Iya, Aplikasi “dibersihin” dapat diinstal disetiap tipe dan merk gadget.",
        },
        {
          pertanyaan:
            "Apakah aplikasi “dibersihin” dapat diunggah selain melalui Play Store?",
          jawaban: "Untuk saat ini baru tersedia di Play Store.",
        },
        {
          pertanyaan: "Bagaimana cara menggunakan aplikasi?",
          jawaban:
            "Ketik email dan password untuk log in. Silahkan lihat menu tutorial yang ada di https://www.dibersihin.com.",
        },
        {
          pertanyaan:
            "Sudah menginstal aplikasi tetapi belum bisa digunakan saat mulai log in?",
          jawaban:
            "Pastikan anda telah melakukan verifikasi melalui email anda.",
        },
        {
          pertanyaan: "Jika lupa Password apa yang harus dilakukan?",
          jawaban:
            "Klik “Lupa Password”, ketik email yang anda gunakan pada saat pendaftaran, selanjutnya akan mendapatkan pemberitahuan melalui email untuk konfirmasi merubah password lama menjadi password baru",
        },
        {
          pertanyaan: "Bagaimana cara melakukan Top Up",
          jawaban:
            "Klik ikon dompet, klik isi saldo, pilih metode transfer pembayaran Virtual Account  berdasarkan bank yang anda miliki. (dapat dilihat ditutorial).",
        },
        {
          pertanyaan:
            "Apakah dapat melakukan transfer saldo antar pengguna aplikasi ?",
          jawaban: "Dapat, dengan cara memasukan nomor telepon yang dituju.",
        },
        {
          pertanyaan: "Apakah riwayat Top Up akan terlihat diaplikasi?",
          jawaban:
            "Ya, setiap transaksi Top Up akan terlihat di (riwayat Top Up)",
        },
        {
          pertanyaan:
            "Apakah pembayaran Top Up dapat menggunakan bank yang berbeda dengan bank yang dipilih saat virtual account? ",
          jawaban:
            "Tidak bisa, hanya menggunakan bank yang sama dengan bank di virtual account.",
        },
      ],
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Pesan Cleaner Tanpa Ribet",
        },
      ],
    };
  },
  components: {
    faqItem,
  },
};
</script>
