var commentsApp = new Vue({
  el: '#commentsMain',
  data: {
      comment:{
        id:0,
        comment:''
      },
      commentArr: [],
      newCommentForm: {}
    },

  methods: {
    handleCommentForm(e) {

      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(
          {comment:this.newCommentForm}) // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.commentArr.push(json)})
      .catch( err => {
        console.error('WORK POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.newcommentForm = this.getEmptyCommentForm();
    },

    getAllComments() {
      fetch('api/comment.php')
      .then(response => response.json())
      .then(json => {commentsApp.commentArr = json;})
      .catch( err => {
        console.error('FETCH ERROR:');
        console.error(err);
      })
    },

    getEmptyWorkForm() {
      return {
        comment: null,
      }
    },
  },

  created () {

this.getAllComments();
this.newCommentForm = this.getEmptyCommentForm();

  }
})
