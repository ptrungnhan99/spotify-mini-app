import { useState } from "react";
import "./App.css";
import DetailSong from "./components/DetailSong";
import Header from "./components/Header";
import ListSong from "./components/ListSong";
import Playing from "./components/Playing";
import { Songs } from "./context/Context";
import DataSongs from "./data/songs.json";
function App() {
    const [song, setSong] = useState(DataSongs[0]);
    const handleSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong);
        if (!song) {
            setSong(DataSongs[0]);
        } else {
            setSong(song);
        }
    };
    return (
        <div className="App">
            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                <Header />
                <div className="grid grid-cols-1 bg-black lg:grid-cols-3 text-neutral-400 h-screen-main-player">
                    <DetailSong />
                    <ListSong />
                </div>
                <Playing />
            </Songs.Provider>
        </div>
    );
}

export default App;
