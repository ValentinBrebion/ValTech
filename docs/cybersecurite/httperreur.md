# Les erreurs HTTP

"Rooooohhh.. je suis encore tombé sur une 404 !". Ceci est la phrase d'une personne voulant accéder à une ressource mais celle-ci n'existe pas. Les erreurs peuvent être visible pour nous les utilisateurs ou bien par les développeurs mais comment les erreurs HTTP se produisent-elles et qu'elles sont-elles ? c'est ce que nous allons voir 😉

## Comprendre le fonctionnement des requêtes réseaux

<img src="https://media.discordapp.net/attachments/1035253366995030166/1273698160258060432/erreurHTTP.png?ex=66c18999&is=66c03819&hm=628f27936e0d8078202745d6041a22e76d8c370cf50dc673ade403c0604b212e&=&format=webp&quality=lossless&width=537&height=408" alt="image requêtes réseaux">

Prenons un cas d'exemple, vous êtes un utilisateur d'internet et vous recherchez la recette de la tarte aux pommes. Vous allez donc sur votre navigateur et vous cliquez sur le premier lien. Une fois sur la page vous naviguez à travers le site. Chaque clique représente en réalité une requête réseau envoyée depuis votre ordinateur vers le serveur ou est hébergé le site internet. Le serveur va traiter votre demande (on dit que vous intérrogez le serveur) et vous renvoi une réponse soit positive soit négative en fonction de la disponibilité de cette ressource. C'est de cette réponse que nous recevrons le code HTTP.

## Catégories de statut HTTP

Il existe en tout 5 catégories de statut HTTP :

::: info HTTP
**`1xx (Informationnel)`** : Ces codes indiquent que la requête a été reçue et que le processus est en cours. <br><br>
**`2xx (Succès)`**: Ces codes indiquent que la requête a été reçue, comprise et acceptée avec succès.<br><br>
**`3xx (Redirection)`** : Ces codes indiquent que le client doit effectuer une action supplémentaire pour que la requête soit complétée.<br><br>
**`4xx (Erreur du client)`** : Ces codes indiquent qu'une erreur s'est produite du côté du client (par exemple, une mauvaise requête).<br><br>
**`5xx (Erreur du serveur)`** :  Ces codes indiquent qu'une erreur s'est produite du côté du serveur alors qu'il tentait de traiter la requête.<br><br>
:::

## Les Codes d'Erreur HTTP les plus Courants
### 2xx : Succès
>1. `200 OK` : La requête a réussi, et le serveur a répondu avec la ressource demandée.

---
### 3xx : Redirection
>1. `301 Moved Permanently` : La ressource demandée a été déplacée de façon permanente à une nouvelle URL.
>2. `302 Found` : La ressource demandée a été trouvée, mais à une URL différente de celle demandée.

---
### 4xx : Erreurs du Client
>1. `400 Bad Request` : Le serveur ne peut pas traiter la requête en raison d'une syntaxe incorrecte.
>2. `401 Unauthorized` : L'authentification est requise pour accéder à la ressource.
>3. `403 Forbidden` : Le serveur a compris la requête, mais refuse de l'exécuter.
>4. `404 Not Found` : Le serveur n'a pas trouvé la ressource demandée à l'URL spécifiée.
>5. `405 Method Not Allowed` : La méthode HTTP utilisée n'est pas autorisée pour cette ressource.

---
### 5xx : Erreurs du Serveur
>1. `500 Internal Server Error` : Le serveur a rencontré une condition inattendue qui l'empêche de répondre à la requête.
>2. `502 Bad Gateway` : Le serveur a reçu une réponse invalide en tant que passerelle ou proxy.
>3. `503 Service Unavailable` : Le serveur n'est pas disponible pour traiter la requête, souvent en raison d'une surcharge ou d'une maintenance.
>4. `504 Gateway Timeout` : Le serveur, agissant en tant que passerelle ou proxy, n'a pas reçu de réponse en temps voulu de l'autre serveur en amont.

## Conclusion
Les erreurs HTTP fournissent des informations essentielles sur l'état de la communication entre le client et le serveur. Comprendre ces codes et savoir comment les gérer est fondamental pour le développement et la maintenance d'applications web robustes et performantes. Une bonne gestion des erreurs contribue à une meilleure expérience utilisateur et à une application plus fiable.