

const listeningChannels = {}



const subscribe = (channel, fn) => {

  if(listeningChannels[channel]) {
    listeningChannels[channel] = []
  }

  console.log(`Subscribing to channel ${channel}`)

  listeningChannels[channel].push(fn)
}


const publish = (channel, message) => {

  if(!listeningChannels[channel]) return 

  for(const fn of listeningChannels){
    fn(message)
  }

}



