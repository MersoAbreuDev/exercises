# Guia de Utilização do Projeto NestJS

Este guia te orientará sobre como configurar, rodar e testar as funcionalidades deste projeto em NestJS.

---

## **Passos para começar**

### **1. Clonar o projeto**
Faça o clone do repositório para sua máquina local utilizando o comando:

```bash
git clone <URL_DO_REPOSITORIO>
2. Instalar as dependências
Após clonar o repositório, navegue até o diretório do projeto e instale as dependências necessárias com o comando:

bash
npm install

3. Rodar o projeto no modo de desenvolvimento
Para iniciar o servidor no modo de desenvolvimento, utilize o comando:

bash
npm run start:dev
Se tudo estiver correto, o servidor será iniciado em http://localhost:3000.

Testando os Endpoints
1. Exercício 1
Endpoint para calcular o valor da soma descrito no exercício 1.

URL:
Copiar código
http://localhost:3000/exercicio/1

2. Exercício 2
Endpoint para verificar se um número pertence à sequência de Fibonacci.
URL:
http://localhost:3000/exercicio/2?numero=<VALOR>
Exemplo: http://localhost:3000/exercicio/2?numero=5
Substitua <VALOR> pelo número desejado.

3. Exercício 3
Endpoint para calcular os valores de faturamento mensal (menor valor, maior valor e dias acima da média).
URL:
http://localhost:3000/exercicio/3

4. Exercício 4
Endpoint para calcular os percentuais de faturamento por estado.
URL:
http://localhost:3000/exercicio/4

5. Exercício 5
Endpoint para inverter os caracteres de uma string.
http://localhost:3000/questao5?texto=<TEXTO>
Exemplo:
Substitua <TEXTO> pela string desejada.
http://localhost:3000/exercicio/5?texto=exemplo

Testando um endpoint no navegador

Notas
Certifique-se de que a porta 3000 não esteja ocupada por outro serviço.
Para quaisquer dúvidas ou problemas, entre em contato com o administrador do projeto.
