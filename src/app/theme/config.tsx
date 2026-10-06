import type { ThemeMode } from '@shared/types/mui.d'
import Default from './default'

export default function ThemeOption(mode: ThemeMode) {
	return Default(mode)
}
