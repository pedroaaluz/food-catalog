# food-catalogas

Para usar o JSON Server com o Android Emulator sem enfrentar o problema do localhost, você pode seguir os seguintes passos:

Primeiro, você precisa saber o endereço IP da sua máquina. No Windows, você pode abrir o Prompt de Comando e digitar ipconfig. Anote o endereço IP IPv4 que aparece na seção "Adaptador Ethernet Ethernet" ou "Adaptador sem fio Wi-Fi", dependendo da sua conexão com a Internet.

Inicie o JSON Server na linha de comando com o seguinte comando: json-server --host {seu endereço IP} db.json. Certifique-se de substituir {seu endereço IP} pelo endereço IP que você anotou anteriormente e db.json pelo nome do seu arquivo JSON.

Agora, abra o seu aplicativo Android e substitua "localhost" pelo endereço IP que você anotou na etapa 1. Por exemplo, se o seu endereço IP é "192.168.0.10" e o URL da sua API é "http://localhost:3000", você deve alterá-lo para "http://192.168.100.40 :3000".

Salve as alterações e execute o seu aplicativo Android no emulador. Deve agora ser capaz de se conectar com a sua API JSON Server sem problemas.

Lembre-se de que o endereço IP da sua máquina pode mudar se você se conectar a uma rede diferente ou se reiniciar o seu roteador. Nesses casos, você precisará repetir o processo de obtenção do endereço IP e atualizar o URL do seu aplicativo Android.