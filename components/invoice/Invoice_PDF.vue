<template>
  <div>
    <div v-for="invoicedetail in invoicedetails" id="mydiv" class="container mx-auto p-4">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <div>
            <img src="/logo.png" alt="Logo" class="h-10">
          </div>
          <div v-if="invoicedetail.invoice.length > 0">
            <h1 class="text-xl font-bold text-gray-800 text-end">Invoice No: {{ invoicedetail.invoice[0].invoiceno }}</h1>
            <h1 class="text-xl font-bold text-gray-800 text-end">Invoice Date: {{ invoicedetail.invoice[0].invoicedate }}</h1>
            <!-- <p class="text-gray-700">Invoice Date: {{ invoicedetail.invoice[0].invoicedate }}</p> -->
          </div>
        </div>
        <div class="border-t border-b border-gray-300 py-4 mb-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h2 class="text-lg font-bold text-gray-800 mb-2">Billing Address</h2>
              <p class="text-gray-700">{{ invoicedetail.address.firstname }} {{ invoicedetail.address.lastname }}</p>
              <p class="text-gray-700">{{ invoicedetail.address.address_1 }}</p>
              <p class="text-gray-700">{{ invoicedetail.address.city.name }}</p>
              <p class="text-gray-700">{{ invoicedetail.address.state.name }}-{{ invoicedetail.address.postal_code }}</p>
              <p class="text-gray-700">{{ invoicedetail.address.country.code }}</p>
              <!-- <p class="text-gray-700">Anytown, USA 12345</p>
            <p class="text-gray-700">johndoe@example.com</p> -->
            </div>
            <div class="text-right">
              <h2 class="text-lg font-bold text-gray-800 mb-2">Shipping Address</h2>
              <p class="text-gray-700">{{ invoicedetail.address.firstname }} {{ invoicedetail.address.lastname }}</p>
              <p class="text-gray-700">{{ invoicedetail.address.address_1 }}</p>
              <p class="text-gray-700">{{ invoicedetail.address.city.name }}</p>
              <p class="text-gray-700">{{ invoicedetail.address.state.name }}-{{ invoicedetail.address.postal_code }}</p>
              <p class="text-gray-700">{{ invoicedetail.address.country.code }}</p>
            </div>
          </div>
        </div>
        <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-1">
          <div>
            <h2 class="text-lg font-bold text-gray-800 mb-2">Sold By</h2>
            <p class="text-gray-700">{{ invoicedetail.stores.sellername }}</p>
            <p class="text-gray-700">{{ invoicedetail.stores.selleraddress }}</p>
            <!-- <p class="text-gray-700">Anytown, USA 12345</p>
        <p class="text-gray-700">sales@acmecorp.com</p> -->
          </div>
          <div class="text-right">
            <h2 class="text-lg font-bold text-gray-800 mb-2">Order</h2>
            <p class="text-gray-700">Order No.: {{ invoicedetail.orderno }}</p>
            <p class="text-gray-700">Order Date: {{ invoicedetail.orderdate }}</p>
            <p class="text-gray-700">Payment Method:{{ invoicedetail.payment_method.card_type }}</p>
            <!-- <p class="text-gray-700">Anytown, USA 12345</p>
        <p class="text-gray-700">sales@acmecorp.com</p> -->
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold text-gray-800 mb-2">Items</h2>
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-200">
                <th class="px-4 py-2 text-left text-gray-800">Item</th>
                <th class="px-4 py-2 text-left text-gray-800 text-end">Price ({{ invoicedetail.currency }})</th>
                <th class="px-4 py-2 text-left text-gray-800 text-end">Quantity</th>
                <th class="px-4 py-2 text-left text-gray-800 text-end">Net Amount ({{ invoicedetail.currency }})</th>
                <th class="px-4 py-2 text-left text-gray-800 text-end">Shipping ({{ invoicedetail.currency }})</th>
                <th class="px-4 py-2 text-left text-gray-800 text-end">Tax Rate & Type</th>
                <th class="px-4 py-2 text-left text-gray-800 text-end">Tax Amount ({{ invoicedetail.currency }})</th>
                <th class="px-4 py-2 text-left text-gray-800 text-end">Total Amount ({{ invoicedetail.currency }})</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="productlist in invoicedetail.product_detail" class="border-b border-gray-300">
                <td class="px-4 py-2 text-gray-800">{{ productlist.products.product.name }}</td>
                <td class="px-4 py-2 text-gray-800 text-end">{{ (productlist.products.variation.price / 100).toFixed(2) }}</td>
                <td class="px-4 py-2 text-gray-800 text-end">{{ productlist.products.variation.quantity }}</td>
                <td class="px-4 py-2 text-gray-800 text-end">{{ productlist.subtotal }}</td>
                <td class="px-4 py-2 text-gray-800 text-end">{{ (productlist.shippingprice).toFixed(2) }}</td>
                <td class="px-4 py-2 text-gray-800 text-end">{{ productlist.products.tax_type.tax_rate }}% GST</td>
                <td class="px-4 py-2 text-gray-800 text-end">{{ Number(productlist.shippingtaxprice) + Number(productlist.itemtax)}}</td>
                <td class="px-4 py-2 text-gray-800 text-end">{{ productlist.grandtotal }}</td>
              </tr>
              <tr class="border-b border-gray-300">
                <td class="px-4 py-2 text-gray-800 font-bold" colspan="7">Total:</td>
                <td class="px-4 py-2 text-gray-800 font-bold text-end text-lg">{{ invoicedetail.overalltotal }}</td>
              </tr>
              <tr class="border-b border-gray-300">
                <td rowspan="2" class="px-4 py-2 text-gray-800 font-bold" colspan="3">Amount in Words: </td>
                <td rowspan="2" class="px-4 py-2 text-gray-800 font-bold text-lg text-end" colspan="5">({{ invoicedetail.numberinwords }})</td>
                <!-- <p>{{ invoicedetail.numberinwords }}</p> -->
                <!-- <td class="px-4 py-2 text-gray-800 font-bold" colspan="8">Amount in Words:</td> -->
                <!-- <td class="px-4 py-2 text-gray-800 font-bold" colspan="8">{{ invoicedetail.numberinwords }}</td> -->
              </tr>
            </tbody>
          </table>
          <!-- <div style="display:flex;justify-content:space-between;margin-bottom:.5rem;padding:5px;">
        <div>
          <p style="font-size:20px;">Total:</p>
          <p style="font-size:20px;">{{ invoicedetail.overalltotal }}</p>
        </div>
        <div>
          <p style="font-size:20px;">Amount in Words:</p>
          <p style="font-size:20px;">{{ invoicedetail.numberinwords }}</p>
        </div>
      </div> -->
        </div>
      </div>
    </div>
    <div class="invoice p-3 mb-3" id="mydiv">

<div class="div-dont-want-to-display">
</div>
<!-- AND MANY MORE DIV'S -->

<!--BUTTON TO DOWNLOAD PDF-->
<a @click.prevent="createPDF()" class="btn btn-primary float-right pointer cursor-pointer">
  <i class="fa fa-download"></i> Generate PDF </a>
</div>
  </div>
</template>




<script>
import html2pdf from 'html2pdf.js'
//var loadingTask = pdf.createLoadingTask('https://cdn.mozilla.net/pdfjs/tracemonkey.pdf');

export default {
  props: ['orderid', 'userid', 'sellerid', 'orderitemid'],
  data() {
    return {
      invoicedetails: [],
      test: '',
      form: {
        pdfstring: '',
        invoiceid: 0
      }

      //orderid:1
    }
  },

  components: {
    html2pdf
  },
  computed: {
    totaltaxamount() {
      let total = 0;
      return this.invoicedetails.reduce(function (total, tax) {
        total = Number(tax.producttaxamount) + Number(tax.shippingpricetaxamt)
        return total.toFixed(2);
      }, 0)
    }
  },
  middleware: [
    'redirectIfGuest'
  ],
  methods: {

    // async storepdf()
    //  {
    //     this.form.pdfstring=this.test;
    //     debugger
    //    let response = await this.$axios.$post('invoice/savepdfstring',this.form).then((response) => {
    //                              debugger
    //                           }).catch(function (error) {
    //                               debugger
    //                            });

    //  },
    // createPDF(){

    //    this.storepdf();
    // },

    createPDF() {
      var element = document.getElementById('mydiv');

      var opt = {
        margin: 0,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: 'mm',
          format: [280, 350],
          orientation: 'portrait'
        }
      };

      //   html2pdf().from(element).toPdf().output('datauristring').then(function (pdfAsString) {
      //     // The PDF has been converted to a Data URI string and passed to this function.
      //     // Use pdfAsString however you like (send as email, etc)! For instance:
      //     console.log(pdfAsString)
      //     debugger
      //     this.test=pdfAsString;


      // });



      html2pdf().set(opt).from(element).save();
    },



    async getInvoiceDetails() {
      let response = await this.$axios.$get('invoice/getinvoicedetail/' + this.orderid
        + '/' + this.userid + '/' + this.orderitemid + '/' + this.sellerid);
      console.log("getInvoiceDetails", response.data)
      this.invoicedetails = response.data;
      // for (var i =0;i<this.invoicedetails.length;i++) {
      //    this.form.invoiceid=this.invoicedetails[i].invoice[i].id;
      // }
      //  this.createPDFtest();

    },
  },

  created() {
    this.getInvoiceDetails();
  }
}

</script>
<style>
.invoice-box {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 24px;
  font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  color: #555;
}

.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(n + 2) {
  text-align: right;
}

.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.details td {
  padding-bottom: 20px;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none;
}

.invoice-box table tr.item input {
  padding-left: 5px;
}

.invoice-box table tr.item td:first-child input {
  margin-left: -5px;
  width: 100%;
}

.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}

.invoice-box input[type="number"] {
  width: 60px;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

/** RTL **/
.rtl {
  direction: rtl;
  font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
}

.rtl table {
  text-align: right;
}

.rtl table tr td:nth-child(2) {
  text-align: left;
}
</style>