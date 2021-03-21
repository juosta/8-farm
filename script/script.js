/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function movingButton(){
    document.getElementById( "moving_button" ).setAttribute( "onClick", "removeClass();" );
    document.getElementById('moving_button').classList.remove='moving_down_button';
    document.getElementById('moving_button').className='moving_button';
  }
  function removeClass(){
    document.getElementById( "moving_button" ).setAttribute( "onClick", "movingButton();" );
    document.getElementById('moving_button').classList.remove='moving_button';
    document.getElementById('moving_button').className='moving_down_button';
  }

  function slideRight1() {
    document.getElementById('scrollable_stat1').style.visibility='visible';
    document.getElementById('scrollable_stat2').style.visibility='hidden';
    document.getElementById('statscrollbutton').setAttribute( "onClick", "slideRight2();" );
  };
  function slideRight2(){
    document.getElementById('scrollable_stat2').style.visibility='visible';
    document.getElementById('scrollable_stat1').style.visibility='hidden';
    document.getElementById( "statscrollbutton" ).setAttribute( "onClick", "slideRight1();" );
  }