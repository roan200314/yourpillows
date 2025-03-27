const express = require('express');
const stripe = require('stripe')('your_secret_key_here'); // Vervang met je eigen Stripe-secret key

const app = express();
app.use(express.json()); // Zorgt ervoor dat de request body als JSON wordt gelezen

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'T-shirt',
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            ui_mode: 'custom',
            return_url: '{{RETURN_URL}}' // Vervang met je echte return URL
        });

        res.json({ checkoutSessionClientSecret: session.client_secret });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Could not create checkout session' });
    }
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});
