import { useCallback } from 'react'

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import Tooltip from '@mui/material/Tooltip'
import BedtimeIcon from '@mui/icons-material/Bedtime'

import useConfig from '@shared/hooks/useConfig'

import type { ThemeMode } from '@shared/types/mui.d'

import {
	BrandMark,
	BrandName,
	HeaderToolbar,
	Hero,
	HeroActions,
	HeroDescription,
	HeroTitle,
	PageContent,
	TechnologyCard,
	TechnologyPanel,
} from './HomePage.styled'

const technologies = [
	['React 19', 'Component-driven UI foundation'],
	['Vite 8', 'Fast development and production builds'],
	['MUI 9 + Emotion', 'Accessible components and styling system'],
	['React Router 8', 'Browser routing ready from the start'],
	['Redux Toolkit', 'Centralized state management foundation'],
	['TypeScript 6', 'Type-safe application code'],
	['Biome 2', 'Consistent formatting and static analysis'],
]

const architecture = [
	['App', 'Application shell, providers, theme, and routing'],
	['Pages', 'Route-level screens such as this home page'],
	['Shared', 'Reusable configuration, hooks, and types'],
]

function HomePage() {
	const { mode, onChangeMode } = useConfig()
	const isDarkMode = mode === 'dark'

	const handleThemeToggle = useCallback(() => {
		onChangeMode((isDarkMode ? 'light' : 'dark') as ThemeMode)
	}, [isDarkMode, onChangeMode])

	return (
		<Box component='main'>
			<AppBar
				color='transparent'
				elevation={0}
				position='static'
				sx={{ borderBottom: 1, borderColor: 'divider' }}
			>
				<Container maxWidth='lg'>
					<HeaderToolbar disableGutters>
						<Stack direction='row' spacing={1.25} sx={{ alignItems: 'center' }}>
							<BrandMark>
								<Typography sx={{ fontWeight: 800 }} variant='body2'>
									V
								</Typography>
							</BrandMark>
							<BrandName>Vite React Boilerplate</BrandName>
						</Stack>
						<Box sx={{ flexGrow: 1 }} />
						<Tooltip title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
							<IconButton
								aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
								onClick={handleThemeToggle}
							>
								<BedtimeIcon fontSize='small' />
							</IconButton>
						</Tooltip>
					</HeaderToolbar>
				</Container>
			</AppBar>

			<Container maxWidth='lg'>
				<PageContent spacing={{ xs: 5, md: 8 }} useFlexGap>
					<Hero>
						<Chip
							color='secondary'
							label='A production-minded foundation'
							size='small'
						/>
						<HeroTitle component='h1' variant='h1'>
							Build the next thing with clarity.
						</HeroTitle>
						<HeroDescription color='text.secondary'>
							A focused React foundation with a typed toolchain, persistent
							theming, routing, and state management already in place.
						</HeroDescription>
						<HeroActions direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
							<Button size='large' variant='contained'>
								Explore the stack
							</Button>
							<Button
								onClick={handleThemeToggle}
								size='large'
								variant='outlined'
							>
								Preview {isDarkMode ? 'light' : 'dark'} mode
							</Button>
						</HeroActions>
					</Hero>

					<TechnologyPanel>
						<Grid container spacing={2}>
							{technologies.map(([name, description]) => (
								<Grid key={name} size={{ xs: 12, sm: 6, md: 4 }}>
									<TechnologyCard variant='outlined'>
										<CardContent>
											<Typography sx={{ fontWeight: 700 }}>{name}</Typography>
											<Typography color='text.secondary' sx={{ mt: 0.75 }}>
												{description}
											</Typography>
										</CardContent>
									</TechnologyCard>
								</Grid>
							))}
						</Grid>
					</TechnologyPanel>

					<Box>
						<Typography component='h2' variant='h4'>
							A structure that stays understandable.
						</Typography>
						<Typography color='text.secondary' sx={{ mt: 1 }}>
							Clear boundaries make the starter easy to extend.
						</Typography>
						<Divider sx={{ my: 3 }} />
						<Grid container spacing={3}>
							{architecture.map(([name, description], index) => (
								<Grid key={name} size={{ xs: 12, md: 4 }}>
									<Stack spacing={1}>
										<Typography
											color='secondary.main'
											sx={{ fontWeight: 800 }}
											variant='overline'
										>
											0{index + 1}
										</Typography>
										<Typography sx={{ fontWeight: 700 }} variant='h6'>
											{name}
										</Typography>
										<Typography color='text.secondary'>
											{description}
										</Typography>
									</Stack>
								</Grid>
							))}
						</Grid>
					</Box>
				</PageContent>
			</Container>
		</Box>
	)
}

export default HomePage
