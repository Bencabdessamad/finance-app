# 💰 FinanceHome - Application de Gestion Financière (PWA) 🇲🇦

Une Progressive Web App élégante et complète pour gérer vos finances domestiques en **Dirham Marocain**, installable sur iPhone via Safari sans passer par l'App Store.

## ✨ Fonctionnalités

### 📊 Dashboard Interactif
- Vision globale de votre situation financière
- Solde actuel, revenus totaux et dépenses totales
- Statistiques mensuelles et moyennes
- Graphiques d'évolution mensuelle et annuelle
- Répartition des dépenses par catégorie

### 💳 Gestion des Transactions
- Ajout facile de revenus et dépenses
- Catégorisation automatique
- Historique complet des transactions
- Interface intuitive avec icônes

### 📈 Rapports Mensuels
- Vue détaillée mois par mois
- Total des revenus par mois
- Total des dépenses par mois
- Solde mensuel (positif/négatif)
- Historique sur 12 mois

### 🔒 Données Locales & Offline
- Stockage 100% local avec IndexedDB
- Fonctionne entièrement hors ligne
- Aucune donnée envoyée sur Internet
- Confidentialité totale

## 📱 Installation sur iPhone

### Étape 1 : Héberger l'Application
Vous devez d'abord héberger les fichiers sur un serveur web avec HTTPS. Options :

**Option A : GitHub Pages (Gratuit)**
1. Créez un repository GitHub
2. Uploadez tous les fichiers du projet
3. Activez GitHub Pages dans Settings → Pages
4. Votre URL sera : `https://votre-nom.github.io/nom-du-repo/finance-app.html`

**Option B : Netlify/Vercel (Gratuit)**
1. Créez un compte sur Netlify ou Vercel
2. Glissez-déposez le dossier du projet
3. Obtenez votre URL automatiquement

**Option C : Serveur Personnel**
- Placez les fichiers sur votre serveur avec HTTPS activé

### Étape 2 : Générer les Icônes
1. Ouvrez `create-icons.html` dans un navigateur
2. Les icônes `icon-192.png` et `icon-512.png` se téléchargeront automatiquement
3. Placez-les dans le même dossier que `finance-app.html`

### Étape 3 : Installer sur iPhone
1. Ouvrez Safari sur votre iPhone
2. Allez sur votre URL (ex: `https://votre-nom.github.io/...`)
3. Appuyez sur le bouton **Partager** (⎋)
4. Sélectionnez **"Sur l'écran d'accueil"**
5. Confirmez le nom et appuyez sur **Ajouter**

✅ L'application apparaît maintenant comme une app native sur votre écran d'accueil !

## 🎨 Design & Interface

### Esthétique
- Design minimaliste élégant et moderne
- Palette inspirée des applications bancaires premium
- Typographies sophistiquées (Playfair Display + DM Sans)
- Dégradés subtils et effets de profondeur
- Interface sombre optimisée pour l'OLED

### Expérience Utilisateur
- Navigation fluide et intuitive
- Animations douces et naturelles
- Feedback visuel sur chaque interaction
- Interface 100% responsive
- Optimisé pour les écrans iPhone

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec animations
- **JavaScript (Vanilla)** : Logique applicative
- **Dexie.js** : Interface simplifiée pour IndexedDB
- **Chart.js** : Graphiques interactifs et élégants
- **Service Worker** : Fonctionnement offline

## 💰 Devise : Dirham Marocain (MAD)

L'application est configurée pour la devise **Dirham Marocain (DH)** :
- Format : `1.234,56 DH`
- Locale : Arabe marocain (ar-MA)
- Symbole : DH (au lieu de MAD)
- Catégories adaptées au contexte marocain

## 📂 Structure des Fichiers

```
finance-app/
├── finance-app.html      # Application principale
├── manifest.json         # Configuration PWA
├── sw.js                 # Service Worker
├── icon-192.png         # Icône 192x192
├── icon-512.png         # Icône 512x512
├── create-icons.html    # Générateur d'icônes
└── README.md            # Documentation
```

## 💾 Stockage des Données

Les données sont stockées localement dans IndexedDB via Dexie.js :

### Structure de la Base de Données
```javascript
{
  id: auto-increment,
  type: 'income' | 'expense',
  amount: number,
  category: string,
  description: string,
  date: 'YYYY-MM-DD',
  createdAt: ISO timestamp
}
```

### Catégories Prédéfinies

**Revenus :**
- Salaire Principal
- Salaire Secondaire
- Freelance
- Commerce
- Investissements
- Loyers
- Transferts
- Remboursements
- Autres Revenus

**Dépenses :**
- Loyer
- LYDEC/RADEEMA (services publics)
- Électricité, Eau
- Internet/Téléphone
- Gaz Butane
- Alimentation
- Transport, Carburant
- Assurances
- Santé/CNSS
- Éducation
- Hammam/Coiffeur
- Loisirs
- Cafés/Restaurants
- Shopping
- Zakat/Sadaqa
- Autres Dépenses

## 📊 Fonctionnalités des Graphiques

### Graphique Mensuel (Ligne)
- Évolution des revenus (vert)
- Évolution des dépenses (rouge)
- Vue sur 6 mois ou 12 mois
- Lissage des courbes pour meilleure lisibilité

### Graphique de Catégories (Donut)
- Répartition des dépenses du mois en cours
- Top 8 catégories
- Couleurs distinctives
- Pourcentages automatiques

## 🔄 Mode Offline

L'application fonctionne **entièrement hors ligne** grâce au Service Worker :
- Mise en cache des ressources essentielles
- Stratégie Network First, puis Cache
- Page d'erreur élégante si ressource non disponible
- Synchronisation automatique quand la connexion revient

## 🚀 Utilisation

### Ajouter une Transaction
1. Appuyez sur le bouton **+** flottant
2. Choisissez le type (Revenu/Dépense)
3. Remplissez le formulaire :
   - Montant en dirhams (DH)
   - Catégorie
   - Description
   - Date
4. Cliquez sur **Ajouter la Transaction**

### Consulter le Dashboard
- **Solde actuel** : Affichage en temps réel
- **Statistiques** : Mois en cours et moyenne mensuelle
- **Graphiques** : Évolutions et répartitions
- **Transactions récentes** : 5 dernières opérations

### Voir les Rapports
- Naviguez vers l'onglet **Rapports**
- Consultez chaque mois individuellement
- Vérifiez revenus, dépenses et solde mensuel

## 🎯 Avantages de cette PWA

✅ **Pas d'App Store** : Installation directe via Safari  
✅ **Gratuit** : Aucun frais de développement ou de publication  
✅ **Privé** : Vos données restent sur votre appareil  
✅ **Offline** : Fonctionne sans Internet  
✅ **Léger** : Très peu d'espace de stockage  
✅ **Updates** : Mises à jour automatiques  
✅ **Cross-platform** : Fonctionne sur Android aussi  

## 🔐 Confidentialité & Sécurité

- **100% local** : Aucune donnée n'est envoyée sur Internet
- **Pas de tracking** : Aucun cookie, aucune analyse
- **Pas de compte** : Pas d'inscription nécessaire
- **Contrôle total** : Vous gérez vos données
- **RGPD compliant** : Aucune donnée personnelle collectée

## 🌐 Compatibilité

### Navigateurs Supportés
- ✅ Safari (iOS 13+) - **Recommandé pour iPhone**
- ✅ Chrome (Android/Desktop)
- ✅ Edge (Desktop)
- ✅ Firefox (Desktop)

### Appareils Testés
- iPhone (iOS 13+)
- iPad (iPadOS 13+)
- Smartphones Android
- Tablettes Android

## 📝 Notes Importantes

### Installation sur iPhone
- L'installation via Safari est **obligatoire** (pas Chrome)
- Nécessite HTTPS (pas de HTTP simple)
- L'icône peut prendre quelques secondes à apparaître

### Sauvegarde des Données
Les données sont stockées localement dans le navigateur :
- Elles persistent entre les sessions
- Elles sont préservées après redémarrage
- ⚠️ Elles peuvent être perdues si vous supprimez les données du navigateur

**Recommandation** : Pensez à exporter régulièrement vos données (fonctionnalité à venir)

## 🆕 Évolutions Futures Possibles

- [ ] Export/Import des données (CSV, JSON)
- [ ] Objectifs budgétaires mensuels
- [ ] Notifications de rappel
- [ ] Recherche et filtres avancés
- [ ] Thème clair/sombre
- [ ] Multi-devises
- [ ] Récurrence automatique de transactions
- [ ] Backup cloud optionnel (Google Drive, Dropbox)

## 🐛 Résolution de Problèmes

### L'app ne s'installe pas
- Vérifiez que vous utilisez **Safari** (pas Chrome)
- Assurez-vous que l'URL est en **HTTPS**
- Videz le cache de Safari et réessayez

### Les données disparaissent
- Ne supprimez pas les données de Safari
- Ne désinstallez pas complètement l'app
- Vérifiez l'espace de stockage disponible

### Les graphiques ne s'affichent pas
- Vérifiez votre connexion Internet (première fois)
- Rechargez la page
- Videz le cache et rechargez

## 📧 Support

Pour toute question ou suggestion :
- Ouvrez une issue sur GitHub
- Consultez la documentation
- Contribuez au projet !

## 📜 Licence

Ce projet est libre et open-source. Vous pouvez :
- L'utiliser gratuitement
- Le modifier selon vos besoins
- Le distribuer à d'autres utilisateurs
- Contribuer au code source

## 🎉 Conclusion

FinanceHome est une solution complète, élégante et respectueuse de la vie privée pour gérer vos finances personnelles. Profitez d'une app native sur iPhone sans passer par l'App Store, avec toutes vos données en sécurité sur votre appareil.

**Bonne gestion financière ! 💰📊**