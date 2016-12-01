const common = {
  init() {
    this.setRappit();
  },
  /**
   * 设置rappit
   */
  setRappit() {
    $(function() {
      $(document).on('click', '.ripple-effect', function(e) {
        var rippler = $(this);
        if(rippler.find('.ink').length == 0) {
          rippler.append('<b class="ink"></b>');
        }
        var ink = rippler.find(".ink");
        ink.removeClass("animate");

        if(!ink.height() && !ink.width()) {
          var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
          ink.css({height: d, width: d});
        }
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;
        ink.css({
          top: y+'px',
          left: x+'px'
        }).addClass("animate");
      });
    });
  }
};
export default common;
