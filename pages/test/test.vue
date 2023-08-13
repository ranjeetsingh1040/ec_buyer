<template>
  <div>
    <h1>Invoice</h1>
    <form @submit.prevent="submitForm">
      <label>
        Customer Name:
        <input type="text" v-model="customerName" required />
      </label>
      <br />
      <label>
        Order Details:
        <textarea v-model="orderDetails" required></textarea>
      </label>
      <br />
      <label>
        Invoice Amount:
        <input type="number" v-model="invoiceAmount" required />
      </label>
      <br />
      <button type="submit">Generate Invoice</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios';
import { saveAs } from 'file-saver';

export default {
  data() {
    return {
      customerName: '',
      orderDetails: '',
      invoiceAmount: null,
    };
  },
  methods: {
    async submitForm() {
      // Call the Laravel API endpoint to generate the invoice PDF
      const response = await this.$axios.$post('invoicetest', {
        customerName: this.customerName,
        orderDetails: this.orderDetails,
        invoiceAmount: this.invoiceAmount,
      }, { responseType: 'blob' });

      // Save the PDF file to the user's device
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const fileName = 'invoice.pdf';
      saveAs(blob, fileName);
    },
  },
};
</script>
