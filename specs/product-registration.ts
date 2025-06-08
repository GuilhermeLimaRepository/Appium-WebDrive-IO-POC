import { RegistrationScreen } from "../screens/android/product-screen";

const screen = new RegistrationScreen();

describe('Product Feature Tests', ()=> { 
  
    it('Add A Simple Product', async () => {
        await screen.registrationProduct();
    });
})