function float210(list){
	var a = '';
	if(typeof list == 'object') for(var i = 0; i < list.length;i++){
		var a2 = list[i].toString(2)
        for(var i = a2.length;i<8;i++){
            a2 = '0'+a2;
        }
		a+=a2
	}else if(typeof list == 'string') a = list;

	var s = a[0];
	var e = parseInt(a.substr(1, 8), 2);
	var m = a.substr(9);
	
	var i0 = 0;
	for(var i = m.length-1; i>=0;i--){
		if(m[i] == '0') i0++;
		if(m[i] != '0') break;
	}
	m = m.substr(0, m.length-i0);
	var mm = 0;
    for(var i = 1;i<=m.length;i++){
      mm+=2**(-i)*m[i-1]
    }
	var sign = s == '0' ? 1 : -1;
	var exponent = (e-127);
	var Mantissa = (e ? 1 : 0) + mm;
	
	return sign *( 2**exponent )* Mantissa
}