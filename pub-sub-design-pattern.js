

const listeningChannels = {}



const subscribe = (channel, fn) => {

  if(!listeningChannels[channel]) {
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



const clientA = (message) => {
  console.log(`Received message ${message} in clientA`)
}


const clientB = (message) => {
  console.log(`Received message ${message} in clientB`)
}


subscribe('chat1', clientA)
subscribe('chat1', clientB)

publish('chat1', 'My first message to world')
