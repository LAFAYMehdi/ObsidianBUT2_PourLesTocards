# Algèbre linéaire
algèbre → Réels
linéaire → théorie des floats dans des tableaux

XIXe siecle → Hamilton
→ Matrice 
applications multiples : Data ; Graphismes 2D,3D et +

### Les systemes linéaires
Définition : équation linéaire
1D (1 variable) : ax = b
2D (2 variables) : ax + by = c ⇒ équation cartésienne de droite en 2D
3D (3 var) : ax + by + cz = d ⇒ équation cartésienne d'un plan (en 3D)
… généraliser
4D : ax + by + cz +dt = e ⇒ équation cartésienne d'un espace 3D en 4D

### Représentation :
2D :
3D :

Equation linéaire : 
"Constante x var +- Constante x var +- …. +- Constante x var = Constante"
INTERDITS : 
	$x^2$
	$xyz$
	$racine(3y)$
	$ln(z)$
	$e(^172)$
	TOUT SAUF ^equation linéaire^

## Systeme linéaire :

ex:
{3x+y+z = 3}
&
{2x - y +2z = 2}
&
{6x + y + 3z = 5}
&
{7x - y + 2z = 2}
⇒ 4 équations ; 3 inconnues  ⇒ 4x3
un systeme, c'est plusieurs équations connectées par la porte logique et (&)

Rappel :
Une équation c'est une phrase ( affirmation logique ) dont le verbe est "égale"
→ une équation est du type Boolean ⇒ 2 valeurs : Vrai/Faux
Résoudre une équation c'est trouver toutes les valeurs des var qui rendent l'équation vraie

Résoudre une systeme c'est :
trouver toutes les valeurs des variables qui rendent toutes les équations Vraies en meme temps

Technique de résolutions :
en 2D:
{3x+2y = 1}&{2x - y = 2}
#### technique 1 : substitution
→ marche en 2D, méga lourd en 3D, délire au dela + pas du tout info
on remplace : {3x+2(2x-2)}&{y = 2x-2}
⇔ {x=5/7}&{y=2x-2}
⇔ {x=5/7}&{y=2(5/7)-2}
⇔ {x = 5/7} & {y = -4/7}
S = {(5/7 ; -4/7)} ⇔ 1 point
#### technique 2 : pivot de Gauss
remarques :
- Systeme 2x2
- Si on prend au pif 2 eq et 2 inconnues, on aura une unique solution, sauf grosse malchance !
→ {3x+2y=1
&
{2x+y=2
(but : triangulariser le systeme)
⇔ {3x+2y=1
$2L_1-3L_2$ {7y = -4              ⇒ systeme triangularisé
⇔ {x = (1-2(-4/7))/3
   {y = -4/7                            ⇒ on remplace
⇔ ((7+8)/7)/3 = 15/(7x3) = 5/7
S = {(5/7 ; -4/7)}

pivot de Gauss:
→ L'algo d'algorithme linéaire
→ Universel, on l'utilise partout
→ Lourd (cubique)
→ 2D ~ 2^3
