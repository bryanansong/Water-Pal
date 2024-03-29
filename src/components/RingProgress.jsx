import { View, Text } from "react-native";
import SVG, { Circle, CircleProps } from "react-native-svg";
import Animated, {
	useAnimatedProps,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({
	radius = 100,
	strokeWidth = 35,
	progress,
	canAddIntake,
}) => {
	const innerRadius = radius - strokeWidth / 2;
	const circumference = 2 * Math.PI * innerRadius;
	const color = canAddIntake ? "#0284C7" : "#f44336";

	const fill = useSharedValue(0);

	const circleDefaultProps = {
		r: innerRadius,
		cx: radius,
		cy: radius,
		originX: radius,
		originY: radius,
		strokeWidth: strokeWidth,
		fill: "transparent",
		stroke: color,
		strokeLinecap: "round",
		rotation: "-90",
	};

	useEffect(() => {
		fill.value = withTiming(progress, { duration: 700 });
	}, [progress]);
	const animatedProps = useAnimatedProps(() => ({
		strokeDasharray: [circumference * fill.value, circumference],
	}));

	return (
		<View
			style={{
				width: radius * 2,
				height: radius * 2,
				alignSelf: "center",
			}}
		>
			<SVG>
				{/*Foreground*/}
				<AnimatedCircle
					{...circleDefaultProps}
					animatedProps={animatedProps}
				/>

				{/*Background*/}
				<Circle
					{...circleDefaultProps}
					opacity={0.4}
				/>
			</SVG>

			<AntDesign
				name="arrowright"
				size={strokeWidth * 0.7}
				color="white"
				style={{
					position: "absolute",
					alignSelf: "center",
					top: strokeWidth * 0.15,
				}}
			/>
		</View>
	);
};

export default RingProgress;
