var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="portfoliodb"]', function (e) {
    firebase.database().ref('portfolio').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#retorno").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
                //listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-25">'+ item.val().Titulo +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Descricao +'</div>';
               
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#retorno").append(listHtml);
    
            
        })
    })
    
});
  
