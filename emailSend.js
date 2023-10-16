function emailSend{
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "ONRST@gmail.com",
      Password : "E476E26580CCADB86B99E6B3F474076F61DA",
      To : 'amine.arguig@enim.ac.ma',
      From : "aminearguig07@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }