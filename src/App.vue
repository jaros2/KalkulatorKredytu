<template>
  <div id="app">
    <h1 v-text="page_title"></h1>
    <form @submit.prevent="onSubmit">
      <label for="loan-amount">Loan amount:</label>
      <input type="number" id="loan-amount" name="loan-amount" v-model="loanAmount" required>

      <label for="interest-rate">Interest rate:</label>
      <input type="number" id="interest-rate" name="interest-rate" v-model="interestRate" step="0.01" required>

      <label for="remaining-payments">Remaining payments:</label>
      <input type="number" id="remaining-payments" name="remaining-payments" v-model="remainingPayments" required>

      <button type="submit">Calculate</button>
    </form>
    <div v-if="showTable">
      <LoanPlan :payments="payments" v-if="payments.length" />
    </div>
    
  </div>

</template>

<script>
import LoanPlan from './components/LoanPlan.vue'
import calculatePayments from './calculatePayments.js'
import calculateLoanPayment from './calculateLoanPayment.js'

export default {
  name: 'App',
  components: { LoanPlan },
  data( ) {
    return {
      page_title: 'Kalkulator Kredytu',
      loanAmount: 245166,
      interestRate: 9.52,
      remainingPayments: 194,
      payments: [],
      showTable: false
    }
  },
  methods: {
    onSubmit( ) {
      const paymentAmount = calculateLoanPayment(this.loanAmount, this.interestRate, this.remainingPayments)
      this.payments = calculatePayments(this.loanAmount, this.interestRate, paymentAmount, this.remainingPayments)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
