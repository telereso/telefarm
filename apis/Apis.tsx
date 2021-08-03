import ApiService from '../services/ApiService';

export const GetPaymentToken = async () => {
  let token;
  var qs = require('qs');
  var data = qs.stringify({
    grant_type: 'client_credentials',
  });
  await ApiService(
    '',
    'post',
    data,
    false,
    '',
    'https://api.sandbox.paypal.com/v1/oauth2/token',
    {
      headers: {
        Authorization:
        'Basic QVJBZFJINFpPbzFucGlUZzBRU1VFUDVEUEFTcEM2bDNzejhJZW5fSEx1VU4tTk9kSi1rV29oaWNKS1hrVlNyZnRQUFFXSGZlLV8tclRLUmI6RUpHNEpmQVFjaU1LVzU0Tm51S2d6RlN6VnBBLXJZSmdhMm5Da1NjSFJmcnViMnF6NWozVE03QkNadldjX0k5QVZtY1puN0pnZTczOHJkbmY=',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
    .then((res) => {
      token = res.data.access_token;
    })
    .catch((err) => {
      console.log(err);
    });

  return token;
};

export const paymentLinks = async ({amount, token}) => {

  let links = {successLink: '', dataLink: '', id: '', token: token};
  var data2 = JSON.stringify({
    intent: 'AUTHORIZE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: amount,
          breakdown: {
            item_total: {value: amount, currency_code: 'USD'},
          },
        },
        items: [
          {
            name: 'Top up',
            unit_amount: {value: amount, currency_code: 'USD'},
            description: 'Top up',
            quantity: '1',
          },
        ],
      },
    ],

    application_context: {
      return_url: 'https://test.com',
      cancel_url: 'https://test.com',
    },
  });

  await ApiService(
    '',
    'post',
    data2,
    false,
    '',
    'https://api-m.sandbox.paypal.com/v2/checkout/orders',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )
    .then((response) => {
      links.successLink = response.data.links[1].href;
      links.dataLink = response.data.links[3].href;
      links.id = response.data.id;
    })
    .catch((err) => {
      console.log(err);
    });

  return links;
};

export const paymentStatus = async ({dataLink, token}) => {
  let status;

  await ApiService('', 'post', {}, false, '', dataLink, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(async (response) => {
      status = await JSON.stringify(response.data.status);
    })
    .catch((err) => {
      console.log(err);
    });

  return status;
};
