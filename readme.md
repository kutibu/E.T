# Projet de Test Automitsés 

Nous avons mis en place une API de créaction et suppression de contact en REST à l'aide du language NodeJS

**Framework:** ExpressJS

**BDD:** MongoDB, NoSQL

Les composant que nous avons installé :

**Test unitaire:** Jest

**Test API:** Cucumber

&nbsp;

## Test d'ajout d'un contact

Nous allons devoir tester si les valeurs entrée lors de l'ajout d'un contact sont correcte par rapport aux partitions ci-dessous :

| Partitions Valides | Partitions invalides |
| - | - |
| Nom: Alphabet | Chiffres, caractères spéciaux |
| Prénom: Alphabet | Chiffres, caractères spéciaux |
| Date de Naissance: >= 16 ans | < 16 ans |
| Adresse Postal:  | - |
| Adresse Mail:  | - |
| Numéro Téléphone: Chiffres | Caractères spéciaux, Alphabet |

&nbsp;

## Configuration du projet

&nbsp;

1. Installer node_module `npm init`
2. Installer MongoDb `npm install mongodb --save`
3. Installer Mongoose `npm install mongoose`
4. Installer Jest `npm install jest`
5. Installer Cucumber `npm install -g cucumber`
6. Configurer Cucumber `npm install --save-dev cucumber`
7. Installer Selenium Web Driver `npm install selenium-webdriver`
8. Installer chromedriver `npm install -g chromedriver`

&nbsp;

## Configuration de la base de donnée

&nbsp;

1. Nous avons utiliser une BDD en MongoDB, les schéma de la table contact sont dans le projet.

2. Il faut créer une base de donnée MongoDB sur [MongoDB](https://www.mongodb.com/cloud/atlas).

3. Il vous faudra crée un compte et créer un cluster.

4. Cliquer sur connect et suivez les étapes.

5. Choisissez **Connect your application** et copier le code.

6. Remplacer la ligne 9 de **index.js** par votre code que vous venez de copier.

7. Il vous suffit juste de lancer le projet et cela créera la table contact.
 
&nbsp;

******************

&nbsp;

Etudiant du groupe : 

- Benoit Peutevynck
- Damien Noblet
- Ryan Teffahi
- Florian Broeks
- Boubacar Hama Daouda
