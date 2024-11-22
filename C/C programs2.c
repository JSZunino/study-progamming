#include <stdio.h>

int main(){
	int s;
	
	printf("Digite um numero de 1 a 7:\n");
	scanf("%d", &s);
	
	switch(s){
		case 1:
			printf("Domingo\n");
		break;
		case 2:
			printf("Segunda-Feira\n");
		break;
		case 3:
			printf("Terça-Feira\n");
		break;
		case 4:
			printf("Quarta-Feira\n");
		break;
		case 5:
			printf("Quinta-Feira\n");
		break;
		case 6:
			printf("Sexta-Feira\n");
		break;
		case 7:
			printf("Sabado\n");
		break;
		default:
			printf("Voce e gay\n");
		break;
	}
}
