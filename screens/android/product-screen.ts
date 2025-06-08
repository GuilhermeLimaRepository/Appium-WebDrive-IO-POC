import { common } from "common.ts";

export class RegistrationScreen {
  add = 'id:Button1';
  code = 'id:txt_codigo';
  description = 'id:txt_descricao';
  packing = 'id:txt_unidade';
  amount = 'id:txt_quantidade';
  unit = 'id:txt_valunit';
  lot = 'id:txt_lote';
  save = 'id:btn_gravar_assunto';

  async registrationProduct() {
    //await browser.pause(5000);
    await common.acceptAlert();
    await common.waitForClick(this.add);                    
    await common.sendKeysById(this.code, '001');            
    await common.sendKeysById(this.description, 'Produto Exemplo');
    await common.sendKeysById(this.packing, 'Pacote');       
    await common.sendKeysById(this.amount, '10');         
    await common.sendKeysById(this.unit, '2.99');           
    await common.sendKeysById(this.lot, 'L123');             
    await common.waitForClick(this.save);
  }
}
