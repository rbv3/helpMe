# HelpMe Front

Projeto de ESS

## Cs tao prontos?

Galera, so rodar as paradas a partir daqui e ver o que rola (espero que role tudo direito)

### Pre-requisitos

Coisas que voces vao ter que ter

```
Ionic
NodeJS
NPM
Um editor de texto
```

### Instalação

Como colocar as coisas
Comecem instalando o famoso NPM
Para Ubuntu:

Instalando nodejs:
```
sudo apt update
sudo apt install nodejs
//testando a versao pra ver se rolou tudo certo
nodejs --version

```
Agora Instalando o npm:
```
sudo apt install npm
//testando a versao pra ver se rolou tudo certo
npm --version
```
Show, agora vamo instalar o ionic
```
npm install -g ionic
```
Agora vocês vao pra a pasta do projeto, la dentro vcs usam um
```
npm install
```
Este comando irá instalar todos os pacotes q estao no nosso package.json, estes que sao necessarios para nosso projetinho rodar
## Rodando o projeto

Para rodar o projeto basta estar na pasta e mandar um
```
ionic serve
```
no terminal e SHOW DE BOLA, ele vai abrir uma aba no navegador padrao no http://localhost:8100/

###Observações
1. Existe um .gitignore que impede com que algumas pastas sejam adicionas no git add, sendo assim, a pasta node_modules (q é enorme) não vai ser adicionada por padrão.
2. Caso queria instalar um novo pacote, lembrar de colocar a tag --save, ex.:
```
npm install <packageName> --save
```
3. Lembrar sempre de adicionar suas mudanças, mas cuidado ao dar 
```git add .
```
Este comando pode adicionar mais coisas do que você deseja
4. PELA MISERICORDIA, sejam profissionais ao escrever seus commits, precisamos ter um log bem estruturado para mantermos um bom trabalho em equipe

