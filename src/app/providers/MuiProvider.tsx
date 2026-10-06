import Palette from '@app/theme/palette'
import CssBaseline from '@mui/material/CssBaseline'
import {
	createTheme,
	StyledEngineProvider,
	type ThemeOptions,
	ThemeProvider,
} from '@mui/material/styles'

import useConfig from '@shared/hooks/useConfig'
import { useMemo } from 'react'

// import createComponents from '@shared/config/theme/components'

import type { ReactNode } from 'react'

type ChildrenProps = { children: ReactNode }

const MuiThemeProvider = ({ children }: ChildrenProps) => {
	const { mode } = useConfig()

	const { palette } = useMemo(() => Palette(mode), [mode])
	// const typography = useMemo(() => Typography(), [])
	// const components = useMemo(() => createComponents(), [])

	const themeOptions: ThemeOptions = useMemo<ThemeOptions>(
		() => ({
			cssVariables: { cssVarPrefix: 'example' },
			palette,
			// typography: typography,
			// components: components,
		}),
		[palette]
		// [palette, typography, components]
	)

	const MuiTheme = createTheme(themeOptions)

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={MuiTheme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	)
}

export default MuiThemeProvider
