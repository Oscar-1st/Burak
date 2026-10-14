console.log("Signup frontend javascript file");


$(function () {});

function validatesignupForm () {
  const memnberNick = $(".member-nick").val();
  const memnberPhone = $(".memnber-phone").val();
  const memnberPassword = $(".memnber-password").val();
  const confirmPassword = $(".confirm-password").val();

  if(
    memnberNick === "" ||
    memnberPhone === "" ||
    memnberPassword === "" ||
    confirmPassword === ""
  ){
    alert("Please insert all required inputs!")
  }

  if(memnberPassword !== confirmPassword){
    alert("Password differs, please check!")
  }
}