<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small v-if="isPortfolio">
            (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
          </small>
          <small v-else>
            (Price: {{ stock.price }})
          </small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            v-model="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
          >
        </div>
        <div class="pull-right">
          <button
            v-if="isPortfolio"
            class="btn btn-success"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
            @click="sellStock"
          >
            Sell
          </button>
          <button
            v-else
            class="btn btn-success"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
            @click="buyStock"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { SELL_STOCK, BUY_STOCK } from '../store/actions.type';


export default {
  props: {
    stock: {
      type: Object,
      required: true,
    },
    isPortfolio: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    ...mapActions([BUY_STOCK, SELL_STOCK]),
    buyStock() {
      const { id, price } = this.stock;
      const order = {
        id,
        price,
        quantity: this.quantity,
      };
      this[BUY_STOCK](order);
      this.quantity = 0;
    },
    sellStock() {
      const { id, price } = this.stock;
      const order = {
        id,
        price,
        quantity: this.quantity,
      };
      this[SELL_STOCK](order);
      this.quantity = 0;
    },
  },
};
</script>
