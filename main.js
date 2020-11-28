const app = new Vue({
    el:'#app',
    data:{
        sum:0,
        numStart:0,
        

    },
    methods:{
        operation:function(key){
            return this.sum += key;
        },
        clear: function(){
            this.sum = 0 ;
            this.numStart = 0;

        },
        result: function(){
            return this.numStart = eval(this.sum)
        }
    }
})