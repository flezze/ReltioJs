UI.onEvent(function(type,data){
	alert(JSON.stringify(data,null,2));
	if (type ==’execute'){
		UI.openWindow('htt;//10.239.2.143:443/hcpdcr');
	}
}