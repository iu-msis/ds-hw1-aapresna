var randomApp = new Vue({
  el: '#random',
  data: {
      person:
        {
          gender: '',
          name: {
            title: '',
            first: '',
            last: ''
          },
          location: {
            street: '',
            city: '',
            state: '',
            postcode: '',
            coordinates: {
              latitude: '',
              longitude: ''
            },
            timezone: {
              offset: '',
              description: ''
            }
          },
          email: '',
          login: {
            uuid: '',
            username: '',
            password: '',
            salt: '',
            md5: '',
            sha1: '',
            sha256: ''
          },
          dob: {
            date: '',
            age: 0
          },
          registered: {
            date: '',
            age: 0
          },
          phone: '',
          cell: '',
          id: {
            name: '',
            value: ''
          },
          picture: {
            large: '',
            medium: '',
            thumbnail: ''
          },
          nat: ''
        }
      ,
      info: {
        seed: '',
        results: 0,
        page: 0,
        version: ''
      }
    },

    methods: {
      refresh: function (event) {
        const url = 'https://randomuser.me/api/?inc=picture,name,nat,dob,email&noinfo';
        fetch(url)
        .then( response => response.json() )
        .then( json => {randomApp.person = json.results[0]} )
        .catch( err => {
          console.log('TASK FETCH ERROR:');
          console.log(err);
        })
      },
      pretty_date: function (d) {
      return moment(d).format('l')
    }
  },
  created () {
    this.refresh();
  }

}
);
// const url = 'https://randomuser.me/api/?inc=picture,name,nat,dob,email&noinfo';
// fetch(url)
// .then( response => response.json() )
// .then( json => {randomApp.results = json} )
// .catch( err => {
//   console.log('TASK FETCH ERROR:');
//   console.log(err);
// })
