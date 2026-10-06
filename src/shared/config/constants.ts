import type { CustomProps, DefaultCustomProps } from '@shared/types/mui.d'
import { ThemeMode } from '@shared/types/mui.d'

const config: DefaultCustomProps = {
	fontFamily: 'Inter var',
	mode: ThemeMode.LIGHT,
	presetColor: '',
}

const initialState: CustomProps = {
	...config,
	onChangeMode: () => {},
	onChangePresetColor: () => {},
	onChangeFontFamily: () => {},
}

export { config, initialState }
