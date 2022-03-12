export interface Config {
	streamerId: string | number
	streamerName: string
	api: string
	primaryColor: string
	secondaryColor: string
	fontString: string
	font: string
	youtubeMetatag?: string
	geoApi: string
}

export const defaultConfig: Config = {
	streamerId: 49,
	streamerName: 'diegochampagne',
	api: 'https://compare.topadsservices.com',
	primaryColor: '#f5b836',
	secondaryColor: '#f59c36',
	fontString: '',
	font: `'Roboto', sans-serif`,
	geoApi: 'https://api.ipgeolocation.io/ipgeo',
}



export let configuration: Config = {
	streamerId: 49,
	streamerName: 'diegochampagne',
	api: 'https://compare.topadsservices.com',
	primaryColor: '#f5b836',
	secondaryColor: '#f59c36',
	fontString: '',
	font: `'Roboto', sans-serif`,
	geoApi: 'https://api.ipgeolocation.io/ipgeo',
}

export const setConfigurationFile = (newConfig: Config = configuration) => {
	configuration = newConfig
}
