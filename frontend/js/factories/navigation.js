myApp.factory('NavigationService', function () {
    var navigation = [
        //     {
        //     name: "Home",
        //     classis: "active",
        //     anchor: "home",
        //     subnav: [{
        //         name: "Subnav1",
        //         classis: "active",
        //         anchor: "home"
        //     }]
        // }, {
        //     name: "Form",
        //     classis: "active",
        //     anchor: "form",
        //     subnav: []
        // }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },

        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        ContactSave: function (formdata, callback) {
            $http({
                url: adminurl + 'ContactUs/save',
                method: 'POST',
                withCredentials: false,
                data: formdata
            }).success(callback);
        },
    };
});