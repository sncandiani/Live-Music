import React from "react"
import * as Tone from "tone";

const MusicPlayer = () => {
    //creates a synth and connects it to master output
    const synth = new Tone.Synth().toMaster();

    return ( 
        <>
        <button onClick={() => {

        }}>Start</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("C4", "8n")
        }}>C4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("D4", "8n")
        }}>D4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("E4", "8n")
        }}>E4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("F4", "8n")
        }}>F4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("G4", "8n")
        }}>G4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("A4", "8n")
        }}>A4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("B4", "8n")
        }}>B4</button>
        <button className="button" onClick={async () => {
            await synth.triggerAttackRelease("C5", "8n")
        }}>C5</button>
        <button onClick={() => {
            
        }}>Stop</button>
        
        </>
    )

}
export default MusicPlayer