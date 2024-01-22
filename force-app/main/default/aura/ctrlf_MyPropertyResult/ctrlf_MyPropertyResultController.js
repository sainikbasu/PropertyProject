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

        var eventSource = event.getSource();

        var propId = eventSource.get('v.value');

        component.set('v.propertyId',propId);

        component.set('v.openEnquieryDetails',"true");     

    },

    closeEnquieryModal : function(component, event, helper) {

        component.set('v.openEnquieryDetails',"false");   

    },

    NavigateToPropDetails : function(component, event, helper) {

        var navService = component.find("navService");

        var eventSource = event.getSource();

        var propId = eventSource.get('v.value');

        console.log('NavigateToPropDetails propId'+propId);

        var pageReference = {

            type: "standard__component",

            attributes:{

                componentName:"c__ctrlf_MyMasterPropertyTab"

            },

            state:{

                "c__propertyId":propId

            }

        };

         console.log('NavigateToPropDetails pageReference'+pageReference);

        component.set("v.pageReference",pageReference);

         console.log('NavigateToPropDetails pageReference'+JSON.stringify(pageReference));

        navService.navigate(pageReference);

    }

})