import { ThemeMode } from '@shared/types/mui.d'

function Default(mode: ThemeMode) {
	let PRIMARYCOLOR = ['#33ab7b', '#00975a', '#00693e', '#f0f7f3']
	let SECONDARYCOLOR = ['#33b4b5', '#00a2a3', '#007172', '#eef7f7']

	const SUCCESSCOLOR = ['#33ac68', '#009843', '#006a2e']
	const WARNINGCOLOR = ['#e1ab33', '#da9600', '#986900']
	const ERRORCOLOR = ['#e54e50', '#df2225', '#9c1719']
	const INFOCOLOR = ['#339ad9', '#0081d0', '#005a91']

	const CONTRASTTEXT = '#FFFFFF'

	if (mode === ThemeMode.DARK) {
		PRIMARYCOLOR = ['#33ab7b', '#00975a', '#00693e', '#090f0c']
		SECONDARYCOLOR = ['#33b4b5', '#00a2a3', '#007172', '#080f0f']
	}

	return {
		primary: {
			light: PRIMARYCOLOR[0],
			main: PRIMARYCOLOR[1],
			dark: PRIMARYCOLOR[2],
			contrastText: PRIMARYCOLOR[3],
		},
		secondary: {
			light: SECONDARYCOLOR[0],
			main: SECONDARYCOLOR[1],
			dark: SECONDARYCOLOR[2],
			contrastText: SECONDARYCOLOR[3],
		},
		error: {
			light: ERRORCOLOR[0],
			main: ERRORCOLOR[1],
			dark: ERRORCOLOR[2],
			contrastText: CONTRASTTEXT,
		},
		warning: {
			light: WARNINGCOLOR[0],
			main: WARNINGCOLOR[1],
			dark: WARNINGCOLOR[2],
			contrastText: CONTRASTTEXT,
		},
		info: {
			light: INFOCOLOR[0],
			main: INFOCOLOR[1],
			dark: INFOCOLOR[2],
			contrastText: CONTRASTTEXT,
		},
		success: {
			light: SUCCESSCOLOR[0],
			main: SUCCESSCOLOR[1],
			dark: SUCCESSCOLOR[2],
			contrastText: CONTRASTTEXT,
		},
	}
}

export default Default
