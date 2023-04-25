import { defineStore } from 'pinia';
import { useRoute } from 'vue-router'

export const useApiStore = defineStore('useApiStore', {
  state: () => ({
    API_KEY: 'd8d83694ace49ebb05544e65fab87150',
    DATA_PATH: 'https://api.themoviedb.org/3/',
    IMG_PATH: 'https://image.tmdb.org/t/p/',
    data: [],
    item: [],
    banners: [],
    genres: [],
    page: 1,
    showSpinnerType: ''
  }),
  getters: {

  },
  actions: {

    getApi(type = 'popular', page = '1', id = ''){
      
      this.showSpinnerType = type

      switch (page) {
        case '-':
          if(this.page > 1)
          this.page--
          break;
        case '+':
          this.page++
          break;
        default:
          this.page = page
          break;
      }      

      let url = this.DATA_PATH+'movie/'+type+'?api_key='+this.API_KEY+'&language=en-US&page='+this.page
      
      if(type === 'similar') {
        const route = useRoute()
        const param_id = route?.params.id || id
        url = this.DATA_PATH+'movie/'+param_id+'/similar?api_key='+this.API_KEY+'&language=en-US&page='+this.page
      }        

      fetch(url)
      .then(response => response.json())
      .then(response => {
        
        // items
        this.data.type = type
        this.data[type] = response.results

        // Banners
        if(!this.banners.length){
          this.data[type].forEach(element => {
            this.banners.push({title: element.title, bg: element.backdrop_path, id: element.id, type: type})
          });
          // console.log(this.banners);
        }
        // console.log(this.data)

        this.showSpinnerType = ''
      })
      .catch(err => console.error(err));

    },
    getItem(type, id){

      this.item = this.data[type].filter( 
        function(item) {
          return item.id == id
        }
      )
      // console.log('item: ', this.item)
      // Get Genres
      const genres_ids = this.item[0].genre_ids
      this.item[0].genres = []

      for(let i=0; i<genres_ids.length; i++){

        let item = this.genres.filter( 
          function(item) {
            return item.id == genres_ids[i]
          }
        )

        this.item[0].genres.push(item)
      }

    },
    getGenres(){
      fetch(this.DATA_PATH+'genre/movie/list?api_key='+this.API_KEY+'&language=en-US')
      .then(response => response.json())
      .then(response => {
        this.genres = response.genres
        // console.log(response.genres)
      })
      .catch(err => console.error(err));
    },
    initConf(){
      // Get Genres
      this.getGenres()
    }

  },
});
