export const ORDER_URL = process.env.NODE_ENV === 'production' ? 'https://accountapi.exchangedataset.cc/customer/prepare' : 'http://localhost:3002/customer/prepare';
export const STRIPE_PUBLIC = 'pk_test_gSZxwrZFpWcMxhemNSyAx53t00xr5iuhNT';
export const APIKEY_CONSOLE_URL = 'https://console.exchangedataset.cc/';
export const NUMBER_REGEX = /^[1-9][0-9]*$/;
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PRICING = [
  {
    end: 1,
    price: 10,
  },
  {
    end: 30,
    price: 1,
  },
  {
    end: 200,
    price: 0.4,
  },
  {
    end: 1000,
    price: 0.35,
  },
  {
    end: Number.POSITIVE_INFINITY,
    price: 0.3,
  },
];

export const calcPrice = (quota) => {
  let price = Math.min(quota, PRICING[0].end) * PRICING[0].price;
  quota = Math.max(quota - PRICING[0].end, 0);
  for (let i = 1; i < PRICING.length; i++) {
    const step = PRICING[i].end - PRICING[i-1].end;
    price += Math.min(quota, step) * PRICING[i].price;
    quota = Math.max(quota - step, 0);
  }
  return price;
}