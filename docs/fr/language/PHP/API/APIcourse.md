---
next: 
    text: 'Histoire de Symfony'
    link: 'fr/language/PHP/Symfony/SymfonyHistory'
prev: 
    text: 'Cours API'
    link: 'fr/language/PHP/API/APIcourse'
---

# Les API

# 1.1. Qu'est-ce qu'une API ?
Définition : Une API (Application Programming Interface) est un ensemble de définitions et protocoles qui permet à différents logiciels de communiquer entre eux.

## 1.2. Rôle des APIs :

- Permettent à différentes applications d'échanger des données
- Facilite l'intégration de fonctionnalités externes
- Encourage la modularité dans le développement logiciel

## 1.3. Types d'APIs :

- API locale : Communication entre composants d'une même machine
- API Web : Communication via le web (HTTP/HTTPS)
- API tierces : Services externes (Google Maps, Twitter, etc.)
- API publiques : Accessibles à tous
- API privées : Usage interne à une organisation

### Exemples populaires :

- Google Maps API
- Twitter API
- Facebook Graph API
- Stripe API

# 1.2 Pourquoi les APIs sont-elles importantes ?

### Réutilisabilité :

Évite de réinventer la roue
Permet d'utiliser des services existants et éprouvés

### Interopérabilité :

Permet à différents systèmes de fonctionner ensemble
Indépendance technologique entre les systèmes

### Automatisation :

Automatise les tâches répétitives
Permet l'intégration de différents services

### Cas d'utilisation :

Commerce électronique (paiements, livraison)
Services financiers (virements, vérifications)
Jeux vidéo (authentification, classements)
Réseaux sociaux (partage, connexion)

# 1.3 Comment fonctionne une API ?
## Cycle de base :

- Le client envoie une requête
- Le serveur traite la requête
- Le serveur renvoie une réponse

## Protocoles :

- HTTP/HTTPS : Protocole de base du web
- WebSockets : Pour les communications en temps réel

## Méthodes HTTP :

- GET : Récupérer des données
- POST : Créer une nouvelle ressource
- PUT : Mettre à jour une ressource existante
- DELETE : Supprimer une ressource
- PATCH : Mettre à jour partiellement une ressource

## Format de données :

```json
{
  "id": 1,
  "nom": "John Doe",
  "email": "john@example.com"
}
```

## 2. Les APIs Web

### 2.1 Introduction aux APIs REST

Définition : REST (Representational State Transfer) est un style d'architecture pour les systèmes distribués.

## Principes REST :

- Sans état (stateless) : Chaque requête contient toutes les informations nécessaires
- Client-Serveur : Séparation claire des responsabilités
- Cacheable : Les réponses peuvent être mises en cache
- Interface uniforme : Utilisation cohérente des méthodes HTTP

## Exemple de routes REST :

```http
GET    /users          # Liste des utilisateurs
POST   /users          # Créer un utilisateur
GET    /users/1        # Détails d'un utilisateur
PUT    /users/1        # Mettre à jour un utilisateur
DELETE /users/1        # Supprimer un utilisateur
```

### 2.2. Introduction aux APIs SOAP

Définition : SOAP (Simple Object Access Protocol) est un protocole pour échanger des informations structurées.

## Différences avec REST :

- SOAP utilise XML, REST utilise principalement JSON
- SOAP a une structure plus rigide
- SOAP a des spécifications plus strictes

## Exemple de requête SOAP :

```http
<soap:Envelope>
  <soap:Body>
    <getUser>
      <id>1</id>
    </getUser>
  </soap:Body>
</soap:Envelope>
```

### 2.3. Les APIs GraphQL

Définition : Langage de requête pour les APIs qui permet aux clients de demander exactement les données dont ils ont besoin.

Avantages :

- Réduit le sur-échangé de données
- Permet d'obtenir plusieurs ressources en une seule requête
- Typage fort

## Exemple de requête GraphQL :

```http
{
  user(id: "1") {
    name
    email
    posts {
      title
      date
    }
  }
}
```

### 2.4. Authentification et Sécurité des APIs

Méthodes d'authentification :

- Clés API : Chaîne secrète pour identifier l'application
- JWT (JSON Web Tokens) : Jetons signés pour l'authentification
- OAuth 2.0 : Délégation d'autorisation

Bonnes pratiques de sécurité :

- Toujours utiliser HTTPS
- Valider et nettoyer les entrées
- Implémenter des limites de débit (rate limiting)
- Journaliser les accès et les erreurs

### 3. Utilisation d'une API

#### 3.1. Consommer une API avec un langage de programmation

En Python avec requests :

```python
import requests

# Requête GET
response = requests.get('https://api.example.com/users')
users = response.json()

# Requête POST
new_user = {'name': 'John', 'email': 'john@example.com'}
response = requests.post('https://api.example.com/users', json=new_user)
```

En JavaScript avec axios :
```js
// Requête GET
axios.get('https://api.example.com/users')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

// Requête POST
axios.post('https://api.example.com/users', {
    name: 'John',
    email: 'john@example.com'
  })
  .then(response => console.log(response.data));
```

#### 3.2. Manipulation des données d'une API
Traitement des réponses JSON :

```python
import json

# Charger du JSON
data = '{"name": "John", "age": 30}'
user = json.loads(data)

# Accéder aux données
print(user['name'])  # John

# Convertir en JSON
user_json = json.dumps(user)
```

#### 3.3. Outils de test d'API
Postman :

Interface graphique pour tester les API
Permet d'enregistrer et d'organiser les requêtes
Supporte l'automatisation des tests
cURL :

```bash
# Requête GET
curl https://api.example.com/users

# Requête POST
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}' \
  https://api.example.com/users
```

### 4. Création d'une API
#### 4.1. Les bases de la création d'une API
Choix technologiques :

Python : Flask, FastAPI, Django REST framework
JavaScript/Node.js : Express, NestJS
Java : Spring Boot
PHP : Laravel, Lumen

Structure de base d'un projet API :

```http
mon-api/
├── app/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
├── config/
├── tests/
├── .env
└── app.js
```

#### 4.2. Développement d'une API RESTful simple avec Express.js

```js
const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Base de données en mémoire
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

// GET /users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Utilisateur non trouvé');
  res.json(user);
});

// POST /users
app.post('/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.status(201).json(user);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

```

#### 4.3. Documentation de l'API
Outils de documentation :

Swagger/OpenAPI : Standard pour documenter les APIs REST
Postman : Création de documentation interactive
Redoc : Génération de documentation à partir d'OpenAPI
Exemple de documentation avec OpenAPI :

```http
openapi: 3.0.0
info:
  title: API Utilisateurs
  version: 1.0.0
paths:
  /users:
    get:
      summary: Retourne la liste des utilisateurs
      responses:
        '200':
          description: Liste des utilisateurs
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
      required:
        - id
        - name
```

#### 5. Bonnes pratiques et Performance

#### 5.1. Optimisation des APIs
Mise en cache :

```http
# En-têtes de cache
Cache-Control: public, max-age=3600
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Pagination:
```json
{
  "data": [...],
  "pagination": {
    "total": 100,
    "count": 10,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 10
  }
}
```

#### 5.2. Gestion des erreurs
Codes d'état HTTP courants :

- 200 OK - Requête réussie
- 201 Created - Ressource créée
- 400 Bad Request - Requête mal formée
- 401 Unauthorized - Authentification nécessaire
- 403 Forbidden - Accès refusé
- 404 Not Found - Ressource non trouvée
- 500 Internal Server Error - Erreur serveur
Format d'erreur standard :

```json
{
  "error": {
    "code": "INVALID_EMAIL",
    "message": "L'adresse email fournie est invalide",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  }
}
```

#### 5.3. Mise en production
Gestion des versions :

```http
https://api.example.com/v1/users
https://api.example.com/v2/users
```

#### 5.4. Surveillance :

## Métriques de performance

- Taux d'erreur
- Temps de réponse
- Utilisation du CPU/mémoire

## Outils de surveillance :

- Prometheus
- Datadog
- New Relic
- Sentry

## Conclusion
Les APIs sont devenues essentielles dans le développement logiciel moderne. Elles permettent à différentes applications de communiquer et de partager des données de manière standardisée. Que vous consommiez des APIs existantes ou que vous en créiez de nouvelles, comprendre les concepts fondamentaux et les bonnes pratiques vous permettra de développer des applications plus robustes, évolutives et maintenables.

N'oubliez pas que la sécurité, la documentation et la performance sont des aspects cruciaux lors du développement d'APIs. Prenez le temps de bien concevoir votre API avant de commencer l'implémentation, et n'hésitez pas à vous inspirer des standards de l'industrie.