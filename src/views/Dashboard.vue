<template>
  <div class="ml-5 mr-5 mt-2">
    <b-row>
      <b-col lg="8">
        <div>
          <b-card title="Ujian Tersedia">
            <b-card-text>
              <b-table striped hover :items="items">
                <template #cell(action)="data">
                  <span v-html="data.value"></span>
                </template>
              </b-table>
            </b-card-text>
          </b-card>
        </div>
      </b-col>

      <b-col lg="4">
        <info-siswa />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import InfoSiswa from "../components/InfoSiswa.vue";
export default {
  components: { InfoSiswa },
  name: "Dashboard",
  data() {
    return {
      items: [
        {
          No: 1,
          nama_ujian: "Latihan mengeja huruf jerman dan rusia",
          mapel: "Macdonald",
          tanggal: "10-23-12 / 23-23-21",
          action: '<a href="#/detail/9723" class="btn btn-outline-primary">Kerjakan</a>',
        },
        {
          No: 2,
          nama_ujian: "Larsen",
          mapel: "Shaw",
          tanggal: "10-23-12 / 23-23-21",
          action: '<a href="#/detail/9723" class="btn btn-outline-primary" > Kerjakan</a>',
        },
        {
          No: 3,
          nama_ujian: "Geneva",
          mapel: "Wilson",
          tanggal: "10-23-12 / 23-23-21",
          action: '<a href="#/detail/9723" class="btn btn-outline-primary"> Kerjakan</a>',
        },
        {
          No: 4,
          nama_ujian: "Jami",
          mapel: "Carney",
          tanggal: "10-23-12 / 23-23-21",
          action: '<a  href="#/detail/9723" class="btn btn-outline-primary"> Kerjakan</a>',
        },
      ],
    };
  },
};
</script>

