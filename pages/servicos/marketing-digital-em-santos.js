// styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';

const DigitalMkt = function PageServiceDigitalMkt() {
  return (
    <ServiceInfo>
      <Block>
        <h1>Marketing Digital</h1>
        <p>
          Além de marcar presença na web, seja com um site, loja virtual ou sistema, é
          necessário também realizar uma adequada divulgação do seu projeto e assim
          ter mais chances de alcançar seus resultados.
        </p>
        <p>
          A Zakta possui uma equipe especializada em Marketing Digital para ajudar a
          divulgar o seu negócio na web de diferentes formas:
        </p>
        <ul>
          <li>
            <b> Google Meu Negócio </b>
            : Criamos e atualizamos a ficha de
            apresentação da sua empresa no Google, fornecendo principais
            informações, fotos, horários e contatos.
          </li>
          <li>
            <b> Marketing de Conteúdo </b>
            : Fornecemos estratégias para Marketing
            de Conteúdos com textos e postagens para conseguir acessos,
            atrair clientes e realizar vendas.
          </li>
          <li>
            <b> Google ADS </b>
            : Somos especialistas em criação e gestão de
            campanhas no Google Adwords para a realização de anúncios no
            Google buscando mais acessos para o seu site.
          </li>
        </ul>
      </Block>
    </ServiceInfo>
  );
};
export default DigitalMkt;