({

    fetchAllProperty : function(component, event, helper) {

        helper.fetchAllPropertyHelper(component, event, helper);

    },

    ownerDetailsClick : function(component, event, helper) {

        var eventSource = event.getSource();

        var propOwnerId = eventSource.get('v.value');

        component.set('v.propOwnerId',propOwnerId);

    component.set('v.openOwnerDetails',"true"); 

       

    },

    closeOwnerModal : function(component, event, helper) {

    component.set('v.openOwnerDetails',"false");   

    },

    feedbackClicked : function(component, event, helper) {

       

    },

    NavigateToPropDetails : function(component, event, helper) {

       

    }

})