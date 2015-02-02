TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards/:id": "boardsShow"
  },

  boardsIndex: function() {
    TrelloClone.Collections.boards.fetch();

    var view = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.Collections.boards
    });

    this._swapview(view);
  },

  boardsShow: function(id) {
    var board = TrelloClone.Collections.boards.getOrFetch(id);

    var view = new TrelloClone.Views.BoardShow({
      model: board
    });

    this._swapview(view);
  },

  _swapview: function(view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    $('#main').html(view.render().$el);
  }
});