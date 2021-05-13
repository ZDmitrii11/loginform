import _ from 'lodash'

export default {
    data(){
        return{
            page: 1 ,
            pageSize:Number(5),
            pageCount:0,
            allItems:[],
            items:[],
            initialArray:[]
        }
    },
    methods:{
        changePage(page){
            this.$router.push(`?page${page}`)
            this.items = this.allItems[page-1] || this.allItems[0]

        },
        setupPagination(allItems){
            this.initialArray = [...allItems];
            this.allItems = _.chunk(allItems,this.pageSize)
            this.pageCount = _.size(this.allItems)
            this.items = this.allItems[this.page-1] || this.allItems[0]

        },

        onChange(item){
           this.pageSize = item
            this.setupPagination(this.initialArray)
        },

    }



}
