type HeaderTypeValue = 'Content-Type' | 'Origin' | 'Authorization' | 'Host';

export interface HeaderType {
  type: HeaderTypeValue;
  value: string;
}

export interface MpayConfig {
  apiKey: string;
  publicKey: string;
}

export interface C2BData {
  input_TransactionReference: string;
  input_CustomerMSISDN: string;
  input_Amount: string;
  input_ThirdPartyReference: string;
  input_ServiceProviderCode: string;
}

export interface B2BData {
  input_TransactionReference: string; // T12344C
  input_Amount: string; // 10
  input_ThirdPartyReference: string; // 11114
  input_PrimaryPartyCode: string; // 171717
  input_ReceiverPartyCode: string; // 979797
}

export interface B2CData {
  input_TransactionReference: string; // T12344C
  input_CustomerMSISDN: string; // 258843330333
  input_Amount: string; // 10
  input_ThirdPartyReference: string; // 11114
  input_ServiceProviderCode: string; // 	171717
}

export interface ReversalData {
  input_TransactionID: string; // 49XCDF6
  input_SecurityCredential: string; // Mpesa2019
  input_InitiatorIdentifier: string; // MPesa2018
  input_ThirdPartyReference: string; // 11114
  input_ServiceProviderCode: string; // 171717
  input_ReversalAmount?: string; // 10
}

export interface QueryData {
  input_ThirdPartyReference: string; // 11114
  input_ServiceProviderCode: string; // 171717
  input_QueryReference: string; // transaction Id -> 5C1400CVRO, AG_20180206_00005e7dccc6da08efa8
}

export interface CustomerData {
  input_ThirdPartyReference: string; // 11114
  input_ServiceProviderCode: string; // 171717
  input_CustomerMSISDN: string; // 258843330333
}
