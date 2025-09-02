## Entrée Sortie

Les entrées et sorties permettent aux programmes de lire/écrire des données avec l'environnement extérieur : fichier par exemple.

Les entrées/Sorties s'appliquent sur 
1. les flux standards qui sont :
	* entrées standard (stdin) par défaut les flux standard sont associés au terminal dans lequel le processus s'exécute (clavier/écran)
	* sortie standard (stdout) 
	* sortie d'erreur (stderr)
	
	(Remarque : les flux standards peuvent êtres redirigés)
```
	$ ./mon_programme > fichier
```
2. Des fichiers, en utilisant des descripteur de fichiers

## Organisation en couches

![[Organisation en couches.canvas]]

---
API haut niveau : fournie par la bibliothèque c (lib c)
-> indépendant du système d'exploitation
-> descripteurs de fichier s de type FILE*
-> Flux standards : stdin/stdout/stderr

---
API Bas niveau Fournie par le system
-> permet plus de fonctionnalités
	(ex: permissions, tubes,...)
-> descripteur de fichier de type Int
-> flux standards : 0/1/2

## E/S de Haut niveau

Les entrées/sorties de haut niveau sont fournies par la bibliothèque C. Elles s'appuient sur les fonctions de bas niveau (abordées plus tard)
Cette API est implémentée par un grand nombre de fonctions déclarées dans <stdio.h>
Descripteur de fichier : FILE*

Les E/S se font à l'aide :
1. d'un descripteur de fichier, soit un descripteur prédéfini pour les flux standards, soit un descripteur qu'on aura construit pour accéder a des fichiers
	stdin -> entrée standard
	stdout -> sortie
	stderr -> sortie d'erreur

Pour accéder a des fichiers, on utilisera une fonction permettant d'effectuer l'ouverture du fichier. En cas de succès la fonction retourne un descripteur de fichier valide
Lorsqu'on a terminer avec un descripteur, il faut faire l'opération de fermeture de celui ci.
