TrelloClone.Views.BoardShow = Backbone.View.extend({

  template: JST['boards/show'],

  className: 'boards-show',

  initialize: function() {
    // this.listenTo(this.collection, 'sync', this.render);
    $('body').css('background-color', 'rgb(255, 255, 255)')
  },

  render: function() {
    var content = this.template({
      board: this.model
    });

    this.$el.html(content);
    return this;
  }
});