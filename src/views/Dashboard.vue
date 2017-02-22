<template>
  <div class="wrapper">

    <header-nav></header-nav>
    <sidebar></sidebar>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          Page Header
          <small>Optional description</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
          <li class="active">Here</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">

        <router-view></router-view>

      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <footer-nav></footer-nav>

  </div>
</template>

<script>
  import HeaderNav from '../components/layouts/HeaderNav'
  import Sidebar from '../components/layouts/Sidebar'
  import Footer from '../components/layouts/Footer'

  export default {
    components: {
      HeaderNav,
      Sidebar,
      'footerNav':Footer
    }
  }

</script>
