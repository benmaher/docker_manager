import Ember from "ember";

export default Ember.Controller.extend({
  showBanner: function(){
    if(this.get("bannerDismissed")){
      return false;
    }

    var banner = this.get("banner");
    return banner && banner.length > 0;
  }.property("banner", "bannerDismissed", "banner.@each"),

  appendBannerHtml: function(html){
    var banner = this.get("banner") || [];
    if(banner.indexOf(html) === -1){
      banner.pushObject(html);
    }
    this.set("banner", banner);
  },

  actions: {
    dismiss: function () {
      this.set("bannerDismissed", true);
    }
  }
});
