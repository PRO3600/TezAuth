# TezAuth
The goal was to link an email with a NFT and using this NFT to log a client to a service provider. We've pivoted. We release a specific NFT for each service provider so that the client can log in with this NFT.


*OUR QUESTIONS*

Difficultés rencontrées:

- Les interactions entre les différents acteurs concernés par la solution a été complexe à dégager: notre solution s'est précisée peu à peu
- Difficultés à s'abstraire d'une transaction sur la blockchain pour la connexion au service provider. [Résolu]
- Comment s'assurer que la connexion à la dApp est bien effectuée par le détenteur du NFT ? On fait signer au wallet un message et on vérifie que celui-ci ait bien été signé avec la clé privée du détenteur. [Résolu]
- 



Génération NFT:

- Comment lier le NFT au Mail d'un point de vu technique ? Est-il possible de mint (=produire) le NFT à la création du mail ?
- Commet être sûr que l'email appartient bien à la personne qui mint le NFT ?
- Comment être sûr qu'un NFT n'ait pas déjà été mint pour cet email ?

Les difficultés soulevées par l'ajout correct du mail dans le NFT nous ont ammenés à pivoter. A présent, un NFT par service provider est produit et une authentification spécifique permet de s'identifier auprès du service provider.


Recherche NFT:

- Dans un FA2, le tokenid n'apparaît en valeur d'aucune map du storage => impossible sachant une addresse de dire les tokenid qu'elle a dans le FA2 ? Faut-il rajouter manuellement une map dans le FA2 ? [Résolu]





