<template>
  <div>
         <b-card :title="title">
            <b-card-text>

                <div class="container">
                    <div class="p-3 bg-light">
              <b-card-text class="">Nama Ujian : Ledakan Itu Seni</b-card-text>
                    </div>
                      <div class="p-3">
                      
              <b-card-text>Nama Mapel : Seni Budaya</b-card-text>
                      </div>
                      <div class="p-3 bg-light">
                      
              <b-card-text>Jumlah Soal : 60</b-card-text>
                      </div>
                       <div class="p-3">
              <b-card-text>Waktu Ujian : 120 Menit</b-card-text>
                      </div>

                 <ul class="bg-light">
                     <li>
                        <strong>
                        Mohon maaf jika terjadi kesalahan harap baca petunjuk di bawah    
                        </strong>
                     </li>
                     <ol>
                        <li>
                            Jika terjadi error seperti soal tidak munculm, silahkan refresh halaman, jika tidak tampil juga silahkan logout dan login kembali (Tekan tombol logout disudut kanan atas).
                        </li>
                        <li>
                            Usahakan jaringan yang stabil ketika sedang ujian.
                        </li>
                        <li>
                            Silahkan gunakan hp atau leptop anda dengan browser terbaru seperti chrome dan opera.
                        </li>
                        <li>
                            Pastikan tekan tombol selesai ketika selesai menjawab seluruh soal.
                        </li>
                     </ol>
                 </ul>
                </div>
             
           
           
            </b-card-text>
          </b-card>
  </div>
</template>

<script>
export default {
    name: 'detailUjian',
    props: {
        title: String,

    }
}
</script>

<style>

</style>