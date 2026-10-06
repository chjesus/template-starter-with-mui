import { createTheme, type PaletteMode } from '@mui/material/styles'
import { ThemeMode } from '@shared/types/mui.d'
import ThemeOption from './config'

function Palette(mode: ThemeMode) {
	const paletteColor = ThemeOption(mode)

	return createTheme({
		palette: {
			mode: mode as PaletteMode,
			...paletteColor,
			action: { disabled: paletteColor.secondary.light },
			background: {
				default: mode === ThemeMode.DARK ? '#0c0e0d' : '#f8fbf9',
				paper: mode === ThemeMode.DARK ? '#040605' : '#ecf2ee',
			},
			divider: mode === ThemeMode.DARK ? '#dbe4de1f' : '#0102011f',
			// divider: mode === ThemeMode.DARK ? '#dbe4de' : '#010201',
			text: {
				primary: mode === ThemeMode.DARK ? '#d3e2d9' : '#0a140f',
				secondary: mode === ThemeMode.DARK ? '#bec7c1' : '#535a56',
			},
		},
	})
}

export default Palette
