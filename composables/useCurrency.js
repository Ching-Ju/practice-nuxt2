export default function () {
  function formatCurrency (value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }

  return {
    formatCurrency
  }
}
