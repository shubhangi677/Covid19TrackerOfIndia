({
    doInit:function(component, event, helper) {
        component.set('v.columns',[
            {label: 'States Of India', fieldName: 'state', type: 'text'},
            {label: 'Confirmed Cases', fieldName: 'confirmed', type: 'text'},
            {label: 'Active Cases', fieldName: 'active', type: 'text'},
            {label: 'Recovered Cases', fieldName: 'recovered', type: 'text'},
            {label: 'Deaths Occured', fieldName: 'deaths', type: 'text'},
        ]);
            helper.getAPiData(component);
            }
            })
