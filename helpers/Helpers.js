import { GetPaymentToken, paymentLinks } from '../apis/Apis'
import * as WebBrowser from 'expo-web-browser';

export const TopUp = async (price) => {
    const Token = await GetPaymentToken();
    const Links = await paymentLinks({price, Token});
    WebBrowser.openBrowserAsync('https://www.sandbox.paypal.com/checkoutnow?token=0GA63741LM879661M');
    
}