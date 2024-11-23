#include <stdio.h>

int main(){
	int i;
	
	// i igual a 1, executa ate i ter o valor 10
	for(i=1; i<=10; i++){
		//o continue faz com que o 5 não seja impresso
		if(i == 5){
			continue;
		}
		//se fosse o break ele pararia de escrever no 5
		printf("%d ", i);
	}
}
