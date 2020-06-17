/*Name this external file gallery.js*/

function upDate(previewPic)
{
  document.getElementById('image').innerHTML=previewPic.alt; //previewPic will get "this" variable and so previewPic.alt will point towards the content in alt.
    document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src +"')"; //this url will point towards the src url of this id.
 
  
	}

	function unDo(){
    
    document.querySelector('#image').style.backgroundImage = "url('')";
    document.querySelector('#image').innerHTML = "click on any image to see or hover on it to see it in the display box"
    
		
	}