const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Bot Katıldı ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'JavaLoading') {
    msg.reply('<a:JavaLoading:770941046594207754>');
  }
});

client.on('message', msg => {
  if (msg.content === 'photo cat') {
    msg.reply('https://im.haberturk.com/2019/05/23/ver1558622944/2473354_810x458.jpg');
  }
});

client.on('message', msg => {
  if (msg.content === 'photo duck') {
    msg.reply('https://static01.nyt.com/images/2016/07/14/science/14tb-ducklings1/14tb-ducklings1-articleLarge.jpg?quality=90&auto=webp');
  }
});

client.on('message', msg => {
  if (msg.content === 'photo bird') {
    msg.reply('https://3.bp.blogspot.com/-jkPSYVbSeXI/Ws5kqddL3aI/AAAAAAAAdD8/PV9usr8byVIIMr-j1Qj5lNtJK-N3FT3lACLcBGAs/s640/Redwing-Photo-600x412.jpg');
  }
});

client.on('message', msg => {
  if (msg.content === 'photo dog') {
    msg.reply('https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg');
  }

    if (msg.content === 'photo wolf') {
    msg.reply('https://s.abcnews.com/images/US/gray-wolf-colorado-nc-jt-200107_hpMain_16x9_1600.jpg');
  }
});

client.on('message', msg => {
  if (msg.content === 'video cat') {
    msg.reply('https://www.youtube.com/watch?v=1cvrvkTPjWE');
  }

    if (msg.content === 'photo fox') {
    msg.reply('https://krdo.b-cdn.net/2020/08/080220-FILE-RED-FOX.jpg');
  }


      if (msg.content === 'JavaPause') {
    msg.reply('https://classteaching.files.wordpress.com/2017/01/pause-button-2.png');
  }

        if (msg.content === 'photo jaguar') {
    msg.reply('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Panthera_onca_jaguar_SP_ZOO.jpg/260px-Panthera_onca_jaguar_SP_ZOO.jpg');
  }

          if (msg.content === 'JavaRestart') {
    msg.reply('StartedJava');
  }
          if (msg.content === 'photo chicken') {
    msg.reply('https://www.freepnglogos.com/uploads/chicken-png/cute-chicken-png-transparent-cute-chicken-images-0.png , https://img.etimg.com/thumb/width-1200,height-900,imgsize-182918,resizemode-1,msid-69750320/markets/commodities/news/chicken-to-become-cheaper-as-soya-meal-prices-likely-to-fall.jpg');
  }
            if (msg.content === 'photo parrot') {
    msg.reply('https://www.petbarn.com.au/petspot/app/uploads/2019/03/shutterstock_125089496.jpg');


  }
              if (msg.content === 'photo puppy') {
    msg.reply('https://www.thesprucepets.com/thmb/EBp990AJt94XwAp7oOAzUtdg9Xg=/2121x1193/smart/filters:no_upscale()/golden-retriever-puppy-in-grass-923135452-5c887d4146e0fb00013365ba.jpg');
  }
                if (msg.content === 'photo turtle') {
    msg.reply('https://imgs.mongabay.com/wp-content/uploads/sites/20/2018/12/21142908/adult_green-turtle2_1200px-cropped-768x460.jpg');
  }

                  if (msg.content === 'photo rabbit') {
    msg.reply('https://upload.wikimedia.org/wikipedia/commons/1/1f/Oryctolagus_cuniculus_Rcdo.jpg');
  }

                  if (msg.content === 'photo squid') {
    msg.reply('https://i0.wp.com/asiatimes.com/wp-content/uploads/2019/10/Phys.org_.png?fit=715%2C450&ssl=1');
  }
                    if (msg.content === 'photo panda') {
    msg.reply('https://ichef.bbci.co.uk/news/640/cpsprodpb/4FA0/production/_108848302_a0d15811-30d8-4a51-8dd3-ab45f3dbc387.jpg');
  }
       if (msg.content === 'photo lion') {
    msg.reply('https://lh3.googleusercontent.com/proxy/D4OlUN20HuiThpncYlWPJomNnO4K4sLw4AZyDGelDf6q4-45cKJiZjR6rz0xAjPvwqz-Q4cewhGTPPAXGwDL4wKd8tXTZxzgJ8KQJYCqU7jrnhqS8JBlIRmTEh_UgzQgZ65pcw');
  }

         if (msg.content === 'photo cow') {
    msg.reply('https://thumbs-prod.si-cdn.com/jShOqzr3K4rQxqm8J3xHaZaRed8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/bc/13/bc13e43b-ff35-4de9-827d-c86bba8293b7/cow.jpg');
  }
  if (msg.content === 'get java') {
msg.reply
(
  'https://javadl.oracle.com/webapps/download/AutoDL?BundleId=243737_61ae65e088624f5aaa0b1d2d801acb16'
);

  }
});

client.login('NzcwOTQxODQzOTkwNTExNjE3.X5k5iw._TGqrcjhxQ58Hy1nzNDu_wmQ41U');
