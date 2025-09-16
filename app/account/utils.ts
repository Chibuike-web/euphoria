export function formatTime(time: number) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
		timeStyle: "short",
	}).format(new Date(time));
}
