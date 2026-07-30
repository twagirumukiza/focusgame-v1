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

const firebaseConfig = {
  apiKey: "AIzaSyBG6oid29bMq8GVvBkNvPtSDZTRO5K09uk",
  authDomain: "focus-game-1c7ee.firebaseapp.com",
  databaseURL: "https://focus-game-1c7ee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "focus-game-1c7ee",
  storageBucket: "focus-game-1c7ee.firebasestorage.app",
  messagingSenderId: "856695121197",
  appId: "1:856695121197:web:cfc0d876ba9d1885499fa4"
};
