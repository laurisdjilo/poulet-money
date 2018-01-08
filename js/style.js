// Material Select Initialization
$(document).ready(function() {
    $('.mdb-select1').material_select();
    $('.mdb-select2').material_select();
    
    var t ={
        Yaounde:['Emia','Mimboman','Nsimeyong'],
        Douala: ['Makepe','Logpom','Bepanda'],
        Bafoussam: ['petit marche','concession','eglise'],
        Ngaoundere: ['sabongari','mazernaute','ecole tina'],
        Garoua: ['lom','ju garoua','doui garoua'],
        Limbe:['sjlimbe','limbe2','limbe3']
    };
    $("select#ville").change(function(){
        var h = t[$(this).val()];
        var taille = h.length;
        var rep = '<option value="" disabled selected>Votre quatier</option>';
        for(var i=0;i<taille;i++){
            rep += '<option value="'+h[i]+'">'+h[i]+'</option>';
        }
        $("#quartier").html(rep);
        $('.mdb-select2').material_select('destroy');
        $('.mdb-select2').material_select();
    });
    
  });