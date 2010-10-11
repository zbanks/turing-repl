function Turing($e, options){
    this.$e = $e;
    this.$tape = $e.find("div.tape");
    
    this.pos = 0;
    this.state = 0;
    this.states = options.states || [];
    this.tapelen = options.tapelen || 1;
    this.symbols = options.symbols || [0, 1];
    

    this.resetTape();
}

Turing.prototype.resetTape = function(){
    this.$tape.html("");
    for(var i = 0; i < this.tapelen; i++){
        this.$tape.append('<span class="tapeitem symbol-0" id="tapeitem-'+i+'">&nbsp;</span>');
    }
    var _this = this;
    this.$tape.find("span.tapeitem").click(function(){
        var $t = $(this);
        var sym = (_this.getTapeItem($t)+1) % _this.symbols.length;
        _this.setTapeItem($t, sym);
    });
}

Turing.prototype.getTapeItem = function(){
    var $ti;
    if(arguments.length == 0){
        $ti = this.$tape.find("span.tapeitem")[this.pos];
    }else{
        $ti = arguments[0];
    }
    for(var i = 0; i < this.symbols.length; i++){
        if($ti.hasClass("symbol-" + i)){
            return i;
        }
    }
    return null;
}

Turing.prototype.setTapeItem = function(){
    var $ti;
    var sym;
    if(arguments.length == 0){
        return null;
    }else if(arguments.length == 1){
        $ti = this.$tape.find("span.tapeitem")[this.pos];
        sym = arguments[0];
    }else{
        $ti = arguments[0];
        sym = arguments[1];
    }
    for(var i = 0; i < this.symbols.length; i++){
        $ti.removeClass("symbol-" + i)
    }
    $ti.addClass("symbol-" + sym);
}
