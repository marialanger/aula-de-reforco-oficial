// Substitua pelos seus dados do EmailJS
const SERVICE_ID = 'service_oj37rjg';
const TEMPLATE_ID = 'template_6ub31hh';
const PUBLIC_KEY = 'MWfgTyfqPFkuheA9v';

emailjs.init(PUBLIC_KEY);

document.getElementById("form-agendamento").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
    .then(() => {
      document.getElementById("mensagem-status").textContent = "Agendamento enviado com sucesso!";
      this.reset();
    }, (error) => {
      document.getElementById("mensagem-status").textContent = "Erro ao enviar. Tente novamente.";
      console.error("Erro:", error);
    });
});
