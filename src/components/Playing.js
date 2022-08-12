import React from "react";
import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../context/Context";
export default function Playing() {
    const { song, handleSetSong } = useContext(Songs);
    const handleClickNext = () => {
        handleSetSong(song.id + 1);
    };
    const handleClickPrevious = () => {
        handleSetSong(song.id - 1);
    };
    return (
        <div className="h-[100px] relative">
            <AudioPlayer
                autoPlay
                className="custom-player"
                showSkipControls={true}
                showJumpControls={false}
                src={song.url}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
                onEnded={handleClickNext}
            />
        </div>
    );
}
