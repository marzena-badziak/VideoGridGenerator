(function () {

	const data = [{
		id: 1,
		name: "MB",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
	},
	{
		id: 2,
		name: "AB",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg'
	},
	{
		id: 3,
		name: "BC",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg'
	},
	{
		id: 4,
		name: "CD",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg'
	},
	{
		id: 5,
		name: "DE",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg'
	},
	{
		id: 6,
		name: "MB",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
	},
	{
		id: 7,
		name: "AB",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg'
	},
	{
		id: 8,
		name: "BC",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg'
	},
	{
		id: 9,
		name: "CD",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg'
	},
	{
		id: 10,
		name: "DE",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg'
	},
	{
		id: 11,
		name: "MB",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
	},
	{
		id: 12,
		name: "AB",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg'
	},
	{
		id: 13,
		name: "BC",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg'
	},
	{
		id: 14,
		name: "CD",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg'
	},
	{
		id: 15,
		name: "DE",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg'
	},
	{
		id: 16,
		name: "MB",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
	},
	{
		id: 17,
		name: "AB",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg'
	},
	{
		id: 18,
		name: "BC",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg'
	},
	{
		id: 19,
		name: "CD",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg'
	},
	{
		id: 20,
		name: "DE",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg'
	},
	{
		id: 21,
		name: "DE",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg'
	},
	{
		id: 22,
		name: "MB",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
	},
	{
		id: 23,
		name: "AB",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg'
	},
	{
		id: 24,
		name: "BC",
		source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg'
	},
	];
	
	const mainContainer = document.getElementById("grid-row");
	
	let number = document.getElementById("number");
	let participants = [];

	generateFrame = el => {
		let numberOfParticipants = participants.length;
		let videoContainer = document.createElement("div");
		let video = document.createElement("video");
		videoContainer.setAttribute('class', 'video-container justify-content-center');
		videoContainer.setAttribute("onclick", "deleteFrame(this)");
		video.setAttribute('id', el.id);
		video.setAttribute('class', 'participant');
		// video.setAttribute('src', el.source);
		video.setAttribute('poster', el.poster);
		video.setAttribute('controls', '');
		// video.setAttribute('autoplay', '');
		video.setAttribute('muted', '');

		videoContainer.appendChild(video);
		mainContainer.appendChild(videoContainer);

		distributeFrames(numberOfParticipants);
	};

	displayFrames = () => {
		mainContainer.innerHTML = '';
		participants = data.map(el => el);
		participants.forEach(generateFrame);
		number.setAttribute('value', participants.length);
	};

	deleteFrame = frame => {
		let frameToRemove = frame.children[0].getAttribute('id');
		for (let i = 0; i < participants.length; i++) {
			if (participants[i].id == frameToRemove) {
				participants.splice(i, 1);
				break;
			}
		};
		frame.remove();
		number.setAttribute('value', participants.length);
		distributeFrames(participants.length);
	}

	distributeFrames = (numberOfFrames) => {

		let frames = document.getElementsByClassName('participant');


		if (numberOfFrames == 1) {
			mainContainer.setAttribute('class', "row justify-content-center");
			for (let i = 0; i < frames.length; i++) {
				frames[i].setAttribute('width', '1280px');
				frames[i].setAttribute('height', '720px');
			}
		} 
		 else if (numberOfFrames < 10) {
			mainContainer.setAttribute('class', "row");
			for (let i = 0; i < frames.length; i++) {
				frames[i].setAttribute('width', '480px');
				frames[i].setAttribute('height', '270px');
			}
		} 
		else if  (numberOfFrames < 21) {
			mainContainer.setAttribute('class', "row");
			for (let i = 0; i < frames.length; i++) {
				frames[i].setAttribute('width', '320px');
				frames[i].setAttribute('height', '180px');
			}
		}
		else {
			mainContainer.setAttribute('class', "row");
			for (let i = 0; i < frames.length; i++) {
				frames[i].setAttribute('width', '256px');
				frames[i].setAttribute('height', '144px');
			}
		}
	}

}());