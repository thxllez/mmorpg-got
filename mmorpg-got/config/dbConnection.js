/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
	var db = new mongo.Db( // instanciando a classe de conexão, que espera 3 parâmetros:
		'got', // string do nome do banco de dados
		new mongo.Server( // objeto de conexão com o servidor 
			'localhost', // string contendo o endereço do banco de dadoss 
			27017, // porta de conexão 
			{} //opções de configurações do servidor - não vamos utilizar
		), 
		{} //objeto de configurações adicionais - não vamos utilizar também
	);

	return db;
}

module.exports = function(){
	return connMongoDB;
}