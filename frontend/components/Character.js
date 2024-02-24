import React, {useState} from 'react'

function Character(props) { // ❗ Add the props
  const {character} = props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [isHomeworldRendering, setIsHomeworldRendering] = useState(false)
   const toggle = () => { setIsHomeworldRendering(previousState => 
    !previousState)
    }
  return (
    <div>
      {/* Use the same markup with the same attributes as in the mock */
        <div onClick={toggle} className='character-card'>
          <h3 className='character-name'>
            {character.name}
          </h3>
          {isHomeworldRendering ?
            <p>
              Planet: {" "}
              <span className='character-planet'>
                {character.homeWorld.name}
              </span>
            </p>
            : null
          }
        </div>}
    </div>
  )
}

export default Character