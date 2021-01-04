<template>
  <div>
    <div class="ml-5 mr-5">
      <b-row>
        <b-col class="mt-2" lg="8">
          <detail-ujian title="Detail Ujian" />
        </b-col>

        <b-col lg="4" class="mt-2">
          <div class="container">
            <b-card title="Konfirmasi Ujian">
              <b-button variant="outline-success" class="btn-block"
                >Mulai Ujian</b-button
              >
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import detailUjian from "@/components/DetailUjian.vue";

export default {
  name: "DetailUjian",
  data() {
    return {
      items: [
        {
          nama_ujian: "Seni itu ledakan",
          mata_ujian: "Seni Budaya",
          jumlah_soal: 60,
        },
      ],
    };
  },
  components: {
    'detail-ujian' : detailUjian
  },
};
</script>

<style>
</style>