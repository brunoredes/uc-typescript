function discriminatedTypes() {

    interface Order {
        id: string;
        amount: number;
        currency: string;
    }

    interface Stripe {
        type: 'stripe';
        card: string;
        cvc: string;
    }

    interface Paypal {
        type: 'paypal';
        email: string;
    }

    interface PicPay {
        type: 'picpay';
        telephoneNumber: string
    }

    type CheckoutCard = Order & Stripe;
    type CheckoutPaypal = Order & Paypal;
    type CheckoutPicpay = Order & PicPay;

    const order: Order = {
        id: 'xa22s',
        amount: 100,
        currency: 'USD'
    };

    const orderCard: CheckoutCard = {
        ...order,
        card: '1000 2000 3000 4000',
        cvc: '123',
        type: 'stripe'
    };

    const orderPaypal: CheckoutPaypal = {
        ...order,
        email: 'abc@def.com',
        type: 'paypal'

    };

    const orderPicpay: CheckoutPicpay = {
        ...order,
        type: 'picpay',
        telephoneNumber: '+551199999999',

    }

    type Payload = CheckoutCard | CheckoutPaypal | CheckoutPicpay;

    function checkout(payload: Payload) {
        if (payload.type === 'stripe') {
            console.log(payload.card, payload.cvc)
        }
        if (payload.type === 'picpay') {
            console.log(payload.telephoneNumber);
        }
        if (payload.type === 'paypal') {
            console.log(payload.email);
        }
    }
}