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

// Notification messages
const reminderMessage = "Remember to drink water! 💧";
const congratulationsMessage =
	"Congratulations! You reached your daily water goal! 🎉";

// Settings
// Measurement and Goals
const measurementAndGoals = [
	{ label: "Units of Measurement", value: "milliliters" },
	{ label: "Daily Goal", value: `${dailyGoal} ml` },
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
	// { label: "Achievement Badges" },
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
	// {
	// 	sectionName: "Personalization",
	// 	sectionOptions: personalization,
	// },
	// {
	// 	sectionName: "App Information",
	// 	sectionOptions: appInformation,
	// },
];

// Exporting the constants
export {
	milliliters,
	liters,
	intakePresets,
	reminderMessage,
	congratulationsMessage,
	settings,
};

// Functions to Toggle each setting
const navigateToEditProfile = () => {
	navigation.navigate("EditProfile");
};

const navigateToSecurity = () => {
	console.log("Security function");
};

const navigateToNotifications = () => {
	console.log("Notifications function");
};

const navigateToPrivacy = () => {
	console.log("Privacy function");
};

const navigateToSubscription = () => {
	console.log("Subscription function");
};

const navigateToSupport = () => {
	console.log("Support function");
};

const navigateToTermsAndPolicies = () => {
	console.log("Terms and Policies function");
};

const navigateToFreeSpace = () => {
	console.log("Free Space function");
};

const navigateToDateSaver = () => {
	console.log("Date saver");
};

const navigateToReportProblem = () => {
	console.log("Report a problem");
};

const addAccount = () => {
	console.log("Aadd account ");
};

const logout = () => {
	console.log("Logout");
};

// Subsections in the settings screen
const accountItems = [
	{
		icon: "person-outline",
		text: "Edit Profile",
		action: navigateToEditProfile,
	},
	{
		icon: "security",
		text: "Security",
		action: navigateToSecurity,
	},
	{
		icon: "notifications-none",
		text: "Notifications",
		action: navigateToNotifications,
	},
	{
		icon: "lock-outline",
		text: "Privacy",
		action: navigateToPrivacy,
	},
];

const supportItems = [
	{
		icon: "credit-card",
		text: "My Subscription",
		action: navigateToSubscription,
	},
	{
		icon: "help-outline",
		text: "Help & Support",
		action: navigateToSupport,
	},
	{
		icon: "info-outline",
		text: "Terms and Policies",
		action: navigateToTermsAndPolicies,
	},
];

const cacheAndCellularItems = [
	{
		icon: "delete-outline",
		text: "Free up space",
		action: navigateToFreeSpace,
	},
	{
		icon: "save-alt",
		text: "Date Saver",
		action: navigateToDateSaver,
	},
];

const actionsItems = [
	{
		icon: "outlined-flag",
		text: "Report a problem",
		action: navigateToReportProblem,
	},
	{
		icon: "people-outline",
		text: "Add Account",
		action: addAccount,
	},
	{ icon: "logout", text: "Log out", action: logout },
];
