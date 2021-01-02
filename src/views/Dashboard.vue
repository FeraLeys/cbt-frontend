<template>
  <div class="ml-5 mr-5 mt-2">
    <b-row>
      <b-col  lg="8">
        <div>
          <b-card title="Ujian Tersedia">
            <b-card-text>
           <b-table striped hover :items="items">
                <template #cell(action)="data">
        <span v-html="data.value"></span>
      </template>
           </b-table>
            </b-card-text>
            <b-card-text>
                <b-button variant="outline-primary">
                    hello
                </b-button>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
  
     <b-col lg="4" >
        <div>
          <b-card title="Card title" sub-title="Card subtitle">
            <b-card-text>
              Some quick example text to build on the <em>card title</em> and
              make up the bulk of the card's content.
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
   data() {
      return {
        items: [
          { No: 1, nama_ujian: 'Dickerson', mapel: 'Macdonald', tanggal: '10-23-12 / 23-23-21', action: '<b-button > Kerjakan</b-button>' },
          { No: 2, nama_ujian: 'Larsen', mapel: 'Shaw', tanggal: '10-23-12 / 23-23-21', action: '<b-button > Kerjakan</b-button>'  },
          { No: 3, nama_ujian: 'Geneva', mapel: 'Wilson', tanggal: '10-23-12 / 23-23-21' , action: '<b-button > Kerjakan</b-button>' },
          { No: 4, nama_ujian: 'Jami', mapel: 'Carney', tanggal: '10-23-12 / 23-23-21', action: '<b-button variant="outline-primary">Button</b-button>'  }
        ]
      }
    },
};
</script>

<style>
.box {
  border-color: 1 solid skyblue;
}
</style>