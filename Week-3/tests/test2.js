const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}


function startGame() {
  state = {};
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  textNode.options.forEach(option => {
    if (showOption(option)){
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optonButtonsElement.appendChild(button)
    }
  })
}
function showOption(option) {
  //check to see if there is anything in my state or not
  return option.requiredState == null || option.requiredState(state)
}

function selectOptions(option) {
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: ' A tiny spirit floats on his lonesome.  He's decided it's time to explore the world.  Where should he go?'
    options: [
      {
        text: 'Into the woods...',
        //need to set state if something is picked up
        setState: {stick: true},
        //tell where to go when this option is selected
        nextText: 2
      },
      {
        text: 'Towards the castle!',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'Our spirit now finds himself in the woods.  It is dark and cold.  But he has found a stick and someone that has some items to choose from.',
    options: [
      //to trade, check to see if you have the wood from before
      text: 'Trade stick for a sword.',
      requiredState: (currentState) => currentState.stick,
      setState: { stick: false, sword: true},
      nextText: 4
    },
    {
      id: 2,
      text: 'Our spirit now finds himself in the woods.  It is dark and cold.',
      options: [
        //to trade, check to see if you have the wood from before
        text: 'Trade wood for a coat.',
        requiredState: (currentState) => currentState.stick,
        setState: { stick: false, coat: true},
        nextText: 4
      }
  ]
  }
]

startGame()
