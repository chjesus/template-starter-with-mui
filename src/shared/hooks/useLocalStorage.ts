import {
	type Dispatch,
	type SetStateAction,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

function parseStorageValue<ValueType>(value: string, fallback: ValueType) {
	try {
		return JSON.parse(value) as ValueType
	} catch {
		return fallback
	}
}

function readStorageValue<ValueType>(key: string, fallback: ValueType) {
	if (typeof window === 'undefined') return fallback

	try {
		const storedValue = window.localStorage.getItem(key)
		return storedValue === null
			? fallback
			: parseStorageValue(storedValue, fallback)
	} catch {
		return fallback
	}
}

function useLocalStorage<ValueType>(
	key: string,
	defaultValue: ValueType
): readonly [ValueType, Dispatch<SetStateAction<ValueType>>] {
	const defaultValueRef = useRef(defaultValue)
	const [value, setValue] = useState(() => readStorageValue(key, defaultValue))

	const valueRef = useRef(value)

	useEffect(() => {
		defaultValueRef.current = defaultValue
	}, [defaultValue])

	useEffect(() => {
		const nextValue = readStorageValue(key, defaultValueRef.current)
		valueRef.current = nextValue
		setValue(nextValue)

		const listener = (event: StorageEvent) => {
			if (
				event.storageArea !== window.localStorage ||
				(event.key !== key && event.key !== null)
			) {
				return
			}

			const updatedValue =
				event.newValue === null
					? defaultValueRef.current
					: parseStorageValue(event.newValue, defaultValueRef.current)

			valueRef.current = updatedValue
			setValue(updatedValue)
		}

		window.addEventListener('storage', listener)
		return () => window.removeEventListener('storage', listener)
	}, [key])

	const setValueInLocalStorage = useCallback(
		(newValue: SetStateAction<ValueType>) => {
			const updatedValue =
				typeof newValue === 'function'
					? (newValue as (currentValue: ValueType) => ValueType)(
							valueRef.current
						)
					: newValue

			valueRef.current = updatedValue
			setValue(updatedValue)

			try {
				window.localStorage.setItem(key, JSON.stringify(updatedValue))
			} catch {
				// Keep the in-memory state when browser storage is unavailable.
			}
		},
		[key]
	)

	return [value, setValueInLocalStorage] as const
}

export default useLocalStorage
