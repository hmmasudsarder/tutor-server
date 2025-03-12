declare module 'sslcommerz-lts' {
    interface PaymentData {
      total_amount: number;
      currency: string;
      tran_id: string;
      success_url: string;
      fail_url: string;
      cancel_url: string;
      ipn_url: string;
      shipping_method: string;
      product_name: string;
      product_category: string;
      product_profile: string;
      cus_name: string;
      cus_email: string;
      cus_add1: string;
      cus_add2: string;
      cus_city: string;
      cus_state: string;
      cus_postcode: string;
      cus_country: string;
      cus_phone: string;
      cus_fax: string;
      ship_name: string;
      ship_add1: string;
      ship_add2: string;
      ship_city: string;
      ship_state: string;
      ship_postcode: number;
      ship_country: string;
    }
  
    interface ApiResponse {
      GatewayPageURL: string;
    }
  
    class SSLCommerzPayment {
      private storeId: string;
      private storePassword: string;
      private isLive: boolean;

      constructor(storeId: string, storePassword: string, isLive: boolean) {
        this.storeId = storeId;
        this.storePassword = storePassword;
        this.isLive = isLive;
      }
      async init(data: PaymentData): Promise<ApiResponse> {
        // Use the data parameter to avoid the 'defined but never used' error
        const response: ApiResponse = {
          GatewayPageURL: `https://example.com/payment?amount=${data.total_amount}&currency=${data.currency}`
        };
        return response;
      }
    }
  
    export = SSLCommerzPayment;
  }