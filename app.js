new Vue({
    el: '#app',
    data() {
        return {
            class1: 'कक्षा १ ',
            class2:'कक्षा २',
            class3:'कक्षा ३',
            class4:'कक्षा ४',
            class5:'कक्षा ५ ',
            dateAndDay: '  मई 2020 ',
            dateDigit:'',
            }
    },
    methods: {
        
    },
    created() {
        var d = new Date();
        const x = d.getDate();
        this.dateDigit=x;
    },

})