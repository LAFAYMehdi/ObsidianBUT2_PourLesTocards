
Entrees/Sorties E/S ou I/O pour Input/Output
Les entrées/sorties permettent aux programmes de lire/écrire des données avec l'environnement extérieur. FIchier par exemple 

Les E/S s'appliques sur 

1. les flux standars qui sont : 
	-  entrée standard (stdin) -- par default les flux standards sont associés au terminal dans lequel le processus s'exécute (clavier/écran)
	- sortie standard (stdout)
	- sortie d'erreur (stderr)

	 ( Remarque ces flux standars peuvent être redirigés)
	 
	 Ex : 
	 ```$ ./mon_programme > fichier```
	  
2. Des fichiers, en utilisant des descripteurs de fichier

### Organisation en couches

APPLICATION ( programme)
⬇️                                                ⬇️
API de haut niveau (LIBC).       ⬇️
⬇️                                                ⬇️
Interface de programmation (Api) de bas niveau
Systeme d'exploitation 
⬇️
Fichier su un disque

------------------------
API Haut-niveau : Fournie par la bibliothèque C (libC)
-> indépendante du système d'exploitation 
-> descripteurs de fichiers de type FILE*
-> Flux standards : stdin/stdout/stderr

-----------
API Bas Niveau : Fournie par le système 
-> permet plus de fonctionnalités
(ex : permissions, tubes,...)
-> descripteur de fichiers de type int
-> flux standards : 0/1/2


### E/S de haut niveau

Les entrées/sorties de haut niveau sont fournies par la bibliothèque C. Elles s'appuient sur les fonctions de bas_niveau (abordées plus tard)
Cette API est implémentée par un grand nombre de fonctions, déclarées dans `<stdio.h>`
Descripteur de fichier : FiLE*

Les E/S se font à l'aide 
	- d'un descripteur de fichiers, soit un descripteur prédéfini pour les flux standards*, soit un descripteur qu'on aura construit pour accéder à des fichiers.
	
		* `stdin -> entrée standard`
			`stdout -> sortie`
			`stderr -> sortie d'erreur`
			

Pour accéder à des fichiers, on utilisera une fonction permettant d'effectuer l'ouverture du fichier. 
En cas de succès la fonction retourne un descripteur de fichier valide.
Lorsqu'on a terminé avec un descripteur de fichiers, il faut faire l'opération de fermeture du descripteur