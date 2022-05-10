# TezAuth
The goal is to link an address mail with a NFT and using this NFT to log a person to a service provider.


*OUR QUESTIONS*

Problèmes rencontrés:

- Les interactions entre les différents acteurs concernés par la solution a été complexe à dégager: notre solution s'est précisée peu à peu
- Difficultés à s'abstraire d'une transaction sur la blockchain pour la création du compte et la connexion au service provider. [Résolu]
- Comment s'assurer que la connexion à la dApp est bien effectué par le détenteur du NFT ? On fait signer au wallet un message et on vérifie que celui-ci ait bien été signé avec la clé privée du détenteur. [Résolu]




Génération NFT:

- Comment lier le NFT au Mail d'un point de vu technique ? Est-il possible de mint (=produire) le NFT à la création du mail ?
- Commet être sûr que l'email appartient bien à la personne qui mint le NFT ?
- Comment être sûr qu'un NFT n'a pas déjà été mint pour cet email ?

- Les difficultés soulevées par l'ajout du mail de façon correct dans le NFT nous ammène à éditer un NFT par service provider et à gérer une authentification spécifique auprès du service provider.


Recherche NFT:

- Dans un FA2, le tokenid n'apparaît en valeur d'aucune map du storage => impossible sachant une addresse de dire les tokenid qu'elle a dans le FA2 ? Faut-il rajouter manuellement une map dans le FA2 ?


