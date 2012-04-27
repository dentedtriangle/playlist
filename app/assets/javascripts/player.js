var player = new (function(){

	// todo: load playlist from server or table
	this.playList = ["Cold Play - Fix you", "Madonna - Give it 2 me", "Mirror's Edge Theme Song - Still Alive", "Rihanna - Unfaithful with Lyrics"];

	this.position = -1;
	this.volume = 3;

	//Status: 0:pause, 1:play
	this.status = 1;

	this.nextSong = function() {
		// todo change 
		if(this.position+1 == this.playList.length)
			this.position = 0;
		else
			this.position++;
		
		var me = this;
		$(".title").fadeOut(200, function(){
			$(this).text(me.playList[me.position]);
		}).fadeIn();
	}
	//Jump to he previous or last song if it is in the first position
	this.prevSong = function(){
		if(this.position-1 < 0)
			this.position = this.playList.length-1;
		else
			this.position--;
		
		var me = this;
		$(".title").fadeOut(200, function(){
			$(this).text(me.playList[me.position]);
		}).fadeIn();
	}
	//Increase the volume in one point
	this.volumeInc = function(){
		if(this.volume +1 <= 3){
			this.volume++;
		}
	}
	//Decrease the volume in one point
	this.volumeDec = function(){
		if(this.volume -1 > 0){
			this.volume--;
		}
	}
	//Toggle play & pause
	this.playPause = function(){
		this.status = !this.status;
		var me = this;
		$this = $('#play');
		if(me.status == 0)
			$this.children('img').attr('src', 'assets/pause.png');
		else
			$this.children('img').attr('src', 'assets/play.png');
	}
});