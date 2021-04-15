#PROJET ANGULAR ASSIGNMENT GROUPE-19
RAMANANTSOA kevin allain 32, Andy Randrianirina 43

# AssignmentApp

Ce repository contient tout les codes sources de l'application frontend :
- une page de login pour pouvoir éditer, ajouter et supprimer
- une page d'inscription si vous n'avez pas encore de compte
- Un menu pour gérer les assignments

# Installation BackEnd
- Cloner le repository https://github.com/AndyRand/mbds-tp-angular
- Ouvrir un terminal(DoS) depuis l'emplacement du backend sur votre local
- lancer npm install
- lancer node server.js

# Installation FrontEnd
- Cloner le repository https://github.com/AndyRand/mbds-tp-angular-front
- Ouvrir un terminal(DoS) depuis l'emplacement du frontend sur votre local
- lancer npm install
- lancer ng serve

# Général 
Sur le site,sans que vous soyez connécter vous pouvez regarder ceux qu'il y a dedans : 
- regarder la liste des étudiants et les devoirs 
- regarder les détails

Mais vous pourriez pas ajouter ni éditer et surtout supprimer des assignments sans vous loger
Quand vous clocker sur "Editer" par exemple vous êtes automatiquement rediriger vers la page de login :
- Vous entrez vôtre login et mot de passe si voues en avez 
- Vous vous enregistrez en cliquant sur "Sign up"
- Ou tout simplement vous vous connectez avec votre login "Google"

# Liste des Assignments
Deux onglets contenant respectivement :
- Une liste des assignments rendus avec pagination
- Une liste des assignments non rendus avec pagination

# Ajout d'un assignment 
Clicker sur le menu "Gestion Assignment" : 
- vous aurez un side bar ou vous trouverez 2 bouttons (Ajouter un assignments et pleuplerBD)
- l'ajout d'un assignment c'est l'ajout d'un tout nouveau assignemnt
- peuplerBD pour l'ajout des donner

# Add assignemnt
Dans l'ajout un assignment, vous avez un champ de formulaire : 
- nom du devoir à rendre
- une liste déroulante pour séléctionner l'éléve ayant ce devoir
- une liste déroulante avec le nom du professeur avec qui il a le devoir auquel est rattacher le nom de matiére en question ( c'est le/la professeur qui posséde la matiére)
- un champ Date avec date picker pour le choix de la date du devoir rendu ou pas

Détails d'un assignment en cliquant sur un élément de la liste
- Rendre un devoir en cochant rendu

Suppression d'un assignment

