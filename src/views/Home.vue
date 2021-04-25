<template>
  <div class="home">
    <Header />
    <!-- card -->
    <div class="container">
      <div class="card-deck my-5">
        <div class="card color">
          <div class="card-body">
            <h5 class="card-title">Total Confirmed</h5>
            <p class="card-text">{{ TotalConfirmed }}</p>
          </div>
        </div>
        <div class="card color">
          <div class="card-body color">
            <h5 class="card-title text-white">Total Deaths</h5>
            <p class="card-text text-white">{{ TotalDeaths }}</p>
          </div>
        </div>
        <div class="card color">
          <div class="card-body">
            <h5 class="card-title">Total Recovered</h5>
            <p class="card-text">{{ TotalRecovered }}</p>
          </div>
        </div>
      </div>
      <!-- end card -->

      <!-- table -->
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Total Confirmed</th>
              <th scope="col">Total Deaths</th>
              <th scope="col">Total Recovered</th>
            </tr>
          </thead>
          <tbody v-for="(item, i) in getCovidInfoCountries" :key="i">
            <tr>
              <th>{{ item.Country }}</th>
              <td>{{ item.TotalConfirmed }}</td>
              <td>{{ item.TotalDeaths }}</td>
              <td>{{ item.TotalRecovered }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- end table -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '../components/Header'
export default {
  components: {
    Header
  },
  computed: {
    ...mapGetters({
      // get total confirmed
      TotalConfirmed: 'covid/getTotalConfirmed',
      // get total Deaths
      TotalDeaths: 'covid/getTotalDeaths',
      // get total Recovered
      TotalRecovered: 'covid/getTotalRecovered',
      // get Country
      getCovidInfoCountries: 'covid/getCovidContries'
    })
  },
  methods: {
    ...mapActions({
      // action get data
      actionGet: 'covid/GetDataCovid'
    })
  },
  mounted () {
    // life cycle: ketika web di render otomatis akan menjalakan fuction
    this.actionGet()
  }
}
</script>

<style>
.home {
  background-color: #d8e3e7;
}
.color {
  background-color: #536162;
}
</style>
