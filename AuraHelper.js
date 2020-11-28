({ getAPiData : function(component) {
    var action = component.get('c.getCovidData');
    action.setCallback(this,function(response){
        var state = response.getState();
        //console.log(state);
        if(state === 'SUCCESS'|| state ==='DRAFT'){
            // alert('SUCCESS'); 
            var result = response.getReturnValue();
            console.log(JSON.stringify(result)); 
            component.set('v.confirmed',result.data.total.confirmed);
            component.set('v.recovered',result.data.total.recovered);
            component.set('v.deaths',result.data.total.deaths);
            component.set('v.active',result.data.total.active);
            
            var dataArray = [] ;
            for(var i=0;i<result.data.statewise.length;i++){
                var fetchdata ={
                    id :i,
                    state:result.data.statewise[i].state,
                    confirmed:result.data.statewise[i].confirmed,
                    recovered :result.data.statewise[i].recovered,
                    deaths:result.data.statewise[i].deaths,
                    active:result.data.statewise[i].active,
                }
                dataArray.push(fetchdata);
            }
            component.set('v.data',dataArray);
            
        }
        else if(state ==='ERROR'){
            alert('ERROR'); 
        }
            else if(state==='INCOMPLETE'){
                alert('INCOMPLETE');
            }
    },'ALL');
    $A.enqueueAction(action);
}
 })
