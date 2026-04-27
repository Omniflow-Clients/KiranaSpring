import { CalendarDays, Clock3 } from "lucide-react";

function formatReadingTime(minutes: number) {
	return `${minutes} menit baca`;
}

export function PostMeta({
	date,
	readingTimeMinutes,
	author,
}: {
	date: string;
	readingTimeMinutes: number;
	author: string;
}) {
	return (
		<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
			<span className="inline-flex items-center gap-2">
				<CalendarDays className="size-4" />
				{date}
			</span>
			<span className="inline-flex items-center gap-2">
				<Clock3 className="size-4" />
				{formatReadingTime(readingTimeMinutes)}
			</span>
			<span>{author}</span>
		</div>
	);
}
