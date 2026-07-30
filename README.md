# FOCUS — v4

Jeu de concentration visuelle : repère le point jaune, suis-le des yeux pendant qu'il se fond
parmi les autres, puis désigne-le au bon moment. Mode **Solo** et mode **Multijoueur à
élimination progressive**, jouable depuis un téléphone ou une tablette.

by **twagirumukiza**

---

## 1. Installer le projet sur GitHub Pages (gratuit, sans serveur)

1. Crée un nouveau dépôt GitHub (public), par exemple `focus-game`.
2. Mets-y les fichiers de ce projet tels quels, à la racine :
   - `index.html`
   - `manifest.json`
   - `icon.svg`
   - `firebase-config.js`
   - `database.rules.json`
   - `README.md`
3. Dans le dépôt : **Settings → Pages**.
4. Sous "Build and deployment", choisis **Source: Deploy from a branch**, branche `main`, dossier `/root`.
5. Enregistre. Après 1 à 2 minutes, ton jeu sera en ligne à une adresse du type :
   `https://TON-PSEUDO-GITHUB.github.io/focus-game/`
6. Ouvre cette adresse depuis un téléphone ou une tablette : le jeu fonctionne directement
   dans le navigateur. Sur iOS/Android, tu peux utiliser "Ajouter à l'écran d'accueil"
   pour l'installer comme une app.

Le mode **Solo** fonctionne immédiatement, sans aucune configuration supplémentaire.

---

## 2. Activer le mode Multijoueur (Firebase, gratuit)

Le multijoueur a besoin d'une base de données en ligne pour synchroniser les joueurs en
temps réel. On utilise **Firebase Realtime Database** (offre gratuite "Spark", largement
suffisante pour jouer entre amis).

### Étapes

1. Va sur [https://console.firebase.google.com](https://console.firebase.google.com) et
   connecte-toi avec un compte Google.
2. Clique sur **Ajouter un projet**, donne-lui un nom (ex. `focus-game`), suis les étapes
   (tu peux désactiver Google Analytics, ce n'est pas nécessaire).
3. Une fois le projet créé, dans le menu de gauche : **Build → Realtime Database**.
4. Clique sur **Créer une base de données**. Choisis une région proche de toi, puis
   démarre en **mode test** (règles ouvertes temporairement).
5. Une fois la base créée, va dans l'onglet **Règles** de la Realtime Database, remplace
   le contenu par celui du fichier `database.rules.json` fourni dans ce projet, puis
   **Publier**.
6. Retourne dans **Paramètres du projet** (icône ⚙ en haut à gauche) → onglet
   **Général** → section **Vos applications**. Clique sur l'icône Web `</>`.
7. Donne un nom à l'application (ex. `focus-web`), pas besoin de configurer Firebase
   Hosting (on utilise déjà GitHub Pages). Clique sur **Enregistrer l'application**.
8. Firebase affiche un objet JavaScript `firebaseConfig` qui ressemble à ceci :
   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "focus-game-xxxx.firebaseapp.com",
     databaseURL: "https://focus-game-xxxx-default-rtdb.firebaseio.com",
     projectId: "focus-game-xxxx",
     storageBucket: "focus-game-xxxx.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef"
   };
   ```
9. Ouvre le fichier `firebase-config.js` de ton projet, et remplace les valeurs
   `"REMPLACE_MOI"` par les vraies valeurs copiées à l'étape précédente.
10. Enregistre, mets à jour ton dépôt GitHub (commit + push). GitHub Pages se met à jour
    automatiquement en une minute ou deux.

Le mode **Jouer en ligne** est maintenant fonctionnel : un joueur crée une partie et
obtient un code à 5 caractères (ou un lien à partager), les autres rejoignent avec ce
code depuis leur propre téléphone/tablette.

> ⚠️ Le mode "test" des règles Firebase laisse la base ouverte en lecture/écriture.
> C'est adapté à un petit jeu entre proches, mais ne mets jamais d'informations
> sensibles dans ce projet. Le fichier `database.rules.json` fourni limite déjà l'accès
> au seul chemin `rooms/`.

---

## 3. Règles du mode Multijoueur (élimination progressive)

1. L'hôte, sur l'écran **Créer une partie**, choisit :
   - le **nombre de points de départ**,
   - la **vitesse de départ**,
   - le **temps** à partir duquel les joueurs peuvent appuyer sur STOP pour désigner
     le point jaune.
2. L'hôte partage le **code** (ou le **lien d'invitation**) affiché dans la salle
   d'attente. Les autres joueurs rejoignent depuis leur appareil.
3. L'hôte lance la partie quand tout le monde est prêt (2 joueurs minimum).
4. Chaque manche est jouée en même temps par tous les joueurs encore en course.
5. Tout joueur qui désigne le mauvais point est **éliminé** ; la partie continue pour
   les autres.
6. À chaque manche, le nombre de points et la vitesse **augmentent progressivement**
   (le temps de préparation reste celui choisi au départ).
7. La partie se termine dès qu'il ne reste **plus qu'un seul joueur** : il remporte
   la partie. L'hôte peut relancer une nouvelle partie avec les mêmes joueurs depuis
   l'écran de fin.

---

## 4. Structure du projet

```
focus-game/
├── index.html            → tout le jeu (design, moteur solo, moteur multijoueur)
├── firebase-config.js     → tes clés Firebase (à remplir, voir section 2)
├── database.rules.json    → règles de sécurité à coller dans Firebase
├── manifest.json          → permet l'installation sur écran d'accueil (mobile/tablette)
├── icon.svg               → icône de l'application
└── README.md               → ce fichier
```

## 5. Limites connues (prévues pour une v5)

- Si l'hôte quitte une partie en cours, il n'y a pas encore de transfert automatique
  de l'hôte à un autre joueur.
- La synchronisation du départ de chaque manche se base sur l'horloge de chaque
  appareil (léger décalage possible si les horloges des téléphones sont mal réglées).
- Pas de reconnexion automatique après une coupure réseau en pleine manche.
