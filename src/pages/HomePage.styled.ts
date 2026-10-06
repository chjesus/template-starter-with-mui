import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

export const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
	minHeight: 64,
	[theme.breakpoints.up('sm')]: {
		minHeight: 72,
	},
}))

export const BrandMark = styled(Stack)(({ theme }) => ({
	padding: theme.spacing(1, 1.5),
	borderRadius: Number(theme.shape.borderRadius) * 1.5,
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
}))

export const BrandName = styled(Typography)({
	fontWeight: 800,
	letterSpacing: '-0.03em',
})

export const PageContent = styled(Stack)(({ theme }) => ({
	paddingTop: theme.spacing(7),
	paddingBottom: theme.spacing(7),
	[theme.breakpoints.up('md')]: {
		paddingTop: theme.spacing(11),
		paddingBottom: theme.spacing(10),
	},
}))

export const Hero = styled(Box)({
	maxWidth: 760,
	marginInline: 'auto',
	textAlign: 'center',
})

export const HeroTitle = styled(Typography)(({ theme }) => ({
	letterSpacing: '-0.065em',
	lineHeight: 0.98,
	marginTop: theme.spacing(2.5),
	fontSize: '2.65rem',
	[theme.breakpoints.up('sm')]: {
		fontSize: '4rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '5rem',
	},
})) as typeof Typography

export const HeroDescription = styled(Typography)(({ theme }) => ({
	marginTop: theme.spacing(3),
	fontSize: '1rem',
	[theme.breakpoints.up('sm')]: {
		fontSize: '1.2rem',
	},
}))

export const HeroActions = styled(Stack)(({ theme }) => ({
	justifyContent: 'center',
	marginTop: theme.spacing(4),
}))

export const TechnologyPanel = styled(Paper)(({ theme }) => ({
	background:
		theme.palette.mode === 'dark'
			? 'linear-gradient(135deg, rgba(51, 171, 123, 0.14), rgba(51, 180, 181, 0.07))'
			: 'linear-gradient(135deg, rgba(0, 151, 90, 0.10), rgba(0, 162, 163, 0.06))',
	padding: theme.spacing(2.5),
	[theme.breakpoints.up('sm')]: {
		padding: theme.spacing(4),
	},
}))

export const TechnologyCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
}))
