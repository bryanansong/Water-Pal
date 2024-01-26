// User Information
const userName = "";

// Water intake goals in milliliters
const dailyGoal = 2000;
const weeklyGoal = 14000;
const currentStreak = 10;

// Water measurement units
const milliliters = "ml";
const liters = "l";

// Water measurement units
const intakePresets = [
	{
		volume: 250,
		label: "250 ml",
		unit: "milliliters",
	},
	{
		volume: 500,
		label: "500 ml",
		unit: "milliliters",
	},
	{
		volume: 750,
		label: "750 ml",
		unit: "milliliters",
	},
	{
		volume: 1000,
		label: "1,000 ml",
		unit: "milliliters",
	},
];

// Time intervals
const minute = 60 * 1000;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;

// Notification messages
const reminderMessage = "Remember to drink water! 💧";
const congratulationsMessage =
	"Congratulations! You reached your daily water goal! 🎉";

// Exporting the constants
export {
	userName,
	dailyGoal,
	weeklyGoal,
	currentStreak,
	milliliters,
	liters,
	intakePresets,
	minute,
	hour,
	day,
	week,
	reminderMessage,
	congratulationsMessage,
};
