
const Home = () => {
  return (
    <div>
      <h3 style={{ fontWeight:"bold", position: "absolute", left:'28%', top: '11%', fontSize:'1.5vw'}}>Hello, </h3>
      <h4 style={{ width: '40vw', position: "absolute", left:'10%', top: '15%', fontSize:'1.2vw'}}>
        In this online store you will be able to find some merchandise of your favorites movies and tv-shows,  playaround with this shopping cart</h4>
      <p style={{ width: '40vw', position: "absolute", left:'10%', top: '23%', fontSize:'1vw'}}>This is just a demo that will be functional soon</p>
      <div
      style={{ width:'41.5vw', height:'40vh', backgroundSize:'cover', position: "absolute",
      right:'5%', top: '10%', cursor: 'pointer',
      backgroundImage: 'url(https://github.com/Blasnjacobo/hangman-game/blob/main/public/harryPotter.jpg?raw=true)'}}
      />
      <div
      style={{ width:'48vw', height:'37vh', backgroundSize:'cover', position: "absolute",
      left:'5%', top: '30%',
      backgroundImage: 'url(https://github.com/Blasnjacobo/hangman-game/blob/main/public/avengers.jpg?raw=true)'}} 
      />
      <div
      style={{ width:'48vw', height:'31vh', backgroundSize:'cover', position: "absolute",
      left:'5%', top: '68%',
      backgroundImage: 'url(https://github.com/Blasnjacobo/hangman-game/blob/main/public/friends.jpg?raw=true)'}} 
      />
      <div
      style={{ width:'41.5vw', height:'18vh', backgroundSize:'contain',
      position: "absolute",
      right:'5%', top: '51%',
      backgroundImage: 'url(https://github.com/Blasnjacobo/hangman-game/blob/main/public/Starwars.jpg?raw=true)'}} 
      />
      <div
      style={{ width:'41.5vw', height:'29vh', backgroundSize:'cover',
      position: "absolute",
      right:'5%', top: '70%',
      backgroundImage: 'url(https://github.com/Blasnjacobo/hangman-game/blob/main/public/breakingbad.jpg?raw=true)'}} 
      />
    </div>
  )
}

export default Home