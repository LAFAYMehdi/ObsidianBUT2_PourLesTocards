
## Entrées / Sorties 
**(E/S ou I/O pour Input/Output)**
Les entrées et sorties permettent aux programmes de lire/écrire des données avec l'environnement extérieur, fichiers par exemple.

Les E/S s'appliquent sur :
1. Les flux standards qui sont : 
	1. Entrée standard (stdin) <- Par défaut les flux standard sont associés au terminal dans lequel les processus s'exécute (clavier / écran)
	2. Sortie standard (stdout)
	3. Sortie d'erreur (stderr)

(Remarque ces flux standards peuvent être redirigés)
Ex :  

```
$ ./mon_programme > fichier 2>fichier_des_erreurs
```

Des fichiers, en utilisant des ==descripteurs de fichier==



![[Organisation en couches.canvas]]
API ==Haut niveau== : Fournie par la bibliothèque C (libC) 
- Indépendante du système d'exploitation
- Description de fichiers de type FILE*
- Flux standards : stdin/stdout/stderr

---

API ==Bas Niveau== : Fournie par le système
- Permet plus de fonctionnalités
  (ex : permission, tubes,...)
- Description de fichiers de type int
- Flux standards : 0/1/2

---

==E/S de Haut-Niveau==
Les E/S de haut niveau sont fournies par la bibliothèque C. Elles s'appuient sur les fonctions de bas-niveau (abordées plus tard).
Cette API est implémentée par un grand nombre de fonctions déclarées dans ==<studio. H>==
Descripteur de fichier : ==FILE*==

Les E/S se font à l'aide d'un descripteur de fichiers, soit un descripteur prédéfini pour les flux standards, soit un descripteur qu'en .................. Pour accéder à des fichiers
Pour accéder à des fichiers, on utilisera une fonction permettant d'effectuer ==l'ouverture du fichier==. En cas de succès la fonction retourne un descripteur de fichier valide.
Lorsqu'on a terminé avec un descripteur de fichiers, il faut faire l'opération de ==fermeture== du descripteur.

