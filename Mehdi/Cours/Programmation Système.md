---
tags:
  - E/S
  - C
  - programmationSystème
---
*Cours du 02/09/2025*

GIERSCH
# Entrées/Sorties (E/S ou I/O - Input/Output)

Les entrées/sorties permettent aux programmes de lire/écrire des données avec l'environnement extérieur. Fichier par exemple.

## Les E/S s'appliquent sur :

### 1. Les flux standards qui sont :
- **Entrée standard (stdin)** - par défaut les flux standards sont associés au terminal dans lequel le processus s'exécute (clavier/écran)
- **Sortie standard (stdout)**
- **Sortie d'erreur (stderr)**

*(Remarque: ces flux standards peuvent être redirigés)*
**Exemple** : `$ ./mon_programme > fichier`

### 2. Les fichiers
Accédés via des **descripteurs de fichier**
### Organisation en couches

![[deepseek_mermaid_20250902_37a467 1.png]]
  
  ---
## API Haut-niveau
**Fournie par :** la bibliothèque C (libC)
- indépendante du système d'exploitation
- descripteurs de fichiers de type FILE*
- Flux standards : stdin/stdout/stderr

---
## API Bas Niveau
**Fournie par :** le système
- permet plus de fonctionnalités (ex: permissions, tubes,...)
- descripteur de fichiers de type int
- flux standards : 0/1/2

---
## E/S de haut niveau

Les entrées/sorties de haut niveau sont fournies par la bibliothèque C. Elles s'appuient sur les fonctions de bas niveau (abordées plus tard).

Cette API est implémentée par un grand nombre de fonctions, déclarées dans `<stdio.h>`.

**Descripteur de fichier :** FILE*

Les E/S se font à l'aide :
- d'un descripteur de fichiers, soit un descripteur prédéfini pour les flux standards*, soit un descripteur qu'on aura construit pour accéder à des fichiers.

* `stdin` -> entrée standard
* `stdout` -> sortie
* `stderr` -> sortie d'erreur

Pour accéder à des fichiers, on utilisera une fonction permettant d'effectuer l'ouverture du fichier. En cas de succès la fonction retourne un descripteur de fichier valide.

Lorsqu'on a terminé avec un descripteur de fichiers, il faut faire l'opération de fermeture du descripteur.