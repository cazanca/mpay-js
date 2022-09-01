import { MpayConfig, C2BData, B2BData, B2CData, ReversalData, QueryData, CustomerData } from '.';
import { Core } from './Core';
import axios from 'axios';

class Mpay {
  private core: Core;
  private data: MpayConfig;
  constructor(data: MpayConfig) {
    this.data = data;
    this.core = new Core(this.data.apiKey, this.data.publicKey, true);
    this.core.setAddress('api.sandbox.vm.co.mz');
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.core.createToken()}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Origin'] = 'api.sandbox.vm.co.mz';
  }

  c2b(data: C2BData) {
    this.core.setPort(18352);
    this.core.setPath('/ipg/v1x/c2bPayment/singleStage/');

    return new Promise(async (resolve, reject) => {
      axios
        .post(this.core.url(), data)
        .then((res) => {
          resolve({ data: res.data, status: res.status });
        })
        .catch((error) => {
          reject({ error: error.response.data, status: error.response.status });
        });
    });
  }

  b2b(data: B2BData) {
    this.core.setPort(18349);
    this.core.setPath('/ipg/v1x/b2bPayment/');

    return new Promise(async (resolve, reject) => {
      axios
        .post(this.core.url(), data)
        .then((res) => {
          resolve({ data: res.data, status: res.status });
        })
        .catch((error) => {
          reject({ error: error.response.data, status: error.response.status });
        });
    });
  }

  b2c(data: B2CData) {
    this.core.setPort(18345);
    this.core.setPath('/ipg/v1x/b2cPayment/');

    return new Promise(async (resolve, reject) => {
      axios
        .post(this.core.url(), data)
        .then((res) => {
          resolve({ data: res.data, status: res.status });
        })
        .catch((error) => {
          reject({ error: error.response.data, status: error.response.status });
        });
    });
  }

  reversal(data: ReversalData) {
    this.core.setPort(18354);
    this.core.setPath('/ipg/v1x/reversal/');

    return new Promise(async (resolve, reject) => {
      axios
        .put(this.core.url(), data)
        .then((res) => {
          resolve({ data: res.data, status: res.status });
        })
        .catch((error) => {
          reject({ error: error.response.data, status: error.response.status });
        });
    });
  }

  queryTransaction(data: QueryData) {
    this.core.setPort(18353);
    this.core.setPath(
      `/ipg/v1x/queryTransactionStatus/?input_ThirdPartyReference=${data.input_ThirdPartyReference}&input_QueryReference=${data.input_QueryReference}&input_ServiceProviderCode=${data.input_ServiceProviderCode}`,
    );

    return new Promise(async (resolve, reject) => {
      axios
        .get(this.core.url())
        .then((res) => {
          resolve({ data: res.data, status: res.status });
        })
        .catch((error) => {
          reject({ error: error.response.data, status: error.response.status });
        });
    });
  }

  customerName(data: CustomerData) {
    this.core.setPort(19323);
    this.core.setPath(
      `/ipg/v1x/queryCustomerName/?input_CustomerMSISDN=${data.input_CustomerMSISDN}&input_ThirdPartyReference=${data.input_ThirdPartyReference}&input_ServiceProviderCode=${data.input_ServiceProviderCode}`,
    );

    return new Promise(async (resolve, reject) => {
      axios
        .get(this.core.url())
        .then((res) => {
          resolve({ data: res.data, status: res.status });
        })
        .catch((error) => {
          reject({ error: error.response.data, status: error.response.status });
        });
    });
  }
}

module.exports = Mpay;
