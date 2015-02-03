TrelloClone.Views.BoardForm = Backbone.View.extend({
  events: {
    'submit form': 'submit'
  },

  template: JST['boards/form'],

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    debugger
    var attrs = $(event.target).serializeJSON();

    var success = function () {
      this.collection.add(this.model, { merge: true });
      Backbone.history.navigate("", { trigger: true });
    }.bind(this)

    function errors (model, response) {
      $('.errors').empty();
      response.responseJSON.forEach(function (el) {
        var li = $('<li></li>');
        li.html(el);
        $('.errors').append(li);
      }.bind(this));
    }

    this.model.save(attrs, {
      success: success,
      error: errors.bind(this)
    });
  }
});