	
	function data_h(){
		
		var hoje = new Date();
		
		var hor,min,ano,dia;
		
		hor = getHours();	
		min = getMinutes();
		ano = getYear();
		dia = getDay();
		
		hora = hora < 10 ? '0' + hora : hora;
		minuto = minuto < 10 ? '0' + minuto : minuto;
		dia = dia < 10 ? '0' + dia : dia;
		mes = mes < 10 ? '0' + mes : mes;
		
		
		return hora + ':' + minuto + ' - ' + dia + '/' + mes + '/' + ano;
	}
	
	console.log(data_h())