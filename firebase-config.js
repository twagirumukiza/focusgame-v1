/* =========================================================
   FOCUS — configuration Firebase (multijoueur)
   =========================================================
   Ce fichier contient les clés de TON projet Firebase.
   Elles ne sont pas secrètes (elles sont visibles côté client
   de toute façon) mais servent à identifier TA base de données.

   COMMENT REMPLIR CE FICHIER :
   1. Va sur https://console.firebase.google.com
   2. Crée un projet gratuit (plan "Spark").
   3. Dans le projet : Build > Realtime Database > Créer une base
      (choisis "Démarrer en mode test").
   4. Dans les paramètres du projet (icône ⚙ > Paramètres du projet),
      section "Vos applications", ajoute une application Web (</>).
   5. Copie l'objet de config qu'il te donne et colle-le ci-dessous,
      à la place de l'objet d'exemple.
   6. Applique les règles du fichier database.rules.json fourni
      dans ce projet (onglet "Règles" de la Realtime Database).

   Voir README.md pour le détail pas-à-pas.
   ========================================================= */

window.FOCUS_FIREBASE_CONFIG = {
  apiKey: "REMPLACE_MOI",
  authDomain: "REMPLACE_MOI.firebaseapp.com",
  databaseURL: "https://REMPLACE_MOI-default-rtdb.firebaseio.com",
  projectId: "REMPLACE_MOI",
  storageBucket: "REMPLACE_MOI.appspot.com",
  messagingSenderId: "REMPLACE_MOI",
  appId: "REMPLACE_MOI"
};
