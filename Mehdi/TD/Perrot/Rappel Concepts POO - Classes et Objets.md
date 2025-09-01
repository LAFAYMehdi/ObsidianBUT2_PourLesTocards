---
aliases: [Programmation Orientée Objet, Classes et objets, POO Concepts]
tags: [programmation, poo, classe, objet, java, cpp]
---
*TD du 01/09/2025*


## Les classes

1. Vocabulaire
    - Classe = un modèle de chose, ou un concept.  
        -> Forme = couple "propriétés/fonctionnalités"
        
    - Attribut = une propriété d'une classe
        
    - Méthode = une fonctionnalité d'une classe
        
    - Membre = un attribut ou une méthode
        
    - Objet = un exemplaire (instance) d'une classe
        
    - Instanciation = création d'un objet. Processus qui permet l'obtention d'une instance
        
    - Constructeur (plusieurs possibles) = une méthode particulière qui indique comment créer un objet. (sans return)
        
    - Destructeur (un seul)(C++) = une méthode particulière qui indique comment détruire un objet. (sans return)(le ~ indique que c’est le destructeur)
        
    Remarque : Si on appelle 2 fois le constructeur avec les mêmes paramètres j'ai deux objets identiques mais distincts en mémoire
    
2. Déclaration
    
    - En java, déclaration et définition en même temps, dans un fichier qui porte le nom de la classe avec ".java"
        
    - En C++ : déclarations dans un fichier ".h" (convention C)
        
        - déclaration dans un fichier ".hpp" (convention C++)
            
        - définition dans un fichier .cpp
            
    - La déclaration des membres permet d'en spécifier les droits d'accès
        
        - principe générique : attributs privés, méthodes publiques
            
            - .public : n'importe quel objet (quelle que soit la classe) peut manipuler
                
            - .protected : seul un objet de la classe ou des sous-classes peut manipuler
                
            - .private : seul un objet de la classe peut manipuler
                
    - Exemples :
	```c
    class A{
		public int i;
		protected double d;
		private boolean b;
		...
		public void fun(){
			b=true;
			A a=newA();
			a.b=true;
		}
	}
	
	class B{
		public int i;
		protected double d;
		private boolean b;
		
		public void fun(){
			b=true;
			A a=newA();
			a.i=5;
			a.d=1.0; --> ok
			a.b=true; // Not ok
		}
	}
	```
3. Instanciation
	- **Objectif :** créer un objet en appelant un des constructeurs de la classe.
	    
	- **Instruction :** `"new"`
	    
	- **Étapes lors de l’instanciation :**
	    
	    - Allouer un espace mémoire pour les attributs de l’objet
	        
	    - Allouer de l’espace pour stocker les informations nécessaires à la gestion de la vie de l’objet
	        
	    - Exécuter les instructions du constructeur (initialisations, etc.)
	        
	    - Renvoyer l’adresse mémoire de l’objet créé
	    
	    Java
		```java
		MaClasse obj1,obj2,obj3;
		
		obj1=new MaClasse(...);
		obj2=new MaClasse(...);
		obj3=new MaClasse(...);
		obj3=obj1;
		```  
		C++
		 ```C++
		 ma_classe *obj1,*obj2,*obj3;
		 obj1=new ma_classe();
		 obj2=new ma_classe();
		 obj3=obj1;
		 ```
		 `obj3=obj1; // pointe vers l'adresse de obj1 !pas une copie¡`