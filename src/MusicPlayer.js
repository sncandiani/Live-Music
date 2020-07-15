import React, {useState, useEffect} from "react"
import * as Tone from "tone";

const MusicPlayer = () => {
    const [musicLoop, setMusicLoop] = useState()
    const [returnLoop, setReturnLoop] = useState([])
    //creates a synth and connects it to master output
    const synth = new Tone.Synth().toMaster();
    // When Start is clicked, each note triggered will be saved until stop is clicked
    const startLoop = () => {
        setReturnLoop([])
    }
    // Each note will be saved to the loop
    const saveLoop = (i) => {
        returnLoop.push(i) 
    }
    // On stop click, the loop will be cleared and the music loop will be set
     const endLoop = () => {
        setMusicLoop(returnLoop)
        setReturnLoop([])
     }
    //  On play click, the loop will play musicLoop then clear it 
     const looper = () => {
         if(musicLoop.length >= 1) {
            musicLoop.forEach((note) => {  
                synth.triggerAttack(note, "8n")
           })
         } else { 
             console.log("Loop not yet started")
         }
     }
 
    const chordPlayer = () => {
        console.log("I'm the chord player!")
    }

    const chordNamer = () => {
        console.log("I will name the chord being played!")
    }

   useEffect(() => {
       saveLoop()
       endLoop()
   }, [])
    console.log(returnLoop)
    console.log(musicLoop)
    return ( 
        <>
        <button onClick={() => {
            startLoop()
        }}>Start</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("C4", "8n")
            saveLoop("C4")
        }}>C4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("D4", "8n")
            saveLoop("D4")
        }}>D4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("E4", "8n")
            saveLoop("E4")
        }}>E4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("F4", "8n")
            saveLoop("F4")
        }}>F4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("G4", "8n")
            saveLoop("G4")
        }}>G4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("A4", "8n")
            saveLoop("A4")
        }}>A4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("B4", "8n")
            saveLoop("B4")
        }}>B4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("C5", "8n")
            saveLoop("C5")
        }}>C5</button>
        <button onClick={() => {
            endLoop()
        }}>Stop</button>

        <button onClick={async() => {
            looper()
        }}>Play Notes</button>

        <button onClick={async() => {
            chordPlayer()
        }}>Play Chord</button>
        <button onClick={async() => {
            chordNamer()
        }}>Which chord is this?</button>
        
        </>
    )

}
export default MusicPlayer