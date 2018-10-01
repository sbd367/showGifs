    $(document).ready(function(){

        $('#rowK').hide();
        $('.col-md-1').hide();

        function emptyThings(){

                $('#rowK').show();
                $('.col-md-1').show();
                $('#RatingR').empty();
                $('#gif').empty();
                $("#moreGifL").empty();
                $("#moreGifR").empty();
        }

        //array fo buttons
        let topics = ["Gymkhana", "Kung Fury", "MotoGP", "Top fuel", "Rick and Morty"];

    
//      click funtion to add a new button
        $('#subbtn').click(function(event){
            event.preventDefault();
            let mkbtn = $('#mkBtn').val().trim();
         if(mkbtn){
                topics.push(mkbtn);
                makeButtons();
         }
    
        });


    
        // function to make ajax query
        $('#submit').click(function(event){
        event.preventDefault();
            emptyThings();

            let search =  $('#term').val().trim();
                
            let key = "&api_key=mdrRGguSB0MckrcUeTgQPGBK1c0A4AfP";
            let url = "http://api.giphy.com/v1/gifs/search?q="+search+key;

            $.ajax({
                url: url,
                method: "Get" 
            }).then(function(response){
                
                let data = response.data;
                var random = Math.floor((Math.random() * 24) + 1);

                for(var i = 0; i < 1; i++){

                    var random = Math.floor((Math.random() * 24) + 1);
                    $('#gif').append("<img id='giff' src='" +data[random].images.fixed_width.url+ "'/>");
                    $('#gif').append("<h2 id='RatingT'>"+data[random].rating+"</h2>");

                }

                for(var i = 2; i < 7; i++){

                var random = Math.floor((Math.random() * 24) + 1);
                $('#moreGifL').append("<img id='moreGifs' src='" +data[random].images.fixed_height.url+ "'/>");
                $('#moreGifL').append("<h2 id='Rating'>"+data[random].rating+"</h2>");
            
                }


                for(var i = 2; i < 7; i++){

                    var random = Math.floor((Math.random() * 24) + 1);
                    $('#moreGifR').append("<img id='moreGifs' src='" +data[random].images.fixed_height.url+ "'/>");
                    $('#moreGifR').append("<h2 id='Rating'>"+data[random].rating+"</h2>");
                
                    }

            })
        });

       
        //  function to makeButtons for every string in topic array
            function makeButtons(){
           
            $('#buttons').empty();
            
            for(var i = 0; i <= topics.length - 1; i++){
                
                var input = "<button id='postButton' postButton='"+topics[i]+"' class='btn btn-primary' type='button'>";
                
                $('#buttons').append(input+topics[i]+"</button>");
            }

            $('button').click(function(){
            

                emptyThings();
    
                var input = $(this).attr("postButton");
                console.log(input);
                
                
                let key = "&api_key=mdrRGguSB0MckrcUeTgQPGBK1c0A4AfP";
                let url = "http://api.giphy.com/v1/gifs/search?q="+input+key;
                
    
                $.ajax({
                    url: url,
                    method: "Get" 
                }).then(function(response){
                    
                    let data = response.data;
                    console.log(data);

    
                    for(var i = 0; i < 1; i++){
    
                        var random = Math.floor((Math.random() * 24) + 1);
                        console.log(random);
                        $('#gif').append("<img id='giff' gif-status='animate' src='"+data[random].images.fixed_height.url+"' still_Url='"+data[random].images['480w_still'].url+"' animateSrc='" +data[random].images.fixed_height.url+ "'/>");
                        $('#gif').append("<h2 id='RatingT'>"+data[random].rating+"</h2>");
                    }
    
                    for(var i = 2; i < 7; i++){
    
                        var random = Math.floor((Math.random() * 24) + 1);
                        $('#moreGifL').append("<img id='moreGifs' gif-status='animate' src='" +data[random].images.fixed_height.url+ "' still_Url='"+data[random].images['480w_still'].url+"' animateSrc='" +data[random].images.fixed_height.url+"'/>");
                        $('#moreGifL').append("<h2 id='Rating'>"+data[random].rating+"</h2>");
                
                    }
                    for(var i = 2; i < 7; i++){
    
                        var random = Math.floor((Math.random() * 24) + 1);
                        $('#moreGifR').append("<img id='moreGifs' gif-status='animate' src='" +data[random].images.fixed_height.url+ "' still_Url='"+data[random].images['480w_still'].url+"' animateSrc='" +data[random].images.fixed_height.url+"'/>");
                        $('#moreGifR').append("<h2 id='Rating'>"+data[random].rating+"</h2>");
                
                    }


                    //click funtion to toggle still image
                    $("img").on("click", function(){
                        var state = $(this).attr("gif-status");
                        var stillUrl = $(this).attr("still_Url");
                        var urlDisplay = $(this).attr("animateSrc");
                        console.log(stillUrl);

                        if(state == "animate"){
                            $(this).attr("gif-status", "still");
                            $(this).attr("src", stillUrl);
                        console.log(stillUrl+state);
                        }else{
                            $(this).attr("gif-status", "animate");
                            $(this).attr("src", urlDisplay)
                        }
                    })
                })
            });
        }
     


        makeButtons();
   


    
    });