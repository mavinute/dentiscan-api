# 🦷 Dentiscan API  
**SaaS para Gestão e Diagnóstico de Radiografias Odontológicas**

Backend desenvolvido em **Node.js + TypeScript**, com foco em **segurança, multi-tenant, rastreabilidade de fluxo clínico** e base sólida para integração futura com **IA para diagnóstico radiográfico**.

---

## 📌 Visão Geral

O Dentiscan permite que:

- **Clínicas odontológicas (Clínica A)** solicitem exames radiográficos para  
- **Clínicas radiográficas (Clínica B)**, que realizam o exame, fazem o upload da radiografia e devolvem o resultado.
- A clínica solicitante pode **visualizar e acessar a radiografia** dentro da plataforma.

O sistema foi projetado com:
- Controle rigoroso de estados
- Autenticação JWT
- Isolamento de dados entre clínicas (multi-tenant)
- Arquitetura limpa e escalável

---

## 🧱 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- JWT (jsonwebtoken)
- bcryptjs
- Multer (upload de arquivos)
- dotenv

---

