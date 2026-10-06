import { ConfigContext } from '@shared/config/Context'
import { initialState } from '@shared/config/constants'
import useLocalStorage from '@shared/hooks/useLocalStorage'
import type { PresetColor, ThemeMode } from '@shared/types/mui.d'
import type { ReactNode } from 'react'

function ContextProvider({ children }: { children: ReactNode }) {
	const [config, setConfig] = useLocalStorage('theme', initialState)

	const onChangeMode = (mode: ThemeMode) => {
		setConfig({ ...config, mode })
	}

	const onChangePresetColor = (presetColor: PresetColor) => {
		setConfig({ ...config, presetColor })
	}

	const onChangeFontFamily = (fontFamily: string) => {
		setConfig({ ...config, fontFamily })
	}

	return (
		<ConfigContext.Provider
			value={{
				...config,
				onChangeMode,
				onChangePresetColor,
				onChangeFontFamily,
			}}
		>
			{children}
		</ConfigContext.Provider>
	)
}

export { ContextProvider }
