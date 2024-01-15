export type TTimeframe = 'daily' | 'weekly' | 'monthly'

interface ITimeframe {
	current: number
	previous: number
}

type ITimeframes = {
	[key in TTimeframe]: ITimeframe
}

type TIcon = React.FunctionComponent<
	React.SVGProps<SVGSVGElement> & { title?: string | undefined }
>

export interface IActivity {
	title: string
	Icon: TIcon
	timeframes: ITimeframes
}
