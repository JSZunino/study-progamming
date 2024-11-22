#include <stdio.h>


int main(){
	int nota1 = 0;
	int nota2 = 0;
	int nota3 = 0;
	int resul = 0;
	//float nota = 0.0;
	//char nome[4] = "joao";
	
	printf("Digite sua primeira nota: \n");
	scanf("%d", &nota1);
	
	printf("Digite sua segunda nota: \n");
	scanf("%d", &nota2);
	
	printf("Digite sua terceira nota: \n");
	scanf("%d", &nota3);
	
	resul = (nota1 + nota2 + nota3) / 3;
	
	printf("Sua media e: %d.\n", resul);
	
	//se for maior ou igual a 7 e menor ou igual a 10
	if(resul >= 7.0 && resul <= 10){
		printf("Aprovado! \n");
	} else {
		printf("Reprovado! \n");
	}
	
	return 0;
}

