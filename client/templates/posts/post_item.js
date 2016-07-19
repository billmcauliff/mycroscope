Template.postItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    },
    
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  commentsCount: function() {
    return Comments.find({postId: this._id}).count();
  },
  commentsSingularOrPlural: function(commentsCount){
      var comment = {};
          if (Comments.find({postId: this._id}).count() === 1){
            comment = "comment";
          } else {
            comment = "comments";
          }
          
        return comment;
      }
    }
);