## Entrée Sortie 
Les entrées et sorties permettent aux programmes de lire/écrire des données avec l'environnement extérieur: fichiers par exemple.

Les entrées/Sorties s'appliquent sur les flux standards qui sont :
- entrées standard (stdin) par défaut les flux standard sont associés au terminal dans lequel le processus s'exécute (clavier/écran)
- sortie standard (stdout)
- sortie d'erreur (stderr)

(Remarque : Les flux standard peuvent être redirigés)
```
Ex : $ ./mon_programme > fichier > 2 > fichiers_des_erreurs
```
Des fichiers, en utilisant des ==descripteurs de fichiers== 

## Organisation en couches
![[Sans titre.canvas]]API Haut-niveau :
Fournie par la bibliothèque C (lib C)
- indépendante du système d'exploitation
- description de fichiers de types FILE*
- Flux standard: stdin/stdout/stderr

API Bas niveau Fournie par le système
- permet plus de fonctionnalités
	ex : permissions, tubes, ...)
- description de fichiers de types ==int==
- Flux standard : 0/1/2 
## Entrées/Sorties de Haut Niveau
Les entrées/sorties de haut niveau sont fournies par la bibliothèque C. Elles s'appuient sur les fonctions de bas-niveau (abordées plus tard).
Cette (API) est implémentée par un grand nombre de fonctions déclarés dans <stdio.h> 
Description de fichier : FILE*

Les E/S se font à l'aide:
- d'un descripteur de fichiers, soit un descripteur prédéfini pour les flux standards, qui soit un descripteur qu'en construit pour accéder à des fichiers
	** ==stdin== -> entrée standard
	 ==stdout== -> sortie
	 ==stderr== -> sortie d'erreur
Pour accéder à des fichiers, on utilisent une fonction permettant d'effectuer ==l'ouverture du fichier==. En cas de succès les fonctions retourne un descripteur de fichier valide.
Lorsqu'un a terminé avec un descripteur de fichier, il faut faire l'opération de fermeture du descripteur.
