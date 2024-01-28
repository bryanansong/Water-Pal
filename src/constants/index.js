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

// Settings
// Measurement and Goals
const measurementAndGoals = [
	{ label: "Units of Measurement", value: "milliliters" },
	{ label: "Daily Goal", value: "2000 ml" },
];

// Reminders
const reminders = [
	{ label: "Custom Reminders" },
	{ label: "Morning and Night Reminders" },
	{ label: "Notification Preferences" },
];

// Progress and Tracking
const progressAndTracking = [
	{ label: "Water Intake History" },
	{ label: "Achievement Badges" },
];

// Personalization
const personalization = [
	{ label: "Theme and Appearance" },
	{ label: "Language Preferences" },
];

// User Profile
const userProfile = [
	{ label: "Profile Information" },
	{ label: "Account Settings" },
];

// Integration and Sharing
const integrationAndSharing = [
	{ label: "Integration with Health Apps" },
	{ label: "Privacy Settings" },
];

// App Information
const appInformation = [
	{ label: "About Page" },
	{ label: "Terms of Service and Privacy Policy" },
];

// User Support
const userSupport = [{ label: "Feedback and Support" }];

// Advanced Options
const advancedOptions = [
	{ label: "Data Export" },
	{ label: "Reset to Default" },
];

const settings = [
	{
		sectionName: "Measurement & Goals",
		sectionOptions: measurementAndGoals,
	},
	{
		sectionName: "Reminders",
		sectionOptions: reminders,
	},
	{
		sectionName: "Progress & Tracking",
		sectionOptions: progressAndTracking,
	},
	{
		sectionName: "Personalization",
		sectionOptions: personalization,
	},
	{ sectionName: "User Profile", sectionOptions: userProfile },
	{
		sectionName: "Integration & Sharing",
		sectionOptions: integrationAndSharing,
	},
	{
		sectionName: "App Information",
		sectionOptions: appInformation,
	},
	{ sectionName: "userSupport", sectionOptions: userSupport },
	{
		sectionName: "Advanced Options",
		sectionOptions: advancedOptions,
	},
];

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
	settings,
};
