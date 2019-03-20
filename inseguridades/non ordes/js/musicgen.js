    music = ['songs/1.mp3', 'songs/2.mp3', 'songs/3.mp3', 'songs/4.mp3', 'songs/5.mp3', 'songs/6.mp3', 'songs/7.mp3', 'songs/8.mp3']
	var audioPlayer = new Audio();
	var nope = "songs/3.mp3";
    function playRandomSong(){
      this.song = music[Math.floor(Math.random() * music.length)];
      audioPlayer.src = music[Math.floor(Math.random() * music.length)];
	  if (audioPlayer.src == nope){
		  playRandomSong();
		  return;
	  }
	  else{ 
		  console.log(audioPlayer);
          audioPlayer.play();
		  nope = audioPlayer.src; 
	  }

    }

    function stopSong(){
      console.log(audioPlayer);
      audioPlayer.pause();
    }
