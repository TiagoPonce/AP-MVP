# AP-MVP
Desenvolvendo teste para liderancas

## Rodar o Projeto :

Frontend:

npm install
npm run dev

BackEnd:

- Instalar o docker-compose
- docker-compose up -d    -> Subir o banco de dados no docker postgres 
- npx prisma db push     -> roda migratioon
- npx prisma db seed     -> roda o seeds. (popular banco de dados)

Para ver o banco de dados:
- npx prisma studio (interface do prisma)

