// 3rd parties
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { useState } from 'react';

// Components
import ContactForm from '../Form';
import Notification from '../Notification';

// Styles
import {
  Card,
  Center,
  ContactInfo,
  Container,
  FormDescription,
  FormTitle,
  Icon,
} from './style';
import TitleSection from '../SectionTitle/styles';

const Contact = function ContactPage() {
  const [formStatus, setFormStatus] = useState('');

  return (
    <Container id="contato">
      <Center>
        <ContactInfo>
          <TitleSection>Contato</TitleSection>
          <h3>Alguma dúvida? Entre em contato e responderemos em breve.</h3>
        </ContactInfo>

        <article>
          <Card className="contact-card-email">
            <a href="mailto:contato@zakta.com.br">
              <Icon className="contact-icon-email">
                <AiOutlineMail />
              </Icon>

              <h4>E-mail</h4>
              <p>contato@zakta.com.br</p>
            </a>
          </Card>

          <Card className="contact-card-telephone">
            <a href="tel:+5511933020321">
              <Icon className="contact-icon-telephone">
                <AiOutlinePhone />
              </Icon>

              <h4>Telefone</h4>
              <p>+55 11 93302 0321</p>
            </a>
          </Card>

          <Card className="contact-card-whatsapp">
            <a href=" https://wa.me/5511933020321?text=Olá%20gostaria%20de%20um%20orçamento%20dos%20seus%20serviços." target="_blank">
              <Icon>
                <BsWhatsapp />
              </Icon>

              <h4>WhatsApp</h4>
              <p>+55 11 93302 0321</p>
            </a>
          </Card>
        </article>

        <FormTitle>Você pode nos escrever</FormTitle>

        <FormDescription>
          Por favor preencha este formulário. Seus dados serão privados e
          utilizados apenas para entendermos melhor suas necessidades. Em até um
          dia útil, responderemos a sua consulta.
        </FormDescription>

        <ContactForm setFormStatus={setFormStatus} />
      </Center>

      {formStatus && <Notification formStatus={formStatus} setFormStatus={setFormStatus} />}
    </Container>
  );
};
export default Contact;
