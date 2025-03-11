# Création de Composants HTML pour CODESYS

Ce projet fournit un modèle (template) pour faciliter la création de composants HTML personnalisés pour être utilisés dans CODESYS. Il inclut une structure de fichiers de base et des outils pour simplifier le processus de développement.

## Structure du Projet

Le modèle contient les fichiers suivants :

* **`init.js` :** Un script Node.js qui vous guide à travers le processus de création d'un nouveau composant en vous demandant de saisir le nom du composant, puis renomme et adapte le contenu des fichiers templates.
* **`styles.css` :** La feuille de style source, utilisée comme entrée pour Tailwind CSS.
* **`tailwind.config.js` :** Un fichier de configuration pour Tailwind CSS, définissant les options de personnalisation et les paramètres du framework.
* **`postcss.config.js` :** Un fichier de configuration pour PostCSS, un outil utilisé pour transformer les styles CSS.
* **`package.json` :** Le fichier de configuration de Node.js pour le projet. Il contient des informations sur les dépendances, les scripts et les paramètres du projet.
* **`hai-template-component.css` :** Une feuille de style CSS pour le composant, générée par votre script de développement (Tailwind CSS).
* **`hai-template-component.html5control.xml` :** Un fichier XML crucial pour CODESYS. Il décrit les propriétés, les événements et le comportement du composant HTML dans l'environnement CODESYS.
* **`hai-template-componentImage.svg` :** Une image SVG représentant l'icône ou le rendu visuel du composant.
* **`hai-template-componentTexts.csv` :** Un fichier CSV contenant les textes (libellés, messages, etc.) associés au composant, probablement pour la gestion des langues ou la configuration.
* **`hai-template-componentWrapper.js` :** Un fichier JavaScript qui fait l'intermédiaire entre l'environnement CODESYS et le composant HTML. Il gère les interactions, les mises à jour et la logique du composant.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

* **Node.js et npm :** Pour exécuter les scripts et gérer les dépendances.
* **CODESYS :** Pour tester et utiliser vos composants.

## Utilisation

1.  **Clonez ce dépôt :**

    ```bash
    git clone <URL_du_dépôt>
    cd <nom_du_dépôt>
    ```

2.  **Installez les dépendances :**

    ```bash
    npm install
    ```

3.  **Créez un nouveau composant :**

    ```bash
    npm run init
    ```

    Suivez les instructions à l'invite de commande pour saisir le nom de votre composant.

4.  **Développez votre composant :**

    * Modifiez les fichiers CSS, JavaScript, CSV et SVG selon vos besoins.
    * Adaptez le fichier `.html5control.xml` pour définir les propriétés et le comportement de votre composant dans CODESYS.

5.  **Utilisez le composant dans CODESYS :**

    * Importez le fichier `.html5control.xml` dans CODESYS.
    * Utilisez votre composant dans vos projets CODESYS.

## Scripts npm

* **`npm run init` :** Crée un nouveau composant en demandant à l'utilisateur de saisir son nom.
* **`npm run dev` :** Lance Tailwind CSS en mode watch pour le développement des styles CSS.

## Personnalisation

* Adaptez le script `init.js` pour personnaliser le processus de création de composants.
* Modifiez les fichiers modèles pour créer des composants avec des fonctionnalités différentes.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir des issues ou à soumettre des pull requests.

## Licence

[Votre Licence]
