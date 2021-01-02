<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-container>
         <b-navbar-brand>Exam App</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" type="dark">
     <b-nav-item>Keluar <b-icon-box-arrow-right /></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-container>
  </b-navbar>
</div>
</template>

<script>
export default {
name: 'Header'
}
</script>

<style>

</style>