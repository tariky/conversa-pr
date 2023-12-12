import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import compas from "@/public/assets/compas-icon.svg";
import pen from "@/public/assets/pen-icon.svg";
import magaphoneIcon from "@/public/assets/megaphone-icon.svg";
import hat from "@/public/assets/hat-icon.svg";
import Card from "@/components/Card";

const Services = () => {
	return (
		<div className="bg-neutral-800">
			<HorizontalScrollCarousel />
		</div>
	);
};

const HorizontalScrollCarousel = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

	return (
		<section
			ref={targetRef}
			className="relative h-[250vh] sm:h-[220vh] bg-black"
		>
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div style={{ x }} className="flex gap-4 flex-col">
					<h1 className="text-5xl sm:text-8xl pl-20 font-black tracking-wider text-white w-[1100px] sm:w-[2000px]">
						Saznajte kako Vam možemo pomoći!
					</h1>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
