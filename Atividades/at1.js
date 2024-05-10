
function data_maior (d1, d2){
    
	const data1 = new Date('2024-05-09');
	const data2 = new Date('2024-05-10');
	
	
	
	const d1 = parse(dataStr1, 'dd/MM/yyyy', new Date());
    const d2 = parse(dataStr2, 'dd/MM/yyyy', new Date());
	
	if (d1 > d2)
	{
		return data1;
    }else
	{
        return data2;
    }
}




console.log("O proximo dia foi o: " + Data_maior(d1, d2));