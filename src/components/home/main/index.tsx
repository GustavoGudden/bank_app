import { CurrencyDollar, Faders } from "phosphor-react";
import * as C from "./style";

export const Main = () => {
  return (
    <C.Main>
      <C.BoxNav>
        <C.Box>
          <CurrencyDollar size={32} color="#5E45A5" />
          <h1>transation</h1>
        </C.Box>
        <C.Box></C.Box>
        <C.Box></C.Box>
      </C.BoxNav>
      <C.TransationArea>
        <h1>transaction</h1>
        <p>nome do remetente</p>
        <input type="text" />
        <p>quanrtidada:</p>
        <input type="text" />
        <p>mensagem</p>
        <textarea></textarea>
        <button>enviar</button>
      </C.TransationArea>
      <C.TransationRealize>
        <C.Filter>
          <h1>operaçoes realizadas</h1>
          <Faders size={32} color="black" />
        </C.Filter>
        <C.Transation>
          <h1>remetente:</h1>
          <p>valor debitado:</p>
          <p>data:</p>
        </C.Transation>
      </C.TransationRealize>
    </C.Main>
  );
};
