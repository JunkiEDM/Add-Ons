export class Api extends FrankerFaceZ.utilities.module.Module {
	constructor(...args) {
		super(...args);

		this.inject(Commands);
		this.inject(Badges);

		this.apiBase = 'https://twir.app/api/';
	}

	async request(path) {
		try {
			const response = await fetch(`${this.apiBase}/${path}`);
			if (response.ok) {
				return await response.json();
			}
		} catch (err) {
			this.log.error(err);
		}

		return [];
	}
}

export class Commands extends FrankerFaceZ.utilities.module.Module {
	// https://twir.app/api/v2/public/channels/twitch/{userId}/commands
	getChannelCommands(userId) {
		return this.parent.request(`v2/public/channels/twitch/${userId}/commands`);
	}
}

export class Badges extends FrankerFaceZ.utilities.module.Module {
	// https://twir.app/api/v1/public/badges
	getBadges() {
		return this.parent.request('v1/public/badges');
	}
}
