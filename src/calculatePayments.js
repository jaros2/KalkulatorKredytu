function calculatePayments (loanAmount, interestRate, remainingPayments) {
    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -remainingPayments));
    const payments = [];
  
    for (let i = 1; i <= remainingPayments; i++) {
      const interestPayment = loanAmount * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestPayment;
      const balance = loanAmount - principalPayment;
      const payment = {
        paymentNumber: i,
        paymentAmount: monthlyPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        principalPayment: principalPayment.toFixed(2),
        balance: balance.toFixed(2)
      };
      payments.push(payment);
      loanAmount = balance;
    }
  
    return payments;
  }

  export default calculatePayments
