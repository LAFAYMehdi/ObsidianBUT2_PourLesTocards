*03-09-25*
S3 → R.3.05
[TP #1 : Rappel de C](https://cours-info.iut-bm.univ-fcomte.fr/index.php/menu-cours-s3/r3-05-prog-systeme/2386-tp1-rappels-de-c)
	
<u>Programme minimal </u>. 
```extensionC
/* Commentaire … */
// Autre commentaire
#include <stdio.h> → Fichiers d'en-tête (déclarations) ic stdio.h → E/S standard
int main (void){   // variante : int main (int argc, char *argv[])
	printf("Coucou!\n");
	return 0;  // par convention : - 0 succès ( ou EXIT_SUCCESS) 
								   - ≠ 0 échec  ( ou EXIT_FAILURE)


} → déclarés dans <stdlib.h>
```

Pour : 

```` // variante : int main (int argc, char *argv[]) ````

int et char → pour récupérer les arguments de la ligne de commande



Compilation :

exemple : $ gcc -g -Og -Wall -Wextra -o toto toto.c

gcc → Compilateur

-g → inclus des infos de déboggage

-Og → active des optimisations

-Wall -Wextra → active les avertissements

-o toto → fichier exécutable produit ( par défaut s.out)

toto.c → fichier source

Exécution : 

``$   ./toto`` 