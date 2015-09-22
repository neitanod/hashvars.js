function HashVars(options){

  var self = this;

  self.initialize = function(options){
    self.fromString(top.location.hash.replace(/^#/,''));
  }

  self.fromString = function(str) {
    self.vars = {};
    var parts = str.replace(/([^=&]+)=([^&]*)/gi,
      function(m,key,value) {
        self.vars[key] = decodeURIComponent(value);
      });
    return self;
  }

  self.toString = function(){
    var o = "";
    for (a in self.vars) {
      if(o != '') o = o + "&";
      o = o + encodeURIComponent(a)+"="+encodeURIComponent(self.vars[a]);
    }
    if(o=='') o = '/';
    return o;
  }

  self.setVars = function(vars) {
    self.vars = vars;
    return self;
  }

  self.getVars = function() {
    return self.vars;
  }

  self.set = function(varname, value) {
    self.vars[varname] = value;
    return self;
  }

  self.unset = function(varname) {
    delete(self.vars[varname]);
    return self;
  }

  self.get = function(varname) {
    if (self.vars[varname] != undefined) {
      return self.vars[varname];
    } else {
      return undefined;
    }
  }

  self.go = function(){
    top.location.hash = self.toString();
    return self;
  }

  self.initialize(options);
}
