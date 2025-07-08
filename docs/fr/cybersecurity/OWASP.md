---
next: 
    text: 'Introduction aux erreurs HTTP'
    link: 'fr/cybersecurity/httperror'
prev: false
---

# les règles d'OWASP 2021 🛡️

## OWASP c'est quoi ❓
*L'OWASP (Open Web Application Security Project) est une communauté mondiale dédiée à l'amélioration de la sécurité des applications web et des logiciels. Fondée en 2001, l'OWASP fournit des ressources, des outils et des conseils aux développeurs, aux professionnels de la sécurité et aux organisations pour les aider à comprendre et à relever les défis liés à la sécurité des applications.*


<br/>

# Les 10 règles d'OWASP de 2021 ❗

## 1️⃣- A01:2021 - Contrôle d'accès défaillants <a href="https://owasp.org/Top10/fr/A01_2021-Broken_Access_Control/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning En-tête
Anciennement à la 5ème place, le contrôle d'accès implique la vérification des droits qu'un utilisateur peut avoir sur une application. Si celle-ci est omis alors les conséquences impacteront non seulement la société entrainant une perte de confiance des utilisateurs mais aussi elles conduiront à la **modification** ou la **destruction** d'informations non autorisées de toutes les données ou l'éxecution d'une fonctionnalité métier en dehors des limites de l'utilisateur.
:::

## 1️⃣ - <u>Exemples de vulnérabilités courantes contrôle d'accès</u> 

::: danger <u>Exemples</u>
<li>
<b>Autoriser l'affichage ou la modification du compte de quelqu'un d'autre, en fournissant son identifiant unique (références directes d'objet non sécurisées).</b>
</li>
<br/>
<li>
<b>Accès à l'API avec des contrôles d'accès manquants pour POST, PUT et DELETE.</b>
</li>
<br/>
<li>
<b>Forcer la navigation vers des pages authentifiées en tant qu'utilisateur non authentifié ou vers des pages privilégiées en tant qu'utilisateur standard.</b>
</li>
<br />
<li>
<b>Élévation de privilège. Agir en tant qu'utilisateur sans être connecté ou agir en tant qu'administrateur lorsqu'il est connecté en tant qu'utilisateur.</b>
</li>
<br/>
:::

## 1️⃣ <u>Mais comment sécuriser notre application contre ce manque de contrôle d'accès</u> ❓
::: info
*⚠️ Le contrôle d'accès est efficace uniquement lorsqu'il est ``mis en œuvre dans le code du serveur ou les API serverless``, là où l'attaquant ``n'a pas la possibilité de modifier`` la façon dont le contrôle d'accès est vérifié ou les informations associées à ce contrôle.*
<br/>
:::
::: danger <u>Exemples</u>
<li>
<b>À l'exception des ressources publiques, tout doit être bloqué par défaut.</b>
</li>
<br/>
<li>
<b>Le modèle de contrôle d'accès doit imposer l'appartenance des enregistrements, plutôt que de permettre à l'utilisateur de créer, lire, modifier ou supprimer n'importe quel enregistrement.</b>
</li>
<br/>
<li>
<b>Tracer les échecs de contrôles d'accès, alerter les administrateurs quand c'est approprié (ex : échecs répétés).</b>
</li>
<br />
<li>
<b>Limiter la fréquence d'accès aux API et aux contrôleurs d'accès, afin de minimiser les dégâts que causeraient des outils d'attaques automatisés.
</b>
</li>
<br/>
:::
::: details le petit plus
*Si le contrôle d'accès était mis en œuvre du côté client (dans le code qui s'exécute sur le navigateur ou le périphérique de l'utilisateur), un attaquant ``pourrait potentiellement modifier le code ou les métadonnées associées au contrôle d'accès.`` Cela lui permettrait de contourner les restrictions et d'accéder à des ressources ou des fonctionnalités qui lui sont normalement interdites.*
:::
::: tip Résumé
*⚠️ En résumé, le contrôle d'accès est plus sécurisé ``lorsqu'il est implémenté du côté serveur ou dans des environnements sans serveur``, car cela ``limite la capacité des attaquants à manipuler ou contourner les vérifications de contrôle d'accès.``*
<br/>
:::

## 2️⃣- A02:2021 - Défaillances cryptographiques <a href="https://owasp.org/Top10/fr/A02_2021-Cryptographic_Failures/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning En-tête
Anciennement à la 3ème place et connu sous le nom de ``Exposition de données sensibles``, elle concerne les défaillaces liées à la mise en œuvre de la cryptographie ou son absence, Ce qui peut entraîner une exposition de données sensibles.
:::

*Lors du stockage de données, il faut déterminer pour chacune des données lesquelles doivent bénéficier d'une protection chiffrée. Pour cela, quelques exemples de questions à se poser pour sécuriser les données sensibles :*

::: info
<li>
Les données circulent-elles en clair ? Ceci concerne les protocoles tels que HTTP, SMTP et FTP. Le trafic externe sur internet est particulièrement dangereux. Vérifiez tout le réseau interne, par exemple entre les équilibreurs de charge, les serveurs Web ou les systèmes backend.
</li><br/>
<li>
Est-ce que le certificat serveur reçu et la chaîne de confiance sont correctement validés ?
</li><br/>
<li>
Est-ce que des fonctions de hachage dépréciées telles que MD5 ou SHA1 sont utilisées ou est-ce que des fonctions de hachage non cryptographiques sont utilisées là où des fonctions de hachage cryptographiques sont nécessaires ?
</li>
ou encore
<li>
Est-ce que des méthodes cryptographiques de remplissage dépréciées, comme <b>PKCS 1 v1.5</b> sont utilisées ?
</li>
:::

## 2️⃣ <u>Mais comment sécuriser notre application contre ces défaillances cryptographiques</u>❓<a href="https://owasp.org/Top10/fr/A02_2021-Cryptographic_Failures/#comment-sen-premunir" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>Ne pas stocker de données sensibles sans que cela ne soit nécessaire. Les rejeter ou utiliser une tokenisation conforme à la norme de sécurité de l’industrie des cartes de paiement (PCI DSS) ou même une troncature.</b></li><br>
<li><b>S'assurer de chiffrer toutes les données sensibles au repos.</b></li><br>
<li><b>Pour assurer la sécurité des données transmises, il est important d'utiliser des protocoles sécurisés tels que TLS avec des algorithmes de chiffrement à confidentialité persistante (forward secrecy - FS). Il est recommandé de chiffrer les données principalement au niveau du serveur. De plus, il est essentiel d'utiliser des paramètres de chiffrement sécurisés et de forcer le chiffrement en appliquant des directives telles que HTTP Strict Transport Security (HSTS)</b></li><br>
<li><b>Stocker les mots de passe en utilisant des fonctions de hachage avec salage et facteur de travail (facteur de délai), telles que Argon2, scrypt, bcrypt ou PBKDF2.</b></li><br>
Et bien d'autres...
:::

## 3️⃣- A03:2021 - Injection <a href="https://owasp.org/Top10/fr/A03_2021-Injection/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning En-tête
Anciennement à la 1ère place, l'injection se définit par l'insertion de données externe potentiellement dangereuses à l'intérieur d'un flux de données ou de requêtes SQL ou NoSQL pour les plus courantes.
:::

#### Quand est ce qu'une application est-elle vulnérable ?

::: info
<li><b>Les données venant de l'utilisateur ne sont pas validées, filtrées ou nettoyées par l'application</b></li><br>
<li><b>Des requêtes dynamiques ou des appels non paramétrés sans échappement par rapport au contexte sont envoyés à l'interpréteur.</b></li><br>
<li><b>Des données hostiles sont utilisées au sein de paramètres de recherche de mapping objet - relationnel (ORM) pour extraire des données supplémentaires sensibles.</b></li><br>
<li><b>Des données hostiles sont utilisées directement ou concaténées, par exemple lors de la construction de requêtes dynamiques, de commandes ou de procédures stockées pour des requêtes SQL ou des commandes OS.</b></li><br>
:::

### Exemple basique d'injection SQL

```sql
SELECT * FROM client WHERE id='". $_GET["id"] ."';
```
Il faut constater dans cet exemple 2 failles, la première est le paramètre dans le ``WHERE`` est en **GET** alors que toutes informations présumées sensibles doivent être passé en **POST** !

::: danger
Deuxièmement et c'est l'ennemi numéro 1 en requête c'est la **CONCATENATION** ⚠️⚠️. Il faut éviter à tout pris la concaténation de données dans une requête SQL car un attaquant externe pourrait executer cette requête :
:::

```txt
http://exemple.com/liste?id='or '1'='1
```
Et ciao ! c'est fini ! l'attaquant peut ainsi obtenir des privilèges d'administrateur 😢😭. Mais pas de panique quelques solutions permettent de limiter les injections.

## 3️⃣ <u>Solutions de sécurisation</u> <a href="https://owasp.org/Top10/fr/A03_2021-Injection/#comment-sen-premunir" target="_blank"><Badge type="tip" text="Documentation" /></a>


::: danger
<li><b>La meilleure solution consiste à utiliser une API sécurisée qui n'utilise pas l'interpréteur ou offre une interface configurable. Sinon, vous pouvez envisager de passer à l'utilisation d'outils d'Object Relational Mapping (ORMs).</b></li><br>
<li><b>Pour les données entrantes, il est recommandé d'utiliser une liste autorisée avec une normalisation. Cependant, cela ne constitue pas une défense complète car de nombreuses applications nécessitent l'utilisation de caractères spéciaux, tels que dans les zones de texte ou les API pour les applications mobiles.</b></li><br>
<li><b>il est conseillé d'utiliser LIMIT et autres contrôles SQL à l'intérieur des requêtes pour empêcher les divulgations massives de données dans le cas d'injection SQL.</b></li><br>
:::

## 4️⃣- A04:2021 - Conception non sécurisée <a href="https://owasp.org/Top10/fr/A04_2021-Insecure_Design/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning En-tête
La conception non sécurisée englobe diverses lacunes dans les contrôles de conception, distinctes de l'implémentation non sécurisée. Une conception sécurisée ``peut présenter des défauts d'implémentation``, tandis qu'une conception non sécurisée ``manque de contrôles de sécurité spécifiques``. Le manque de profilage des risques commerciaux contribue à la conception non sécurisée.
:::

## ⚠️ <u>3 catégories ne sont pas à négliger</u> 

### 1️⃣ - *Gestion des exigences et des ressources* ☝️

::: details 

::: tip
<b>Collaborez avec les équipes fonctionnelles pour recueillir et discuter des exigences métier de l'application, y compris les ``aspects de sécurité tels que la confidentialité, l'intégrité, la disponibilité et l'authenticité des données et de la logique métier``. 
Tenez compte du ``niveau d'exposition de votre application`` et décidez s'il est nécessaire de séparer les instances en plus du contrôle d'accès. 
Rassemblez les exigences techniques, ``y compris les exigences de sécurité fonctionnelles et non fonctionnelles``. 
Établissez et négociez le budget pour l'ensemble du processus, de la conception à la construction, aux tests et à l'exploitation, en incluant les activités de sécurité.</b>
:::

### 2️⃣ - *Conception sécurisée* ✌️

::: details

::: tip
<b>La conception sécurisée implique une culture et une ``méthodologie qui évaluent constamment les menaces et garantissent que le code est conçu et testé de manière solide pour prévenir les méthodes d'attaque connues``. Il est essentiel ``d'intégrer la modélisation des menaces lors des sessions de raffinement ``(ou activités similaires)`` afin de détecter les changements dans les flux de données et les contrôles d'accès``. Dans les user stories, identifiez les cas de réussite et les cas d'échec, assurez-vous qu'ils soient bien compris et acceptés par les parties responsables et impactées. ``Analysez les hypothèses et les conditions des cas de réussite et d'échec``, vérifiez leur exactitude et leur pertinence. Déterminez les moyens de valider ces hypothèses et mettez en place les conditions nécessaires pour obtenir un comportement approprié. ``Documentez soigneusement les résultats dans la user story``. Tirez des leçons de vos erreurs, encouragez et favorisez les améliorations. **La conception sécurisée n'est pas un simple ajout ou un outil que vous pouvez intégrer ultérieurement dans le logiciel.**</b>
:::

### 3️⃣ - *Cycle de développement sécurisé* 🤟

::: details

::: tip
<b>Pour obtenir un logiciel sécurisé, il est essentiel de ``suivre un cycle de développement sécurisé``, d'utiliser une méthode de conception sûre, de disposer d'une infrastructure solide, d'une ``bibliothèque de composants sécurisés``, d'outils appropriés et d'une modélisation des menaces. Impliquez des experts en sécurité à toutes les étapes du projet, y compris la maintenance du logiciel. Utilisez **l'OWASP Software Assurance Maturity Model (SAMM)** pour organiser efficacement vos efforts de développement sécurisé.</b>
:::


## 4️⃣ <u>Solutions de sécurisation</u> <a href="https://owasp.org/Top10/fr/A04_2021-Insecure_Design/#comment-sen-premunir" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>intégrez les contrôles de sécurité dans les user stories.</b></li><br>
<li><b>écrivez des tests unitaires et d'intégration pour valider que tous les flux critiques sont résistants aux modèles de menaces. Assemblez des cas d'usage et des cas de détournement pour chaque niveau de votre application.</b></li><br>
<li><b>mettez en place et utilisez une bibliothèque de modèles de conception sécurisés ou de composants prêts à l'emploi pour une voie pavée.
</b></li><br>
:::

## 5️⃣ A05:2021 - Mauvaise configuration de sécurité <a href="https://owasp.org/Top10/fr/A05_2021-Security_Misconfiguration/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning En-tête
<b>Anciennement à la sixième place, une mauvaise configuration de sécurité sur un serveur entraine des failles de sécurité facilement exploitable par un attaquant.</b>
:::

Quand est ce qu'une application est-elle vulnérable ? ⚠️

::: info
<li><b>des fonctionnalités inutiles sont activées ou installées (ex : des ports, des services, des pages, des comptes ou des privilèges inutiles).</b></li><br/>
<li><b>pour les systèmes à jour ou mis à niveau, les dernières fonctionnalités de sécurité sont désactivées ou ne sont pas configurées de manière sécurisée.</b></li><br/>
<li><b>La version du logiciel est obsolète ou vulnérable</b></li><br/>
:::

## 5️⃣ <u>Solutions de sécurisation</u> <a href="https://owasp.org/Top10/fr/A05_2021-Security_Misconfiguration/#comment-sen-premunir" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>une plate-forme minimale sans fonctionnalité, composant, documentation et échantillon inutile. Supprimer ou ne pas installer des fonctionnalités et frameworks inutilisés.</b></li><br>
<li><b>une architecture d'application segmentée qui fournit une séparation efficace et sécurisée entre les composants ou les environnements hébergés, avec de la segmentation, de la mise en conteneurs ou l'utilisation de groupes de sécurité dans le Cloud (ACL).</b></li><br>
<li><b>un processus automatisé pour vérifier l'efficacité des configurations et des réglages dans tous les environnements.
</b></li><br>
:::

## 6️⃣ A06:2021 - Composants vulnérables et obsolètes <a href="https://owasp.org/Top10/fr/A06_2021-Vulnerable_and_Outdated_Components/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning En-tête
<b>Anciennement à la neuxième place, l'utilisation de composants vulnérables ou obsolètes seraient comme ouvrir délibérement la porte de votre système aux attaquants. </b>
:::

Quand est ce qu'une application est-elle vulnérable ? ⚠️

::: info
<li><b>si vous ne savez pas quels sont tous les composants que vous utilisez (à la fois côté client et côté serveur). Cela comprend les composants que vous utilisez directement ou par l'intermédiaire des dépendances imbriquées.</b></li><br/>
<li><b>si le logiciel est vulnérable, sans support ou obsolète. Cela concerne le système d'exploitation, le serveur web/application, le système de gestion de base de données (SGBD), les applications, API et autres composants, les environnements d'exécution et les bibliothèques.</b></li><br/>
<li><b>si les développeurs de logiciels ne testent pas la compatibilité des évolutions, des mises à jour et des correctifs des bibliothèques.</b></li><br/>
:::

## 6️⃣ <u>Solutions de sécurisation</u> <a href="https://owasp.org/Top10/fr/A06_2021-Vulnerable_and_Outdated_Components/#comment-sen-premunir" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>supprimer les dépendances inutiles et les fonctionnalités, composants, fichiers et documentation non nécessaires.</b></li><br>
<li><b>ne récupérer des composants qu'auprès de sources officielles via des liens sécurisés. Préférer des paquets signés pour minimiser les risques d'insertion de composants modifiés malveillants</b></li><br>
<li><b>Faire un inventaire en continu des versions de composants client et serveur (ex: frameworks, bibliothèques) et de leurs dépendances à l'aide d'outils tels que les versions, OWASP Dependency Check, retire.js, etc. Surveiller en permanence les sources comme Common Vulnerability and Exposures (CVE) et National Vulnerability Database (NVD) pour suivre les vulnérabilités des composants. Utiliser des outils d'analyse de composants logiciels pour automatiser le processus. Souscrire aux alertes par courriel concernant les vulnérabilités des composants que vous utilisez.
</b></li><br>
:::

## 7️⃣ A07:2021 - Identification et authentification de mauvaise qualité <a href="https://owasp.org/Top10/fr/A07_2021-Identification_and_Authentication_Failures/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning En-tête
<b>Anciennement à la dixième place, 
Il est essentiel de confirmer l'identité, l'authentification et la session de l'utilisateur afin de se prémunir contre les attaques liées à l'authentification. </b>
:::

Il peut y avoir des faiblesses d'authentification si l'application :

::: info
<li><b>autorise les attaques automatisées telles que le bourrage des informations d'identification, où l'attaquant dispose d'une liste de noms d'utilisateurs valides et mots de passe</b></li><br/>
<li><b>autorise les mots de passe par défaut, faibles ou bien connus, tels que "Password1" ou "admin / admin"</b></li><br/>
<li><b>exposition des identifiants de session dans l'URL.</b></li><br/>
:::

## 7️⃣ <u>Solutions de sécurisation</u> <a href="https://owasp.org/Top10/fr/A07_2021-Identification_and_Authentication_Failures/#comment-sen-premunir" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>respecter la longueur, la complexité et la rotation des mots de passe par rapport aux directives du National Institute of Standards and Technology (NIST) 800-63 B à la section 5.1.1 ou autres directives modernes</b></li><br>
<li><b>ne pas livrer ou déployer avec des informations d'identification par défaut, en particulier pour les utilisateurs avec privilèges</b></li><br>
<li><b>intégrer des tests de mots de passes faibles, à la création ou au changement. Comparer ce mot de passe avec la liste des 10000 mots de passe les plus faibles.
</b></li><br>
:::

## 8️⃣ A08:2021 - Manque d'intégrité des données et du logiciel <a href="https://owasp.org/Top10/fr/A08_2021-Software_and_Data_Integrity_Failures/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning En-tête
<b>Parfois, les logiciels et les données peuvent être endommagés ou altérés à cause de problèmes avec le code informatique et le système qui les protège. Cela arrive lorsque les personnes utilisent des morceaux de programmes provenant de sources peu sûres, comme des sites web ou des endroits où l'on partage des choses. De plus, si on ne fait pas attention, des méchants peuvent essayer de pénétrer dans les ordinateurs en utilisant des méthodes spéciales qui peuvent causer des problèmes. Il y a aussi le fait que certains programmes se mettent à jour tout seuls, mais cela peut poser des soucis si les mises à jour ne sont pas vérifiées correctement. Les méchants peuvent télécharger leurs propres mises à jour et les faire fonctionner sur tous les ordinateurs sans autorisation. Un autre exemple concerne des choses spéciales qui sont codées d'une certaine manière et que les méchants peuvent voir et changer pour causer des problèmes. C'est un peu comme si quelqu'un changeait les règles d'un jeu pour tricher.</b>
:::


### Exemple de scénario de manque d'intégrité des données et du logiciel

::: info <u>Scénario n°1 mise à jour sans signature</u> 
<b>De nombreux routeurs domestiques, décodeurs, firmwares de périphériques et autres ne vérifient pas les mises à jour via un firmware signé. Les microprogrammes non signés constituent une cible de plus en plus importante pour les attaquants et leur nombre ne devrait cesser d'augmenter. Il s'agit d'une préoccupation majeure car, bien souvent, il n'y a pas de mécanisme pour y remédier, si ce n'est de corriger dans une version future et d'attendre que les versions précédentes soient périmées.</b>
:::

## 8️⃣ <u>Solutions de sécurisation</u> <a href="https://owasp.org/Top10/fr/A08_2021-Software_and_Data_Integrity_Failures/#comment-sen-premunir" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>utilisez des signatures numériques ou des mécanismes similaires pour vérifier que le logiciel ou les données proviennent de la source prévue et n'ont pas été modifiés</b></li><br>
<li><b>assurez-vous qu'un outil de sécurité de la chaîne logistique logicielle, tel que <u>OWASP Dependency Check</u> ou <u>OWASP CycloneDX</u>, est utilisé pour vérifier que les composants ne contiennent pas de vulnérabilités connues.</b></li><br>
<li><b>veillez à ce que les données sérialisées non signées ou non chiffrées ne soient pas envoyées à des clients non fiables sans une forme de contrôle d'intégrité ou de signature numérique permettant de détecter la falsification ou le rejeu des données sérialisées.
</b></li><br>
:::

## 9️⃣ A09:2021 - Carence des systèmes de contrôle et de journalisation <a href="https://owasp.org/Top10/fr/A09_2021-Security_Logging_and_Monitoring_Failures/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning En-tête
<b>
Tester la journalisation et la surveillance peut être un peu compliqué. Normalement, cela signifie poser des questions ou parler avec des gens pour savoir si des attaques ont été repérées pendant des tests spéciaux. C'est super important de pouvoir détecter les problèmes et y répondre. Cependant, ça peut avoir un gros impact sur la responsabilité (c'est-à-dire être responsable), la capacité à voir ce qui se passe, à être averti en cas de problème et à enquêter dessus plus tard.</b>
:::

👉 <i>Si on n'utilise pas de journalisation et de surveillance, on ne peut pas repérer les problèmes de sécurité. Il est possible que la journalisation, la détection, la surveillance et la réponse ne soient pas suffisantes et que des choses mauvaises puissent se produire à n'importe quel moment. : </i>

::: info exemples
<li>Les traces d’audit, telles que les accès réussis ou échoués et les transactions sensibles, ne sont pas enregistrées</li>
<li>Les tests d'intrusion et de balayage avec des outils de test dynamique de sécurité des applications (DAST), tels que OWASP ZAP, ne génèrent pas d'alertes</li>
<li>L’application est incapable de détecter, de générer des remontées d'information et des alertes en temps réel, ou assimilé, en cas d’attaque active.</li>
:::

## 9️⃣ <u>Solutions de sécurisation</u> <a href="https://owasp.org/Top10/fr/A09_2021-Security_Logging_and_Monitoring_Failures/#comment-sen-premunir" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>s'assurer que toutes les authentifications, les erreurs de contrôle d'accès et de contrôle des entrées côté serveur sont enregistrées, avec un contexte utilisateur suffisant pour identifier les comptes suspects ou malveillants, et conservées suffisamment longtemps pour permettre une analyse légale différée.</b></li><br>
<li><b>veiller à ce que les données des journaux soient correctement encodées afin d'éviter les injections ou les attaques sur les systèmes de journalisation ou de surveillance.</b></li><br>
<li><b>les équipes DevSecOps devraient mettre en place une supervision et une gestion d'alertes efficaces pour détecter et réagir aux actions suspectes en temps opportun.
</b></li><br>
:::

## 🔟 A010:2021 - Falsification de requête côté serveur (SSRF) <a href="https://owasp.org/Top10/fr/A09_2021-Security_Logging_and_Monitoring_Failures/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning En-tête
<b>Imagine une application web comme un super-héros qui peut aller chercher des choses sur Internet pour toi. Normalement, cette application doit être prudente et vérifier l'endroit d'où elle obtient les choses. Mais parfois, il y a une faille appelée SSRF. Cela se produit lorsque l'application ne vérifie pas bien l'adresse que tu lui donnes. Et devine quoi ? Cela permet à un méchant pirate informatique de forcer l'application à aller chercher des choses dans des endroits auxquels elle n'est pas censée accéder. Même si ces endroits sont normalement protégés par des choses comme des murs de feu (pare-feu), des tunnels secrets (VPN) ou des gardes (ACL) qui contrôlent l'accès au réseau. C'est comme si l'application était trompée et envoyée dans un endroit dangereux sans le savoir.</b>
:::

## 🔟 <u>Solutions de sécurisation</u> <a href="https://owasp.org/Top10/fr/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/#comment-sen-premunir" target="_blank"><Badge type="tip" text="Documentation" /></a>


## 🌐 Couche réseau :
::: danger
<li><b>segmenter la fonctionnalité d'accès aux ressources à distance dans des réseaux distincts pour réduire l'impact d'une SSRF.</b></li><br>
<li><b>appliquer des politiques de pare-feu ou des règles de contrôle d'accès au réseau "refusant par défaut" afin de bloquer tout le trafic intranet sauf celui qui est essentiel</b></li><br>
<b><u>Conseils</u>
</b><br>
<li>Établir une propriété et un cycle de vie pour les règles du pare-feu en fonction des applications.
</li>
<li>Consigner tous les flux réseau acceptés et bloqués sur les pare-feu</li>
:::

## 📗 Couche applicative :
::: danger
<li><b>assainir et valider toutes les données d'entrée fournies par le client</b></li><br>
<li><b>ne pas envoyer de réponses brutes aux clients</b></li><br>
<li><b>désactiver les redirections HTTP</b></li><br>

:::

