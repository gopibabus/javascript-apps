document.addEventListener('DOMContentLoaded', () => {
	let cardGroup = document.getElementById('card-group');
	let projects = [
		{
			name: `Drag n Drop`,
			description: `This is a drag n drop app. This will show case how we can implement drag n drop using drag events in vanilla javascript. `,
			link: `./drag-n-drop`,
		},
		{
			name: `Countdown Timer`,
			description: `This is a count down timer app. By default it will start with 10 seconds.
            If we have to input our own time, we can. We can pause timer, when ever we need. `,
			link: `./timer/`,
		},
		{
			name: 'Movie Fight',
			description: 'This is a movie fight app',
			link: './movie_fight/',
		},
	];
	projects.forEach((project) => {
		let card = `
        <div class="card">
			<h3 class="card-title">${project.name}</h3>
			<div class="card-description">${project.description}</div>
			<a href=${project.link} target="_blank" class="btn">Click Here</a>
		</div>
`;
		cardGroup.insertAdjacentHTML('beforeend', card);
	});
});
