var commentsApp = new Vue({
  el: '#commentsMain',
  data: {
      comment: [],
      newCommentForm: {}
    },

  methods: {
    handleWorkForm(e) {

this.newCommentForm=this.newCommentForm.comment;
      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(
          {comment:this.newCommentForm.comment}) // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.comment.push(json)})
      .catch( err => {
        console.error('WORK POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      // this.workForm = this.getEmptyWorkForm();
    },


    getAllComments: function() {
      fetch('api/comment.php')
      .then(response => response.json())
      .then(json => {commentsApp.comment = json;})
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
this.newCommentForm = this.getEmptyWorkForm();

  }
})
