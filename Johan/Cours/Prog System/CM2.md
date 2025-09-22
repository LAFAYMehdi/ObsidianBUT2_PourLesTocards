# Ouverture de fichier
L'opération d'ouverture de fichier permet d'obtenir un descripteur associé à un fichier pour y faire des opérations 
FILE * fopen(const char * pathname, const char * mode);
FILE *fdopen(int fd, const char *mode);
FILE freopen(const char *pathname, cons char *mode, ...);

- fopen ouvre un fichier
- fdopen ouvre à haut niveau le descripteur de bas niv valide fd
- freopen ouvre le fichier et l'associe au descripteur stream (redirections)
Chacune des fonctions retourne un pointeur non NULL en cas de succès, NULL en cas d'échec

==pathname== nom du fichier à ouvrir
==mode== mode d'ouverture
	==r== lecture
	==r+== lecture et écriture
	==w== écriture; le fichier est créé ou tronqué s'il existe
	==w+== lecture et écriture; le fichier est créé ou tronqué s'il existe
	==a== écriture en ajout ; le fichier est créé
	==a+== lecture au début, écriture en ajout; le fichier est créé

```
FILE*f
/* Ouverture de toto.txt, du répertoire courant en lecture*/
f = fopen("toto.txt", "r");
if (f == NULL){
	fprintf(stderr, "Echec de l'ouverture du fichier toto.txt\n");
	return -1;
}
```

`
Exemple : lire le contenu d'un fichier et l'afficher
```
#include <stdio.h>
int nom (void) {
	const char *fichier = "toto.txt"
	FILE *f = fopen(fichier, "r");
	if (f == NULL){
		perror("fopen");
		return 1;
	}
	int c = gets(f);
	while (c != EOF){
		petchar (c);
	}
	if (fclose(f)!= 0){
		fprintf(stderr, "Erreur de lecture \n");
		return -1;
	}
	return 0;	
}
```


