if(!viewimage) { var viewimage = {}; }

viewimage.options = {

  // Preference branch of extension:
  branch: null,

  // API shortcuts:
  Cc: Components.classes,
  Ci: Components.interfaces,

  load: function()
  {
    var prefservice = this.Cc["@mozilla.org/preferences-service;1"].getService(this.Ci.nsIPrefService);
    this.branch = prefservice.getBranch("extensions.viewimage.");

    document.getElementById("viewimage-viewinnewtab").checked = this.branch.getBoolPref("viewinnewtab");
  }
};
