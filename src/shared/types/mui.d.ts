export enum ThemeMode {
	LIGHT = 'light',
	DARK = 'dark',
}

export type PresetColor = '' | string

export type CustomProps = {
	mode: ThemeMode
	presetColor: PresetColor
	fontFamily: string
	onChangeMode: (mode: ThemeMode) => void
	onChangePresetColor: (presetColor: string) => void
	onChangeFontFamily: (fontFamily: string) => void
}

export type DefaultCustomProps = {
	fontFamily: string
	mode: ThemeMode
	presetColor: PresetColor
}
