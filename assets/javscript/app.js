    $(document).ready(function(){

        let topics = ["gymkhana", "Kung Fury", "MotoGP", "top fuel", "Wakesurfing"];

        

            $('#subbtn').click(function(){

                let mkbtn = $('#mkBtn').val().trim();
            
                    topics.push(mkbtn);
                    makeButtons();

        
            });
       
        //  function to makeButtons
        function makeButtons(){
           
            $('#buttons').empty();
            
            for(var i = 0; i <= topics.length - 1; i++){
                
                var input = "<button id='postButton' postButton='"+topics[i]+"' class='btn btn-primary' type='button'>";
                
                $('#buttons').append(input+topics[i]+"</button>");
            };
              
        
            $('button').click(function(){
            
                console.log(this);


                $('#RatingR').empty();
                $('#gif').empty();
                $("#moreGif").empty();

                var input = $(this).attr("postButton");
                console.log($(this).attr("postButton"));
                console.log(input);
                
                
                let key = "&api_key=mdrRGguSB0MckrcUeTgQPGBK1c0A4AfP";
                let url = "http://api.giphy.com/v1/gifs/search?q="+input+key;
                

                $.ajax({
                    url: url,
                    method: "Get" 
                }).then(function(response){
                    
                    let data = response.data;
                    console.log(data);

                    for(var i = 0; i < 2; i++){

                        $('#gif').append("<img id='giff' src='" +data[i].images.fixed_height.url+ "'/>");
                        $('#gif').append("<h2 id='RatingT'>"+data[i].rating+"</h2>");
                    }

                    for(var i = 2; i < 12; i++){

                        $('#moreGif').append("<img id='moreGifs' src='" +data[i].images.fixed_height.url+ "'/>");
                        $('#RatingR').append("<h2 id='Rating"+[i]+"'>"+data[i].rating+"</h2>");
                
                    }

                })
            });


        
            // function to make ajax query
            $('#submit').click(function(){
            
                $('#RatingR').empty();
                $('#gif').empty();
                $("#moreGif").empty();

                let search =  $('#term').val().trim();
                if(search == ""){
                    return;
                }else{
                    console.log(search);
                }
                    
                let key = "&api_key=mdrRGguSB0MckrcUeTgQPGBK1c0A4AfP";
                let url = "http://api.giphy.com/v1/gifs/search?q="+search+key;

                $.ajax({
                    url: url,
                    method: "Get" 
                }).then(function(response){
                    
                    let data = response.data;
                    console.log(data);

                    for(var i = 0; i < 2; i++){

                        $('#gif').append("<img id='giff' src='" +data[i].images.fixed_width.url+ "'/>");
                        $('#gif').append("<h2 id='RatingT'>"+data[i].rating+"</h2>");
                    }

                    for(var i = 2; i < 12; i++){

                    $('#moreGif').append("<img id='moreGifs' src='" +data[i].images.fixed_height.url+ "'/>");
                    $('#RatingR').append("<h2 id='Rating"+[i]+"'>"+data[i].rating+"</h2>");
                
                    }

                })
            });
    
        }
        

        makeButtons();
   


    
    });