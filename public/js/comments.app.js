var commentsApp = new Vue({
  el: '#commentsMain',
  data: {
    comment: {
      id: 0,
      comment: '',
    },
    work: [ ],
    workForm: { },   // populated by this.getEmptyWorkForm()
    teamList: [] // All the teams
  },

  methods: {
    handleWorkForm(e) {

      const s = JSON.stringify(this.workForm);

      console.log(s);

      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.work.push(json)})
      .catch( err => {
        console.error('WORK POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.workForm = this.getEmptyWorkForm();
    },

    getEmptyWorkForm() {
      return {
        id: 0,
        comment: null,
      }
    },
  },
  created () {

    // Do data fetch
    const url = new URL("http://ec2-34-226-150-61.compute-1.amazonaws.com/api/comment.php");
    console.log(url);

    // Populate workForm with default values
    this.workForm = this.getEmptyWorkForm();

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.work = json} )
    .catch( err => {
      console.error('WORK FETCH ERROR:');
      console.error(err);
    })
  }
})
