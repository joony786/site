import { useFormik } from "formik";
import * as Yup from "yup";
import { Erro, Form, InputForm } from "./styles";

export default function ContactForm() {

  function telMask(o) {
    const change = (mtel(o));
    console.log(change);
  }

  function mtel(o) {
    o = o.replace(/\D/g,"");
    o = o.replace(/^(\d{2})(\d)/g, "($1) $2");
    o = o.replace(/(\d)(\d{4})$/, "$1-$2");
    return o;
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      tel: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "O nome precisa ter no mínimo 3 caracteres.")
        .required("É preciso preencher o nome."),
      tel: Yup.string()
        .max(11, "O telefone precisa ter no máximo 11 números.")
        .required("É preciso preencher o número."),
      email: Yup.string()
        .email("E-mail inválido.")
        .required("É preciso preencher o e-mail."),
      subject: Yup.string()
        .min(10, "O assunto precisa ter no máximo 10 caracteres")
        .required("É preciso preencher o assunto."),
      message: Yup.string()
        .min(20, "A mensagem deve ter no mínimo 20 caracteres.")
        .required("É preciso preencher a mensagem."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputForm
        name="name"
        type="text"
        placeholder="Nome"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <Erro>{formik.errors.name}</Erro>
      ) : null}
      <InputForm
        name="tel"
        type="number"
        placeholder="Telefone"
        onChange={formik.handleChange}
        onKeyUp={(event) => telMask(event.target.value)}
        onBlur={formik.handleBlur}
        value={formik.values.tel}
      />
      {formik.touched.tel && formik.errors.tel ? (
        <Erro>{formik.errors.tel}</Erro>
      ) : null}
      <InputForm
        name="email"
        type="email"
        placeholder="E-mail"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <Erro>{formik.errors.email}</Erro>
      ) : null}
      <InputForm
        name="subject"
        type="text"
        placeholder="Assunto"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
      />
      {formik.touched.subject && formik.errors.subject ? (
        <Erro>{formik.errors.subject}</Erro>
      ) : null}
      <textarea
        name="message"
        type="submit"
        placeholder="Mensagem"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? (
        <Erro>{formik.errors.message}</Erro>
      ) : null}
      <button type="submit">Enviar Mensagem</button>
    </Form>
  );
}
