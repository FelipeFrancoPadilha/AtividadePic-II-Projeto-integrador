. Cupcake Mani (app) - Projeto Integrador PIC II - Engenharia de Software 

![Status](<https://img.shields.io/badge/status-Projeto%20Concluído%20(SP3)-brightgreen>)
![Documentation](https://img.shields.io/badge/documentation-v2.0-blue)
![Java](https://img.shields.io/badge/Java-21-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3-green)
![React](https://img.shields.io/badge/React-TS%20+%20Vite-cyan)
![MySQL](https://img.shields.io/badge/Database-MySQL-orange)

.  Links do projeto

   -Vídeo explicativo
  - E-mail: cupcakeloja@123
  - Senha: cupcake123

. Informações do projeto

O aplicativo de cupcake tem como  objetivo a exposição e venda virtual desses mini bolos adorados e difundidos por todo o mundo, de forma que o cliente tenha total acesso e visualização do que irá adquirir

 . Testes

 Testes de Integração (Backend)
Em conformidade com as boas práticas de desenvolvimento e para assegurar a integridade da API, foram desenvolvidos Testes de Integração para as camadas de Controller e Repository. Estes testes garantem que os endpoints da API e a comunicação com o banco de dados estão funcionando corretamente no contexto da aplicação.
As classes de teste implementadas estão localizadas no diretório /backend/src/test/java do repositório e incluem:
ProdutoControllerIT.java (5 testes): Focados na verificação dos endpoints REST de produtos (listagem, busca por ID) utilizando MockMvc.
ClienteRepositoryTest.java (3 testes): Focados na camada de persistência, verificando operações CRUD e consultas personalizadas de clientes.
AuthServiceIT.java (2 testes): Focados na integração do serviço de autenticação com o Spring Security e a geração de JWT.
Total de Testes: 10
Resultado: Todos os 10 testes de integração e persistência foram executados com sucesso utilizando o comando ./mvnw test, confirmando a correta comunicação entre as camadas da aplicação (Controller, Service, Repository) e a funcionalidade dos principais fluxos da API.

Testes FrontEnd - Conforme foi solicitado, os teste com 5 amigos foram anexados junto ao arquivo word na plataforma do curso

 
 Novas Funcionalidades

De acordo com o pedido desse semestre foram feitas melhorias de algumas funcionalidades:

- botão recuperação de senha.
- Descrição completa dos cupcakes de cada sabor
- Foi incluido informações nutricionais e alergênicos em cada sabor de cupcake, visando dar maior informações para o cliente
- Na parte superior da tela foi incluida a aba "quem somos" visando uma maior idetificação cliente/empresa
- Adicionado o campo "informações adionais" na parte de checkou

. Tecnologias Utilizadas

  - Backend:
  - Linguagem: Java 21
  - Framework: Spring Boot 3
  - Segurança: Spring Security com JWT (JSON Web Tokens)
  - Persistência: Spring Data JPA / Hibernate
  - Build: Maven
-   Frontend: 
  - Framework: TypeScript
  - Build Tool: Vite
  - Estilização: Tailwind CSS
-  Banco de Dados:MySQL 8
-   Hospedagem:
  - Backend: Render.com (Serviço Web Dockerizado)
  - Frontend: Vercel
  - Database: Aiven (MySQL)


. Metodologia e Ferramentas

Este projeto foi desenvolvido utilizando a stack de código **Tradicional** (Java/React), conforme classificado no `PIT_atividade.docx`. O código-fonte base do frontend (React/TypeScript) foi gerado inicialmente com o auxílio do Google AI Studio e, em seguida, foi inteiramente refatorado, adaptado e integrado manualmente com a API backend (Java/Spring Boot) para atender aos requisitos da `Especificacao_Agil_Cupcake_App_v2.docx`.


Aluno

- Nome: Felipe Franco Padilha
- RGM: 22943935
- **Curso:** Engenharia de Software
- **Instituição:** Universidade Positivo
