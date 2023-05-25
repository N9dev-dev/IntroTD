async function sendContact(ev) {
        ev.preventDefault();
    
        const senderName = document
          .getElementById('nameInput').value;
        const senderEmail = document
          .getElementById('emailInput').value;
        const senderMessage = document
          .getElementById('messageInput').value;

        const webhookBody = {
          embeds: [{
            title: 'Contact Form Submitted',
            fields: [
              { name: 'Sender Email', value: senderEmail },
                { name: 'Sender Name', value: senderName },
              { name: 'Message', value: senderMessage }
            ]
          }],
        };

        const homepage = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA5NTAzNzMwODU0MzE3NjcwNC8tMkl1Y3FLeUk1NncweGZUM3JSLUFLeURLQW5ENkt4YjFnNUxPRFBvRk03R3ptYnFWUUQyLThPYmktbXNLckkxTnRFdQ==");

        const response = await fetch(homepage, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });

        if (response.ok) {
          alert('Thank you', senderName, "the message is recieved!");
        } else {
          alert('There was an error! Try again later!');
        }
      }