# Projet DEV4.3 – Application musicale avec Riot.js et Firebase

Ce projet a été réalisé dans le cadre du module R4.01/R4.A.10 du BUT Informatique (semestre 4).  
Il s'agit d'une application web permettant de rechercher des artistes et albums via l'API de Discogs et de gérer des listes de favoris.  
Le projet met l'accent sur l'utilisation de composants web avec Riot.js et de services Firebase pour l'authentification et la persistance des données.

## Démo en ligne

- Lien vers l’application hébergée sur le serveur dwarves : https://dwarves.iut-fbleau.fr/~brigitte/SAE_WEB_S4/
- Lien vers ce dépôt GitHub : https://github.com/WilfriedB27/SAE_WEB_S4
- Lien vers le sujet : https://grond.iut-fbleau.fr/monnerat/web_2024/src/branch/main/R4.01_R4.A.10

## Membres du groupe

- Julian Gallego
- Wilfried Brigitte

## Objectifs pédagogiques

- Développer une application web moderne en utilisant la notion de composants
- Utiliser une API externe (Discogs)
- Intégrer Firebase pour l'authentification et la base de données
- Structurer le code de manière modulaire et propre (MVC, composants réutilisables, communication entre composants)

## Technologies utilisées

- Riot.js – Framework basé sur les Web Components
- Firebase – Authentification et base de données temps réel
- Discogs API – Recherche de contenus musicaux
- HTML / CSS / JavaScript
- Riot Router – Pour la gestion des routes
- Git – Pour la gestion de version

## Fonctionnalités principales

- Recherche d’artistes, de releases et de masters via l’API Discogs
- Affichage des résultats et consultation détaillée
- Création de compte et authentification avec Firebase
- Ajout et suppression de favoris stockés sur Firebase
- Interface construite avec des composants réutilisables
- Gestion de la navigation via un système de routage

## Recommandations techniques

- Utilisation claire du pattern MVC
- Modularité du code (composants UI, composants fonctionnels)
- Mise en place d’un module pour les appels à Discogs et un autre pour Firebase
- Gestion propre de l’asynchronisme
- Communication entre composants via les propriétés ou un système d’événements

## Remarques

Le projet a été développé dans un contexte pédagogique. Il vise à appliquer les notions vues en cours et à maîtriser les outils modernes de développement web côté client.
