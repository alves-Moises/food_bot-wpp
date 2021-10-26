// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  })
  


    client.onMessage( async (message) => {
      // Send List menu
      //This function does not work for Bussines contacts
      message.reply('Testando assync')
      const list = [
        {
          title: "Pasta",
          rows: [
            {
              title: "Ravioli Lasagna",
              description: "Made with layers of frozen cheese",
            }
          ]
        },
        {
          title: "Dessert",
          rows: [
            {
              title: "Baked Ricotta Cake",
              description: "Sweets pecan baklava rolls",
            },
            {
              title: "Lemon Meringue Pie",
              description: "Pastry filled with lemonand meringue.",
            }
          ]
        }
      ];

      client
      .sendText(message.from, 'Welcome Venom 🕷')

      await client.sendListMenu(message.reply, 'Title', 'subTitle', 'Description', 'menu', list)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

      // Send Messages with Buttons Reply
      const buttons = [
      {
        "buttonText": {
          "displayText": "Text of Button 1"
          }
        },
      {
        "buttonText": {
          "displayText": "Text of Button 2"
          }
        }
      ]
      await client.sendButtons('000000000000@c.us', 'Title', buttons, 'Description')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
      // Send audio file MP3
      await client.sendVoice('000000000000@c.us', './audio.mp3').then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

      // Send audio file base64
      await client.sendVoiceBase64('000000000000@c.us', base64MP3)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

      // Send contact
      await client
      .sendContactVcard('000000000000@c.us', '111111111111@c.us', 'Name of contact')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

      // Send a list of contact cards
      // await client
      // .sendContactVcardList('000000000000@c.us', [
      //   '111111111111@c.us',
      //   '222222222222@c.us',
      // ])
      // .then((result) => {
      //   console.log('Result: ', result); //return object success
      // })
      // .catch((erro) => {
      //   console.error('Error when sending: ', erro); //return object error
      // });

      // Send basic text
      await client
      .sendText('000000000000@c.us', '👋 Hello from venom!')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

      // Send location
      await client
      .sendLocation('000000000000@c.us', '-13.6561589', '-69.7309264', 'Brasil')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

      // Automatically sends a link with the auto generated link preview. You can also add a custom message to be added.
      await client
      .sendLinkPreview(
        '000000000000@c.us',
        'https://www.youtube.com/watch?v=V1bFr2SWP1I',
        'Kamakawiwo ole'
      )
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

      // Send image (you can also upload an image using a valid HTTP protocol)
      await client
      .sendImage(
        '000000000000@c.us',
        'path/to/img.jpg',
        'image-name',
        'Caption text'
      )
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });


      // Send image file base64
      // await client.sendImageFromBase64('000000000000@c.us', base64Image, "name file")
      // .then((result) => {
      //   console.log('Result: ', result); //return object success
      // })
      // .catch((erro) => {
      //   console.error('Error when sending: ', erro); //return object error
      // });

      // Send file (venom will take care of mime types, just need the path)
      // you can also upload an image using a valid HTTP protocol
      // await client
      // .sendFile(
      //   '000000000000@c.us',
      //   'path/to/file.pdf',
      //   'file_name',
      //   'See my file in pdf'
      // )
      // .then((result) => {
      //   console.log('Result: ', result); //return object success
      // })
      // .catch((erro) => {
      //   console.error('Error when sending: ', erro); //return object error
      // });

      // Sends file
      // base64 parameter should have mime type already defined
      // await client
      // .sendFileFromBase64(
      //   '000000000000@c.us',
      //   base64PDF,
      //   'file_name.pdf',
      //   'See my file in pdf'
      // )
      // .then((result) => {
      //   console.log('Result: ', result); //return object success
      // })
      // .catch((erro) => {
      //   console.error('Error when sending: ', erro); //return object error
      // });

      // Generates sticker from the provided animated gif image and sends it (Send image as animated sticker)
      // image path imageBase64 A valid gif and webp image is required. You can also send via http/https (http://www.website.com/img.gif)
      // await client
      // .sendImageAsStickerGif('000000000000@c.us', './image.gif')
      // .then((result) => {
      //   console.log('Result: ', result); //return object success
      // })
      // .catch((erro) => {
      //   console.error('Error when sending: ', erro); //return object error
      // });

      // Generates sticker from given image and sends it (Send Image As Sticker)
      // image path imageBase64 A valid png, jpg and webp image is required. You can also send via http/https (http://www.website.com/img.jpg)
      // await client
      // .sendImageAsSticker('000000000000@c.us', './image.jpg')
      // .then((result) => {
      //   console.log('Result: ', result); //return object success
      // })
      // .catch((erro) => {
      //   console.error('Error when sending: ', erro); //return object error
      // });

      // Forwards messages
      await client.forwardMessages(
      '000000000000@c.us',
      ['false_000000000000@c.us_B70847EE89E22D20FB86ECA0C1B11609','false_000000000000@c.us_B70847EE89E22D20FB86ECA0C1B11777']
      ).then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

      // Send @tagged message
      await client.sendMentioned(
      '000000000000@c.us',
      'Hello @5218113130740 and @5218243160777!',
      ['5218113130740', '5218243160777']
      );

      // Reply to a message
      await client.reply(
      '000000000000@c.us',
      'This is a reply!',
      'true_551937311025@c.us_7C22WHCB6DKYHJKQIEN9'
      ).then((result) => {
        console.log('Result: ', result); //return object success
      }).catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

      // Send message with options
      await client
            .sendMessageOptions(
              '000000000000@c.us',
              'This is a reply!',
              {
                  quotedMessageId: reply,
                }
            )
            .then((retorno) => {
              resp = retorno;
            })
            .catch((e) => {
              console.log(e);
            });

      // Send gif
      await client.sendVideoAsGif(
      '000000000000@c.us',
      'path/to/video.mp4',
      'video.gif',
      'Gif image file'
      );

      //checks and returns whether a message and a reply
      // exemple:
      // await client.onMessage(async (message) => {
      //     console.log(await client.returnReply(message)); // replicated message
      //     console.log(message.body ); //customer message
      //   })
      checkReply = await client.returnReply(messagem);

      // Send seen ✔️✔️
      // await client.sendSeen('000000000000@c.us');

      // Start typing...
      // await client.startTyping('000000000000@c.us');

      // Stop typing
      // await client.stopTyping('000000000000@c.us');

      // Set chat state (0: Typing, 1: Recording, 2: Paused)
      // await client.setChatState('000000000000@c.us', 0 | 1 | 2);


  });
  
}